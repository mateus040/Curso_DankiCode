import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Atualiza o título do documento usando a API do browser
    document.title = `Você clicou ${count} vezes`;
  },[]);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  )
}

export default App;