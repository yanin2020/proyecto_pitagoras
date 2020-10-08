const grid = new Muuri('.grid',{
  layout: {
    rounding: false
  }
});
window.addEventListener('load',() => {
  grid.refreshitems().layout();
  document.getElementById('grid').classList.add('imagenes-cargadas');
});