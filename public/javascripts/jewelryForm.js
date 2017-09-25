$(document).ready(function() {

        var jewelry_id =$("#jewel_id[name=jewelry_id]").val();
        
        // process the form
        $('#jewelryForm').submit(function(event) {
    

            var formData = new FormData(this);
            
            console.log(formData.get('jewelry_id'));                 
            // process the form
            $.ajax({
                type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url         : '/jewelry/', // the url where we want to POST
                data        : formData, // our data object
                contentType :'application/json',
                dataType    : 'json', // what type of data do we expect back from the server
                encode      : true,
                cache: false,
                contentType: false,
                processData: false
            })
                // using the done promise callback
                .done(function(data) {
                    console.log(data)
                    //window.location = data.redirect;
    
                    // here we will handle errors and validation messages
                });
    
            // stop the form from submitting the normal way and refreshing the page
            event.preventDefault();
        });
        
});