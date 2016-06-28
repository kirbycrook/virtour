$('#Parallax-content').mousemove(function(e) {
   var amountMovedX = (e.pageX * -0.3 / 8);
   var amountMovedY = (e.pageY * -1.29 / 8);
   $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px ');
});