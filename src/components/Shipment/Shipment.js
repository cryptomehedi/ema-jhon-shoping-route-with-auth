import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Shipment.css'
// import { useNavigate } from 'react-router-dom';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    // const navigate = useNavigate()

    const handleNameBlur = (e) => {
        setName(e.target.value)
    }
    const handleAddressBlur = (e) => {
        setAddress(e.target.value)
    }
    const handlePhoneNumberBlur = (e) => {
        setPhone(e.target.value)
    }

    const handleCreateUser = e => {
        e.preventDefault()
        const shipping = {name, phone, address}
        console.log(shipping);
    }


    return (
        <div className="form-container">
            <div>
                <h2 className="form-title">Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Name<span className="required-text">*</span></label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} type="email" name="email" id="" disabled/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone-number">Phone Number<span className="required-text">*</span></label>
                        <input onBlur={handlePhoneNumberBlur} type="text" name="phone-number" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address<span className="required-text">*</span></label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <p style={{color: 'red'}}>{error}</p>
                    <input className="form-submit" type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;