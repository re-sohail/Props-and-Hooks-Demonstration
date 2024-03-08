import React from 'react'
import './Button.scss'

function Button({ button, isSelected, setIsSelected }) {
    return (
        <div className='main'>
            {
                button.map((btn, index) => {
                    return (
                        <button className={isSelected == index ? "selected" : 'btn'}
                        onClick={()=> setIsSelected(index)}
                        >{btn}</button>
                    )
                })
            }

        </div>
    )
}

export default Button