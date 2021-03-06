$(document).ready(function(){
    var url = 'https://hn.algolia.com/api/v1/search?query=javascript';
    $.getJSON(url, function(data){
        
        var currentQuote = '';
        var quote = data.hits;
        
        $('.read').on('click', function(){
            currentQuote = quote[Math.floor(Math.random() * quote.length)]
            console.log(currentQuote);
            
            $('.quoteBody').hide();
            $('.quoteBodyLink').html(currentQuote.title);
            $('.quoteBodyLink').attr('href', currentQuote.url).attr('target', '_blank');
            $('.quoteAuthor').html(currentQuote.author);
            
            $('.tweetQuote').attr('href', 'https://twitter.com/intent/tweet?text=' + currentQuote.title + ' - ' + currentQuote.author).attr('target', '_blank').attr('disabled', false);
            
            $('.read').html('Show me more');
        });
        
        //console.log(quote[0].title)
        
        //console.log(data);
    });
});