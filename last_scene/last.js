var last_txt = ['ซื้อเยอะ ของล้นตู้', 'ทำไงกันดี'];
frame_index = 1;
function next() {
  frame_index++;
  
  switch (frame_index) {
    case 2:
      var last_textElement = document.getElementById('txt');
      last_textElement.style.opacity = '0';

      setTimeout(function() {
        last_textElement.innerHTML = last_txt[1] ;
        last_textElement.style.opacity = '1';
    
      }, 500);
      break;
    case 3:
        changeshelfImg(frame_index-1)
      break;
    case 4:
       changeshelfImg(frame_index-1)
      break;
    case 5:
       changeshelfImg(frame_index-1)
      break;
    case 6:
       changeshelfImg(frame_index-1)
      break;
    case 7:
       changefridgeImg(2)
      break;
    case 8:
       changefridgeImg(3)
      break;
    case 9:
      changefridgeImg(4)
      break;
    case 10:
       window.location = "before_end.html";
      break;
    case 11:

      break;
   
  }
  
}
function changeshelfImg(index){
  var shelf = document.getElementById("shelf-background"); 
 
  setTimeout(function() {
    shelf.style.backgroundImage = "url('img_last/Organize-0"+index+".png')";
   

  }, 100);

}
function changefridgeImg(index){
  var fridge = document.getElementById("unlock_fridge"); 
   fridge.style.opacity = '0';
 
  setTimeout(function() {
     fridge.src = "img_last/Refrigerator (organize in)-"+index+".png"
    fridge.style.opacity = '1';

  }, 100);
}