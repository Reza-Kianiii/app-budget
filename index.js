
let btn_Send_amount=document.querySelector('#Send-amount');
let input_total_budget=document.querySelector('.output-container  #amount');
let total_amount=document.querySelector('#total-amount');
let Bedget_error=document.querySelector('#Bedget-error');
let product_title=document.querySelector('#product-title');
let product_price=document.querySelector('#product-price');

let check_amount=document.querySelector('#check-amount');

let product_title_error=document.querySelector('#product-title-error');
let Expenditure_value=document.querySelector('#Expenditure-value');
let balance_value=document.querySelector('#balance-value');
let list_container_list=document.querySelector('.list .list-container');

let amount=document.querySelector('#amount');
let indexitems=0
btn_Send_amount.addEventListener('click',(e)=>{
    
    if(total_amount.value=='' || total_amount.value<0 ){
        Bedget_error.classList.remove('hide')
    }else{
        Bedget_error.classList.add('hide');
        input_total_budget.textContent=e.target.closest('div').querySelector('input').value;
        balance_value.textContent  =  opeartionsume(input_total_budget.textContent,Expenditure_value.textContent);
        total_amount.value=''
    }
    
});


check_amount.addEventListener('click',()=>{
    if(product_price.value<0  || product_title.value==''  ){
        product_title_error.classList.remove('hide')
    }else{
        product_title_error.classList.add('hide');

        Expenditure_value.textContent= opeartionsume(product_price.value,Expenditure_value.textContent);
        balance_value.textContent= operationminus(amount.textContent,Expenditure_value.textContent)
        Generatelist({title:product_title.value,price:product_price.value})
        product_price.value='';
        product_title.value='';
        indexitems++;
    }
})


function opeartionsume(one,two){
    let resulte=Number(one)+Number(two);
    return resulte;
}



function operationminus(one,two){
      let resulte2=  Number(one)-Number(two);
      return resulte2
}


function Generatelist(value){
list_container_list.innerHTML+=`<div class="list_item">
<span>${value.title}</span>
<span>${value.price}</span>
<div class="Container-icon">
    <i class="fa-sharp fa-solid fa-pen-to-square" onclick="edit(event)"></i>
    <i class="fa-sharp fa-solid fa-trash-can" onclick="Managedelet(event,${value.price})"></i>
</div>
</div>`;

}



function edit(e){

  let getspan =  GetElements(e.target.parentElement.parentElement,'span');
  let getinput=GetElements(document.querySelector('.user-amount-container'), 'input');


  let value;

  Array.from(getspan).forEach((item,index)=>{
      Array.from(getinput).forEach((iteminput,indexinput)=>{
          if(index===indexinput){
              iteminput.value=item.textContent;
              if(iteminput.id=='product-price'){
            Expenditure_value.textContent =  operationminus( Expenditure_value.textContent,iteminput.value ); 
            balance_value.textContent=operationminus(amount.textContent,Expenditure_value.textContent)       
      
      
        };



            }
      })
  })

  Delete(e);


}




function GetElements(value,elements){

   let spans= value.querySelectorAll(elements);
   return spans

}



function Managedelet(value,prive){
    Expenditure_value.textContent =  operationminus( Expenditure_value.textContent,prive ); 
    balance_value.textContent=operationminus(amount.textContent,Expenditure_value.textContent)    ;   

    Delete(value)
}





function Delete(Elements,){

console.log(Elements.target.parentElement.parentElement.remove())




}