import React, {useState} from 'react';
import Text from "./components/Text";
//import './App.css';

function Text() {
  const [login,setLogin] = useState("");
  const [password,setPassword] = useState("userpassword");
  const [one,setOne] = useState("ONE");
  const loginProps = {login,setLogin,password,setPassword};
  const headProps = {name:login};
  return (
    <div className='wrapper'>
        <Header {...headProps}/>
        <Login {...loginProps}/>
        {isAllowed(login,password)==="nothing" ? "" :
         isAllowed(login,password)==="read" ?   
             <div className='content'>
                <div className="sidebar">VARIABLES:{makeEditable("ONE",setOne,"false")}</div>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod {one} incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim {one}, quis nostrud exercitation 
                    {one} laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in {one} velit 
                    esse cillum dolore eu fugiat nulla {one}. Excepteur sint 
                    occaecat {one} non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </div>
            </div>
            :
            <div className='content'>
                <div className="sidebar">VARIABLES:{makeEditable("ONE",setOne,"true")}</div>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod {one} incididunt ut labore et dolore magna 
                    aliqua. Ut enim ad minim {one}, quis nostrud exercitation 
                    {one} laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in {one} velit 
                    esse cillum dolore eu fugiat nulla {one}. Excepteur sint 
                    occaecat {one} non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </div>
            </div>
        }  
    </div>
  );
}

export default Text;

