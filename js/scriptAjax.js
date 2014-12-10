$(function()
{

	$("#portfolio").sortable({
		stop:function(){
			var list = $("#portfolio").html();
			$.post("change.php",{list:list});
		}
	});

	//FILTERING RESULTS BY USING THE KEY UP FUNCTION

		$("#search").keyup(function(){
		var current_query = $("#search").val();
		if(current_query == "")
		{
			$("#portfolio li").fadeIn();
		}
		else
		{
			$("#portfolio li").hide();
			$("#portfolio li").each(function(){								// .each will loop through each of the li's within portfolio
				var current_keyword = $(this).attr("data-keywords");		// current_keyword would take the value of attribute called data-keyword of current li
				if(current_keyword.indexOf(current_query) >=0){				//it will check if the the currrent query exists in data-keyword attribute of li
					$(this).fadeIn();
				}
			});
		}
	});

	var current_li;

	function setImg(src,id){
		$("#main").attr("src", src); //look for image tag in the main and sets its src value to variable source
		var path = "text/"+id + ".txt";
		$.get(path,function(data){
			$("#description p").html(data);
		});
	}

	$("#portfolio img").click(function()
	{
		var src = $(this).attr("src"); //grab the source of the image 'attr' means attribute
		var id = $(this).attr("id");
		current_li = $(this).parent();
		setImg(src,id);
		$("#frame").fadeIn();
		$("#overlay").fadeIn();
	});
		
	$("#overlay").click(function(){
		$(this).fadeOut();
		$("#frame").fadeOut();

	});
	$("#right").click(function(){
		if(current_li.is(":last-child"))
		{
			var next_li = $("#portfolio li").first();
		}	
		else
		{
			var next_li = current_li.next();
		}
		var next_src= next_li.children("img").attr("src");
		var id= next_li.children("img").attr("id");
		setImg(next_src,id);
		current_li = next_li;
	});
	$("#left").click(function()
	{
		if(current_li.is(":first-child"))
		{
			var prev_li = $("#portfolio li").last();
		}
		else
		{
			var prev_li = current_li.prev();
		}
		var prev_src= prev_li.children("img").attr("src");
		var id= prev_li.children("img").attr("id");
		setImg(prev_src,id);
		current_li = prev_li;
	});
	$("#right, #left").mouseover(function()
	{
		$(this).css("opacity","0.9");
	});
	$("#right, #left").mouseleave(function()
	{
		$(this).css("opacity","0.6");
	});

});