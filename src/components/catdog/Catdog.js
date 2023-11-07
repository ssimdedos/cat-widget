import axios from "axios";
import { useState } from "react";
import './catdog.css';

const Catdog = () => {
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [pets, setPets] = useState([]);
  const loadPets = async(who) => {
    let url = '';
    if(who === 'cat') url = 'https://api.thecatapi.com/v1/images/search';
    else if(who === 'dog') url = 'https://api.thedogapi.com/v1/images/search'
    const petData = await axios.get(url);
    const petImg = JSON.stringify(petData.data[0]);
    setPets([...pets, petImg]);
  }
 
  return(
    <div>
      <div id="header">
        <button className="load-btn cat-btn" onClick={()=> loadPets('cat')} >고양이는 귀엽다</button>
        <button className="load-btn dog-btn" onClick={()=> loadPets('dog')} >강아지도 귀엽다</button>
      </div>
      <div className="container">
        <div id="pet-container">
        {pets.length >=1 ?(
          pets.map((p) => {
            const pet = JSON.parse(p);
            return <img src={pet.url} key={pet.id} alt="귀여운 사진" width={pet.width} height={pet.height} />
          })
        ):<span>누르면 귀여운 일이 생기는</span>}
        </div>
      </div>
    </div>
  );
};

export default Catdog