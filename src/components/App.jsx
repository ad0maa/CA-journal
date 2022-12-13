import React, { useState } from 'react'
import CategorySelection from './CategorySelection'
import ShowEntry from './ShowEntry'
import Home from './Home'
import NewEntry from './NewEntry'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

const seedEntries = [
  {category: 'Food', content: 'Pizza is awesome!'},
  {category: 'Work', content: 'Another day, another dollar'},
  {category: 'Coding', content: 'React rules!'}
  
]


const App = () => {
  const [entries, setEntries] = useState(seedEntries)

  // HOC (higher-order component)
  const ShowEntryWrapper = () => {
    const { id } = useParams()
    const entry = entries[id]
    return entry ? <ShowEntry entry={entry} /> : <h4>Entry not Found!</h4>
  }


  return (
    <>
      <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home entries={entries}/>} />
        <Route path='/category' element={<CategorySelection />} />
        <Route path = '/entry/:id' element={<ShowEntryWrapper />} />
        <Route path='/entry/new/:category' element={<NewEntry entries= {entries} setEntries={setEntries}/>} />
        <Route path='*' element = {<h4>Page not found!</h4>} />
       </Routes>
      </BrowserRouter>

    </>
  )
}

export default App