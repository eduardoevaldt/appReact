import './Login.css';
import React, { useState } from 'react';

function Login() {

    const [message, setMessage] = useState();
    const [user, setUser] = useState();
    const [password, setPassword] = useState();

    return (
        <div className='login'>

            <h1>Meu Login</h1><br/>
            <TextBox
                type='text'
                label='Usuário: '
                placeholder='Digite um usuário'
                handleOnKeyPress={setUser}
            />
            <TextBox
                type='password'
                label='Senha: '
                placeholder='Digite sua senha'
                handleOnKeyPress={setPassword}
            />
            <Button
                type='button'
                name='send'
                text='Enviar'
                handleOnClick={setMessage}
            />
            <Button
                type='button'
                name='clear'
                text='Limpar'
                handleOnClick={setMessage}
            />
            <br />
            <div>
                Mensagem: {message}
            </div>
            <div>
                Usuário: {user}
            </div>
            <div>
                Senha: {password}
            </div>

        </div>
    )
}

export default Login;

function TextBox(props) {
    return (
        <div>
            <label>
                {props.label}
            </label>
            <input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                onKeyPress={(e) => props.handleOnKeyPress(e.target.value)}
            />
        </div>
    )
}

function Button(props) {
    return (
        <div>
            <button
                type={props.type}
                name={props.name}
                onClick={() => props.handleOnClick('O botão ' + props.name + ' foi clicado')}
            >
                {props.text}
            </button>
        </div>
    )
}
