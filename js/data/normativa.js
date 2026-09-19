"use strict";
window.AnemiaNormativa=Object.freeze({
  version:"NTS-213 + RM-429-2024",
  fuentes:[
    "NTS N.° 213-MINSA/DGIESP-2024, aprobada por RM N.° 251-2024-MINSA",
    "RM N.° 429-2024-MINSA",
    "Manual HIS MINSA, diciembre 2024"
  ],
  ajusteAltitud:[
    {min:0,max:499,ajuste:0.0},{min:500,max:999,ajuste:0.4},
    {min:1000,max:1499,ajuste:0.8},{min:1500,max:1999,ajuste:1.1},
    {min:2000,max:2499,ajuste:1.4},{min:2500,max:2999,ajuste:1.8},
    {min:3000,max:3499,ajuste:2.1},{min:3500,max:3999,ajuste:2.5},
    {min:4000,max:4499,ajuste:2.9},{min:4500,max:4999,ajuste:3.3},
    {min:5000,max:5500,ajuste:4.0}
  ],
  controlesPrevencion:[
    {minMeses:6,maxMeses:11,texto:"3 mediciones: desde los 6 meses, al tercer mes de suplementación y al término."},
    {minMeses:12,maxMeses:23,texto:"3 mediciones: antes de suplementación, al tercer mes y al término."},
    {minMeses:24,maxMeses:59,texto:"2 mediciones al año: antes y al término de la suplementación."},
    {minMeses:60,maxMeses:143,texto:"1 medición al año."}
  ],
  nota:"La alerta docente es preventiva. No diagnostica anemia ni sustituye la evaluación sanitaria."
});
