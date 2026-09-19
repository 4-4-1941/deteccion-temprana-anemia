"use strict";
window.SeguimientoEscolar={
  codigo(id){
    const e=document.getElementById(id);
    return e?e.value.trim():"";
  },
  registrarArticulacion(){
    const codigo=this.codigo("codigoCasoArticulacion");
    const box=document.getElementById("historialArticulacion");
    if(!codigo){if(box)box.innerHTML="<p class='small'>Ingrese el código del estudiante/caso.</p>";return null;}
    const r={
      codigo,
      fecha:document.getElementById("fechaComunicacion").value,
      comunicacionFamilia:document.getElementById("comunicacionFamilia").value,
      orientacionSalud:document.getElementById("orientacionSalud").value,
      resultado:document.getElementById("resultadoArticulacion").value,
      observaciones:document.getElementById("observacionesArticulacion").value.trim()
    };
    window.App.guardar("articulacion_familia_salud",r);
    window.App.sincronizarCodigo(codigo);
    this.mostrarArticulacion();
    return r;
  },
  registrar(){
    const codigo=this.codigo("codigoCasoSeguimiento")||this.codigo("codigoEstudiante")||this.codigo("codigoCasoObservacion");
    if(!codigo){document.getElementById("historialEscolar").innerHTML="<p class='small'>Ingrese el código del estudiante/caso.</p>";return null;}
    const r={codigo,fecha:document.getElementById("fechaSeguimiento").value,asistencia:document.getElementById("segAsistencia").value,rendimiento:document.getElementById("segRendimiento").value,alertaEnergia:document.getElementById("segAlerta").value,observaciones:document.getElementById("segObservaciones").value.trim()};
    window.App.guardar("seguimiento_escolar",r);window.App.sincronizarCodigo(codigo);this.mostrar();return r;
  },
  mostrar(){
    const h=document.getElementById("historialEscolar");if(!h)return;
    const r=window.App.datos().filter(x=>x.tipo==="seguimiento_escolar");
    h.innerHTML=r.length?"<table><thead><tr><th>Fecha</th><th>Código</th><th>Asistencia</th><th>Rendimiento</th><th>Alerta/energía</th></tr></thead><tbody>"+r.slice().reverse().map(x=>"<tr><td>"+App.escape(x.fecha||"")+"</td><td>"+App.escape(x.codigo)+"</td><td>"+App.escape(x.asistencia)+"</td><td>"+App.escape(x.rendimiento)+"</td><td>"+App.escape(x.alertaEnergia)+"</td></tr>").join("")+"</tbody></table>":"<p class='small'>Sin seguimientos guardados.</p>";
  },
  mostrarArticulacion(){
    const h=document.getElementById("historialArticulacion");if(!h)return;
    const r=window.App.datos().filter(x=>x.tipo==="articulacion_familia_salud");
    h.innerHTML=r.length?"<table><thead><tr><th>Fecha</th><th>Código</th><th>Familia</th><th>Orientación salud</th><th>Resultado</th></tr></thead><tbody>"+r.slice().reverse().map(x=>"<tr><td>"+App.escape(x.fecha||"")+"</td><td>"+App.escape(x.codigo)+"</td><td>"+App.escape(x.comunicacionFamilia)+"</td><td>"+App.escape(x.orientacionSalud)+"</td><td>"+App.escape(x.resultado)+"</td></tr>").join("")+"</tbody></table>":"<p class='small'>Sin registros de articulación.</p>";
  }
};
