formulario.addEventListener("submit", validar);


function validar(e){
	e.preventDefault();
	nombre = document.querySelector("#nombre").value;

	respuesta = document.getElementById("respuesta");
	todo = document.getElementById("todo");

	if (nombre.includes("uan")){
	respuesta.style.color = "red";
	respuesta.textContent = 'Nombre NO válido: '+nombre;
	var image = document.createElement('img');
	image.src = 'juan.jpg';
	document.querySelector('body').appendChild(image);
	modalBackground.style.display = "block";
	todo.remove();
}
else if (nombre != ""){
	respuesta.style.color = "black"
	respuesta.textContent = 'Nombre válido: '+nombre;
	formulario.reset();
}
else{
	respuesta.textContent = 'Por favor, ingrese un nombre';
}
}