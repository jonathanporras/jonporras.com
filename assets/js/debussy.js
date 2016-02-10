$(document).ready(function() {
  if (window.location.pathname === '/') {
    var bebussyQuoteArray = [
        {author: 'Debussy', quote: 'Music is the silence between the notes.'},
        {author: 'Debussy', quote: 'Music is the arithmetic of sounds as optics is the geometry of light.'},
        {author: 'Debussy', quote: 'Some people wish above all to conform to the rules, I wish only to render what I can hear.'}
      ],
      randomQuote = bebussyQuoteArray[Math.floor(Math.random()*bebussyQuoteArray.length)];

    $('.quote-wrapper').append('<p>' + randomQuote.quote + '</p><p>- ' + randomQuote.author + '</p>');
  }
});