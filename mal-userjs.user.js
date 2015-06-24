// ==UserScript==
// @name         MAL-USERJS
// @namespace    http://shhdup.ru/
// @version      0.1
// @description  myanimelist.net userjs script with watched tittles highlighting and rating displaying
// @author       Oleg Mingalev aka shhdup
// @match        http://myanimelist.net/*
// @grant        none
// ==/UserScript==

$('a[title="Edit this entry"]').prev().css('background-color', '#33a').css('color', '#fff')

$('a[title="Edit this entry"], a[title="Quick add anime to my list"]').prev().each(function(ind, val) {
  var rn = 'rating' + ind;
  $(val).after('<sup><span class="rating" id="'+rn+'">?</span></sup>');
  rn = $('#rating'+ind)
  rn.css('color', '#44a')
  $.ajax({url: $(val).attr('href'), context:rn}).done(
      function(reply) { 
          $(this).text($(reply).find('h2:contains("Statistics") + div')[0].innerText.slice(6,11));
      }
  );
});
