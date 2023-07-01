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
    //어드민페이지 head상태창 신규조회
    newOrderCheck: async(orderStatus) => {    
        const newOrder = {
            orderStatus : orderStatus
        };
        return await axios.post(Final_proj + "/adminPage/newOrderList", newOrder);
    },
    shipOrderCheck: async(orderStatus) => {    
        const shipOrder = {
            orderStatus : orderStatus
        };
        return await axios.post(Final_proj + "/adminPage/shipOrderList", shipOrder);
    },
    newQnaCheck: async(qnaStatus) => {    
        const newQna = {
            qnaStatus : qnaStatus
        };
        return await axios.post(Final_proj + "/adminPage/qnaLoadList", newQna);
    },
    //아이템 업로드
    productUpload : async(title,price,color,size,category,content,imgFst,imgSnd,imgDetail)=>{
        const upLoad={
            productName:title,
            productPrice:price,
            productColor:color,
            productSize:size,
            productCategory:category,
            productDetail:content,
            productImgFst:imgFst,
            productImgSnd:imgSnd,
            productImgDetail:imgDetail
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
    qnaUploadReply : async(qnaId,statue,reply)=>{
        const qnaReplyUpLoad={
            qnaId : qnaId,
            qnaStatue : statue,
            qnaReplay : reply
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
    //어드민 페이지 상품 Fst이미지 수정
    productChangeImgFst : async(productId,fstUrl)=>{
        const changeImgFst={
            productId : productId,
            productImgFst : fstUrl
        };
        return await axios.post(Final_proj + "/product/changImgFst", changeImgFst);
    },
     //어드민 페이지 상품 Snd이미지 수정
    productChangeImgSnd : async(productId,sndUrl)=>{
        const changeImgSnd={
            productId : productId,
            productImgSnd : sndUrl
        };
        return await axios.post(Final_proj + "/product/changImgSnd", changeImgSnd);
    },
     //어드민 페이지 상품 Detail이미지 수정
    productChangeImgDetail:async(productId,content,DetailUrl)=>{
        const changeImgDetail={
            productId : productId,
            productDetail:content,
            productImgDetail : DetailUrl
        };
        return await axios.post(Final_proj + "/product/changImgDetail", changeImgDetail);
     },
     //어드민 페이지 상품 Detail 수량 수정
    productChangeData:async(productId,productStock,productSellStatus,productName)=>{
        const changeDetail={
            productId : productId,
            productStock:productStock,
            productSellStatus:productSellStatus,
            productName:productName
        };
        return await axios.post(Final_proj + "/product/changDetail", changeDetail);
    },
    //7일치 데이터 로드
    onLoadOrderDate:async(date)=>{
        const day={orderDate : date};
        return await axios.post(Final_proj + "/admin/findOrderDay", day);
    },
    // 어드민페이지 채팅 리스트 가져오기
    onLoadChatList:async()=>{
        return await axios.get(Final_proj + `/admin/chatList`);
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

    //faq List 가져오기
    faqList : async() => {
        return await axios.get(Final_proj + `/faq/faqList`);
    },

     // faq삭제
    faqDelete : async(faqId) => {
        const deleteFaq = {
            faqId : faqId
        }
        return await axios.post(Final_proj + `/faq/deleteFaq`, deleteFaq);
    },

    // faq 수정
    faqEdit : async(faqId,faqTitle, faqContent) => {
        const editFaq = {
            faqId : faqId,
            faqTitle : faqTitle,
            faqContent : faqContent
        }
        return await axios.post(Final_proj + `/faq/editFaq`, editFaq);
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

    // 좋아요 누른 상품목록 불러오기
    wishItem : async(id) => {
        return await axios.get(Final_proj + `/like/likeList?id=${id}`);
    },

    // 좋아요 삭제
    deleteLikeProduct : async(id, productId) => {
        const dislike = {
            id : id,
            productId : productId
        }
        return await axios.post(Final_proj + "/like/likeDelete", dislike)
    },

    // 상품 좋아요 표시
    viewHeart : async(id, productId) => {
        const heart = {
            id : id,
            productId : productId
        }
        return await axios.post(Final_proj + "/like/Heart", heart);
    },

    // qna 추가
    qnaUpdate : async(productId, userEmail, qnaTitle, qnaContent) => {
        const qna = {
            productId : productId,
            userEmail : userEmail,
            qnaTitle : qnaTitle,
            qnaContent : qnaContent
        }
        return await axios.post(Final_proj + "/qna/uploadQna", qna);
    },

    // user QnA 가져오기
    memQnaList : async() => {
        return await axios.get(Final_proj + `/qna/qnaList`);
    }
};

export default AxiosFinal;