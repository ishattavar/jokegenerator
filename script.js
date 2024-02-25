const btnEl=document.getElementById("btn");
const jokeEl=document.getElementById("joke");
const apiKey="+htyv3gXtzrHSZB8VwGUAQ==cShmLhve05a9rkOP";
const options= {
    method:"GET",headers:{
        "X-Api-Key":apiKey,
    },
};
const apiURL="https://api.api-ninjas.com/v1/jokes?limit=1";
async function getJoke(){
    try {
        jokeEl.innerText="updating....";
    btnEl.disabled=true;
    btnEl.innerText="Loading....";
    const response= await fetch(apiURL,options);
    const data= await response.json();
    btnEl.disabled=false;
    btnEl.innerText="tell me a joke";
   jokeEl.innerText=data[0].joke;
        
    } catch (error) {
        jokeEl.innerText="An Error  Happen ,Try again";
        btnEl.disabled=false;
        btnEl.innerText="tell me a joke";
        console.log(error);
    }
    
    
}

btnEl.addEventListener("click",getJoke);