let number = 0;
const a = document.querySelector('.Prev');
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')
const contr = document.querySelector('.controsl > block');

const myinterval= setInterval(prev, 3500)
a.addEventListener('click', prev)
function prev() {
   clearInterval(myinterval)
   num = 0
   number++
   console.log(number);
   
   if (number == 1) {
      img1.className = "active1"
      img2.className = "image2"
      img3.className = "img3"
      num = -2
   }
   if (number == 2) {
      img3.className = "active2"
      img1.className = "img1"
      img2.className = "image2"
      num = -1
   }
   if (number == 3) {
      img2.className = "active3"
      img3.className = "img3"
      number = 0
   }
};
let num = 0;
const b = document.querySelector('.Next');
b.addEventListener('click', () => {
   number = 0
   num = --num
   console.log(num)
   if (num === -1) {
      img3.className = "active2"
      img2.className = "image2"
      img1.className = "img1"
      number = 2
   }
   if (num === -2) {
      img1.className = "active1"
      img3.className = "img3"
      img2.className = "image2"
      number = 1
   }
   if (num === -3) {
      img2.className = "active3"
      img1.className = "img1"
      num = 0
   }
});
