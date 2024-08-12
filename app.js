let btn=document.querySelector("#cat");
let h3=document.querySelector("#Catf");
let btn2=document.querySelector("#dog");
let img=document.querySelector("#dogi");
let url="https://catfact.ninja/fact"
let url2="https://dog.ceo/api/breeds/image/random";
/*One Way of doing it*/
// btn.addEventListener("click",()=>{
//     let url="https://catfact.ninja/fact";
//     let fact;
//      async function func(){
//         fact=await axios.get(url);
//         console.log(fact.data.fact);
//         h3.innerText=fact.data.fact;
//      }
//      func();
   
// })
btn.addEventListener("click",async()=>{
    let data=await funfact();
    h3.innerText=data;
})
async function funfact(){
    try{
        let res= await axios.get(url);
        return (res.data.fact);
    }
    catch(er){
        return("Error has ocuured",er);
    }
}
btn2.addEventListener("click",async ()=>{
    let link=await dogi();
    img.src=`${link}`;
})
async function dogi(){
    try{
        let link=await axios.get(url2);
        return(link.data.message);
    }
    catch(er){
        return("Error has occured",er);
    }
}