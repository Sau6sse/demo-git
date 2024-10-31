"use strict";
let vignettes = document.getElementById("vignettes");
let grosseImage = document.getElementById("grosseImage");
let image1 = document.getElementById("img1");
let image2 = document.getElementById("img2");
let image3 = document.getElementById("img3");
let image4 = document.getElementById("img4");
let image5 = document.getElementById("img5");

image1.addEventListener('mouseover',changerVignettes1, false);
image2.addEventListener('mouseover',changerVignettes2, false);
image3.addEventListener('mouseover',changerVignettes3, false);
image4.addEventListener('mouseover',changerVignettes4, false);
image5.addEventListener('mouseover',changerVignettes5, false);

image1.addEventListener('mouseout' ,mouseOut1,false );
image2.addEventListener('mouseout' ,mouseOut2,false );
image3.addEventListener('mouseout' ,mouseOut3,false );
image4.addEventListener('mouseout' ,mouseOut4,false );
image5.addEventListener('mouseout' ,mouseOut5,false );

image1.addEventListener('click' ,changerGrosseImage1,false );
image2.addEventListener('click' ,changerGrosseImage2,false );
image3.addEventListener('click' ,changerGrosseImage3,false );
image4.addEventListener('click' ,changerGrosseImage4,false );
image5.addEventListener('click' ,changerGrosseImage5,false );


function mouseOut1(image1){
    image1.target.className = ('textImageFin');
}

function mouseOut2(image2){
    image2.target.className = ('textImageFin');
}

function mouseOut3(image3){
    image3.target.className = ('textImageFin');
}

function mouseOut4(image4){
    image4.target.className = ('textImageFin');
}

function mouseOut5(image5){
    image5.target.className = ('textImageFin');
}



function changerVignettes1(image1){
    image1.target.className = ('textImage');
    vignettes.src = 'images/vignettes/img1.jpg';

}
function changerVignettes2(image2){
    image2.target.className = ('textImage');
    vignettes.src = 'images/vignettes/img2.jpg';

}
function changerVignettes3(image3){
    image3.target.className = ('textImage');
    vignettes.src = 'images/vignettes/img3.jpg';

}
function changerVignettes4(image4){
    image4.target.className = ('textImage');
    vignettes.src = 'images/vignettes/img4.jpg';

}
function changerVignettes5(image5){
    image5.target.className = ('textImage');
    vignettes.src = 'images/vignettes/img5.jpg';

}
function changerGrosseImage1 (){
    grosseImage.src = 'images/img1.jpg';
}
function changerGrosseImage2 (){
    grosseImage.src = 'images/img2.jpg';
}
function changerGrosseImage3 (){
    grosseImage.src = 'images/img3.jpg';
}
function changerGrosseImage4 (){
    grosseImage.src = 'images/img4.jpg';
}
function changerGrosseImage5 (){
    grosseImage.src = 'images/img5.jpg';
}

