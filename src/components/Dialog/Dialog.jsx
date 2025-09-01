import { useState } from 'react'
import './Dialog.css'

function Dialog() {
    const [dialog, setDialog] = useState({ primary: "Do you want to play?", options: ['yes', 'no'] });

    return (
        <div className='dialog'>
            <p>{dialog.primary}</p>
            {dialog.options &&
                <ul>
                    {dialog.options.map(option => (
                        <li key={option}>
                            <button>{option}</button>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}

export default Dialog
