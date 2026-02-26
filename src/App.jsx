import { useState } from 'react'
import './App.css'

function App()
{
    const [tempData, setTempData] = useState("I love you my Jana, My Dear wife Sakshi 💖 ");
    const acceptHandler = () => {
        setTempData("I Love You Too 💖");
    }

  
  

  return (
    <>  
          <button onClick={() => { acceptHandler } }> Accept </button>      
        
          <span>{tempData}</span>
    </>
  )
}

export default App
