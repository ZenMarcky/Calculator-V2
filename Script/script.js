function convert(){
    let value = document.querySelector("#inputer").value;
    let selectVal = document.querySelector("#selector1").value;
    let selectVal2 = document.querySelector("#selector2").value;

let answer = 0;
  
    switch(true){
        case (value == false):
            alert("Please Input A Number");
            break;
        case (selectVal == false):
            alert("Invalid Input");
            break;
            case (selectVal2 == false):
                alert("Invalid Input");
                break;
                default:
    if(selectVal === "mm"){
        if(selectVal2 === "mm"){
        answer += value * 1;
        }
       else if(selectVal2 === "cm"){
            answer += value * 0.1;
            }
            else {
                answer += value * 0.001;
            }
    }
    else if(selectVal === "cm"){
        if(selectVal2 === "mm"){
            answer += value * 10;
            }
           else if(selectVal2 === "cm"){
                answer += value * 1;
                }
                else {
                    answer += value * 0.01;
                }
    }
    else if(selectVal === "m"){
        if(selectVal2 === "mm"){
            answer += value * 1000;
            }
           else if(selectVal2 === "cm"){
                answer += value * 100;
                }
                else {
                    answer += value * 1;
                }
    }
    else if(selectVal === "km"){
        if(selectVal2 === "mm"){
            answer += value * 1000000;
            }
           else if(selectVal2 === "cm"){
                answer += value * 	100000;
                }
                else {
                    answer += value * 1000;
                }
    }
    else if(selectVal === "in"){
        if(selectVal2 === "mm"){
            answer += value * 25.4;
            }
           else if(selectVal2 === "cm"){
                answer += value * 	2.54;
                }
                else {
                    answer += value * 	0.0254;
                }
    }
    else if(selectVal === "ft"){
        if(selectVal2 === "mm"){
            answer += value * 304.8;
            }
           else if(selectVal2 === "cm"){
                answer += value *30.48;
                }
                else {
                    answer += value * 0.3048;
                }
    }
    else if(selectVal === "yd"){
        if(selectVal2 === "mm"){
            answer += value * 914.4;
            }
           else if(selectVal2 === "cm"){
                answer += value *91.44;
                }
                else {
                    answer += value * 	0.9144;
                }
    }
    else if(selectVal === "mi"){
        if(selectVal2 === "mm"){
            answer += value * 1609344;
            }
           else if(selectVal2 === "cm"){
                answer += value *	160934;
                }
                else {
                    answer += value * 		1609.3	;
                }
    }
    else if(selectVal === "nmi"){
        if(selectVal2 === "mm"){
            answer += value * 1852000	;
            }
           else if(selectVal2 === "cm"){
                answer += value *	185200;
                }
                else {
                    answer += value * 			1852;
                }
    }

    document.querySelector("#answer").style.color = "Blue";
   document.querySelector("#answer").innerHTML = "Answer is : "  + answer;

    };


}