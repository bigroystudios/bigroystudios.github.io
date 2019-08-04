jk = 0;

$( document ).ready(function() {
	$( "#diamonds" ).click(function(){
    $( this ).removeClass( "teehee" );
		$( this ).html( "haha got u ;))" );
    $( this ).addClass( "rainbow" );
    $( "#diamonds" ).click(function(){
  		$( this ).html( "bet u feel dum now" );
      $( "#diamonds" ).click(function(){
    		$( this ).html( ":-)" );
    	});
  	});
	});

  $( ".back" ).click(function(){
		$( ".slide" ).removeClass( "active" );
    $( ".slide.home" ).addClass( "active" );
    setTimeout( function(){
      $( ".clickme" ).removeClass( "jk" );
      $( ".clickme" ).removeClass( "nerd" );
    },1000);
	});

  $( ".contact .back" ).click(function(){
		jk++;
	});

  $( "#games" ).click(function(){
		$( ".slide.home" ).toggleClass( "active" );
    $( ".slide.games" ).toggleClass( "active" );
    $( ".list" ).html( '<iframe src="https://itch.io/embed/463144" height="167" width="552" frameborder="0"></iframe><iframe src="https://itch.io/embed/300028" height="167" width="552" frameborder="0"></iframe><iframe src="https://itch.io/embed/243273" height="167" width="552" frameborder="0"></iframe><iframe src="https://itch.io/embed/172178" height="167" width="552" frameborder="0"></iframe><iframe src="https://itch.io/embed/158858" height="167" width="552" frameborder="0" style="margin-bottom: 30px;"></iframe>' );
	});

  $( ".games .back" ).click(function(){
    setTimeout( function(){
      $( ".list" ).html( ' ' );
    },1000);
	});

  $( "#about" ).click(function(){
		$( ".slide.home" ).toggleClass( "active" );
    $( ".slide.about" ).toggleClass( "active" );
	});

  $( "#contact" ).click(function(){
		$( ".slide.home" ).toggleClass( "active" );
    $( ".slide.contact" ).toggleClass( "active" );
	});

  $( ".clickme" ).click(function(){
		$( this ).addClass( "jk" );
    if (jk > 0) {
      $( this ).addClass( "nerd" );
    }
	});
});
