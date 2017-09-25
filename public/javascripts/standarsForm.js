$(document).ready(function() {
                
            // process the form
            $('#standarsForm').submit(function(event) {
        
    
                var formData = new FormData(this);
                
                // process the form
                $.ajax({
                    type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
                    url         : '/standars/', // the url where we want to POST
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
                        window.location = data.redirect;
        
                        // here we will handle errors and validation messages
                    });
        
                // stop the form from submitting the normal way and refreshing the page
                event.preventDefault();
            });
            
    });