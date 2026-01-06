const myImage = [
"img/img1.jpg",
"img/img2.jpg",
"img/img3.png",
"img/img4.jpg",
"img/img5.jpg",
"img/img6.jpg",
"img/img7.jpg",
"img/img8.jpg",
"img/img9.jpg",
"img/img10.jpg",
"img/img11.jpg",
"img/img12.jpg",


];

function loadMyImage(){
    const myImageRef = document.getElementById('image');

    for(let i = 1; i < myImage.length; i++){
    myImageRef.innerHTML += `<img id="gallery${i}" class="gallery-image" src="${myImage[i]}" alt="myImage${i}">`;
    }
    }