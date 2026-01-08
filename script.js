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
let currentIndex = 0;

function loadMyImage(){
const myImageRef = document.getElementById('image');

for(let i = 0; i < myImage.length; i++){
     myImageRef.innerHTML += `<img onclick="openGalleryImage(${i})" id="gallery${i}" class="gallery-image" src="${myImage[i]}" alt="bilder-von der Gallery">`;
}
}


const dialogRef = document.getElementById("openGallery");
function openGalleryImage(index){
    currentIndex =index;
    dialogRef.showModal();
    dialogRef.classList.add("open-Image");
    document.getElementById("openGalleryImage").innerHTML = `<img src="${myImage[index]}" class="open-gallery-image" alt="Meine-Bilder">`;
    document.getElementById("numbersOfImages").textContent= `${currentIndex + 1}/${myImage.length}`;

let myImageName = myImage[index].replace("img/", "");
    document.getElementById("ImageTitle").textContent=myImageName;
    }
   

function closeGalleryImage(){
    dialogRef.close();
    dialogRef.classList.remove("open-Image")
        
    }
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
    

   



