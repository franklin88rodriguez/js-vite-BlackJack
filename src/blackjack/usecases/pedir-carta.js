/**
 *
 * @param {Array<String>} deck es un arreglo de strings
 * @returns {String} retorna la carta del deck.
 */

export const pedirCarta = (deck) => {
  let deckPedirCarta = deck;
  if (deckPedirCarta.length === 0) {
    throw "No hay cartas en el deck";
  }
  //*Quita la ultima carta del arreglo y la retorna
  const carta = deckPedirCarta.pop();
  return carta;
};

