const num1_input=document.getElementById("num1");
const num2_input=document.getElementById("num2");
const m_button=document.getElementById("multiply");
const d_button=document.getElementById("division");
const res=document.getElementById('result');

m_button.addEventListener("click",function(){
    const num1=parseFloat(num1_input.value);
    const num2=parseFloat(num2_input.value);

    if(!isNaN(num1) && !isNaN(num2)){
        const r=num1*num2;
        res.textContent="The Result is:" + r;
    }
    else{
        res.textContent="Enter valid numbers";
    }
})
d_button.addEventListener("click",function(){
    const num1=parseFloat(num1_input.value);
    const num2=parseFloat(num2_input.value);

    if(!isNaN(num1) && !isNaN(num2)){
        const r=num1/num2;
        res.textContent="The Result is:" + r;
    }
    else if(num2==0){
        res.textContent="Second number is 0";
    }
    else{
        res.textContent="Enter valid numbers";
    }
})