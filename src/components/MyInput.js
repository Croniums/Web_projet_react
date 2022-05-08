import React, { useState } from 'react';
import './MyInput.css'
function MyInput() {
    const [title, setTitle] = useState('none')
    return (
        <div>
            <h1>{title}</h1>
            <input placeholder="Insérer un titre de page" onChange={el => {
                setTitle(el.target.value)}
                }/>
        </div>
    )
}

export default MyInput;