    // โหลดเว็บไซต์
    setTimeout(() => {
      const loaderContainer = document.querySelector('.loader-container');
      const content = document.querySelector('.content');

      // ซ่อนหน้าโหลดและแสดงเนื้อหาหลักหลังจากโหลดเสร็จ
      loaderContainer.style.display = 'none';
      // content.style.display = 'block'; บรรทัดนี้พังนะ
    }, 3000); // 3 วินาที


var girl_index = 0;
var shelf_index = 2;
function walk_cycle(frame){
    walkingInterval = setInterval(function() {
      document.getElementById('character').setAttribute('src', 'img file/supermarket/Chuppy Girl-0'+frame+'.png')
    
    setTimeout(function() {
      document.getElementById('character').setAttribute('src', 'img file/supermarket/Chuppy Girl-0'+frame+' (Walk).png')

    }, 500);

  }, 1000);


}

function next(){
  girl_index++;
  if(girl_index <= 7){
    walk_cycle(girl_index)
    let btn = document.getElementById("btn");
    // let btn = document.getElementById("shelf");
    btn.className = "disabled";
    
    setTimeout(function() {
      // delay ใส่ตรงนี้



      
      // From: https://jsfiddle.net/28Qfx/
      let shelf = document.getElementById("shelf");
      shelf.className = "moveShelfOut";

      let floor = document.getElementById("floor");
      floor.className = "moveShelfOut";

      let backshelf = document.getElementById("backshelf");
      backshelf.className = "moveBackshelfOut";



      setTimeout(function() {
        // delay ใส่ตรงนี้
        if(shelf_index <= 7){
          document.getElementById('shelfpic').setAttribute('src', 'img file/supermarket/Super Shelf-'+shelf_index+'.png')
          shelf_index++;
          
          let shelf = document.getElementById("shelf");
          shelf.className = "moveShelfIn";

          let floor = document.getElementById("floor");
          floor.className = "moveShelfIn";
          
          let backshelf = document.getElementById("backshelf");
          backshelf.className = "moveBackshelfIn";
          
        }
          
        else if(shelf_index == 8){
          // ถึง Counter จ่างยเงิน
          document.getElementById('shelfpic').setAttribute('src', 'img file/supermarket/Cashier Girl.png')
          shelf_index++;
          
          let shelf = document.getElementById("shelf");
          shelf.style.width = "90%";
          shelf.style.left = "30%";
          shelf.className = "moveShelfIn";

          let floor = document.getElementById("floor");
          floor.className = "moveShelfIn";

          let backshelf = document.getElementById("backshelf");
          backshelf.className = "moveBackshelfIn";
        }
        else if(shelf_index > 8){
          window.location = "bill.html";
        }

        setTimeout(function() {
          btn.className = "";
          clearInterval(walkingInterval);
          setTimeout(function() {
          document.getElementById('character').setAttribute('src', 'img file/supermarket/Chuppy Girl-0'+girl_index+'.png')
          }, 500);
        }, 2000);
        
      }, 2000);

    }, 1500);

  }
  else{
    window.location = "bill.html";
  }
}