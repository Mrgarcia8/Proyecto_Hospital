const formulario = document.getElementById("registro-pacientes-form")
const nombrepaciente = document.getElementById("nombre")
const apellidopaciente = document.getElementById("apellido")
const cedula = document.getElementById("cedula")
const edad = document.getElementById("edad")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const Paciente ={
        nombrepaciente:nombrepaciente.value,
        apellidopaciente:apellidopaciente.value,
        cedula:cedula.value,
        edad:edad.value,
        telefono:telefono.value,
        especialidad:especialidad.value,
    }
    let Pacientes = []
    let localPacientes = localStorage.getItem("Pacientes")
    if (localPacientes) {
        Pacientes = JSON.parse(localPacientes)
    }
    Pacientes.push(Paciente)
    localStorage.setItem("Pacientes", JSON.stringify(Pacientes))
    formulario.reset()
    alert("Paciente registrado con exito")
})

