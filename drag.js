var inputUrlElem = document.getElementById('input-url');
var inputDragElem = document.getElementById('input-drag');
var imagePreviewUrlElem = document.getElementById('image-preview');

var preventDefault = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}

var handleDrop = function (event) {
    var dataTransfer = event.dataTransfer;
    var files = dataTransfer.files;

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var reader = new FileReader();

        reader.readAsDataURL(file); // Determines this.result content
        reader.addEventListener('loadend', function (event, file) {
            imagePreviewUrlElem.src = this.result;
        });
    }
}

inputUrlElem.addEventListener('keyup', function (event) {
    preventDefault(event);
    imagePreviewUrlElem.src = event.target.value;
}, false);

inputDragElem.addEventListener('dragover', preventDefault);
inputDragElem.addEventListener('dragenter', preventDefault);
inputDragElem.addEventListener('drop', function (event) {
    preventDefault(event);
    handleDrop(event);
}, false);
