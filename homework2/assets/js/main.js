const tab1 = document.querySelector('.button1');
const tab2 = document.querySelector('.button2');
const tab3 = document.querySelector('.button3');
const content1 =document.querySelector('.tabcontent1');
const content2 =document.querySelector('.tabcontent2');
const content3 =document.querySelector('.tabcontent3');

tab1.onclick = function() {
    content1.classList.remove('d-none');
    content2.classList.add('d-none');
    content3.classList.add('d-none');
}
tab2.onclick = function() {
    content1.classList.add('d-none');
    content2.classList.remove('d-none');
    content3.classList.add('d-none');
}
tab3.onclick = function() {
    content1.classList.add('d-none');
    content2.classList.add('d-none');
    content3.classList.remove('d-none');
}