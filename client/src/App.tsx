 

 function App() {
  return (
    <div>
      <h1>Hola</h1>
     <button onClick={async()=>{
      const response = await fetch("http://127.0.0.1:3000/users")
      const data = await response.json()
      console.log(data);
      
     }}>
      Get Data
    </button> 
      
       </div>
    
  )
  
 }

 export default App;