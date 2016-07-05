$( window ).ready(function() {
 // var imageHeight = $( window ).height();
 var imageWidth = $( window ).width();

 // $(".black-image-resize").attr('height',imageHeight);
 // $(".color-image-resize").attr('height',imageHeight);

 $(".black-image-resize").attr('width',imageWidth);
 $(".color-image-resize").attr('width',imageWidth);

});





$( window ).resize(function() {
 // var imageHeight = $( window ).height();
 var imageWidth = $( window ).width();

 // $(".black-image-resize").attr('height',imageHeight);
 // $(".color-image-resize").attr('height',imageHeight);

 $(".black-image-resize").attr('width',imageWidth);
 $(".color-image-resize").attr('width',imageWidth);

});
