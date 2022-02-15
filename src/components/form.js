import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {

    const notify = () => toast("Wow so easy!");

    return (
        <div>
            <h1> Regestration form</h1>

            <form action="">
                <div>
                    <label htmlFor="FirstName">FirstName</label>
                    <input type="text" autoComplete="off" name="FirstName" id="FirstName" />
                </div>
                
                <div>
                    <label htmlFor="LastName">LastName</label>
                    <input type="text" autoComplete="off" name="LastName" id="LastName" />
                </div>

                <div>
                    <label htmlFor="Email">Email</label>
                    <input type="text" autoComplete="off" name="Email" id="Email" />
                </div>

                <div>
                    <label htmlFor="Education">Education</label>
                    <input type="text" autoComplete="off" name="Education" id="Education" />
                </div>

                <div>
                    <label htmlFor="Bio">Bio</label>
                    <input type="text" autoComplete="off" name="Bio" id="Bio" />
                </div>

                <div>
                    <label htmlFor="DOB">DOB</label>
                    <input type="date" autoComplete="off" name="DOB" id="DOB" />
                </div>

                <button type="submit" onClick={notify}>Register</button>
                
            </form>
        </div>
    )
}



export default Form