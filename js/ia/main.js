$(document).ready(function(){
	//toggle click + cursor 
	$('.js-nav-toggle').on('click', function(){
		$(this).parent().next('.nav-breadcrumb-child').toggleClass('is-collapsed');
	
	//toggle click - cursor
	if($(this).hasClass('is-closed')) { 
		($(this).removeClass('is-closed').text('-'));
	}

	else {
		($(this).addClass('is-closed').text('+'));
	}
	});
}); //$(document).ready(function(){


	
/*
Step 1: Natural language: if our toggle is closed -> do this -> else do this
Step 2: Translate that into the basic JS syntax:
	$('.js-nav-toggle').hasClass('is-closed') 
	then$('.js-nav-toggle').removeClass('is-closed').text('-')
	else$('.js-nav-toggle').addClass('is-closed').text('+');
Step 3: Fix the syntax:
*/