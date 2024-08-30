const Pictures = [
    ["Sillicat Discovers America","./sillicat/sillicat-discovers-america.png"]
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
    const h3 = document.createElement('h3'); 
    h3.textContent = picture[0];
    
    const img = document.createElement('img'); 
    img.src = picture[1];
    
    document.getElementById("image").append(h3,img);
}
