const Pictures = [
    "./sillicat/neocities.png",
    "./sillicat/neocities2.png"
];

function PrintFirst() {
    EmbedImage(Pictures[0]);
}

function PrintAll() {
    for (i=0; i < Pictures.length; i++) {
        EmbedImage(Pictures[i]);
    }
}

function EmbedImage(picture) {
    const img = document.createElement('img'); 
    img.src = picture;
    document.getElementById("image").insertAdjacentHTML = "\n";
    document.getElementById("image").appendChild(img);
}

