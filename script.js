$(document).ready(function() {
    $('#quote-btn').click(function() {
        $.ajax({
            url: 'https://talaikis.com/api/quotes/random/',
            request: 'GET',
            data: {format: 'json' },
            success: function(data) {
                $('#quote').html(data.quote);
                $('#author').html(data.author);
                console.log(data.quote);
                console.log(data.author);
            },
            error: function(){
                console.log("an error occured");
            } 
        });
    });
});
