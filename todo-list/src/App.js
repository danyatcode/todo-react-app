import React from "react";
import AppHeader from "./Components/AppHeader";
import ListItem from "./Components/listItem";
import AddTitleBlank from "./Components/AddTitleBlank";
import { nanoid } from 'nanoid'

function App() {

  const [itemsArray, setItemsArray] = React.useState(JSON.parse(localStorage.getItem("itemsArray")) || []);

  const [isInputBlankActive, setInputBlankActive] = React.useState({isActive : false, event : 'event', id : ''});

  const [filterType, setFilterType] = React.useState('All')

  React.useEffect( () =>{

    localStorage.setItem("itemsArray", JSON.stringify(itemsArray));

  }, [itemsArray])

  function filterItems(){
      
    if(filterType === 'All'){
      return itemsArray;
    }
    if(filterType === 'Done'){
      return itemsArray.filter( item => item.isFilled);
    }
    if(filterType === 'Undone'){
      return itemsArray.filter( item => !item.isFilled)
    }
    else{
      const array = [];
      return array;
    }
    
  }

  function changeFilterType(){

    const select = document.getElementsByClassName('select-type');

    setFilterType(select[0].value);
  }

  function generateItemArray(){

    const input = document.getElementsByClassName('title-input');

    const date = new Date();

    setItemsArray(prevItemsArray => {
      const newItem = { 
        value: input[0].value,
        id: nanoid(),
        date : `${date.toLocaleString()}`,
        isFilled : false
      };

      return prevItemsArray?[newItem, ...prevItemsArray]:newItem
    })

  }

  function editItemArray(id){
    
    const input = document.getElementsByClassName('title-input');

    return setItemsArray( prevItemsArray => {

      return prevItemsArray.map( item => {
        if(item.id === id){
          return {...item, value : input[0].value}
        }
        else{
          return item
        }
      })

    })

  }

  function handleIsDone(id){

    return setItemsArray( prevItemsArray => {

      return prevItemsArray.map( item => {
        if(item.id === id){
          return {...item, isFilled: !prevItemsArray[prevItemsArray.indexOf(item)].isFilled}
        }
        else{
          return item
        }
      })

    })

  }
  
  function confirmBlank(){
    
    const input = document.getElementsByClassName('title-input');

      if(input[0].value){

        if(isInputBlankActive.event === 'add'){
          generateItemArray()
        }
        if(isInputBlankActive.event === 'edit'){
          editItemArray(isInputBlankActive.id)
        }

        setInputBlankActive(false);

      } else{
        alert('Please fill blank');
      } 
   
  }
  function deleteNote(id){
    
    return setItemsArray(prevItemsArray => {

      return prevItemsArray.filter( item => {
        if(item.id === id){
          return false
        }
        else{
          return true
        }
      })

    })
  }

  const itemList = filterItems().map( item => {
    return <ListItem 
        handleIsDone={handleIsDone} 
        key={item.id} id={item.id} 
        value={item.value} 
        date={item.date} 
        isDone={item.isFilled}
        deleteNote={deleteNote}
        popUpInputBlank={setInputBlankActive}
        confirmBlank={confirmBlank}
        isInputBlankActive={isInputBlankActive}
    />
  });

  return (
    <div className="App">

      <AppHeader 
        popUpInputBlank={setInputBlankActive}
        confirmBlank={confirmBlank} 
        isInputBlankActive={isInputBlankActive}
        onChange={changeFilterType}
      />
      
      {isInputBlankActive.isActive && <AddTitleBlank 
        closeInputBlank={() => setInputBlankActive(prevInputBlankState => {
        return {...prevInputBlankState, isActive : false, event : 'close', id : ''}
        })} 
        confirmBlank={confirmBlank} 
      />}
      
        <div className="item-list">
            {itemList.length === 0 && <h5 className="todos-state">No tasks to do</h5>}
            {
                itemList && 
                <div>{itemList}</div>
            }
        </div>
      

    </div>
  );
}

export default App;
