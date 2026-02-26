import { useState } from 'react'
import './App.css'

function App()
{
    const [tempData, setTempData] = useState("I love you my Jana, My Dear wife Sakshi 💖 ");



    const acceptHandler = () => {
        setTempData("I Love You Too 💖");
    }

    const rejecttHandler = () => {
        setTempData("I Love You So So Much💖");
    }

  
  

  return (
    <>  
          
          <span>{tempData}</span>
          <br /><br />
          <button onClick={acceptHandler} style={{ backgroundColor: "green" }}> Accept </button>      
          <button onClick={rejecttHandler} style={{ marginLeft: "5px", backgroundColor: "orange" }}> Reject </button>      
    </>
  )
}

export default App
