import React from "react"

export default function Item(props){
        return (
        <div 
            key={props.id} 
            className="item">
                <input
                    className="checkbox"
                    type='checkbox' 
                    checked={props.isDone} 
                    onChange={() => props.handleIsDone(props.id)}>
                </input>

                <div className="item-info">
                    <p className="info-value">
                        {props.value}
                    </p>
                    <span className="info-date">
                        <i>{props.date}</i>
                    </span>
                </div>
                <div className="rights-btns">
                    <button 
                        className="edit-btn icon-edit" 
                        onClick={() => props.popUpInputBlank(prevInputBlankState => {
                            return {...prevInputBlankState, isActive : true, event : 'edit', id : props.id}
                          })}
                    >
                    </button>
                    <button 
                        className="delete-btn icon-trash-o" 
                        onClick={() => props.deleteNote(props.id)}
                    >
                    </button>
                </div>
                
        </div>
        )
}