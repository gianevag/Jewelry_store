$(document).ready(function() {
    
        // process the form
        $('form').submit(function(event) {
    
            // get the form data
            // there are many ways to get this data using jQuery (you can use the class or id also)
            var formData = {
                'jewelry_id'            : $('input[name=jewelry_id]').val(),
                'work_cost'             : $('input[name=work_cost]').val(),
                'other_cost'            : $('input[name=other_cost]').val()
            };
            console.log(formData);                 
            // process the form
            $.ajax({
                type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
                url         : '/jewelry/', // the url where we want to POST
                data        : formData, // our data object
                dataType    : 'json', // what type of data do we expect back from the server
                            encode          : true
            })
                // using the done promise callback
                .done(function(data) {
                    console.log(data)
                    window.location = data.redirect;
                    // log data to the console so we can see
                    console.log(data); 
    
                    // here we will handle errors and validation messages
                });
    
            // stop the form from submitting the normal way and refreshing the page
            event.preventDefault();
        });
        
});