import React from 'react'
import { Footer } from "../components";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import User from '../models/user';
import {  useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import authenticationService from '../services/authentication.service';
import {toast} from 'react-toastify';
import './register.css';
const Register = () => {
    const [user,setUser]=useState(new User('','','','','','',''));
    const [msg, setMsg] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const navigate = useNavigate();

//     const [selectedOption, setSelectedOption] = useState("");

//   function handleSelectChange(event) {
//     setSelectedOption(event.target.value);
//   }

  const handleChange=(event)=>{
    const {name, value} = event.target;
    setUser((prevState => {
        return {
            ...prevState,
            [name]: value
        };
    }));
  }

  const handleRegister = (e) => {

    e.preventDefault();
    // authenticationService.register(user).then(()=>alert("User Added"))
if (!user.firstName ) {
    setMsg('Please Enter First Name ');toast.error("Please Enter First Name",{autoClose: 1500});return;}
else if(!user.lastName){
    setMsg('Please Enter Last Name ');toast.error("Please Enter Last Name" ,{autoClose: 1500});return;}
else if(!user.email ) {
    setMsg('Please Enter Email ');toast.error("Please Enter Email" ,{autoClose: 1500});return;}
else if(!user.password) {
        setMsg('Please Enter Password');toast.error("Please Enter Password" ,{autoClose: 1500});return;}
else if(!user.role) {
        setMsg('Please Enter Role ');toast.error("Please Enter Role" ,{autoClose: 1500});return;}
else if(!user.mobileNumber) {
        setMsg('Please Enter Mobile Number ');toast.error("Please Enter Mobile Number",{autoClose: 1500});return;}
else setMsg('');

  
  
  authenticationService.register(user).then(_ => {
    toast.success("User Registered Successfully" ,{autoClose: 1500});
      navigate('/login');
  }).catch(error => {
    toast.success(`${error.response.data}` ,{autoClose: 1500});
     console.log(error.response.data);
     if (error?.response?.status === 409) {
         setErrorMessage('Email already exists!!!');
     } else {
         setErrorMessage(error.errorMessage);
     }
  });
};

    return (
        <>
        <div className="container my-3 py-3 register-container">
        {/* ... rest of your JSX ... */}
      
      
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                    <FontAwesomeIcon icon={faUserCircle} className="ms-auto me-auto user-icon"/>

                        {errorMessage &&
                        <div className="alert alert-danger">
                            {errorMessage}
                        </div>
                        }

                        {msg &&
                         <div className="alert alert-danger">
                            {msg}
                        </div>}
                        <form onSubmit={(e) => handleRegister(e)}>
                            <div class="form my-3">
                                <label for="FName">First Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="FName"
                                    name="firstName"
                                    value={user.firstName}
                                    placeholder="Enter First Name"
                                    minLength={4}
                                    maxLength={20}
                                    onChange={handleChange}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="FName">Last Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="LName"
                                    name="lastName"
                                    value={user.lastName}
                                    placeholder="Enter Last Name"
                                    minLength={4}
                                    maxLength={20}
                                    onChange={handleChange}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    name="email"
                                    value={user.email}
                                    placeholder="name@example.com"
                                    onChange={handleChange}
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g"//Copy From Backend
                                    name="password"
                                    value={user.password}
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                            </div>

                            <div class="form  my-3">
                                <label for="Role">Role</label>
                                <select
                                    class="form-control"
                                    id="Role"
                                    name="role"
                                   value={user.role}
                                   onChange={handleChange}>
                                        <option value="">-- select an option --</option>
                                        <option value="CUSTOMER">CUSTOMER</option>
                                        <option value="ADMIN">ADMIN</option>
                                </select>
                            </div>

                            <div class="form  my-3">
                                <label for="Mobile Number">Mobile Number</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="mobile"
                                    name="mobileNumber"
                                    minLength={10}
                                    maxLength={10}
                                    value={user.mobileNumber}
                                    placeholder="Mobile Number"
                                    onChange={handleChange}
                                />
                            </div>


                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" >
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Register