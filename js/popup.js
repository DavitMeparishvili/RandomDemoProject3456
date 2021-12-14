$('body').on('click','#button', function(){
   var url = document.getElementById('myframeID').src;
   var tabOrWindow = window.open(url, '_blank');
   tabOrWindow.focus();
 });