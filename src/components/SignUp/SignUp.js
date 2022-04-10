import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value)
    }
    const handleCreateUser = e => {
        e.preventDefault()
        if(password !== confirmPassword){
            setError("Your Password didn't match")
            return
        }
    }

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onClick={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onClick={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onChange={handleConfirmPasswordChange} type="confirm-password" name="confirm-password" id="" required/>
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className="form-submit" type="submit" value="Sign Up" />
                </form>
                <p>Already Have An Account? <Link className="form-link" to="/login">Login Here</Link></p>
                
            </div>
        </div>
    );
};

export default SignUp;