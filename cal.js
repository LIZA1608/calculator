const inputE=document.querySelector('input')
const buttonE=document.querySelectorAll('button')
//to select all the button 
for(let button of buttonE){
    button.addEventListener('click',function(e){
      const text=e.target.innerText
      //target  show karta ki kis button per click hua hainn
    //   console.log(text)

    if(text==='C'){
        inputE.value=''
    }
    else if(text==='='){
        try{
            inputE.value=eval(inputE.value)
            // in eval it show the result of the input 
        }
        catch{
            console.log('Invalid')
        }
    }
  
    else if(text==='Back'){
        inputE.value=inputE.value.slice(0,-1)
        //slice cut the string and return the new string 
    }
    else{
        inputE.value+=text
    }
    })
}
