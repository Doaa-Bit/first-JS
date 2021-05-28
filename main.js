let menuItem =document.getElementById("menu").getElementsByTagName("li");
let headLine=document.getElementById("text");
let btn=document.getElementById("zar");
let myMenu = document.getElementById("menu");
let counter=1;

/*for(i=0;i<menuItem.length;i++){
    menuItem[i].addEventListener("click",selectItem);
}*/
 myMenu.addEventListener("click",selectItem)
function selectItem(n){
   if(n.target.nodeName=="LI"){
       headLine.innerHTML=n.target.innerHTML;
       for(i=0;i< myMenu.lenght ;i++){
           menuItem[i].classList.remove("selected");
       }
       n.target.classList.add("selscted");
   };
}

btn.addEventListener("click",newItem);
function newItem(){
    myMenu.innerHTML+="<li>New Line"+counter+"</li>";
    counter++;

}