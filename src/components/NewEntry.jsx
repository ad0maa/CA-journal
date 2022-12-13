import React, { useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const NewEntry = ({setEntries, entries}) => {
    const { category } = useParams()
    const [entry,setEntry] = useState('')
    const nav = useNavigate()

    function submit(evt) {
        evt.preventDefault()
        const id = entries.length
        // Add a new entry
        const newEntry = {
            category: category,
            content: entry
        }
        setEntries([...entries, newEntry])
        nav(`/entry/${id}`)

    }

  return (
    <>
        <h2>New Entry in {category} category</h2>
        <form onSubmit={submit} className= "container">
          <div>
            <textarea value= {entry} onChange= {(evt) => setEntry(evt.target.value)} className = "form-control" rows="10"></textarea>
            </div>  
            <button className = "btn btn-primary mt-2">Create Entry</button>
        </form>
    
    </>
    )
}

export default NewEntry