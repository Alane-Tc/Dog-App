window.addEventListener("load", function () {
    var imgRandom = document.querySelector("#div-Img");
    var btnRandom = document.querySelector("#btn-Random");
    var spanMessage = document.querySelector(".load");
    function getDogs() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(data => data.json())
            .then(photoRandom => {
                    span();
                    generatorImg(photoRandom);})}
    let generatorImg = gntImg => {
        let img = document.querySelector("#img-Perros");
        img.src = gntImg.message;
        img.width = "400"
        img.height = "400"
        imgRandom.appendChild(img);
    }
    let span = () => { spanMessage.style.display = "none"; }
    btnRandom.addEventListener("click", function () { getDogs(); })
});