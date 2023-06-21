import logo from './logo.svg';
import './App.css';
import { db } from './firebase.js';
import { useEffect, useState } from 'react';

function App() {

  // Para saber qual tela mostrar para o usuário
  const [user, setUser] = useState('Mateus');

  useEffect(() => {



  }, [])


  return (
    <div className="App">
      <div className='header'>
        <div className='center'>
          <div className='header__logo'>
            <a href=''><img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' /></a>
          </div>
          {
            // Se existir o user... (caso já esteja logado)
            (user) ?
              <div>Olá</div>
              :
              // Caso não esteja logado ...
              <div className='header__loginForm'>
                <form>
                  <input type='text' placeholder='Login...' />
                  <input type='password' placeholder='Senha...' />
                  <input type='submit' name='acao' value="Logar!" />
                </form>
              </div>
          }


        </div>
      </div>
    </div>
  );
}

export default App;
