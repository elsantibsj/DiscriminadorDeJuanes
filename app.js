document.getElementById("juan").style.visibility = "hidden";

const music = document.getElementById("music");

formulario.addEventListener("submit", validar);


function validar(e){
	e.preventDefault();
	nombre = document.querySelector("#nombre").value;

	respuesta = document.getElementById("respuesta");
	todo = document.getElementById("todo");

	if (nombre.includes("uan")){
	respuesta.style.color = "red";
	respuesta.textContent = 'Nombre NO válido: '+nombre;
	todo.remove();
	document.getElementById("juan").style.visibility = "visible";
	music.volume = 1;
	music.play();

}
else if (nombre != ""){
	respuesta.style.color = "white"
	respuesta.textContent = 'Nombre válido: '+nombre;
	formulario.reset();
}
else{
	respuesta.textContent = 'Por favor, ingrese un nombre';
}
}