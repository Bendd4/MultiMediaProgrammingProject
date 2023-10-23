var last_txt = ['ซื้อเยอะ ของล้นตู้', 'ทำไงกันดี'];
frame_index = 1;
function next() {
  frame_index++;
  switch (frame_index) {
    case 2:
      document.getElementById('txt-container').style.opacity = "100%";
      break;
    case 3:
      var last_textElement = document.getElementById('txt');
      last_textElement.style.opacity = '0';
      
      setTimeout(function() {
        last_textElement.innerHTML = last_txt[1] ;
        last_textElement.style.opacity = '1';
      }, 500);
      break;
    case 4:
      document.getElementById('txt-container').style.opacity = "0%";
      break;
    case 5:
      document.getElementById('fridge0').style.opacity = "0%";
      document.getElementById('shelf-background0').style.opacity = "0%";
      break;
    case 6:
      document.getElementById('shelf-background1').style.opacity = "0%";
      break;
    case 7:
       // changeshelfImg(frame_index-1)
      document.getElementById('shelf-background2').style.opacity = "0%";
      break;
    case 8:
       // changeshelfImg(frame_index-1)
      document.getElementById('shelf-background3').style.opacity = "0%";
      break;
    case 9:
       // changeshelfImg(frame_index-1)
      document.getElementById('shelf-background4').style.opacity = "0%";
      break;
    case 10:
       // changefridgeImg(2)
      document.getElementById('shelf-background5').style.opacity = "0%";
      break;
    case 11:
       // changefridgeImg(3)
      document.getElementById('fridge1').style.opacity = "0%";
      break;
    case 12:
      document.getElementById('fridge2').style.opacity = "0%";
      // changefridgeImg(4)
      break;
    case 13:
       document.getElementById('fridge3').style.opacity = "0%";
      break;
    case 14:
      window.location = "before_end.html";
      break;
  }
  console.log(frame_index)
}
// function changeshelfImg(index){
//   var shelf = document.getElementById("shelf-background"); 
 
//   setTimeout(function() {
//     shelf.style.backgroundImage = "url('img_last/Organize-0"+index+".png')";
   
//   }, 100);

// }
// function changefridgeImg(index){
//   var fridge = document.getElementById("unlock_fridge"); 
//    fridge.style.opacity = '0';
 
//   setTimeout(function() {
//      fridge.src = "img_last/Refrigerator (organize in)-"+index+".png"
//     fridge.style.opacity = '1';

//   }, 100);
// }

    // Open the Modal
function openModal(imgElement) {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

// Close the Modal
function closeModal() {
    var modal = document.getElementById("image-modal");
    modal.style.display = "none";
}

var audio = document.getElementById("LastScenebgsound");
audio.play();