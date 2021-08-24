

 var mylist = document.getElementsByTagName("LI");
 var i;
 for (i = 0; i < mylist.length; i++) {
   var span = document.createElement("SPAN");
   var txt = document.createTextNode("x");
   span.className = "close";
   span.appendChild(txt);
 mylist[i].appendChild(span);
 
 
 }
 
 var close = document.getElementsByClassName("close");
 var i;
 for (i = 0; i < close.length; i++) {
   close[i].onclick = function() {
     var div = this.parentElement;
     div.style.display = "none";
   }
 }
 
 
 function newElement() {
   var li = document.createElement("li");
   var inputValue = document.getElementById("myInput").value;
   let check = document.createElement("input");
   let label = document.createElement("label");
 
   check.type="checkbox";
   label.innerHTML= inputValue;
   li.append(check,label);
 
    if (inputValue === '') {
     alert("You must write something!");
   } else {
     document.getElementById("myUL").appendChild(li);
   }
   document.getElementById("myInput").value = "";
 
   var span = document.createElement("SPAN");
   var txt = document.createTextNode("x");
   span.className = "close";
   span.appendChild(txt);
 
   li.appendChild(span);
 
   for (i = 0; i < close.length; i++) {
     close[i].onclick = function() {
       var div = this.parentElement;
       div.style.display = "none";
       
 
     }
 
   }
 
 }
 function clearElement(){
   let clear = document.getElementById("clear")
   clear.addEventListener('click' , function(){
     document.getElementById("myUL").remove()
   })
 }