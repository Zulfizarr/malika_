window.addEventListener("DOMContentLoaded",()=>{
    let user=JSON.parse(getItem("user_shops"))
    let order_product=JSON.parse(getItem("tovars_bozor"))
    const username=document.querySelector(".user_name")
    let price=document.querySelector(".user_price")
    const template=document.querySelector("template").content
    const tovar_ul=document.querySelector(".tovars_ul")
    let form=document.querySelector("form")
    const modal_overlay=document.querySelector(".modal_overlay")
    const success_text_modal=document.querySelector(".order_success_text")
    let success_text="haridingiz uchun raxmat"
    let idx=0
    ;(function(){
username.textContent=`${user[0].name}${user[0].lastname}`
    }())
    const handleRecurtionPrice=arr=>{
        idx=0
            for(i=0;i<arr.length;i++){
            if(arr[i].price){
                idx+=arr[i].price
            }
            }
            price.textContent=idx +"$"
    }
    handleRecurtionPrice(order_product)
    const handleProductRender= (arr)=>{
        tovar_ul.innerHTML=null
    for(let i=0;i<arr.length;i++){
    let clone=template.cloneNode(true)
    let img=clone.querySelector("img")
    img.src=arr[i].bigPoster
    let name=clone.querySelector("h3")
    let li=clone.querySelector("li")
    name.textContent=arr[i].name
    let model=clone.querySelector("p strong")
    model.textContent=arr[i].model
    let price=clone.querySelector("h4")
    price.textContent=arr[i].price + "$"
    let btn=clone.querySelector(".salom")
    btn.dataset.id=arr[i].name
    let btn_delet=document.createElement("button")
    btn_delet.classList.add("btn","btn-danger","korzina_delet")
    btn_delet.dataset.id=arr[i].name
    btn.remove()
    btn_delet.textContent= `${arr[i].name} ni o'chirish`
    li.appendChild(btn_delet)
    
    tovar_ul.appendChild(clone)
    }
    }
    handleProductRender(order_product)
    window.addEventListener("click",event=>{
        if(event.target.matches(".korzina_delet")){
            let data_id = event.target.dataset.id 
            for(let i=0;i<order_product.length;i++){
                if(order_product[i].name=== data_id){
                     order_product.splice(i,1)
                }
            }
            setItem("tovars_bozor",order_product)
            handleRecurtionPrice(order_product)
            handleProductRender(order_product   )
        }
    })
    const handleSub=event=>{
        event.preventDefault()
        modal_overlay.classList.add("flex")
        success_text_modal.textContent=success_text
        setTimeout (()=>{
         modal_overlay.classList.remove()
         window.location.replace("file:///C:/Users/E-MaxPCShop/Desktop/bozor%20yakun/Register/index.html?")
            
        },1000)
    }
    form.addEventListener("submit",handleSub)
})
