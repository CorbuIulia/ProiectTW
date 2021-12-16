import { useState } from 'react'
import './Teacher.css'

function Teacher(props){
   const {item, onSave}=props
   const[isEditing, setIsEditing]=useState(false)
   const[firstName, setName]=useState(item.firstName)
   const[lastName,setLastname]=useState(item.lastName)
   const[specialization,setspecialization]=useState(item.specialization)
   const[email,setEmail]=useState(item.setEmail) 
   const[password,setPassword]=useState(item.setPassword)
}

const edit = () => {
    setIsEditing(true)
}

const cancel = () => {
    setIsEditing(false)
}
const saveTeacher=()=>{
    onsave(item.id,{
        firstName,lastName,specialization,email,password
    })
    setIsEditing(false)

return (
    <div>
        {
            isEditing
                ? (
                    <>
                        i have the title
                        <input type='text' value={firstName} onChange={(evt) => setName(evt.target.value)} />
                        and content
                        <input type='text' value={lastName} onChange={(evt) => setLastname(evt.target.value)} />
                        <input type='button' value='save' onClick={saveBook} />
                        <input type='button' value='cancel' onClick={cancel} />

                    </>
                )
                : (
                    <>
                        i have the title <span className='book-title'>{item.title}</span> and content <span style={{ backgroundColor: 'lightgreen'}}>{item.content}</span>
                        <input type='button' value='delete' onClick={deleteBook} />
                        <input type='button' value='edit' onClick={edit} />
                    </>
                )
        }
    </div>
    )}


export default Teacher