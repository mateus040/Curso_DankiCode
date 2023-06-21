import './App.css';
import { db } from './firebase.js';
import { useEffect, useState } from 'react';
import Header from './Header';

function App() {

  // Para saber qual tela mostrar para o usuário
  const [user, setUser] = useState();

  useEffect(() => {

  }, [])


  return (
    <div className="App">

      <Header setUser={setUser} user={user}></Header>

    </div>
  );
}

export default App;
