import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword , user] = useCreateUserWithEmailAndPassword(auth)
    const [sendEmailVerification] = useSendEmailVerification(auth);

    const handleEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPasswordBlur = (e) => {
        setConfirmPassword(e.target.value)
    }
    if(user){
        navigate('/home')
    }
    const handleCreateUser = e => {
        e.preventDefault()
        if(password !== confirmPassword){
            setError("Your Password didn't match")
            return
        }
        if(password.length < 6){
            setError("Your Password must be at least 6 characters")
            return;
        }
        setError('')
        createUserWithEmailAndPassword(email , password)
        .then(()=>{
            sendEmailVerification()
            alert('Sent Email Successfully');
        })
    }

    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
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