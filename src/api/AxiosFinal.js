import axios from "axios";
const Final_Proj = "http://localhost:8111";

const AxiosFinal = {
     // 로그인
     memberLogin: async(email, pwd) => {    
        const login = {
            email : email,
            pwd : pwd
        };
        return await axios.post(Final_Proj + "/auth/login", login);
    },

    //회원 조회
    memberGet: async(id) => {
        return await axios.get(Final_Proj + `/member?name=${id}`);
    },

    // 아이디 찾기 
    searchId: async (name, email) => {
            const searchId = {
                name : name,
                email : email
            };
        return await axios.post(Final_Proj+ "/searchId", searchId);
      },


    // 비밀번호 찾기 
    searchPw: async (name, email, id) => {
            const searchPw = {
                name : name,
                email : email,
                id : id

            };
        return await axios.post(Final_Proj+ "/searchPw", searchPw);
     },


    // 회원 가입 여부 확인
    memberRegCheck : async(email) => {
        return await axios.get(Final_Proj + `/check?id=${email}`);
    },

    // 회원 가입
    memberReg: async(name, email, pwd, pwdchk, addr, phone) => {
        const member = {
            USER_NAME: name,
            USER_EMAIL: email,
            USER_PWD: pwd,
            USER_PWDCH: pwdchk,
            USER_ADDR: addr,
            USER_PHONE: phone,
        };
        return await axios.post(Final_Proj + "/new", member);
    },

    //탈퇴
    memberSec : async(email_sec, pwd_sec) =>{
        const sec ={
            id : email_sec,
            pwd : pwd_sec            
        };
        return await axios.post(Final_Proj + "/sec", sec);
    },
   
    // 이메일 인증
    mailCode : async(mail) => {
        return await axios.get(Final_Proj + `/mail/?mail=${mail}`);
    },

    // 이메일 인증 번호 
    mailCodeck : async(mail, code) => {
        const check = {
            mail : mail,
            code : code
        }
        return await axios.post(Final_Proj + `/verify`, check);
    }
    //채팅
    
};

export default AxiosFinal;