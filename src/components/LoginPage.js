import React, { useEffect, useState } from 'react';
import LoginInputField from './LoginInputField';
import logo from '../logo.svg';

const LoginPage = (props) => {

    const [isStart, setIsStart] = useState('false');
    const [idValue, setIdValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [idValueError, setIdValueError] = useState('');
    const [passwordValueError, setPasswordValueError] = useState('');

    const [myIdValue, setMyIdValue] = useState('류종덕');
    const [myPasswordValue, setMyPasswordValue] = useState('1234');

    const validateInputForm = () => {
        resetError();
        let isValidate = true;
        if (!idValue) {
            setIdValueError('아이디를 입력해주세요');
            isValidate = false;
        }

        if (!passwordValue) {
            setPasswordValueError('비밀번호를 입력해주세요');
            isValidate = false;
        }
        return isValidate;
    }

    const tryLogin = () => {

        let idPasswordValidate = true;

        if (myIdValue !== idValue) idPasswordValidate = false;
        if (myPasswordValue !== passwordValue) idPasswordValidate = false;

        if (!idPasswordValidate) alert('아이디 비밀번호를 확인해주세요');
        return idPasswordValidate;
    }

    const clickButton = (e) => {
        // e.preventDefault();
        if (validateInputForm() && tryLogin()) {
            setIsStart('true');
            console.log('Login Page --> ', isStart);
            props.clickButton(isStart);
        }
        resetInputFrom();
    }

    const resetInputFrom = () => {
        setIdValue('');
        setPasswordValue('');
    }

    const resetError = () => {
        setIdValueError('');
        setPasswordValueError('');
    }

    const onCheckEnter = (e) => {
        if (e.key === 'Enter') clickButton();
    }

    useEffect(() => {
        console.log('Before click button -->', isStart);
    }, [isStart]);



    return (
        <div className='App-Login'>
            <img src={logo} className="App-logo Image-Size" alt="logo" />
            <h2>로그인 하세요</h2>
            <form onSubmit={clickButton} onKeyPress={onCheckEnter}>
                <LoginInputField type="text"
                    label="아이디 : "
                    placeholder="아이디"
                    value={idValue}
                    onChange={(e) => { setIdValue(e.target.value) }}
                    errorMessage={idValueError}>
                </LoginInputField>
                <br />
                <LoginInputField type="password"
                    visible="false"
                    label="비밀번호 : "
                    placeholder="비밀번호"
                    value={passwordValue}
                    onChange={(e) => { setPasswordValue(e.target.value) }}
                    errorMessage={passwordValueError}>
                </LoginInputField>
                <br />
                <button onClick={clickButton} style={{ marginTop : '-20px'}} type="button" className="btn btn-primary btn-lg">Login</button>
            </form>
        </div>
    )
}

export default LoginPage;