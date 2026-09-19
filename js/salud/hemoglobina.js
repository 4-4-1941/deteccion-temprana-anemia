"use strict";
window.Hemoglobina={
  evaluar(){
    const p=window.Paciente.leerSalud();
    if(p.edadMeses===null)throw new Error("Ingrese fechas válidas de nacimiento y evaluación.");
    if(!Number.isFinite(p.hbObservada)||p.hbObservada<1||p.hbObservada>25)throw new Error("Ingrese una hemoglobina válida entre 1 y 25 g/dL.");
    if(!Number.isFinite(p.altitud)||p.altitud<0||p.altitud>5500)throw new Error("Ingrese una altitud válida entre 0 y 5500 m s. n. m.");
    const ajuste=window.Altitud.ajuste(p.altitud);
    return{...p,ajusteAltitud:ajuste,hbAjustada:window.Altitud.corregir(p.hbObservada,p.altitud)};
  }
};
