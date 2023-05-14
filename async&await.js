var h1=document.createElement("h1");
h1 .innerHTML="Covid 19 Tracker";
h1.style.textAlign="center";
h1.style.marginTop="30px";

var div=document.createElement("div");
div.style.margin="20px";
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.style.width="30%";
input.id="country";
input.setAttribute("placeholder","Enter the country name");

var linebr=document.createElement("br");
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginTop="10px"
button.addEventListener("click",bar);

div.append(input,linebr,button);
document.body.append(h1,div);



async function bar(){
    
        let inptext=document.getElementById("country").value;
        let url=`https://api.covid19api.com/dayone/country/${inptext}`;
        let res=await fetch(url);
        let res1= await res.json();
        let index=res1.length-1;
        console.log(res1[index].Active);
        var div1=document.createElement("div");
        div1.style.marginTop="40px";
        div1.style.textAlign="center";
        div1.innerHTML= `The Total Num Active: ${res1[index].Active}<br>Total Num of Deaths: ${res1[index].Deaths}
        <br>Total Num of recovered cases: ${res1[index].Recovered}`;
        document.body.append(div1)
    }
    