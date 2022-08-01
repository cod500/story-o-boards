$(document).ready(function () {
    console.log("ready!");
    var preventDefault = function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    }

    $(function () {
        $(".draggable").draggable();
        $(".add-note").click(function () {
            $sticky = $("<div id='board'><div class='note draggable'><div class='text'><div class='avatar-upload'><input id='input-url'class='input-url' type='text'placeholder='Enter an image URL and press enter!' /><div class='avatar-edit'><label for='imageUpload'></label></div><div class='avatar-preview'><img id='image-preview' class='image-preview'src='https://www.survivorsuk.org/wp-content/uploads/2017/01/no-image.jpg' /></div></div><textarea class='cnt' placeholder='Enter text here...'></textarea></div></div></div>");
            $("#board").append($sticky);
            $(".draggable").draggable();

            addImage();
            dragImage();
        });
    });

    function addImage() {
        var inputUrlElem = document.querySelectorAll('.input-url');
        // var inputDragElem = document.getElementById('input-drag');
        var imagePreviewUrlElem = document.querySelectorAll('.image-preview');

        inputUrlElem.forEach(function (element, i) {
            element.addEventListener('keyup', function (event) {
                preventDefault(event);

                imagePreviewUrlElem[i].src = event.target.value;
                console.log(imagePreviewUrlElem);
            }, false);
        })
    };

    function dragImage() {
        var inputDragElem = document.querySelectorAll('.input-drag');
        var note = document.querySelectorAll('.note');
        var imagePreviewUrlElem = document.querySelectorAll('.image-preview');

        var handleDrop = function (event, index) {
            alert("dragged handledrop")
            var dataTransfer = event.dataTransfer;
            var files = dataTransfer.files;

            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var reader = new FileReader();

                reader.readAsDataURL(file); // Determines this.result content
                reader.addEventListener('loadend', function (event, file) {
                    imagePreviewUrlElem[index].src = this.result;
                });
            }
        }

        note.forEach(function (element, i) {
            element.addEventListener('dragover', function (event) {
                preventDefault(event);
            }, false);
        });

        note.forEach(function (element, i) {
            element.addEventListener('dragenter', function (event) {
                preventDefault(event);
            }, false);
        })

        note.forEach(function (element, i) {
            element.addEventListener('drop', function (event) {

                preventDefault(event);
                handleDrop(event, i);
            }, false);
        })
    };



    addImage();
    dragImage();

});

















