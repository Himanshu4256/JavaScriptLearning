const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const para = document.querySelector("#rec");
const btn = document.querySelector("#btn");

const fetchRec = async (urldata)=> {
    console.log("getting data ...",urldata);
    let response = await fetch(urldata);
    //console.log(response);
    let data = await response.json();
    console.log(data[0]?.url,">>>>>>>>>.");
    // para.innerText = JSON.stringify(data, null, 2);
    let  formattedData = JSON.stringify(data, null, 2);

    btn.addEventListener("click",() => {
        para.innerText = formattedData
    })
    console.log('para>>>',para);
    
}

fetchRec(url);