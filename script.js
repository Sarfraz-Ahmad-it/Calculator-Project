let display = document.getElementById ('inputBox');
console.log(display);
let button = document.querySelectorAll('button');
console.log(button);
buttonArray = Array.from(button);
console.log(buttonArray);
let string = '';

buttonArray.forEach(function(btn) {
    
    
    btn.addEventListener('click', function(event){
        let btnText = event.target.innerHTML;
        if(btnText == 'Del'){
            string = string.substring(0, string.length-1);
            display.value = string;

        }else if(btnText == 'AC'){
            string = '';
            display.value = string;
        }else if(btnText == '='){
            string = eval(string);
            display.value = string;
        }
        else {

            if (/[\+\-\*\%\/]/.test(string.slice(-1)) && /[\+\-\*\%\/]/.test(btnText)) {
                string = string.slice(0, -1); 
            }
            string += btnText;
            display.value = string;
        }
 

    });
});
