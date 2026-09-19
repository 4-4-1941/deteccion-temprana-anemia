"use strict";
window.Paciente={
  edadMeses(fechaNacimiento,fechaEvaluacion){
    if(!fechaNacimiento||!fechaEvaluacion)return null;
    const n=new Date(fechaNacimiento+"T00:00:00"),e=new Date(fechaEvaluacion+"T00:00:00");
    if(Number.isNaN(n.getTime())||Number.isNaN(e.getTime())||e<n)return null;
    let m=(e.getFullYear()-n.getFullYear())*12+(e.getMonth()-n.getMonth());
    if(e.getDate()<n.getDate())m--;
    return m;
  },
  leerSalud(){
    const hb=document.getElementById("hbObservada").value;
    const alt=document.getElementById("altitud").value;
    const fn=document.getElementById("fechaNacimiento").value;
    const fe=document.getElementById("fechaEvaluacion").value;
    return{
      codigo:document.getElementById("codigoEstudiante").value.trim(),
      fechaNacimiento:fn,fechaEvaluacion:fe,
      edadMeses:this.edadMeses(fn,fe),
      grado:document.getElementById("grado").value.trim(),
      hbObservada:hb===""?null:Number(hb),
      altitud:alt===""?0:Number(alt)
    };
  }
};
