$('li').mouseover(function(){
  $( this ).siblings().css( "opacity", "0.2" );
  $( this ).css( "opacity", "1" );
});

$('li').mouseout(function(){
	 $( 'li' ).css( "opacity", "1" );
});