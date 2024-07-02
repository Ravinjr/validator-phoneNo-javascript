function validate(){
    let number=document.getElementById("num").value;
   
    
    let numLength=number.length;
    console.log(numLength);
    let firstNums=number.substr(0,2)//2 numbers get from begining
    let lastNums=number.substr(numLength-9,9)//nine numbers get from 1st location
    let num;


    if(numLength<9){
        alert("numbers missing");
        document.getElementById("msg").innerHTML="invalid number";
    }
    else if(numLength==9){
        alert("validation successful");
        num ="94"+number;
        document.getElementById("msg").innerHTML=num;
    }
    else if(numLength==10){
        alert("validation successful");
        num ="94"+lastNums;
        document.getElementById("msg").innerHTML=num;
    }
    else if(numLength>11){
        alert("validation unsuccessful,please check");
        document.getElementById("msg").innerHTML="invalid number";
    }
    else if(numLength==11 && firstNums!=94){
        alert("invalid number!!! please check");
        document.getElementById("msg").innerHTML="invalid number";
    }
    else if(numLength==11 && firstNums==94){
        alert("validation successful");
        num =number;
        document.getElementById("msg").innerHTML=num;
    }
}