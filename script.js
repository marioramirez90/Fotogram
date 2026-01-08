const myImage =  [
  "img/Eisberge vor Alaska.jpg",
  "img/Eiswelle.jpg",
  "img/Ente.jpg",
  "img/Gewitterhimmel.png",
  "img/Gletschersee.jpg",
  "img/Küstenlandschaft.jpg",
  "img/Nordlicht.jpg",
  "img/Schneeleopard.jpg",
  "img/Seevögel.jpg",
  "img/Singvogel.jpg",
  "img/Strudel Ozean.jpg"];


let currentIndex = 0;
const myImageRef = document.getElementById('image');
const dialogRef = document.getElementById("openGallery");
const openGalleryRef =document.getElementById("openGalleryImage")
const numberOfImagesRef =document.getElementById("numbersOfImages")
const imageTitleRef =document.getElementById("ImageTitle")


function loadMyImage(){
    
 for(let i = 0; i < myImage.length; i++){
    let altName = myImage[i].replace("img/","");
    myImageRef.innerHTML += `<img tabindex="0" onclick="openGalleryImage(${i})" id="gallery${i}" class="gallery-image" alt="${altName}" src="${myImage[i]}">`;
}
}



function openGalleryImage(index){
    currentIndex =index;
    dialogRef.showModal();
    dialogRef.classList.add("open-Image");
    openGalleryRef.innerHTML = `<img tabindex="0" src="${myImage[index]}" class="open-gallery-image">`;
    numberOfImagesRef.textContent= `${currentIndex + 1}/${myImage.length}`;

let myImageName = myImage[index].replace("img/","");
    imageTitleRef.textContent=myImageName;
    }

function closeGalleryImage(){
    dialogRef.close();
    dialogRef.classList.remove("open-Image")
    }
    dialogRef.addEventListener("click", e => e.target === dialogRef && closeGalleryImage());
    dialogRef.addEventListener("cancel", closeGalleryImage);

function leftArray() {
    if (currentIndex > 0) {
    currentIndex -= 1;
    } else {
    currentIndex = myImage.length - 1;
 }
    openGalleryImage(currentIndex);
}

function rightArray() {
    if (currentIndex < myImage.length - 1) {
        currentIndex += 1;
    } else {
        currentIndex = 0;
    }
    openGalleryImage(currentIndex);
}
document.addEventListener("keydown", (event) => {
    if (dialogRef.open) {
 if (event.key === "ArrowLeft") {
        leftArray();
     } else if (event.key === "ArrowRight") {
        rightArray();
        } else if (event.key === "Escape") {
         closeGalleryImage();
        }
    }
});



