
window.addEventListener("DOMContentLoaded", function(){
	document.getElementById("inicios").onclick = (e) => { mostrarInicio(); e.preventDefault(); };
	document.getElementById("servicios").onclick = (e) => { mostrarServicios(); e.preventDefault(); };
	document.getElementById("conoce").onclick = (e) => {mostrarConoce(); e.preventDefault(); };
	document.getElementById("contactos").onclick = (e) => {mostrarContacto(); e.preventDefault(); };

});

function mostrarInicio () {
	const rowServicios = document.querySelector("#servicio");
	const rowInicio = document.querySelector("#inicio");
	const rowConoce = document.querySelector("#conocenos");
	const rowContacto = document.querySelector("#contacto");
	if (rowInicio.style.display === "none") 
	{
		rowInicio.style.display = "block";
		rowServicios.style.display = "none";
		rowConoce.style.display = "none";
		rowContacto.style.display = "none";
	}
}

function mostrarServicios () {
	const rowServicios = document.querySelector("#servicio");
	const rowInicio = document.querySelector("#inicio");
	const rowConoce = document.querySelector("#conocenos");
	const rowContacto = document.querySelector("#contacto");
	if (rowServicios.style.display === "none") 
	{
		rowServicios.style.display = "block";
		rowInicio.style.display = "none";
		rowConoce.style.display = "none";
		rowContacto.style.display = "none";
	}
}

function mostrarConoce () {
	const rowServicios = document.querySelector("#servicio");
	const rowConoce = document.querySelector("#conocenos");
	const rowInicio = document.querySelector("#inicio");
	const rowContacto = document.querySelector("#contacto");
	if (rowConoce.style.display === "none") 
	{
		rowConoce.style.display = "block";
		rowInicio.style.display = "none";
		rowServicios.style.display = "none";
		rowContacto.style.display = "none";
	}
}

function mostrarContacto () {
	const rowServicios = document.querySelector("#servicio");
	const rowContacto = document.querySelector("#contacto");
	const rowInicio = document.querySelector("#inicio");
	const rowConoce = document.querySelector("#conocenos");
	if (rowContacto.style.display === "none") 
	{
		rowContacto.style.display = "block";
		rowInicio.style.display = "none";
		rowServicios.style.display = "none";
		rowConoce.style.display = "none";
	}
}

