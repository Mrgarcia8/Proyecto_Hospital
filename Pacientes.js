function mostrarPacientes() {
    let paciente = []
    let localpacientes = localStorage.getItem("Pacientes")
    if (localpacientes) {
        paciente = JSON.parse(localpacientes)
    }
    const tablapacientes = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablapacientes.getElementsByTagName("tbody")[0]

    paciente.forEach(paciente => {
        let fila = cuerpoTabla.insertRow()
        const celdaNombrePaciente = fila.insertCell()
        celdaNombrePaciente.textContent= paciente.nombrepaciente
        const celdaApellidoPaciente = fila.insertCell();
        celdaApellidoPaciente.textContent=paciente.apellidopaciente
        const celdaCedula = fila.insertCell();
        celdaCedula.textContent=paciente.cedula
        const celdaEdad = fila.insertCell();
        celdaEdad.textContent=paciente.edad
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=paciente.telefono
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=paciente.especialidad
        const celdaDoctor = fila.insertCell();
        celdaDoctor.textContent="Por asignar"
    });
}

mostrarPacientes()