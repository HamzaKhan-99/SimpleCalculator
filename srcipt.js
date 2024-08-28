const output=document.querySelector("#output")

function btnClick(value){
    console.log("btn is clicking");
    console.log(value);
    output.value+=value;
}
function clearInput(){
    output.value='';
}
function backSpace(){
    output.value=output.value.substr(0,output.value.length-1);
}
function equal(){
    output.value=eval(output.value);
}