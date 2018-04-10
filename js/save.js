//This scripts save pictures
var saveButton = document.getElementById('save');

saveButton.addEventListener('click', saveCanvasAsImageFile);

function getImage(canv) {
    var imageData = canv.toDataURL();
    var image = new Image();
    image.src = imageData;
    return image;
}

function saveImage(image) {
    var link = document.createElement("a");

    link.setAttribute("href", image.src);
    link.setAttribute("download", 'canvasImage');
    link.click();
}
function saveCanvasAsImageFile() {
    console.log('Saving...');
    console.log('Downloading...');
    var image = getImage(document.getElementById('canvas'));
    saveImage(image);
    console.log('Downloaded');
}

