import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Books } from './page/Books'
import { Readinglist } from './components/ReadingList';

function App() {
 

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-7"> <Books/></div>
          <div className="col-5 listReading"><Readinglist/></div>
        </div>
      </div>
    
    </>
  )
}

export default App
