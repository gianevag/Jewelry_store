                    $(document).ready(function() {
                    
                        
$('button#delete_button').click(function(event){
    
    //alert(this.id)

        var url = $(this).attr('name');
        console.log(url);                 
        // process the delete
        $.ajax({
            type        : 'DELETE', // define the type of HTTP verb we want to use 
            url         :  url, // the url where we want to delete
            encode          : true
        })
            // using the done promise callback
            .done(function(data) {
                //alert(data)
                
                // log data to the console so we can see
                // here we will handle errors and validation messages
            });

        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();

        //remove the row
        $(this).parent().parent().remove();
    });

});

