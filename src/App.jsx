import { useState,useEffect } from 'react'
import './App.css'

function App() {
  
  const [data,setData] = useState([]);
  const [loading,setLoading] =useState(false);
  const [error,setError] =useState('');
    //const [refetchCount, setRefetchCount] = useState(0);
    const [tempData, setTempData] = useState("I love you my Jana, My Dear wife Sakshi 💖 ");
  

  useEffect(()=>{

    const controller=new AbortController(); 

    const fetchData = async ()=>{

    try
    { 
        setLoading(true);
        setError("");
        const response = await fetch('https://jsonplaceholder.typicode.com/posts',{signal:controller.signal});
        if(!response.ok)
        {
          throw new Error('API Failed');
        }
        const api_data= await response.json();

        setData(api_data.slice(0,100));

    }
    catch(err)
    {
      if(err.name!=='AbortError')
      {
        setError(err.message);
      }
    }
    finally
    {
      setTimeout(setLoading(false),2000);
    }
  }

  fetchData();


  return ()=>{

      controller.abort();

  }

  }, [])


    const acceptHandler = () => {
        setTempData("I Love You Too 💖");
    }

  
  

  return (
    <>  
          <button onClick={() => { acceptHandler } }> Accept </button>      
        {loading && <p style={{color:"white"}}>Loading...</p>}
        {error && <p>{error}</p>}
        { <ul>
          {data.map((user)=>{
            return <li key={user.id}> {user.title} </li>
          })}
        </ul> }
          <span>{tempData}</span>
    </>
  )
}

export default App
