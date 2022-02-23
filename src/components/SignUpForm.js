import React, { useState, useEffect } from 'react';
import './SignUpForm.css';

function SignUpForm() {
    const initialvalues = {username:"",email:"",phone:"",country:"" }
    const [formValues, setFormValues] = useState(initialvalues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);  
    const handleChange = (e)=>{
       // console.log(e.target);
       const {name, value} = e.target;
       setFormValues({...formValues, [name]:value});
       console.log(formValues);
    }

    const handleSubmit =(e) =>{
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        //   console.log(formValues);          
        }      
      }, [formErrors]);

    const validate =(values) =>{
        const errors ={};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username){
            errors.username ="User Name is Required!";
        }if (!values.email){
            errors.email ="Email is Required!";
        } else if (!regex.test(values.email)){
            errors.email = "This is not a vaild email format!";
        }
        if (!values.phone){
            errors.phone ="Phone is Required!";
        }
        if (!values.country){
            errors.country ="Country is Required!";
        }

        return errors;
    }
    return (
    <div className='container'>
        <div className='subscription'>
            <p className='subscription-heading'>
            Join the QuickBoks to receive our best  deals
            </p>
            <p className='subscription-text'>
            You can unsubscribe at any time.
            </p>
        </div>
            

        {Object.keys(formErrors).length === 0 && isSubmit ? (
           <div className="success-msg">Signed in successfully</div>
        ) :  
        <form onSubmit={handleSubmit}>
            
            <div className='ui divider'></div>
            <div className='ui form'>
                <div className="field">
                    <label > User Name</label>
                    <input type="text" name="username" value={formValues.username}  placeholder="username"
                    onChange={handleChange}
                    />
                </div>
                <p className='err'>{formErrors.username}</p>
                <div className="field">
                    <label >Email</label>
                    <input type="email" name="email" value={formValues.email} placeholder="email"
                     onChange={handleChange}/>
                </div>
                <p className='err'>{formErrors.email}</p>
                <div className="field">
                    <label >Phone</label>
                    <input type="tel" name="phone" value={formValues.phone} placeholder="phone"
                     onChange={handleChange}/>
                </div>
                <p className='err'>{formErrors.phone}</p>
                <div className="field">
                    <label >Country</label>
                    <input type="text" name="country" value={formValues.country} placeholder="country"
                     onChange={handleChange}/>
                </div>
                <p className='err'>{formErrors.country}</p>
                <div className="field">
                    <label ></label>
                    <button className='button'>Sign Up</button>
                </div>
               

            </div>
        </form>
}

    </div>
  )
}

export default SignUpForm