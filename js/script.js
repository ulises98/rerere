$(document).ready(function(){
	$("#mayoria_edad").click(function(evento){		
      if ($("#mayoria_edad").prop('checked')){
		 $("#formulariomayores").css("display", "block");
      }else{
		 $("#formulariomayores").css("display", "none");
      }
	  
   });
   
   $("#nomas").click(function(evento){		
      if ($("#nomas").prop('checked')){
		 $("#finboton").css("display", "block");
      }else{
		 $("#finboton").css("display", "none");
      }
	  
   });
   
   
	$( "#clickparrafo" ).click(function() {
		$("#clickparrafo").css("background", "blue");
	});
});