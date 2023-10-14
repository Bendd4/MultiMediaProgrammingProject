    // โหลดเว็บไซต์
    setTimeout(() => {
      const loaderContainer = document.querySelector('.loader-container');
      const content = document.querySelector('.content');

      // ซ่อนหน้าโหลดและแสดงเนื้อหาหลักหลังจากโหลดเสร็จ
      loaderContainer.style.display = 'none';
      // content.style.display = 'block'; บรรทัดนี้พังนะ
    }, 3000); // 3 วินาที


var girl_index = 2;
var shelf_index = 2;

function next(){
  if(girl_index <=11){
    document.getElementById('character').setAttribute('src', 'img file/supermarket/Girl_'+girl_index+'.png')
  girl_index++;
  let btn = document.getElementById("btn");
  btn.className = "disabled";
    setTimeout(function() {
      // delay ใส่ตรงนี้
      
      
      // From: https://jsfiddle.net/28Qfx/
      let d = document.getElementById("shelf");
      d.className = "moveout";


      setTimeout(function() {
        // delay ใส่ตรงนี้
        if(shelf_index<=10){
 document.getElementById('shelfpic').setAttribute('src', 'img file/supermarket/Shelf-'+shelf_index+'.png')
        shelf_index++;
        let d = document.getElementById("shelf");
        d.className = "movein";
        }
        else{
          window.location = "bill.html";
        }
        setTimeout(function() {
          btn.className = "";
        }, 2000);
      }, 2500);
      
    }, 1000);


    
    
  }
     
  else{
    
  }
}