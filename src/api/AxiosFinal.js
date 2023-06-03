import axios from "axios";
const Story_Board = "http://localhost:8111";

const AxiosFinal = {
     // 로그인
     memberLogin: async(email, pw) => {    
        const login = {
            id : email,
            pwd : pw 
        };
        return await axios.post(Story_Board + "/login", login);
    },

    //회원 조회
    memberGet: async(id) => {
        return await axios.get(Story_Board + `/member?name=${id}`);
    },

    // 아이디 찾기 
    searchId: async (name, email) => {
            const searchId = {
                name : name,
                email : email
            };
        return await axios.post(Story_Board+ "/searchId", searchId);
      },


    // 비밀번호 찾기 
    searchPw: async (name, email, id) => {
            const searchPw = {
                name : name,
                email : email,
                id : id

            };
        return await axios.post(Story_Board+ "/searchPw", searchPw);
     },


    // 회원 가입 여부 확인
    memberRegCheck : async(email) => {
        return await axios.get(Story_Board + `/check?id=${email}`);
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
        return await axios.post(Story_Board + "/new", member);
    },

    //탈퇴
    memberSec : async(email_sec, pwd_sec) =>{
        const sec ={
            id : email_sec,
            pwd : pwd_sec            
        };
        return await axios.post(Story_Board + "/sec", sec);
    },
   
    // 이메일 인증
    mailCode : async(mail) => {
        return await axios.get(Story_Board + `/mail/?mail=${mail}`);
    },

    // 이메일 번호 
    mailCodeck : async(mail, code) => {
        const check = {
            mail : mail,
            code : code
        }
        return await axios.post(Story_Board + `/verify`, check);
    }
};

export default AxiosFinal;