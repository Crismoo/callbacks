const koder = { 
    entrevistado : false, 
    ofertado : false, 
    inscrito : false, 
    enClase : false,
};

function entrevistar (koderAEntrevistar, callback) { 
    setTimeout(() => { 
        koderAEntrevistar.entrevistado = true;
        let error = null; 
        if (koderAEntrevistar.entrevistado === false) {
            error = "no se pudo entrevistar";
        }
        callback(error, koderAEntrevistar)
    }, 1000);
}
function ofertar (koderAOfertar, callback) { 
    setTimeout(() => { 
        koderAOfertar.ofertado = true;
        let error = null; 
        if (koderAOfertar.ofertado === false) {
            error = "no se pudo ofertar"
        }
        callback(error, koderAInscribir)
    }, 1000);
}
        callback(error, koderAInscribir)
    }, 1000);
}

function inscribir (koderAInscribir, callback) { 
    setTimeout(() => { 
        koderAInscribir.inscrito = true;
        let error = null; 
        if (koderAInscribir.inscrito === false) {
            error = "no se pudo inscribir"
        }
        callback(error, koderAInscribir)
    }, 1000);
}
function tomandoClase (koderEnClase, callback) { 
    setTimeout(() => { 
        koderEnClase.enrolado = true;
        let error = null; 
        if (koderEnClase.enrolado === false) {
            error = "no se pudo enrolar"
        }
        callback(error, koderEnClase)
    }, 1000);
}
entrevistar(koder, (errorDeEntrevista, koderEntrevistado) => {
    if (errorDeEntrevista) {
      console.error("Error de entrevista:", errorDeEntrevista);
      return; 
    }
  
    console.log('entrevistar')
    ofertar(koderEntrevistado, (errorDeOfertado, KoderOfertado) => {
      if (errorDeOfertado) {
        console.error("Error en ofertado:", errorDeOfertado);
        return;
      }
  
      console.log('ofertar')
      inscribir(KoderOfertado, (errorDeInscripcion, koderInscrito) => {
        if (errorDeInscripcion) {
          console.error("Error en Inscripcion:", errorDeInscripcion);
          return;
        }
        
      console.log('inscripcion')
      tomandoClase (KoderEnrolado, (errorEnEnrolar, koderEnRolado) => {
        if (errorEnEnrolar) {
          console.error("Error en Enrolar:", errorEnEnrolar);
          return;
  
      }
      console.log('entrevistar')
        console.log("KODER", koderEnRolado);
    });
  });