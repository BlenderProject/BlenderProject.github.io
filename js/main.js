let offset = 0;
let i = 1;
const sliderline = document.querySelector('.slider-line');
const sliderline2 = document.querySelector('.slider-line2');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 970;
    if(offset > 970){
        offset = 0;
    }
    sliderline.style.left = -offset + 'px';
    i++;
});
document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 970;
    if(offset < 0){
        offset = 970;
    }
    if(i <= 1){
        sliderline.style.left = -offset + 'px';
    }
    sliderline.style.left = -offset + 'px';
    i++;
});

document.querySelector('.slider-next2').addEventListener('click', function(){
    offset = offset + 970;
    if(offset > 970 * 4){
        offset = 0;
    }
    sliderline2.style.left = -offset + 'px';
    i++;
});
document.querySelector('.slider-prev2').addEventListener('click', function(){
    offset = offset - 970;
    if(offset < 0){
        offset = 970 * 4;
    }
    if(i <= 1){
        sliderline2.style.left = -offset + 'px';
    }
    sliderline2.style.left = -offset + 'px';
    i++;
});