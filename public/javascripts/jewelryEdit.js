$(document).ready(function() {
    
        // process the form
        $('form').submit(function(event) {
    
            // get the form data
            // there are many ways to get this data using jQuery (you can use the class or id also)

            var formData = new FormData(this);
            formData.append('price_9K', $('#pricesK9').text()),
            formData.append('price_14K', $('#pricesK14').text()),
            formData.append('price_18K', $('#pricesK18').text())

            formData.append('gold_priceK9', $('#gold_priceK9').text());
            formData.append('gold_priceK14', $('#gold_priceK14').text());
            formData.append('gold_priceK18', $('#gold_priceK18').text());

            formData.append('retail_price_eurK9', $('#retail_price_eurK9').text());
            formData.append('retail_price_eurK14', $('#retail_price_eurK14').text());
            formData.append('retail_price_eurK18', $('#retail_price_eurK18').text());

            formData.append('retail_price_dolK9', $('#retail_price_dolK9').text());
            formData.append('retail_price_dolK14', $('#retail_price_dolK14').text());
            formData.append('retail_price_dolK18', $('#retail_price_dolK18').text());

            formData.append('commission_etsyK9', $('#commission_etsyK9').text());
            formData.append('commission_etsyK14', $('#commission_etsyK14').text());
            formData.append('commission_etsyK18', $('#commission_etsyK18').text());

            formData.append('costK9', $('#costK9').text());
            formData.append('costK14', $('#costK14').text());
            formData.append('costK18', $('#costK18').text());
            
            formData.append('taxisK9', $('#taxisK9').text());
            formData.append('taxisK14', $('#taxisK14').text());
            formData.append('taxisK18', $('#taxisK18').text());
            
            formData.append('incomesK9', $('#incomesK9').text());
            formData.append('incomesK14', $('#incomesK14').text());
            formData.append('incomesK18', $('#incomesK18').text());

            var id = $(this).attr('name'); 
            console.log('/jewelry/edit/'+id);                 
            // process the form
            $.ajax({
                type        : 'PUT', // define the type of HTTP verb we want to use (POST for our form)
                url         : '/jewelry/edit/'+id, // the url where we want to POST
                data        : formData, // our data object
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
                    // log data to the console so we can see
                    console.log(data); 
    
                    // here we will handle errors and validation messages
                });
    
            // stop the form from submitting the normal way and refreshing the page
            event.preventDefault();
        });
        
});