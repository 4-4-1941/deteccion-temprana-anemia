"use strict";
window.SeguimientoSalud={
  mostrar(){
    const p=window.Paciente.leerSalud(),el=document.getElementById("orientacionControl");
    if(p.edadMeses===null){el.textContent="Ingrese fecha de nacimiento y fecha de evaluación para orientar el calendario.";return}
    const f=window.AnemiaNormativa.controlesPrevencion.find(x=>p.edadMeses>=x.minMeses&&p.edadMeses<=x.maxMeses);
    el.textContent=f?"Orientación preventiva por edad: "+f.texto+" Fuente operativa: Manual HIS MINSA basado en NTS 213/RM 429.":"Sin regla preventiva cargada para este grupo etario en esta versión.";
  }
};
