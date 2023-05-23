// https://api.telegram.org/bot5846016835:AAGWxrysm5XcDw_GEuS4OIc-GwWFQW7LU50/getUpdates
// let TOKEN ='5846016835:AAGWxrysm5XcDw_GEuS4OIc-GwWFQW7LU50'
// let CHAT_ID='5098180556'
// let URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`

// let tg = document.getElementById("tg")
// tg.addEventListener('submit',function(e) {
//     e.preventDefault()
//     let = message=`<b>заявка с сайта</b>\n`
//     message +=`<b>Отправитель :</b> ${this.name.value}\n`
//     message +=`<b>Номер :</b> ${this.number.value}\n`
//     message +=`<b>Почта :</b> ${this.email.value}\n`
//     console.log(message)
//     axios.post(URL_API,{
//         chat_id:CHAT_ID,
//         parse_mode: "html",
//         text:message
//     }).then((res) =>{
//         this.name.value=" "
//         this.number.value=" "
//         this.email.value=" "
//         success.innerHTML="Сообщения отправленно !"
//         success.style.display='block'
//     }).catch((err) => {
//         console.log(err)
//     }).finally(() =>{
//         console.log(Goooooooood)
//     })
// })



let TOKENN ='5846016835:AAGWxrysm5XcDw_GEuS4OIc-GwWFQW7LU50'
let CHAT_IDD='5098180556'
let URL_APIi = `https://api.telegram.org/bot${TOKEN}/sendDocument`

let tgg =document.getElementById("tgg")
let chat =document.getElementById("succes")

tg.addEventListener("submit",function(e){
    e.preventDefault()
    const formData= new FormData()
    formData.append("chat_id",CHAT_ID) 
    formData.append("document",this.document.files[0])
    axios.post(URL_API,formData,{
    headers:{
        'Content-Type':'multipart/form-data'
    }
}).then((res)=>{
    this.document.value=''
    succes.innerHTML=""
    succes.innerHTML="Сообщения отправленно !"
    succes.style.display='block'
    setTimeout(() => {
        succes.style.display='none'
    },3000)
 }) .catch((err) => {
    console.log(err)
 }).finaly( ()=>{
    console.log('good')
 })
})