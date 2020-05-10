import React from "react";
import { Link } from "react-router-dom";

import "../../../App.css";

function login() {
    return (
        <div>
            <div className='brdr1 col-sm-6 col-centered loginWrapper'>
                <form>
                    <div className='row mb5'>
                        <div className='col-sm-6'>
                            <label htmlFor='email' className='col-sm-6'>
                                Email
                            </label>
                        </div>
                        <div className='col-sm-6'>
                            <input
                                type='email'
                                className='form-control col-sm-6'
                                id='Email'
                                aria-describedby='Email'
                                placeholder='Email'
                            />
                        </div>
                    </div>
                    <div className='row mb5'>
                        <div className='col-sm-6'>
                            <label htmlFor='password' className='col-sm-6'>
                                Password
                            </label>
                        </div>
                        <div className='col-sm-6'>
                            <input
                                type='password'
                                className='form-control col-sm-6'
                                id='password'
                                aria-describedby='password'
                                placeholder='password'
                            />
                        </div>
                    </div>
                    <div className='form-group form-check'>
                        <input
                            type='checkbox'
                            className='form-check-input'
                            id='exampleCheck1'
                        />
                        <label
                            className='form-check-label'
                            htmlFor='exampleCheck1'
                        >
                            Check me out
                        </label>
                    </div>
                    <button type='submit' className='btn btn-primary'>
                        Log In
                    </button>
                    <div>
                        <label>
                            Not a member yet..<Link to='Signup'>Sign Up</Link>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default login;
