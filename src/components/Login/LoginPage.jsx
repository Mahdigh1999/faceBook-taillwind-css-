import React , { useState } from "react";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";
import Register from "./Register";
function LoginPage(props) {
  const [account, setAccount] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState('');
  const [openRegister , setOpenRegister] = useState(true);
  const className = !Object.keys(errors).length ? " xl:w-[1000px]   m-auto mt-28 sm:flex block " :" xl:w-fit  m-auto mt-28 block ";
  const handleChange = ({target:{name,value}}) => {
    const acc = {...account};
    acc[name] = value;
    setAccount(acc);
}
    const validate = () => {
        const errors = {}
        if (account.username.trim() === '')
            errors.username = 'Username Required'
        if (account.username.trim() === '')
            errors.password = 'Password Required'
        return Object.keys(errors).length === 0 ? null : errors;
    }
   const handleSubmit = e => {
    e.preventDefault();
    const errors = validate() || {};
    setErrors(errors);
    if (errors) return;


    console.log("SUBMITED")
   }

   const handleCreateAcc = () => {
    const isOpen = !openRegister;
    console.log(isOpen);
    setOpenRegister(isOpen)
    
   }
const handleExit = () => {
  const isOpen = !openRegister;
  console.log(isOpen);
  setOpenRegister(isOpen)
}
  return (
    <div className={className}>
      <LoginHeader errors={errors} />
      <LoginForm 
      onSubmit={handleSubmit}
      account={account}
      onChange={handleChange}
      errors={errors}
      onClick={handleCreateAcc}
      />
      {openRegister && <Register onExit = {handleExit} />}
    </div>

  );
}

export default LoginPage;
