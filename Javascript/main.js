const korzina_align=document.querySelector(".korzina_align")
const template=document.querySelector("template").content
const tovar_ul=document.querySelector(".tovars_ul")
const form=document.querySelector("form")
const input =document.querySelector(".search_input")
const select=document.querySelector(".select_filter")
const tovar_template=document.querySelector(".tovar_template").content
let tovarlar=object.splice(0,1)
const locals_tovars=getItem("tovars_bozor")
const korzina_ul=document.querySelector(".korzina_ul")
let shop_tovars=locals_tovars?JSON.parse(locals_tovars): []
const handleRenderNoteTovar=text=>{
    korzina_ul.innerHTML=null
    let h3=document.createElement("h3")
    h3.textContent=text
    korzina_ul.appendChild(h3)
}
const handleRenderTovar=arr=>{
    if(arr?.length>0){
        korzina_ul.innerHTML=null
        for(let i=0;i<arr.length;i++){
    let clone=tovar_template.cloneNode(true)
    let name=clone.querySelector("h3")
    name.textContent=arr[i].name
    let btn=clone.querySelector("button")
    btn.dataset.id=arr[i].name
    korzina_ul.appendChild(clone)
        }
        let button=document.createElement('button')
        button .classList .add("btn","btn-success","order_page_btn")
        button.textContent="sotib olish"
        korzina_ul.appendChild(button   )
    }else{
        handleRenderNoteTovar("Hali maxsulotlar xarid qilinmagan")
    }
}
window.addEventListener("click",event=>{
if(event.target.matches(".korzina_btn")){
    korzina_align.classList.toggle("korzina_align_active")
}else if(event.target.matches(".salom")){
    const id=event.target.dataset.id
// console.log(id);
for(let i=0;i<object.length;i++){
    if (object[i].name===id){
    if(!shop_tovars.includes(object[i])){
          shop_tovars.push(object[i])
          handleRenderTovar(shop_tovars)
          setItem("tovars_bozor",shop_tovars)
    console.log(shop_tovars);
                         }
                     }
               }
}else if(event.target.classList.contains("korzina_delet_btn")){
    let data_id = event.target.dataset.id 
    let filter=shop_tovars.filter(item => item.name !== data_id )
    handleRenderTovar(filter)
    setItem("tovars_bozor",filter)
}else if(event.target.matches(".order_page_btn")){
window.location.replace("file:///C:/Users/E-MaxPCShop/Desktop/bozor%20yakun/OrderPage/index.html")
}else{  
    korzina_align.classList.remove("korzina_align_active")  
}
})
handleRenderTovar(JSON.parse( getItem("tovars_bozor")))
const handleProductRender= (arr)=>{
    tovar_ul.innerHTML=null
for(let i=0;i<arr.length;i++){
let clone=template.cloneNode(true)
let img=clone.querySelector("img")
img.src=arr[i].bigPoster
let name=clone.querySelector("h3")
name.textContent=arr[i].name
let model=clone.querySelector("p strong")
model.textContent=arr[i].model
let price=clone.querySelector("h4")
price.textContent=arr[i].price + "$"
let btn=clone.querySelector(".salom")
btn.dataset.id=arr[i].name
tovar_ul.appendChild(clone)
}
}
handleProductRender(object)
const Errors=(text)=>{
    tovar_ul.innerHTML=null
    let li =document.createElement("li")
    let h1=document.createElement("h1")
    h1.appendChild(document.createTextNode(text))
    h1.classList.add("text-light","text-center")
    li.appendChild(h1)
    tovar_ul.appendChild(li)
}
let result=[]
const handleModel =(arr)=>{
for(let i=0; i<arr.length;i++){
if(!result.includes(arr[i].model)){
    result=[...result, arr[i].model]
}
}
return result
}
const handleCreateOptions=()=>{
    let natija=handleModel(object)
    for(let i=0; i<natija.length;i++){
        let option=document.createElement("option")
        option.value=natija[i]
        option.textContent=natija[i]
        select.appendChild( option)
    }
}
handleCreateOptions()
handleModel(object)
const handleSub=event=>{
    event.preventDefault()
    let filter=[]
    let rejex=new RegExp(input.value.trim(),"gi")
    if(select.value==="all"){
        filter=object
    }else{
        filter=object.filter((item)=>item.model===select.value)
    }
    if(input.value !=="all"){
        filter=filter.filter((item)=>item.name.match(rejex))
    }else{{
        filter     
    } } 
    if(filter.length>=1){
        handleProductRender(filter)
    }else{
        Errors("mahsulot mavjud emas")
    }
}
form,addEventListener("submit",handleSub)


