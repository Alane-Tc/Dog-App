window.addEventListener("load", function () {
    var imgRandom = document.querySelector("#div-Img");
    var btnRandom = document.querySelector("#btn-Random");
    var spanMessage = document.querySelector(".load");
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(data => data.json())
        .then(photoRandom => { generatorImg(photoRandom); span(); })
    let generatorImg = gntImg => {
        let img = document.createElement("img");
        img.src = gntImg.message;
        img.width = "400"
        img.height = "400"
        imgRandom.appendChild(img);}
    let span = () => { spanMessage.style.display = "none"; }
    let update = () => { window.location = 'index.html' }
    btnRandom.addEventListener("click", function () { update(); })
});