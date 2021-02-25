$(document).ready(function(){
	$(window).scroll(function(){
		if (this.scrollY > 20){
			$('.navbar').addClass("sticky");

		}else{
			$('.navbar').removeClass("sticky");
		}
	});
	
	//toggle menu/navbar script
	$('menu-btn').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});
	

	//typing animation script
	var typed = new Typed(".typing", {
		strings: ["Audit","Consulting", "Data Analysis"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});


});

// função butão :D

function leiaMais1(){
	var pontos1=document.getElementById("pontos1");
	var maisTexto1=document.getElementById("mais1");
	var btnLeiaMais1=document.getElementById("btnLeiaMais1");

	if (pontos1.style.display === "none"){
		pontos1.style.display="inline";
		maisTexto1.style.display="none";
		btnLeiaMais1.innerHTML="Read More";
	}else{
		pontos1.style.display="none";
		maisTexto1.style.display="inline";
		btnLeiaMais1.innerHTML="Read Less";
	}
}

function leiaMais2(){
	var pontos2=document.getElementById("pontos2");
	var maisTexto2=document.getElementById("mais2");
	var btnLeiaMais2=document.getElementById("btnLeiaMais2");

	if (pontos2.style.display === "none"){
		pontos2.style.display="inline";
		maisTexto2.style.display="none";
		btnLeiaMais2.innerHTML="Read More";
	}else{
		pontos2.style.display="none";
		maisTexto2.style.display="inline";
		btnLeiaMais2.innerHTML="Read Less";
	}

}

function leiaMais3(){
	var pontos3=document.getElementById("pontos3");
	var maisTexto3=document.getElementById("mais3");
	var btnLeiaMais3=document.getElementById("btnLeiaMais3");

	if (pontos3.style.display === "none"){
		pontos3.style.display="inline";
		maisTexto3.style.display="none";
		btnLeiaMais3.innerHTML="Read More";
	}else{
		pontos3.style.display="none";
		maisTexto3.style.display="inline";
		btnLeiaMais3.innerHTML="Read Less";
	}

}

function leiaMais4(){
	var pontos4=document.getElementById("pontos4");
	var maisTexto4=document.getElementById("mais4");
	var btnLeiaMais4=document.getElementById("btnLeiaMais4");

	if (pontos4.style.display === "none"){
		pontos4.style.display="inline";
		maisTexto4.style.display="none";
		btnLeiaMais4.innerHTML="Read More";
	}else{
		pontos4.style.display="none";
		maisTexto4.style.display="inline";
		btnLeiaMais4.innerHTML="Read Less";
	}

}

function leiaMais5(){
	var pontos5=document.getElementById("pontos5");
	var maisTexto5=document.getElementById("mais5");
	var btnLeiaMais5=document.getElementById("btnLeiaMais5");

	if (pontos5.style.display === "none"){
		pontos5.style.display="inline";
		maisTexto5.style.display="none";
		btnLeiaMais5.innerHTML="Read More";
	}else{
		pontos5.style.display="none";
		maisTexto5.style.display="inline";
		btnLeiaMais5.innerHTML="Read Less";
	}

}
