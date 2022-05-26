import React from "react";
import axios from "axios";
import '../App.css';
import { useEffect,useState } from "react";


const Residents = ({url}) => {
  
  const [resident,setResident ] = useState({});

useEffect(( ) => {
      axios
      .get(url)
      .then(res => setResident(res.data));
  },[url]);
console.log(resident)


    return (
      <div className="parent">
 <div className="child1">
 <img src={resident.image} alt=""/>

   </div> 
<div className="child2">
<h2>{resident.status} </h2>
</div> 
<div className="child3">
<h3>
        
        Name: {resident.name} 
        </h3>
</div>
 <div className="child4">
 Gender: {resident.gender} <br></br>
        Species: {resident.species} <br></br>
        Episodes: {resident.episode?.length}
           
</div> 

      </div>


      );
    };

export default Residents;