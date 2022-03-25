
const id=document.querySelector("#id");
const name=document.querySelector("#name");
const psword=document.querySelector("#psword");
const confirmPsword=document.querySelector("#confirm-psword");
const registerBtn=document.querySelector("#button");

registerBtn.addEventListener("click",register);
function register(){
    //console.log("AA");
    const req={
        id: id.value,
        name: name.value,
        psword: psword.value,
        confirmPsword: confirmPsword.value,
    };
    console.log(req);
    fetch("/register",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(req),
    }).then((res)=>res.json())
      .then((res)=>{
         if(res.success){
             location.href="/";
         } 
         else{
             alert(res.msg);
         }
      })
      .catch((err)=>{
          console.log("회원가입 중 에러발생");
      });
};