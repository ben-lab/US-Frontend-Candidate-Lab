(function(){
	var inviteBtn = $('.invitation-btn');
	var inviteResponse = $('.invitation-response');
	var rsvpBtn = $('.rsvp-btn');
	var invitation = $('.layout-invitation');
	var invitationOpen = false;

	function showResponse(){
		inviteResponse.animate({'opacity':'1'},200);
	}

	function removeInlineStyle(){
		invitation.css('display','');
	}

	// invitation-btn functionality
	inviteBtn.on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		if( $(this).hasClass('yes')) {
			inviteResponse.html("Awesome! Be sure to add this event to your <a href='https://www.google.com/calendar/render?action=TEMPLATE&text=MDC+Partners+Polaroid+Celebration&dates=20131031T010000Z/20131031T030000Z&details=Book+Signing+%26+Cocktail+Hour+of+Instant+%E2%80%94+The+Story+of+Polaroid+by+author+Christopher+Bonanos.&location=The+MDC+Innovation+Centre,+745+Fifth+Avenue,+19th+Floor&trp=false&sprop&sf=true&output=xml' target='_blank'>Google Calendar.</a> ");
		} else {
			inviteResponse.html("Awww! You sure you don't want to come?");
		}
		showResponse();
	});

	/** MOBILE FUNCTIONALITY **/

	// RSVP button
	rsvpBtn.on('click',function(e){
		e.preventDefault();
		if(!invitationOpen) {
			rsvpBtn.html('CLOSE');
			invitation.stop().fadeIn("slow",function(){
				invitationOpen = true;
			});
			// put invitation at top of the screen
		} else {
			rsvpBtn.html('RSVP');
			invitation.stop().fadeOut("slow",function(){
				invitationOpen = false;
				// remove inline style so media-queries will so invitation again
				removeInlineStyle();
			});
		}
	});

})();