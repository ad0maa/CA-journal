import React, { useState } from 'react'
import CategorySelection from './CategorySelection'
import ShowEntry from './ShowEntry'
import Home from './Home'
import NewEntry from './NewEntry'
import Navbar from './Navbar'
import { Routes, Route, useParams, useNavigate } from 'react-router-dom'

const seedEntries = [
  {category: 'Food', content: 'Pizza is awesome!'},
  {category: 'Work', content: 'Another day, another dollar'},
  {category: 'Coding', content: 'React rules!'}
  
]


const App = () => {
  const [entries, setEntries] = useState(seedEntries)
  const nav = useNavigate()

  // HOC (higher-order component)
  const ShowEntryWrapper = () => {
    const { id } = useParams()
    const the_entry = entries[id]
    return the_entry ? <ShowEntry entry={the_entry} /> : <h4>Entry not Found!</h4>
  }


  const addEntry = (category, content) => {
    const id = entries.length
    // Add a new entry
    const newEntry = {
        category: category,
        content: content
    }
    setEntries([...entries, newEntry])
    nav(`/entry/${id}`)
  }

  return (
    <>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home entries={entries}/>} />
        <Route path='/category' element={<CategorySelection />} />
        <Route path = '/entry/:id' element={<ShowEntryWrapper />} />
        <Route path='/entry/new/:category' element={<NewEntry addEntry={addEntry}/>} />
        <Route path='*' element = {<h4>Page not found!</h4>} />
       </Routes>
    </>
  )
}

export default App