export const generateQuestions = (func)=>{
    fetch('http://localhost:3000/data').then(res=>res.json())
    .then(res=>func(res.questions))
    .catch(err=>console.log(`Error in fetching data : ${err}`));
} 