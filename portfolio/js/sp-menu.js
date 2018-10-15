
/*--------------------------------------------------------------
	
	Script Name : SP Menu
	Author : FIRSTSTEP - Motohiro Tani
	Author URL : https://www.1-firststep.com
	Create Date : 2018/07/05
	Version : 1.1
	Last Update : 2018/07/19
	
--------------------------------------------------------------*/


$(function() {
	
	// function sp_resize
	function sp_resize() {
		
		$( 'ul#menu' ).css({
			'width' : $( window ).width() + 'px',
		});
		
	}
	
	
	
	
	// function sp_open_close
	function sp_open_close() {
		
		var open_close = $( this ).attr( 'class' );
		
		
		if ( open_close === 'sp-open' ) {
			
			$( this ).attr( 'class', 'sp-close' );
			
			$( 'ul#menu' )
				.css({
					'width' : $( window ).width() + 'px',
					'top' : $( 'div#sp-icon' ).height() + 'px',
				})
				.fadeIn( 'fast' );
			
		} else {
			
			$( this ).attr( 'class', 'sp-open' );
			$( 'ul#menu' ).fadeOut( 'fast' );
			
		}
		
		
	}
	
	
	
	
	$( window ).on( 'resize', sp_resize );
	
	$( 'div#sp-icon' ).on( 'click', sp_open_close );
	
})( jQuery );