
let No1=0;
let Calculation="";

function nums(digit){
    document.getElementById("screen").value+=digit;

}

function operations(sign){
    
    if (sign=="C"){
        document.getElementById("screen").value="";
    }
    if(sign=="+" || sign=="-" || sign=="x" || sign=="/"){
        No1=parseInt(document.getElementById("screen").value);
        Calculation=sign;
            document.getElementById("screen").value="";
     
    }
    if(sign=="="){
   
        
        if(Calculation=="+"){
        let result=parseInt(document.getElementById("screen").value) + No1;
        document.getElementById("screen").value=result;
        }
        if(Calculation=="-"){
        let result=No1-parseInt(document.getElementById("screen").value);
        document.getElementById("screen").value=result;
        }
        if(Calculation=="x"){
        let result=parseInt(document.getElementById("screen").value) * No1;
        document.getElementById("screen").value=result;
        }
        if(Calculation=="/"){
        let result=No1/ parseInt(document.getElementById("screen").value);
        document.getElementById("screen").value=result;
        }
    }
}