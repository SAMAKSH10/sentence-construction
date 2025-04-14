import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { useState } from "react"
import TestPage from "./assets/pages/TestPage";
import { generateQuestions } from "./funtions";

function App() {
  const [testState,setState] = useState(false);
  const [questions,setQuestions] = useState([]);

  const startTest = ()=>{
    try{
      generateQuestions(setQuestions);
      setState(true);
    }catch(err){
      console.error(`Error in starting a test: ${err}`);
    }
  }

  return (
    <div className="h-[100%] w-[100%] bg-gray-50">
    <Navbar/>
    { !testState ? (<Home startTest = {startTest}/>):(<TestPage questions={questions}/>)}
    </div>
  )
}

export default App
