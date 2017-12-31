/*-----------------------------------------------------------------------------------
/* Styles Switcher
-----------------------------------------------------------------------------------*/

window.console = window.console || (function(){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();


jQuery(document).ready(function($) {
	
		// Color Changer
		$(".green" ).click(function(){
			$("#colors" ).attr("href", "css/color/green.css" );
			return false;
		});
		$(".blue" ).click(function(){
			$("#colors" ).attr("href", "css/color/blue.css" );
			return false;
		});
		$(".orange" ).click(function(){
			$("#colors" ).attr("href", "css/color/orange.css" );
			return false;
		});
		$(".yellow" ).click(function(){
			$("#colors" ).attr("href", "css/color/yellow.css" );
			return false;
		});	
		$(".red" ).click(function(){
			$("#colors" ).attr("href", "css/color/red.css" );
			return false;
		});
		$(".purple" ).click(function(){
			$("#colors" ).attr("href", "css/color/purple.css" );
			return false;
		});
		$(".pink" ).click(function(){
			$("#colors" ).attr("href", "css/color/pink.css" );
			return false;
		});
		$(".gray" ).click(function(){
			$("#colors" ).attr("href", "css/color/gray.css" );
			return false;
		});
		
		
		

		$("#style-switcher h2 a").click(function(e){
			e.preventDefault();
			var div = $("#style-switcher");
			console.log(div.css("left"));
			if (div.css("left") === "-186px") {
				$("#style-switcher").animate({
					left: "0px"
				}); 
			} else {
				$("#style-switcher").animate({
					left: "-186px"
				});
			}
		});

	
		//Layout Switcher
	   $("#layout-style").change(function(e){
			if( $(this).val() == 1){
				$("body").removeClass("boxed"), 
				$(window).resize();
				stickyheader = !stickyheader;
			} else{
				$("body").addClass("boxed"),
				$(window).resize();
				stickyheader = !stickyheader;
			}
		});

		$("#layout-switcher").on('change', function() {
			$('#layout').attr('href', $(this).val() + '.css');
		});

		$(".colors li a").click(function(e){
			e.preventDefault();
			$(this).parent().parent().find("a").removeClass("active");
			$(this).addClass("active");
		});
		
		$('.bg li a').click(function() {
			var current = $('#style-switcher select[id=layout-style]').find('option:selected').val();
			if(current == '2') {
				var bg = $(this).css("backgroundImage");
				$("body").css("backgroundImage",bg);
			} else {
				alert('Please select boxed layout');
			}
		});	

		$("#reset a").click(function(e){
			var bg = $(this).css("backgroundImage");
			$("body").css("backgroundImage","url(images/bg/noise.png)");
			$("#navigation" ).removeClass("style-2")
		});
			

	});