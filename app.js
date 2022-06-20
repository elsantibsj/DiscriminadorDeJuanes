
formulario.addEventListener("submit", validar);


function validar(e){
	e.preventDefault();
	nombre = document.querySelector("#nombre").value;

	respuesta = document.getElementById("respuesta");
	formulario.reset();

	if (nombre.includes("uan")){
	respuesta.style.color = "red";
	respuesta.textContent = 'Nombre NO válido: '+nombre;
}
else{
	respuesta.style.color = "black"
	respuesta.textContent = 'Nombre válido: '+nombre;
}
}