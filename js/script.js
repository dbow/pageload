/* Author: dbow (d-bow.com)

*/

var Test = {};

Test.Dom = (function () {
  
  var me = {},
      DIV_COUNT = 1000;
  
  me.setup = function () {
    
    var divHtml = '<div>TESTTESTTEST</div>',
        imgDivHtmlStart = '<div><img src="',
        imgDivHtmlEnd = '"/></div>',
        i,
        fillerHtml = '',
        j,
        imgList = ['http://www.gstatic.com/hostedimg/0ac14c8287d89935_landing',
                   'http://www.gstatic.com/hostedimg/e2a28ef2b0dd9178_landing',
                   'http://www.gstatic.com/hostedimg/124cf5d4c25bd8d0_landing',
                   'http://www.gstatic.com/hostedimg/654f1cf21c26f452_landing',
                   'http://www.gstatic.com/hostedimg/a1222d69800c8118_landing',
                   'http://www.gstatic.com/hostedimg/be30eb00e5d18259_landing',
                   'http://www.gstatic.com/hostedimg/6045385199dcd4de_landing',
                   'http://www.gstatic.com/hostedimg/a190b4b88823437f_landing',
                   'http://www.gstatic.com/hostedimg/38ed7740f45789a0_landing',
                   'http://www.gstatic.com/hostedimg/25128785f41ec47e_landing',
                   'http://www.gstatic.com/hostedimg/81360443f9dd01d2_landing',
                   'http://www.gstatic.com/hostedimg/fa68cf5827caf3fe_large',
                   'http://www.gstatic.com/hostedimg/b87eea17f879eea1_landing',
                   'http://www.gstatic.com/hostedimg/21dca153d258ff3a_landing',
                   'http://www.gstatic.com/hostedimg/1e22f520e491cc2b_landing'],
        imgListLength = imgList.length;

    for (i=0; i < DIV_COUNT; i++) {
      fillerHtml += divHtml;
    }
    for (j=0; j < imgListLength; j++) {
      fillerHtml += (imgDivHtmlStart + imgList[j] + imgDivHtmlEnd);      
    }
    $('#filler').html(fillerHtml);
    
  };
  
  return me;
  
})();


$(function () {

  Test.Dom.setup();

});



