

export default function AddTitleBlank(props){
    return (
        <div className="addTitleBlank">
          <div className="blank-overlay active"></div>
          <div className="title-blank">
            
            <div>

              <input className="title-input" type='text' placeholder="Type some title here..."></input>
              <button className="title-confirm" onClick={() => props.confirmBlank()}>Confirm</button>

              <button onClick={() => props.closeInputBlank()} className="title-blank-close">
                <span></span>
                <span></span>
              </button>

             </div> 

          </div>
        </div>
    )
}