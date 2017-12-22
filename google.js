var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1D0nAERLi2smRBR1TmI2JoPk9QWJir2ChL4i5fdrnSUQ/pubhtml';

function init() {
  Tabletop.init( { key: publicSpreadsheetUrl,
                   callback: showInfo,
                   simpleSheet: true } )
}

function showInfo(data, tabletop) {
  
  console.log(data);
  

  
    $('.title').append(data[0].Title);
    $('.curators').append(data[0].Curators);
    $('.texte').append(data[0].Texte1);
    $('.art').append(data[0].Artists);
  
}
window.addEventListener('DOMContentLoaded', init)