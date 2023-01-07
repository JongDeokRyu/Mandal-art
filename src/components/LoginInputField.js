import React from 'react';

const LoginInputField = ({
    type,
    label,
    placeholder,
    value,
    onChange,
    errorMessage,
    visible
}) => {
    return(
    <div>
        <input
            style={{ borderColor: 'black' }}
            visible={visible}
            label={label}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange} /><br />
        <div style={{ color: 'red' }}>{errorMessage}</div>
    </div>
    );
}

export default LoginInputField;