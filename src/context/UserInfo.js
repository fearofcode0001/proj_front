import { createContext, useState } from "react"; 
export const UserContext = createContext(""); 

const UserStore = (props) => {
    const [userEmail, setUserEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [isLogin, setIsLogin] = useState(false); 
    const [signUpEmail, setSignUpEmail] = useState("");
    const [addr, setAddr] = useState("");
    const [item, setItem] = useState("");
    //어드민페이지 사이드 메뉴 선택시 출력 data저장
    const [customerData, setCustomerData] = useState("");
    const [qnaData, setQnaData] = useState("");
    return (
        <UserContext.Provider value={{
            userEmail, setUserEmail, 
            password, setPassword, 
            isLogin, setIsLogin,
            signUpEmail,setSignUpEmail,
            addr,setAddr,
            item, setItem,
            customerData, setCustomerData,
            qnaData, setQnaData}}>
            {props.children}
        </UserContext.Provider>   
    );
};

export default UserStore;