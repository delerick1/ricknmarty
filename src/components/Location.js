import axios from "axios";
import { useEffect,useState } from "react";
import Residents from "./Residents";
import banner from './assets/banner.svg';
import character from './assets/character.svg'
import '../App.css';

const Location = () => {
    const [locations, setLocations] = useState({});
    const[id, setId]= useState("");

  
    useEffect(() => {
     
      const random = Math.floor(Math.random() * 126) + 1;
      axios
        .get(`https://rickandmortyapi.com/api/location/${random}/`)
        .then((res) => setLocations(res.data));
    }, []);

    console.log(locations)

    const srchTye = () => {
        console.log(id)
        if(id <= 126){
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}/`)
      .then((res) => setLocations(res.data));
        }else{
            alert("Only 126 LOCATIONS AT THE MOMENT")
            console.log(locations)

        }
}


console.log(locations.residents)

return(
<>
<div className="cont-p1">
<div className="banner">
<img src={banner} alt=""/>

    </div>
    <div className="logobanner">
    <img src={character} alt=""/>

</div>
</div>

    <div className="cont-p2">
      <div className="Search">
      <input type="text" onChange={e => setId(e.target.value)} value = {id} placeholder="Type from 1-126#" />
      <button class="button" onClick={srchTye}>Search</button>

        </div> 
    </div>

    <div className="Rlocation">
    <div>
    <h1><strong>Earth: ({locations.name})</strong></h1> 

        </div>
        <div>
        <h2>
               <div>Type:<br/>{locations.type} </div>
               <div>Dimension: <br/>{locations.dimension}</div>
               <div>Population:<br/>{locations.residents?.length}</div>

           </h2>
        </div>
    </div>
    <div className="Residents">
        <div>
        <ul>
        {locations.residents?.map((resident) =>(
     <Residents url={resident} keys={resident}/>
))}
</ul>
        </div>
    </div>
    </>
);
};
export default Location;