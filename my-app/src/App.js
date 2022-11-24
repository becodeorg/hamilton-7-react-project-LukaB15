import React, {useEffect,useState, Fragment} from 'react';
import axios from "axios";
import List from './features/List.js';
import './App.css';


function App ()  {

 const [data,setData] = useState([]);

 useEffect(()=>{
  const fetchData = async() =>{
    const result = await axios(
      "https://api.rawg.io/api/games?key=678cfdbc0bb64f1fa15d4409fc3d8131",
      );
      const a = result.data
      setData(a.results)
  };
  fetchData();
 })


    return (
    <Fragment>
      <List data={data}/>
    </Fragment>
  );
    
}

export default App;
