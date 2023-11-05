let display = document.querySelector('input')
        let buttons = document.querySelectorAll('button');
        let answer = ""

        for(i of buttons){
            i.addEventListener('click',(e)=>{

             buttonvalue = e.target.innerText;
             console.log(buttonvalue);

             if (buttonvalue == "AC"){
                answer = "";
                display.value = answer 
             }
             else if(buttonvalue == "=") {
               display.value = eval(answer);           
            }
            else if(buttonvalue == "DEL"){
                
                answer = answer.substring(0, answer.length-1) 
                display.value = answer;
            }            
            else{
                answer += buttonvalue
                display.value = answer;
            }
            
             })}