(function(){
	var invitBtn = $('.invitation-btn');

	// invitation-btn functionality
	invitBtn.on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
})();