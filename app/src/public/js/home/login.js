
const id=document.querySelector("#id");
const psword=document.querySelector("#psword");
const loginBtn=document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){
    //console.log("AA");
    const req={
        id: id.value,
        psword: psword.value,
    };
    fetch("/login",{
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
             alert("login failed");
         }
      })
      .catch((err)=>{
          console.log("로그인 중 에러발생");
      });
};