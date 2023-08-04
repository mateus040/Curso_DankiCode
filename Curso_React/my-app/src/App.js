import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("Joao");
  const [numeros, setNumeros] = useState([1,2,3,4,5,6]);
  const [obj, setObj] = useState({nome:'Mateus', idade:'17'});

  return (
    <div>
{
  numeros.map(function(val){
    return(
      <p>{val}</p>
    )
  })
}
      <p>{nome}</p>
      <button onClick={() => setNome("Mateus")}>
        Click me
      </button>
    </div>
  )
}

export default App;