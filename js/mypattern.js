$(document).ready(function(){
  var screenDelay;
  var el_html = '<div class="input-entry-error"><div class="arrow"></div><div class="icon">!</div><div class="text-content"><p class="error-text">Caractere inválido!</p><p class="tip"></p></div></div>';

  $('body').append(el_html);


  $(document).on('keypress', 'input[type="text"]', function(e){
    var thisElmAttr = $(this).attr('only-these-char');
    if (typeof(thisElmAttr) != "undefined" && thisElmAttr.length > 0){
      $('.input-entry-error').hide();
      clearTimeout(screenDelay);
      var textValid   = $(this).attr('text-for-valid');
      var elm_top     = $(this).offset().top;
      var elm_left    = $(this).offset().left;
      var elm_height  = $(this).outerHeight();
      var elm_width   = $(this).outerWidth();
      var doc_width   = $(document).width();
      var setBoxTop   = elm_top + elm_height + 10;
      var evt         = (document.all)? event.keyCode : e.charCode;
      var valid_chars = $(this).attr('only-these-char');	
      var chr         = String.fromCharCode(evt);	

      $('.input-entry-error').css('top',setBoxTop+'px');
      $('.input-entry-error').css('left',elm_left+'px');
      textValid = (typeof(textValid) != "undefined" && textValid.length > 0)? textValid : "Insira um Caractere válido!"
      $('.input-entry-error .text-content .tip').html(textValid);
      if (valid_chars.indexOf(chr)<0){
        e.preventDefault();
        $('.input-entry-error').show();
        screenDelay = setTimeout(function(){ $('.input-entry-error').hide(); }, 4000);
      }
    }
  });

  $(document).click(function(e){
    var isInputEntryError = $(e.target).parents('.input-entry-error');
    if ($('.input-entry-error').css('display') == 'block' && isInputEntryError.length == 0){
      $('.input-entry-error').hide();
    } 
  });
});