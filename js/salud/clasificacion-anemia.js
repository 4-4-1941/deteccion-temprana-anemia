"use strict";
window.ClasificacionAnemia={
  evaluar(){
    const r=document.getElementById("resultadoSalud");
    try{
      const h=window.Hemoglobina.evaluar();
      r.className="result";
      r.innerHTML="<strong>Evaluación hematológica registrada</strong><br>Edad: "+h.edadMeses+" meses<br>Hb observada: "+h.hbObservada.toFixed(1)+" g/dL<br>Altitud: "+h.altitud+" m s. n. m.<br>Ajuste por altitud: "+(h.ajusteAltitud===null?"fuera de tabla":h.ajusteAltitud.toFixed(1)+" g/dL")+"<br>Hb ajustada: "+(h.hbAjustada===null?"no calculable":h.hbAjustada.toFixed(2)+" g/dL")+"<br><span class='small'>La clasificación automática por gravedad permanece desactivada hasta cerrar la verificación documental de los puntos de corte por edad. No inferir anemia ferropénica a partir de Hb sola.</span>";
      window.App.guardar("evaluacion_salud",h); return h;
    }catch(e){r.className="result rojo";r.textContent=e.message;return null}
  }
};
