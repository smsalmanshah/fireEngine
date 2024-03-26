imagesSection=document.querySelector('.images');
root=document.documentElement;

masonryImages=document.querySelectorAll('.masonryImage');
let totalImageHeight=10;

for (image of masonryImages){
    totalImageHeight += image.offsetHeight+10;
}

const fullheight= totalImageHeight;
const col2height = 400+ fullheight/2;
const col3height = 400+ fullheight/3;
const col4height = 400+ fullheight/4;
console.log('single column: ', fullheight);
console.log('2 column: ', col2height);
console.log('3 column: ', col3height);
console.log('4 column: ', col4height);

//when @650 2column

// window.addEventListener('resize', ()=>{
//     if (window.innerWidth < 650){
//         console.log (`width=${window.innerWidth}`);
//         imagesSection.style.height=`${fullheight}px`;
//         console.log (`imageSectionHeight=${imagesSection.style.height}`);
//     } else if (window.innerWidth >= 650  && window.innerWidth < 768 ){
//         console.log (`width=${window.innerWidth}`);
//         imagesSection.style.height=`${col2height}px`;
//         console.log (`imageSectionHeight=${imagesSection.style.height}`);
//     } else if (window.innerWidth >= 768 && window.innerWidth <1440){
//         console.log (`width=${window.innerWidth}`);
//         imagesSection.style.height=`${col3height}px`;
//         console.log (`imageSectionHeight=${imagesSection.style.height}`);
    
//     }else if (window.innerWidth >= 768 && window.innerWidth <1440){
//         console.log (`width=${window.innerWidth}`);
//         imagesSection.style.height=`${col4height}px`;
//         console.log (`imageSectionHeight=${imagesSection.style.height}`);
    
// }})



