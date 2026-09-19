"use strict";

window.TamizajeDocente = {
  leer() {
    const marcados = [...document.querySelectorAll("[data-alerta-escolar]:checked")];

    return {
      indicadores: marcados.map((x) => ({
        codigo: x.value,
        dominio: x.dataset.dominio || ""
      })),
      persistente: document.getElementById("persistencia").value === "si",
      cambioHabitual: document.getElementById("cambioHabitual").value === "si",
      interferencia: document.getElementById("interferencia").value
    };
  },

  evaluar() {
    return this.leer();
  },

  resumen(registro) {
    const nombres = {
      fatiga: "fatiga o cansancio frecuente",
      actividad: "menor actividad o participación",
      somnolencia: "somnolencia o menor nivel de alerta",
      atencion: "dificultad de atención o concentración",
      rendimiento: "cambio del rendimiento respecto a su nivel habitual",
      ausencias: "cambios en asistencia o continuidad escolar",
      irritabilidad: "irritabilidad o cambio socioemocional persistente",
      retraimiento: "apatía, retraimiento o menor interacción",
      palidez: "palidez observable"
    };

    const seleccionadas = registro.indicadores.map((x) => nombres[x.codigo] || x.codigo);

    if (!seleccionadas.length &&
        !registro.persistente &&
        !registro.cambioHabitual &&
        registro.interferencia === "ninguna") {
      return "No se registraron cambios en esta observación. Mantener observación habitual.";
    }

    const partes = [];

    if (seleccionadas.length) {
      partes.push("Observaciones: " + seleccionadas.join(", ") + ".");
    }

    partes.push("Persistencia: " + (registro.persistente ? "sí" : "no") + ".");
    partes.push("Cambio respecto al funcionamiento habitual: " + (registro.cambioHabitual ? "sí" : "no") + ".");
    partes.push("Interferencia: " + registro.interferencia + ".");
    partes.push("Estas observaciones no diagnostican anemia. Deben interpretarse en su contexto y comunicarse a la familia o al equipo de salud cuando generen preocupación o requieran evaluación.");

    return partes.join(" ");
  },

  render(registro) {
    const r = document.getElementById("resultadoEscolar");
    r.className = "result";
    r.textContent = this.resumen(registro);
  },

  registrar() {
    const registro = this.leer();
    this.render(registro);

    if (window.App && typeof window.App.guardar === "function") {
      window.App.guardar("observacion_preventiva", registro);
    }

    return registro;
  }
};
