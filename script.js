const btn = document.getElementById("btn");

btn.addEventListener('click', function() {
    const quoteItem = document.createElement('P');
    const newQuote = document.createTextNode("new quote here");
    quoteItem.appendChild(newQuote);
    document.getElementById("quote-div").appendChild(quoteItem);

})