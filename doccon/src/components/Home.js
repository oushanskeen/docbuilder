import React, {useState} from 'react';

const isAllowed = (_status,_password) => {
        return (
            (_status==="guest" && _password==="guest") ? "read" :
            (_status==="admin" && _password==="admin") ? "read & write" :
            "nothing"
        );
    };
    const makeEditable = (_content,_setState,_editable) => {
        return (
            <div
                contentEditable={_editable}
                onInput={e => _setState(e.currentTarget.textContent)}
            >
            {_content}
            </div>
       );
    };
    const Header = _ => {
        return(
           <div className="header">
                <h1>Hello {_.name} I'm a doc builder!</h1>       
           </div>
        );
    };
    const Login = _ => {
        return(
            <div className="login">
                {makeEditable("YOURNAME",_.setLogin,"true")}
                {makeEditable("YOURWORD",_.setPassword,"true")}
                You are allowed to: <h3>{isAllowed(_.login,_.password)}</h3>
            </div>
        );
    };

function Home() {
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

export default Home;

