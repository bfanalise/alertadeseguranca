const inputFile = document.querySelector("#picture__input2");
const pictureImage = document.querySelector(".picture__image2");
const pictureImageTxt = "Escolha uma imagem";
pictureImage.innerHTML = pictureImageTxt;

inputFile.addEventListener("change2", function (e) {
  const inputTarget = e.target;
  const file = inputTarget.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function (e) {
      const readerTarget = e.target;

      const img2 = document.createElement("img");
      img.src = readerTarget.result;
      img.classList.add("picture__img2");

      pictureImage2.innerHTML = "";
      pictureImage2.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerHTML = pictureImageTxt;
    }
});