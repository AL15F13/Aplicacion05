// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btndatos').on ('click', function(){
		$('body').pagecontainer("change", "#datos",
		{transition:"pop"});
		
		$('#btnresultado').on ('click', function(){
			$('body').pagecontainer("change", "#resultado",
			{transition:"pop"});
			var imc;
			var peso = $('#txtpeso').val();
			var talla = $('#txttalla').val();
			imc=(peso/(talla*talla));
			$('#imc').text('Nombre ' +$('#txtnombre').val()
			+' imc= ' + imc);
		
	}); //Click 'btndatos'
	}); //Click 'btnresultado'
//}); 
});