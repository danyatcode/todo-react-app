
export default function AppHeader(props){

    return(
        <div className="app-header">
            

            <button 
                onClick={() => props.popUpInputBlank({...props.isInputBlankActive, isActive : true, event : 'add', id : ''})} 
                className="btn-add"
            >
                <span 
                style={{margin : '5px'}} 
                className="icon-plus"></span>
                <h5>Add note</h5>
            </button>

            <select className="select-type" onChange={props.onChange}>
                <option>All</option>
                <option>Done</option>
                <option>Undone</option>
            </select>
      </div>
    )
}