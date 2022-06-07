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
};
const [page, setPage] = useState(2);

const resiNumbers = 5;
const lastIndex = resiNumbers * page;
const firstIndex = lastIndex - resiNumbers;
const residentpages = locations.residents?.slice(firstIndex, lastIndex);

const lastPage = Math.ceil(locations.residents?.length / resiNumbers);

const numbers = [];
for (let i = 1; i <= lastPage; i++) {
  numbers.push(i);


};
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

    <div className="cont-p3">
    <div className="Rlocation">
    <h1><strong>Earth: ({locations.name})</strong></h1> 

        </div>

        <div className="s-cont">
        
               <div>Type:<br/>{locations.type} </div>
               <div>Dimension: <br/>{locations.dimension}</div>
               <div>Population:<br/>{locations.residents?.length}</div>

           
        </div>
    </div>
        <div className="cont-p3">
    <div className="Cont-p4">


        {residentpages?.map((resident) =>(
     <Residents url={resident} keys={resident}/>
))}
        
       

        
    </div>
    <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev
        </button>

        {numbers.map((number) => (
          <button onClick={() => setPage(number)}>{number}</button>
        ))}

        <button onClick={() => setPage(page + 1)} disabled={page === lastPage}>
          Next
        </button>
        </div>
    </>
);
};
export default Location;