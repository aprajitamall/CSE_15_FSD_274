import React ,{useState} from 'react'
import './Login.css';
const login = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    mobile:"",
    gender:"",
    course:"",
    terms:false,
  });
  const handleChange = (e)=>{
    const {name,value,type,checked}=e.target;
    setFormData({
      ...formData,
      [name]: type==="checkbox"?checked:value,
    });
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(
      !formData.name||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword || !formData.mobile || !formData.gender ||
       !formData.course  )
       {
        alert("Please fill all fields");
        return;
       }
   if(formData.password !== formData.confirmPassword)
   {
    alert("Password do not match");
    return;
   }
   if(!formData.terms)
   {
    alert("Please accept Terms & Conditions");
    return;
   }
   alert("Registration successfull");
   setFormData({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    mobile:"",
    gender:"",
    course:"",
    terms:false,

   });
  };
  return (

    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>
        <input type="text" name="name" placeholder="Full name" value={formData.name} 
        onChange={handleChange}/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
        <div className="gender">
          <label>
            <input type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            Female
          </label>
          <label>
            <input type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            Male
          </label>
          
        </div>
      <select
          name="course"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option>B.Tech CSE</option>
          <option>B.Tech IT</option>
          <option>BCA</option>
          <option>MCA</option>
        </select>

        <label className="checkbox">
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          I agree to Terms & Conditions
        </label>

        <button type="submit">Register</button>
   
      </form>
      
    </div>
  );
};

export default login

