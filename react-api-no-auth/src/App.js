import {useState} from 'react'
import axios from 'axios'
import ShowData from './Components/ShowData';
import './App.css';

function App() {
  const [userData,setUserData] = useState([])
  let clickHandler = async(event)=>{
    let res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    let data = await res.json()
    let dataObj = data.map((postData)=>{
      return {
        body : postData.body,
        id : postData.id,
        title : postData.title,
        userId : postData.userId
      }

     
    })
    setUserData(dataObj)
  }
  

 
  return (
    <div>
      <div>
      <button onClick={clickHandler}>Click to get data</button>
      </div>
      <div>
        <ShowData data = {userData}/>
      </div>
      
    </div>
  );
}


export default App;
