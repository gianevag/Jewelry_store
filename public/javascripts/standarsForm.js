$(document).ready(function() {
        
        $('input').change( function(event) {   
            var gold_price =$('input[name = gold_price]').val();

            var diamonds_costK9 = Math.round((gold_price/24)*9*1.1*10)/10; 
            var diamonds_costK14 = Math.round((gold_price/24)*14*1.1*10)/10;
            var diamonds_costK18 = Math.round((gold_price/24)*18*1.1*10)/10;   
            
            $('#coif_K9').text(diamonds_costK9)
            $('#coif_K14').text(diamonds_costK14)
            $('#coif_K18').text(diamonds_costK18)
            console.log( $('#coif_K18').text())
            });

            // process the form
            $('#standarsForm').submit(function(event) {
        
    
                var formData = new FormData(this);
                formData.append('coif_K9',$('#coif_K9').text())
                formData.append('coif_K14',$('#coif_K14').text())
                formData.append('coif_K18',$('#coif_K18').text())

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