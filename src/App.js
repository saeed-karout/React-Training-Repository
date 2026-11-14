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
