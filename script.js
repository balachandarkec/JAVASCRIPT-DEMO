

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


// Event Registration for pre loaded elements
btn.addEventListener('click',addItems);


// Add event listener for dynamic elements

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


// Demo Of Keypress Event 
input_ele.addEventListener('keypress',(event)=>{
console.log("typing......");
});

/* Demo Of Scroll Event

window.addEventListener('scroll',(e)=>{
 console.log("scrolling,,,,,,,,,,,,,,");
});
*/
window.onscroll=(e)=>{
  console.log("scrolling,,,,,,,,,,,,,,");};
 

/* On Page Load Events
   1.DOMContentLoaded
   2.load
   3. beforUnload
   4. unload
  
   */

document.addEventListener('DOMContentLoaded',()=>{
window.alert("DOMContentLoaded");
});

document.addEventListener('load',()=>{
  console.log("Load event-page completly loaded!");
});
document.addEventListener('beforeunload',(event)=>{

  window.alert("before unload");
  event.preventDefault();
  event.returnValue="";
});
document.addEventListener('unload',()=>{
   console.log("unloaded");
});


/* OnLoad Event
1 .load - Image Onloadand Script on load

Mouse Events :
 1. mousedown
 2. mouseup
 3. click
 4. dblclick
 5. mousremove
 6. mouseover
 7.mouseremove/mouseout
 8. mouseenter
 9. mouseleave

 keyboard Events :

 1. keydown
 2. keyup
 3. keypress

 Scroll Events

 focus events - blur  focus

 haschange - event


 



*/

