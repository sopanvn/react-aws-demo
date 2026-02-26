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
          <button onClick={acceptHandler}> Accept </button>      
          <button onClick={rejecttHandler}> Reject </button>      
    </>
  )
}

export default App
