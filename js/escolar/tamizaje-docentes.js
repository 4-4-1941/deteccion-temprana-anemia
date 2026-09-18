"use strict";
window.TamizajeDocente={
  evaluar(){
    const marcados=[...document.querySelectorAll("[data-alerta-escolar]:checked")];
    const dominios=new Set(marcados.map(x=>x.dataset.dominio));
    const persistente=document.getElementById("persistencia").value==="si";
    const cambio=document.getElementById("cambioHabitual").value==="si";
    const interferencia=document.getElementById("interferencia").value;
    let nivel="Verde",clase="verde";
    if(interferencia==="marcada"||(marcados.length>=4&&dominios.size>=2&&persistente&&cambio)){
      nivel="Rojo";clase="rojo";
    }else if(marcados.length>0||persistente||cambio||interferencia==="leve"){
      nivel="Amarillo";clase="amarillo";
    }
    return{
      nivel,clase,total:marcados.length,dominios:dominios.size,persistente,cambio,interferencia,
      indicadores:marcados.map(x=>x.value),
      mensaje:nivel==="Rojo"?"Alerta funcional alta: comunicar a la familia y orientar a evaluación en el establecimiento de salud. No equivale a diagnóstico de anemia.":nivel==="Amarillo"?"Alerta funcional: observar evolución, revisar contexto y considerar coordinación con familia/salud si persiste.":"Sin alerta funcional persistente identificada en este registro.",
      validacion:"ALGORITMO_PILOTO_NO_VALIDADO"
    };
  },
  render(){
    const e=this.evaluar(),r=document.getElementById("resultadoEscolar");
    r.className="result "+e.clase;
    r.innerHTML="<strong>"+e.nivel+"</strong><br>"+e.mensaje+"<br><span class='small'>Indicadores: "+e.total+" · dominios: "+e.dominios+" · algoritmo piloto no validado.</span>";
    return e;
  }
};
