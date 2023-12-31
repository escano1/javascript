class Servicio {
  constructor(nombre, costo) {
    this.nombre = nombre;
    this.costo = costo;
  }

  static lista = [];

  static calcularServicio() {

    const lista_servicios = ["Instalacion_electrica","Mantenimiento","Diseño"]

    let instalacion_electrica = 0;
    let mantenimiento = 0;
    let diseño = 0;

    for (let i = 0; i < lista_servicios.length; i++) {
      let servicio = confirm("Desea servicio de: " + lista_servicios[i]);

      if (i === 0 && servicio === true) {
        let mt2_instalacion = parseFloat(prompt("¿Cuantos metros cuadrados requiere la instalacion electrica?"));
        instalacion_electrica = mt2_instalacion * 80000;
      } else if (i === 1 && servicio === true) {
        let medidores = parseInt(prompt("¿Cuantos medidores requieren mantenimiento?"));
        mantenimiento = medidores * 50000;
      } else if (i === 2 && servicio === true) {
        let mt2_diseño = parseFloat(prompt("¿Cuantos metros cuadrados de diseño electrico necesitas?"));
        diseño = mt2_diseño * 10000;
      }else{
        instalacion_electrica = 0;
        mantenimiento = 0;
        diseño = 0;
      }
    }

    let servicio1 = new Servicio("Instalacion electrica", instalacion_electrica);
    let servicio2 = new Servicio("Mantenimiento", mantenimiento);
    let servicio3 = new Servicio("Diseño", diseño);
    Servicio.lista = [servicio1, servicio2, servicio3];
    console.table(Servicio.lista);
  }

  static agregarServicioAdicional(nombre) {
    let costo;
    if (nombre === "Diseño") {
      let mt2_diseño = parseFloat(prompt("¿Cuantos metros cuadrados de diseño electrico necesitas?"));
      costo = mt2_diseño * 10000;
    } else if (nombre === "Mantenimiento") {
      let medidores = parseInt(prompt("¿Cuantos medidores requieren mantenimiento?"));
      costo = medidores * 50000;
    } else if (nombre === "Instalacion_electrica") {
      let mt2_instalacion = parseFloat(prompt("¿Cuantos metros cuadrados requiere la instalacion electrica?"));
      costo = mt2_instalacion * 80000;
    } else {
      console.log("No se puede agregar un servicio diferente a Diseño, Mantenimiento o Instalacion electrica.");
      return;
    }

    const nuevoServicio = new Servicio(nombre, costo);
    Servicio.lista.push(nuevoServicio);
    console.table(Servicio.lista);
  } 
}

// Llamar al método estático de la clase Servicio
Servicio.calcularServicio();