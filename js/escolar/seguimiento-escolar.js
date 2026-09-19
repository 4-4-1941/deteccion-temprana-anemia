"use strict";
window.SeguimientoEscolar={
  registrar(){
    const caso=document.getElementById("codigoEstudiante").value.trim()||"sin-código";
    const registro={
      codigo:caso,
      fecha:document.getElementById("fechaSeguimiento").value,
      asistencia:document.getElementById("segAsistencia").value,
      rendimiento:document.getElementById("segRendimiento").value,
      alertaEnergia:document.getElementById("segAlerta").value,
      observaciones:document.getElementById("segObservaciones").value.trim(),
      alertaInicial:window.TamizajeDocente.evaluar()
    };
    window.App.guardar("seguimiento_escolar",registro);
    this.mostrar(); return registro;
  },
  mostrar(){
    const h=document.getElementById("historialEscolar");
    const a=window.App.datos().filter(x=>x.tipo==="seguimiento_escolar");
    h.innerHTML=a.length?"<table><thead><tr><th>Fecha</th><th>Código</th><th>Asistencia</th><th>Rendimiento</th><th>Alerta/energía</th></tr></thead><tbody>"+a.slice().reverse().map(x=>"<tr><td>"+window.App.escape(x.fecha||"")+"</td><td>"+window.App.escape(x.codigo)+"</td><td>"+window.App.escape(x.asistencia)+"</td><td>"+window.App.escape(x.rendimiento)+"</td><td>"+window.App.escape(x.alertaEnergia)+"</td></tr>").join("")+"</tbody></table>":"<p class='small'>Sin seguimientos guardados.</p>";
  }
};
