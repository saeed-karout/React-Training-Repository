import "./App.css";
import MyForm from "./FisrtProjectFormBank/MyForm";
import { userData } from "./useContext/UserContext";
export default function App() {
  let titletest = "test title";
  return (
    <userData.Provider value={{userName:'Saeed karout',userEmail:'saed.karot1@gmail.com',userPhone:'0957608833'}}>
      <div className="App">
        <MyForm titletest={titletest} />
      </div>
    </userData.Provider>
  );
}
// Exam 2 
// https://react.dev/learn/passing-data-deeply-with-context#challenges

// Answer to the challenge: 
//Context file 
// import {createContext} from 'react';
// export let ChangeSize = createContext(100); 
// export let PlaceData = createContext();

// import { useState } from 'react';
// import { places } from './data.js';
// import { getImageUrl } from './utils.js';
// import {useContext} from 'react'
// import {ChangeSize , PlaceData} from './Context.js';


// export default function App() {
//   const [isLarge, setIsLarge] = useState(false);
//   const imageSize = isLarge ? 150 : 100;
//   return (
//     <ChangeSize.Provider value={imageSize}>
//       <label>
//         <input
//           type="checkbox"
//           checked={isLarge}
//           onChange={e => {
//             setIsLarge(e.target.checked);
//           }}
//         />
//         Use large images
//       </label>
//       <hr />
//       <List imageSize={imageSize} />
//     </ChangeSize.Provider>
//   )
// }

// function List() {
  
//     const listItems = places.map(place =>
//   <PlaceData.Provider value={place}>
//       <li key={place.id}>
//         <Place/>
//       </li>
//   </PlaceData.Provider>
//     );
//     return <ul>{listItems}</ul>;
// }

// function Place() {
//   const Place = useContext(PlaceData);
  
//   return (
//     <>
//       <PlaceImage
//       />
//       <p>
//         <b>{Place.name}</b>
//         {': ' + Place.description}
//       </p>
//     </>
//   );
// }

// function PlaceImage() {
//   const imageSize = useContext(ChangeSize);
//   const Place = useContext(PlaceData);
  
//   return (
//     <img
//       src={getImageUrl(Place)}
//       alt={Place.name}
//       width={imageSize}
//       height={imageSize}
//     />
//   );
// }


