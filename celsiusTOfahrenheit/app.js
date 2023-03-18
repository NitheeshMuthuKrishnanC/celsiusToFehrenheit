document.getElementById("submitbutton").onclick=function()
{
    let num;
    if(document.getElementById("fButton").checked)
    {
        num=document.getElementById("iText").value;
        num=Number(num);
        num=toCEL(num);
        document.getElementById("output").innerHTML= num + "°C";
    }
   else if (document.getElementById("cButton").checked)
   {
    num=document.getElementById("iText").value;
    num=Number(num);
    num=toFahrenheit(num);
    document.getElementById("output").innerHTML= num + "°F";
   }
   /* else if (null)
   {
    document.getElementById("output").innerHTML="Select any value";
   } */
}
function toCEL(num){
    return num = (num - 32)* 5/9;
}
function toFahrenheit(num){
    return  num = (num * 9/5)+32;
}