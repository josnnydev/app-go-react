 

 function App() {
  return (
    <div>
      <h1>Hola</h1>
     <button onClick={async()=>{
      const response = await fetch("/users")
      const data = await response.json()
      console.log(data);
      
     }}>
      Get Data
    </button> 
      
       </div>
    
  )
  
 }

 export default App;