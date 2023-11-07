import { pedirCarta,valorCarta,crearCartaHtml } from "./";

/**
 * Turno PC
 * @param {Number} puntosMinimos que  la pc necesita prar ganar
 * @param {HTMLElement} puntosHTML elemento HTML para construir en pantalla los puntos
 * @param {divCartasComputadora} divCartasComputadora elemento HTML que muestra imagen de cartas de la pc
 * @param {Array<String>} deck 
 */

// turno de la computadora
export const turnoComputadora = (puntosMinimos, puntosHTML,divCartasComputadora, deck=[]) => {
    //!Verifico con un if si los puntosMinimos vienen
    if(!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    //!Verifico con un if si los puntosHTML vienen
    if(!puntosHTML) throw new Error('Argumento puntosHTML son necesarios');
   
    let puntosComputadora = 0;

    do {
      const carta = pedirCarta(deck);
  
      puntosComputadora = puntosComputadora + valorCarta(carta);
      puntosHTML.innerText = puntosComputadora;
  
      //todo crear carta
      const imgCarta = crearCartaHtml(carta)
      divCartasComputadora.append(imgCarta);
    
      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);
  
    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("Nadie gana :(");
      } else if (puntosMinimos > 21) {
        alert("Computadora gana");
      } else if (puntosComputadora > 21) {
        alert("Jugador Gana");
      } else {
        alert("Computadora Gana");
      }
    }, 100);
  };