"use strict";
window.Altitud={
  ajuste(msnm){
    if(!Number.isFinite(msnm)||msnm<0||msnm>5500)return null;
    const fila=window.AnemiaNormativa.ajusteAltitud.find(x=>msnm>=x.min&&msnm<=x.max);
    return fila?fila.ajuste:null;
  },
  corregir(hb,msnm){
    const a=this.ajuste(msnm);
    if(!Number.isFinite(hb)||a===null)return null;
    return Number((hb-a).toFixed(2));
  }
};
