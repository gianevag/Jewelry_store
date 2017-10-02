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

        //CONSTUCT THE JEWELRY TABLE
        $('input').change( function(event) { 

        var diamonds_per_piece =$('input[name = diamonds_per_piece]').val();
        var work_cost =$('input[name = work_cost]').val();
        var other_cost =$('input[name = other_cost]').val();
        var silver_metal_weight = $('input[name = silver_metal_weight]').val();
        var gemstones = $('input[name = gemstones]').val();
        var diamond_price = $("#diamond_price").text();

        var coif_K9 = $('#coif_K9').text();
        var coif_K14 = $('#coif_K14').text();
        var coif_K18 = $('#coif_K18').text();
        var multi = $('#mult').text();
        var EurDol = parseFloat($('#EurDol').text());

        var diamonds_cost = diamond_price*diamonds_per_piece

        var pricesK9 = Math.round(silver_metal_weight*1.2*coif_K9);
        var pricesK14 = Math.round(silver_metal_weight*1.3*coif_K14);
        var pricesK18 = Math.round(silver_metal_weight*1.5*coif_K18);
        
        var gold_priceK9 = Math.round(silver_metal_weight*1.2*10)/10;
        var gold_priceK14 = Math.round(silver_metal_weight*1.3*10)/10;
        var gold_priceK18 = Math.round(silver_metal_weight*1.5*10)/10;

        var retail_price_eurK9  = Math.round(multi*(+work_cost + +other_cost + +pricesK9 + +diamonds_cost + +gemstones)*1.1);
        var retail_price_eurK14 = Math.round(multi*(+work_cost + +other_cost + +pricesK14 + +diamonds_cost + +gemstones)*1.1);
        var retail_price_eurK18 = Math.round(multi*(+work_cost + +other_cost + +pricesK18 + +diamonds_cost + +gemstones)*1.1);
        
        var retail_price_dolK9  = Math.round(retail_price_eurK9*EurDol);
        var retail_price_dolK14 = Math.round(retail_price_eurK14*EurDol);
        var retail_price_dolK18 = Math.round(retail_price_eurK18*EurDol);

        var commission_etsyK9 = Math.round(+retail_price_eurK9*0.1 + +0.2)
        var commission_etsyK14 = Math.round(+retail_price_eurK14*0.1 + +0.2)
        var commission_etsyK18 = Math.round(+retail_price_eurK18*0.1 + +0.2)
        
        var costK9 = Math.round(+work_cost + +other_cost + +pricesK9 + +diamonds_cost + +gemstones + +commission_etsyK9);
        var costK14 = Math.round(+work_cost + +other_cost + +pricesK14 + +diamonds_cost + +gemstones + +commission_etsyK14);
        var costK18 = Math.round(+work_cost + +other_cost + +pricesK18+ +diamonds_cost + +gemstones + +commission_etsyK18);
        
        var taxisK9 = Math.round((+retail_price_eurK9 - +costK9)*0.26);
        var taxisK14 = Math.round((+retail_price_eurK14 - +costK14)*0.26);
        var taxisK18 = Math.round((+retail_price_eurK18 - +costK18)*0.26);
        
        var incomesK9 = Math.round((+retail_price_eurK9 - +costK9 - +taxisK9));
        var incomesK14 = Math.round((+retail_price_eurK14 - +costK14- +taxisK14));
        var incomesK18 = Math.round((+retail_price_eurK18 - +costK18- +taxisK18));

        $('#diamonds_cost').text(diamonds_cost);

        $('#pricesK9').text(pricesK9);
        $('#pricesK14').text(pricesK14);
        $('#pricesK18').text(pricesK18);
        
        $('#gold_priceK9').text(gold_priceK9);
        $('#gold_priceK14').text(gold_priceK14);
        $('#gold_priceK18').text(gold_priceK18);

        $('#retail_price_eurK9').text(retail_price_eurK9);
        $('#retail_price_eurK14').text(retail_price_eurK14);
        $('#retail_price_eurK18').text(retail_price_eurK18);

        $('#retail_price_dolK9').text(retail_price_dolK9);
        $('#retail_price_dolK14').text(retail_price_dolK14);
        $('#retail_price_dolK18').text(retail_price_dolK18);

        $('#commission_etsyK9').text(commission_etsyK9);
        $('#commission_etsyK14').text(commission_etsyK14);
        $('#commission_etsyK18').text(commission_etsyK18);

        $('#costK9').text(costK9);
        $('#costK14').text(costK14);
        $('#costK18').text(costK18);

        $('#taxisK9').text(taxisK9);
        $('#taxisK14').text(taxisK14);
        $('#taxisK18').text(taxisK18);

        $('#incomesK9').text(incomesK9);
        $('#incomesK14').text(incomesK14);
        $('#incomesK18').text(incomesK18);

        console.log(EurDol)
        })

        
        // POST THE FORM
        $('#jewelryForm').submit(function(event) {
    

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
                    window.location = data.redirect;
    
                    // here we will handle errors and validation messages
                });
    
            // stop the form from submitting the normal way and refreshing the page
            event.preventDefault();
        });
        
});