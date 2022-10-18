$( document ).ready(function() {
  function initMenu() {
    $( ".cross" ).hide();
    $( ".hamburger" ).hide();
    $( ".menu" ).show();
    if( $('body').width()<768 ){
      $( ".hamburger" ).show();
      $( ".cross" ).hide();
      $( ".menu" ).hide();
    }
  }
  $( ".hamburger" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".hamburger" ).hide();
      $( ".cross" ).show();
    });
  });
  $( ".cross" ).click(function() {
    $( ".menu" ).slideToggle( "slow", function() {
      $( ".cross" ).hide();
      $( ".hamburger" ).show();
    });
  });

  initMenu();
  $( window ).resize(function() {
    initMenu();
  });

});
