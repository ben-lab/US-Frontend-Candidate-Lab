(function(){
	var invitBtn = $('.invitation-btn');
	var inviteResponse = $('.invitation-response');

	function showResponse(){
		inviteResponse.animate({'opacity':'1'},200);
	}

	// invitation-btn functionality
	invitBtn.on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		if( $(this).hasClass('yes')) {
			inviteResponse.html("Awesome! Be sure to add this event to your <a href='https://www.google.com/calendar/render?action=TEMPLATE&text=MDC+Partners+Polaroid+Celebration&dates=20131031T010000Z/20131031T030000Z&details=Book+Signing+%26+Cocktail+Hour+of+Instant+%E2%80%94+The+Story+of+Polaroid+by+author+Christopher+Bonanos.&location=The+MDC+Innovation+Centre,+745+Fifth+Avenue,+19th+Floor&trp=false&sprop&sf=true&output=xml' target='_blank'>Google Calendar.</a> ");
		} else {
			inviteResponse.html("Awww! You sure you don't want to come?");
		}
		showResponse();
	});
})();