$(document).ready(function () {
    console.log("ready!");

    $(function () {
        $(".draggable").draggable();
        $(".add-note").click(function () {
            $sticky = $("<div id='board'><div class='note draggable'><div class='text'><div class='avatar-upload'><input id='input-url'class='input-url' type='text'placeholder='Enter an image URL and press enter!' /><div class='avatar-edit'><label for='imageUpload'></label></div><div class='avatar-preview'><img id='image-preview' class='image-preview'src='https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg' /></div></div><textarea class='cnt' placeholder='Enter text here...'></textarea></div></div></div>");
            $("#board").append($sticky);
            $(".draggable").draggable();
        });
    });


});



var inputUrlElem = document.getElementById('input-url');
// var inputDragElem = document.getElementById('input-drag');
var imagePreviewUrlElem = document.getElementById('image-preview');

var preventDefault = function (event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
}

// var handleDrop = function(event) {
//   var dataTransfer = event.dataTransfer;
//   var files = dataTransfer.files;

//   for (var i = 0; i < files.length; i++) {
//     var file = files[i];
//     var reader = new FileReader();

//     reader.readAsDataURL(file); // Determines this.result content
//     reader.addEventListener('loadend', function(event, file) {
//       imagePreviewUrlElem.src = this.result;
//     });
//   }
// }

inputUrlElem.addEventListener('keyup', function (event) {
    preventDefault(event);
    imagePreviewUrlElem.src = event.target.value;
}, false);

// inputDragElem.addEventListener('dragover', preventDefault);
// inputDragElem.addEventListener('dragenter', preventDefault);
// inputDragElem.addEventListener('drop', function(event) {
//   preventDefault(event);
//   handleDrop(event);
// }, false);








