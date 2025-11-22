document.getElementById('btn-toggle-otros').addEventListener('click', function() {
  const contenido = document.getElementById('contenido-otros');
  
  // Alterna la clase 'mostrar' para expandir o colapsar
  contenido.classList.toggle('mostrar'); 
});