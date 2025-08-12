import MyName from './myOwn.jsx';

function App() {

  const userName = 'Aditya'

  return (
    <>
      <h1>Shree Ganesh</h1>
      <>MyName : {userName} </>
    </>
  )
}

export default App

/*
  NOTES: 

    Here {} used for passing variables 
    {} : always pass evaluated variable not any expression like if else logic
    
    as all these will collected by ...children (key) in React.createElement
    and this variable is passed as value of the key 

    { 'Key' :  userName }   Right 
    { 'Key' :  if(condition) userName else companName }

*/