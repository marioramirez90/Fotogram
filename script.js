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

    for(let i = 0; i < myImage.length; i++){
    myImageRef.innerHTML += `<img onclick="openGalleryImage()" id="gallery${i}" class="gallery-image" src="${myImage[i]}" alt="myImage${i}">`;
    }
    }


    const dialogRef = document.getElementById("openGallery");
    function openGalleryImage(){
        dialogRef.showModal();
        dialogRef.classList.add("open-Image");
    }
    function closeGalleryImage(){
        dialogRef.close();
        dialogRef.classList.remove("open-Image")
    }





