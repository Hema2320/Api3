const url="https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
let btn=document.getElementById("btn");
let data1=document.getElementById("data")
btn.addEventListener("click", async function(){
try
{
    let res= await fetch(url);
    let obj=await res.json();
    console.log(obj);
    obj.forEach(function (t1) {

       //to print last data
       console.log(`Name:${t1.name}`);
        console.log(`Capital:${t1.capital}`);
    
        data1.innerHTML=`<div>Country name with Z letter :${t1.name}</div>
        <div>Captial of ${t1.name} is ${t1.capital}</div>`

    })
}
catch(err)
{
    document.write("Error");
}  
  
});