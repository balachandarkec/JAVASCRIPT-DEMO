

let input_ele=document.querySelector("input");

let list_ele=document.querySelector("#list-item");
var tmp_element=null;

let btn=document.querySelector("button");

let addItems=function(){
    tmp_element=document.createElement('li');
     tmp_element.setAttribute('class','item');
    tmp_element.innerText=input_ele.value;
    list_ele.appendChild(tmp_element);
    input_ele.value="";
};


// Event Registration
btn.addEventListener('click',addItems);

document.addEventListener('click',function(e){
  if(e.target.className=='item') {
      if(e.target.classList.contains('completed')){
      e.target.classList.remove('completed');
    }else{
       e.target.classList.add('completed'); 
     }
    console.log(e.target.className);
  } 

});



