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
    
    // // 전체 상품
    // shop : async() => {
    //     return await axios.get(Final_proj + `/product/items`);
    // },


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
        return await axios.post(Final_proj + "/product/upload", upLoad);
    },

    
    //어드민페이지 회원 전체조회
    customerManage : async() => {
        return await axios.get(Final_proj + `/admin/check`);
    },

    //어드민페이지 회원 선택 삭제
    customerDelete : async(userId) => {
        const deleteUser={
            userId : userId
        };
        return await axios.post(Final_proj + "/admin/deleteUser", deleteUser);
    },

     //어드민페이지 qna 전체조회
     qnaLoadManage : async() => {
        return await axios.get(Final_proj + `/admin/qnaLoad`);
    },

    //어드민페이지에 qna답변달기
    qnaUploadReply : async(qndid,statue,reply)=>{
        const qnaReplyUpLoad={
            qnaId : qndid,
            answerStatue : statue,
            qnareplay : reply
        };
        return await axios.post(Final_proj + "/admin/qnaUpload", qnaReplyUpLoad);
    },
       //어드민페이지 주문건 전체조회
       orderLoadManage : async() => {
        return await axios.get(Final_proj + `/admin/orderLoad`);
    },
    // 어드민페이지 주문건 수정
    orderUploadData : async(orderId,orderStatus,shipCode,shipCompany)=>{
        const orderUpLoadData={
            orderId : orderId,
            orderStatue : orderStatus,
            orderShipCode : shipCode,
            orderShipCompany : shipCompany,
        };
        return await axios.post(Final_proj + "/admin/orderUpLoad", orderUpLoadData);
    },        

    //회원 조회
    memberGet: async(userId) => {
        return await axios.get(Final_proj + `/auth/users?userId=${userId}`);
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
    return await axios.get(Final_proj + `/auth/check?email=${email}`);
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
    memberSec : async(userPwd) =>{
        const sec ={
            userPwd : userPwd            
        };
        return await axios.post(Final_proj + "/auth/sec", sec);
    },
   
    // 이메일 인증
    mailCode : async(email) => {
        return await axios.get(Final_proj + `/email/?email=${email}`);
    },

    // 이메일 인증 번호 
    mailCodeck : async(email, code) => {
        const check = {
            email : email,
            code : code
        }
        return await axios.post(Final_proj + `/verify`, check);
    },
    
    // 임시 비밀번호 (고치기)
    pwdReset : async(email, name) => {
        const reset = {
            email : email,
            name : name
        }
        return await axios.post(Final_proj + `/resetPwd`, reset);
    },
    //채팅

    //faq 업로드
    faqUpload : async(title, content) => {
        const upload = {
            faqTitle : title,
            faqContent : content,
        }
        return await axios.post(Final_proj + `/faq/uploadFaq`, upload);
    },
  
    // 회원 정보 수정 저장
    saveUserInfo : async (userId, userName, userPwd, userAddr, userPhone) =>{
        const userInfo = {
            userId : userId,
            userName : userName,
            userPwd : userPwd,
            userAddr : userAddr, 
            userPhone : userPhone
        }
        return await axios.post(Final_proj +"/auth/saveInfo", userInfo)
    },

    // SELL 상품
    sellitems : async() => {
        return await axios.get(Final_proj + `/product/sellitems`);
    },

    // 좋아요 Insert
    likeProduct : async(id, productId) => {
        const like = {
            id : id,
            productId : productId
        }
        return await axios.post(Final_proj + "/like/likeInsert", like);
    },

    // 좋아요 불러오기
    wishItem : async(id) => {
        return await axios.get(Final_proj + `/like/likeList?id=${id}`);
    }
};

export default AxiosFinal;