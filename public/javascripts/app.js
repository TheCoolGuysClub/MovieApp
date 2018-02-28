$(document).ready(function() {
  const titleInput = $('#movie-title');
  const poster = $('#poster');
  const errorMessage = $('#error-message')
  titleInput.on('keyup', function(e) {
    if(e.key === 'Enter') {
      const movieTitle = titleInput.val();
      titleInput.val('');
      $.get(`/movieInfo?title=${movieTitle}`, (response) => {
        if (response.poster) {
          // errorMessage.addClass('hidden');
          poster.removeClass('hidden');
          poster.attr('src', response.poster);
        } else {
          // errorMessage.removeClass('hidden');
          // errorMessage.text(``)
          poster.addClass('hidden');
          alert(`Couldn't locate poster for ${movieTitle}`);
        }
      })
      // window.location.replace('/movie');
    }
  })
})
