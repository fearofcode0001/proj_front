import axios from "axios";
const Final_proj = "http://localhost:8111";

const AxiosFinal = {
     // 로그인
     memberLogin: async(email, pw) => {    
        const login = {
            email : email,
            pwd : pw 
        };
        return await axios.post(Final_proj + "/auth/login", login);
    },

    // 전체 상품
    shop : async() => {
        return await axios.get(Final_proj + `/product/items`);
    },


    //아이템 업로드
    productUpload : async(title,price,color,size,category,productImg,content)=>{
        const upLoad={
            productName:title,
            productPrice:price,
            productColor:color,
            productSize:size,
            productCategory:category,
            productMainImg:productImg,
            productDetail:content
        };
        return await axios.post(Final_proj + "/adminItem/upload", upLoad);
    },

    
    //어드민페이지 회원 전체조회
    customerManage : async(id) => {
        return await axios.get(Final_proj + `/admin/check?id=${id}`);
    },


    //회원 조회
    memberGet: async(id) => {
        return await axios.get(Final_proj + `/member?name=${id}`);
    },

    // 아이디 찾기 
    searchId: async (name, email) => {
            const searchId = {
                name : name,
                email : email
            };
        return await axios.post(Final_proj+ "/searchId", searchId);
      },


    // 비밀번호 찾기 
    searchPw: async (name, email, id) => {
            const searchPw = {
                name : name,
                email : email,
                id : id

            };
        return await axios.post(Final_proj+ "/searchPw", searchPw);
     },


    // 회원 가입 여부 확인
    memberRegCheck : async(email) => {
        return await axios.get(Final_proj + `/check?id=${email}`);
    },

    // 회원 가입
    memberReg: async(name, email, pwd, addr, phone) => {
        const member = {
            userName: name,
            userEmail: email,
            userPwd: pwd,
            userAddr: addr,
            userPhone: phone,
        };
        return await axios.post(Final_proj + "/auth/signup", member);
    },

    //탈퇴
    memberSec : async(email_sec, pwd_sec) =>{
        const sec ={
            id : email_sec,
            pwd : pwd_sec            
        };
        return await axios.post(Final_proj + "/sec", sec);
    },
   
    // 이메일 인증
    mailCode : async(mail) => {
        return await axios.get(Final_proj + `/mail/?mail=${mail}`);
    },

    // 이메일 인증 번호 
    mailCodeck : async(mail, code) => {
        const check = {
            mail : mail,
            code : code
        }
        return await axios.post(Final_proj + `/verify`, check);
    }
    //채팅
    
};

export default AxiosFinal;