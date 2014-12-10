$(function()
{
	$("#filter li").click(function(){
		$("#filter li").removeClass("active");
		var category = $(this).html(); /// to get the content between the li
		if(category == "ALL" || category == "all")
		{
			$("#portfolio li").fadeIn();
		}
		else
		{
			//$(this).addClass("active");
			$("#portfolio li").fadeOut(1000); // fade out each of the photos
			$("#portfolio li").each(function(){ //to loop through all the li elements in portfolio
				if($(this).hasClass(category)){
					$(this).fadeIn(1000);
				}
			});
		}
		$(this).addClass("active");
	});
});