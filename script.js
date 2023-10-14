function changeImage(img) {
  var fridge = document.getElementById("fridge");
  fridge.src = img + '';

}

var intro = ['รู้ไหมว่าขยะพวกนี้มาจากไหน', 'ของเหลือในตู้เย็นของคุณ',
  'เป็นส่วนหนึ่งที่ทำให้เกิดขยะเหล่านี้'];

introIndex = 1;
function changeText() {
  let txt = document.querySelector(".txt");
  txt.textContent = intro[introIndex];
  introIndex++;
}


var pg2_txt = ['รู้ไหมว่าขยะพวกนี้มาจากไหน ?', 'ของเหลือในตู้เย็นของคุณ', 'เป็นส่วนหนึ่งที่ทำให้เกิดขยะเหล่านี้'];
pg2_txt_Index = 1;
function changeText1() {
  var pg2_textElement = document.getElementById('page2_Text');
  pg2_textElement.style.opacity = '0';

  setTimeout(function() {
    pg2_textElement.innerHTML = pg2_txt[pg2_txt_Index] + '<p style="font-size: 0.3em;">กดเพื่อไปต่อ</p>';
    pg2_textElement.style.opacity = '1';
    if (pg2_txt_Index <= pg2_txt.length - 1) {
      pg2_txt_Index++;
    }
    else {
      pg2_textElement.innerHTML =  '￬ ￬'
      pg2_textElement.onclick = null;
      // pg2_txt_Index = 0;
    }
  }, 500);
}

var pg5_txt = ['"เหลือดีกว่าขาด ?"', 'นิสัยการชอบซื้อไปเผื่อตุนเอาไว้ก่อน ?', 'เป็นคุณรึเปล่า ?'];
pg5_txt_Index = 1;
function changeText2() {
  var pg5_textElement = document.getElementById('page5_Text');
  pg5_textElement.style.opacity = '0';

  setTimeout(function() {
    pg5_textElement.innerHTML = pg5_txt[pg5_txt_Index] + '<p style="font-size: 0.3em;">กดเพื่อไปต่อ</p>';
    pg5_textElement.style.opacity = '1';
    if (pg5_txt_Index <= pg5_txt.length - 1) {
      pg5_txt_Index++
    }
    else {
      document.getElementById('page5_Text').style.cursor = 'default';
      pg5_textElement.innerHTML = '<div style="font-size: 3rem; text-align: center; padding: 5%">ลองมาพิสูจน์กัน</div>'+
              '<div style="font-size: 1rem;text-align: center;">กดเข้าร้านค้าเพื่อไปต่อ</div>'+
        '<a href="supermarket.html" style="display: flex;align-items: center;justify-content: center;padding: 1%"> <img src="img file/page_5/Supermarket.png" '+
        'style="width:70%; margin:auto; align-items: center;"> </a>';
        
        pg5_textElement.onclick = null;
        initiateSmoothScroll();
      
    }
  }, 500);
  
  
}

function initiateSmoothScroll() {
  setTimeout(function () {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  }, 1000);
}


function up() {
  let bin = document.getElementById("Binbag");
  bin.style.transform = 'translateY(-70%)';

}














// how 2 disable scroll vvvvvvvvvvvvvvvvvv
// https://www.geeksforgeeks.org/how-to-disable-scrolling-temporarily-using-javascript/

// ล็อกหน้าจอ ถุงขยะ
document.addEventListener('DOMContentLoaded', () => {
  let isScrollLocked = true;

  // ล็อกการเลื่อนหน้าจอที่ระดับนึง
  const lockPosition = window.innerHeight * 5.8;
  window.addEventListener('scroll', () => {
    if (isScrollLocked && window.scrollY >= lockPosition) {
      window.scrollTo(0, lockPosition);
    }
  });

  // ปลดล็อกเมื่อคลิกที่ปุ่ม
  const unlock_bin = document.getElementById('unlock_bin');
  unlock_bin.addEventListener('click', () => {
    isScrollLocked = false;
  });
});

// ล็อกหน้าจอ ตู้เย็น
document.addEventListener('DOMContentLoaded', () => {
  let isScrollLocked = true;

  // ล็อกการเลื่อนหน้าจอที่ระดับนึง
  const lockPosition = window.innerHeight * 1.45;
  window.addEventListener('scroll', () => {
    if (isScrollLocked && window.scrollY >= lockPosition) {
      window.scrollTo(0, lockPosition);
    }
  });

  // ปลดล็อกเมื่อคลิกที่ปุ่ม
  const unlock_frige = document.getElementById('unlock_fridge');
  unlock_frige.addEventListener('click', () => {
    isScrollLocked = false;
  });
});

// ฝาตู้เย็นหาย

function bounceAndDisappear() {
      const image = document.querySelector('.bounce');
      image.style.transform = 'scale(1.2)';
      setTimeout(() => {
        image.style.opacity = '0';
        image.style.transform = 'scale(0.8)';
        setTimeout(() => {
          image.style.display = 'none';
        }, 1000); // 1000 milliseconds (1 second)
      }, 200); // 200 milliseconds
    }


// const animatedImage = document.getElementById('animatedImage');

// window.addEventListener('scroll', () => {
//     const scrollY = window.scrollY;
//     const windowHeight = window.innerHeight;

//     // กำหนดความคมชัดของรูปภาพเมื่อเลื่อน scrollY ถึงค่าที่กำหนด
//     if (scrollY >= 1000) {
//         animatedImage.style.opacity = '1';
//     } else {
//         animatedImage.style.opacity = '0';
//     }
// });
