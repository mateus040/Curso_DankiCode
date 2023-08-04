import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState('João');

  function callAlert(){

  }

  useEffect(() => {
     
  },[]);

  return (
    <div>
      {
        (nome == "Mateus")?
        <div>
          <p>{nome}</p>
        </div>:

        <div>
          <p>Ops eu preciso do nome Mateus.</p>
        </div>
      }
    </div>
  )
}

export default App;