$(document).ready(function() {
  const titleInput = $('#movie-title');
  titleInput.on('keyup', function(e) {
    if(e.key === 'Enter') {
      const movieTitle = titleInput.val();
      titleInput.val('');
      $.get(`/movieInfo?title=${movieTitle}`, (response) => {
        
      })
      // window.location.replace('/movie');
    }
  })
})
