import {useState} from 'react'


function AddTeacher(props){
    const {onAdd}=props
    const[firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')

    const add=(evt)=>{
        onAdd({
            firstName,lastName
        })
        setFirstName('')
        setLastName("")
    }
    return(
        <div>
        <div>
            <input type='text' placeholder='title' value={firstName} onChange={(evt) => setFirstName(evt.target.value)} />
        </div>
        <div>
            <input type='text' placeholder='content' value={lastName} onChange={(evt) => setLastName(evt.target.value)} />
        </div>
        <div>
            <input type='button' value='add me!' onClick={add} />
        </div>
    </div>
    )
}