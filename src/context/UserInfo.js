import { createContext, useState } from "react"; 
export const UserContext = createContext(""); 

const UserStore = (props) => {
    const [userEmail, setUserEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [isLogin, setIsLogin] = useState("FALSE"); 
    const [signUpEmail, setSignUpEmail] = useState("");
    const [addr, setAddr] = useState("");
    // const [item, setItem] = useState("");
    const [test, setTest] = useState("ddd");
    return (
        <UserContext.Provider value={{
            userEmail, setUserEmail, 
            password, setPassword, 
            isLogin, setIsLogin,
            signUpEmail,setSignUpEmail,
            addr,setAddr,
            test, setTest}}>
            {props.children}
        </UserContext.Provider>   
    );
};

export default UserStore;