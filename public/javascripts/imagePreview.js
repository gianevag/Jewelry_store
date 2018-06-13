$(document).ready(function() {
    
    // IMAGE PREVIEW
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#profile-img-tag').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("input[name=uploadfile]").change(function(){
        readURL(this);
    });

})