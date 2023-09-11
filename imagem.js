const inputFile = document.querySelector("#picture__input");
const inputFile2 = document.querySelector("#picture__input2"); //Imagem 2
const pictureImage = document.querySelector(".picture__image");
const pictureImage2 = document.querySelector(".picture__image2");//Imagem 2
const pictureImageTxt = "Choose an image";
const pictureImageTxt2 = "Choose an image";//Imagem 2
pictureImage.innerHTML = pictureImageTxt;
pictureImage2.innerHTML = pictureImageTxt2;//Imagem 2

inputFile.addEventListener("change", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerHTML = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
    }
});

inputFile2.addEventListener("change", function (e) {
    const inputTarget2 = e.target;
    const file2 = inputTarget2.files[0];
  
    if (file2) {
      const reader2 = new FileReader();
  
      reader2.addEventListener("load", function (e) {
        const readerTarget2 = e.target;
  
        const img2 = document.createElement("img");
        img2.src = readerTarget2.result;
        img2.classList.add("picture__img2");
  
        pictureImage2.innerHTML = "";
        pictureImage2.appendChild(img2);
      });
  
      reader2.readAsDataURL(file2);
    } else {
      pictureImage2.innerHTML = pictureImageTxt2;
      }
  });
