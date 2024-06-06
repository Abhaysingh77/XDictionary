import { useRef, useState } from "react";
function App() {
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState("");
  const [isShow, setIsShow] = useState(false);
  const data = [
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },

    { word: "Component", meaning: "A reusable building block in React." },

    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const handleClick = () =>{
    setIsShow(false);
    let ans = data.find(item => item.word.toLowerCase() === value.toLowerCase());
    if(ans){
      setAnswer(ans.meaning);
    }else{
      setAnswer("");
    }
    setIsShow(true);
  } 

  return <div>
    <h1>Dictionary App</h1>
    <input type="text" placeholder="Search for a word.." value={value} onChange={(e)=>setValue(e.target.value)}/>
    <button onClick={handleClick}>Search</button>
    <h3>Definition:</h3>
    {isShow && (<p>{answer ? answer : "Word not found in the dictionary."}</p>)}
  </div>;
}

export default App;
