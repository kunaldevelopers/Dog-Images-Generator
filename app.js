let url = "https://dog.ceo/api/breeds/image/random";
let reset = document.getElementById("reset");

let btn = document.querySelector("button");
let allImg = [];

let refreshPage = function(){
    location.reload();
}


btn.addEventListener("click", async ()=>{
     
    let n = prompt("Enter Number!!");
    if(isNaN(n)){
        alert("Invalid input, Please Try Again!!");
    }
    for(let i =1; i<=n; i++){
        let link = await randomDog();
        allImg.push(link);
        let img2 = document.createElement("img");
        img2.setAttribute("src", link);
        document.body.appendChild(img2);
        console.log(`Image ${i} Generated Successfully!!`);
    }
    
    reset.addEventListener("click", ()=>{
        refreshPage();
        console.log("Page Refresed Successfully!!");
    });
})

async function randomDog(){
    try {
        let res = await axios.get(url);
        // console.log(res.data.message);
        return res.data.message;
    } catch (err) {
        console.log("Error is : ", err);
    }
}
