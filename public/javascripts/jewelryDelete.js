                    $(document).ready(function() {
                    
                                var url = $('button[name]')
                                console.log(url);                 
                                // process the form
                                $.ajax({
                                    type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
                                    url         : url, // the url where we want to POST
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
                