window.addEventListener("load", function() {
	var boton = document.getElementById("calcular");
	boton.addEventListener("click", function() {
        var cantSeg = parseInt(document.getElementById("segundos").value);
		setInterval(cambioColor,cantSeg*1000);
	});
    
    function cambioColor(){
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=color;
    }
});