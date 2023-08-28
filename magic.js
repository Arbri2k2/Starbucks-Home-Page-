function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}

function changeCircleColor(color){
    const circle=document.querySelector('.circle');
    circle.style.background=color; 
}


function facebookWindow(){
    window.open("https://www.facebook.com/Starbucks/","_blank");
}
   
function twitterWindow(){
    window.open("https://twitter.com/Starbucks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor");
}

function igWindow(){
    window.open("https://www.instagram.com/starbucks/?hl=en");
}