
window.addEventListener("DOMContentLoaded" , () =>{
    const form = document.querySelector("form")
    let user_locals = getItem("user_shops") 
    const user = user_locals ? JSON.parse(user_locals): []
    const inputs = form.querySelectorAll("input")
    const name_text = document.querySelector(".name_text")
    const familya_text = document.querySelector(".familya_text")
    const email_text = document.querySelector(".email_text")
    const parol_text = document.querySelector(".parol_text")
    const token_array=[1,2,3,4,5,6,7,8,9,10,"a","s","d","f","g","h","j","k","l","z","x",'c','c',"v","b","n","m","q","w","e","r",
"t","u","i","o","p",1,2,3,4,5,6,7,8,9,10,"a","s","d","f","g","h","j","k","l","z","x",'c','c',"v","b","n","m","q","w","e","r",
"t","u","i","o","p",
]

    const handleSub = event => {
        event.preventDefault()
        const data = new FormData(event.target)
        let user_array=[]
        console.log(user_array)
        let user={
            name: data.get("name"),
            lastname:data.get("lastname"),
            email:data.get("email"),
           passwor :    data.get("password")
        }
    if(user.name!==null&&user.lastname!==null&&user.email!==null&&user.password!==null){
  
        let token=''
for(let i=0; i<token_array.length;i++){
    token+=token_array[parseInt(Math.random()*token_array.length)]
}
user={...user,token}
user_array=[...user_array,user]
window.location.replace("file:///C:/Users/E-MaxPCShop/Desktop/bozor%20yakun/Main%20Page/index.html")
setItem("user_shops",user_array)
    }
    }   
    form.addEventListener("submit", handleSub)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const handleblur = event => {
        switch(event.target.id){
            case "name":{
                if(event.target.value.length > 1){
                    return false
                }else{
                name_text.textContent   ="ismni to'ldirish majburiy"
                name_text.classList.add("text-danger")
                }
            }break;
                    case "lastname":{
                        if(event.target.value.length > 1){
                            return false
                        }else{
                        familya_text.textContent   ="familyani to'ldirish majburiy"
                        familya_text.classList.add("text-danger")
                        }
                    }break;
                    case "email":{
                        if(re.test(event.target.value)===true){
                            return false
                        }else{
                        email_text.textContent   ="emailni to'ldirish majburiy"
                        email_text.classList.add("text-danger")
                        }
                    }break;
                case "password":{
                    if(event.target.value.length > 3 && event.target.value.length<12){
                        return false
                    }else{
                    parol_text.textContent   ="parol 3dan katta va 12 dan kichik bo'lsin "
                    parol_text.classList.add("text-danger")
                } 
            }
        }
    }
    const handleKey = event => {
        switch(event.target.id){
            case "name":{
                if(event.target.value.length > 1){
                    name_text.textContent="ism"
                    if(name_text.getAttribute("class").includes("text-danger")){
                        name_text.classList.remove("text-danger")
                    }
                }else{
                name_text.textContent   ="ismni to'ldirish majburiy"
                name_text.classList.add("text-danger")
                }
            }break;
              case "lastname":{
                if(event.target.value.length > 1){
                    familya_text.textContent="familya"
                    if(familya_text.getAttribute("class").includes("text-danger")){
                        familya_text.classList.remove("text-danger")
                    }
                }else{
                familya_text.textContent   ="familyani to'ldirish majburiy"
                familya_text.classList.add("text-danger")
                }
            }break;
            case "email":{
                if(re.test(event.target.value)===true){
                    email_text.textContent   ="email"
                    if(email_text.getAttribute("class").includes("text-danger")){
                    email_text.classList.remove("text-danger")
                    }
                }else{
                email_text.textContent   ="emailni to'ldirish majburiy"
                email_text.classList.add("text-danger")
                }
            }break;
            case "password":{
                if(event.target.value.length > 3 && event.target.value.length<12){
                    parol_text.textContent="parol"
                    if(parol_text.getAttribute("class").includes("text-danger")){
                        parol_text.classList.remove("text-danger")
                    }
                }else{
                parol_text.textContent   ="parol 3dan katta va 12 dan kichik bo'lsin "
                parol_text.classList.add("text-danger")
            } 
        }
        }
    }
    inputs.forEach((item) => {
        item.addEventListener("blur", handleblur)
        item.addEventListener("keyup", handleKey)
    })
})
