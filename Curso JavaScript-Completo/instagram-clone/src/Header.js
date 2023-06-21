import { useEffect, useState } from 'react';

function Header(props) {

    useEffect(()=>{
        props.setUser("João");
    }, [])

    return (

        <div className='header'>
            <div className='center'>
                <div className='header__logo'>
                    <a href=''><img src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' /></a>
                </div>
                {
                    // Se existir o user... (caso já esteja logado)
                    (props.user) ?
                        <div className='header__logadoInfo'>
                            <span>Olá <b>{props.user}</b></span>
                            <a href='#'>Postar!</a>
                        </div>
                        :
                        // Caso não esteja logado ...
                        <div className='header__loginForm'>
                            <form>
                                <input type='text' placeholder='Login...' />
                                <input type='password' placeholder='Senha...' />
                                <input type='submit' name='acao' value="Logar!" />
                            </form>
                            <div className='btn__criarConta'>
                                <a href="">Criar Conta!</a>
                            </div>
                        </div>
                }
            </div>
        </div>

    )
}

export default Header;