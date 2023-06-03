import { createContext, useState } from "react"; 
export const UserContext = createContext(""); 

const UserInfo = (props) => {
    const [userEmail, setUserEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [isLogin, setIsLogin] = useState("FALSE"); 
    const [signUpEmail, setSignUpEmail] = useState("");
    const [addr, setAddr] = useState("");
    return (
        <UserContext.Provider value={{
            userEmail, setUserEmail, 
            password, setPassword, 
            isLogin, setIsLogin,
            signUpEmail,setSignUpEmail,
            addr,setAddr}}>
            {props.children}
        </UserContext.Provider>   
    );
};

export default UserInfo;