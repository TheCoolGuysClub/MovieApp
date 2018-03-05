$(document).ready(function() {
  const titleInput = $('#movie-title');
  const poster = $('#poster');
  const errorMessage = $('#error-message');
  const director = $(`#director`);
 const actors = $(`#actors`);
  titleInput.on('keyup', function(e) {
    if(e.key === 'Enter') {
      const movieTitle = titleInput.val();
      titleInput.val('');
      $.get(`/movieInfo?title=${movieTitle}`, (response) => {
        if (response.poster) {
          errorMessage.addClass('hidden');
          director.removeClass('hidden');
          director.text(`${response.director}`);
          actors.removeClass('hidden');
          actors.text(`This is played by ${response.actors}`)
          poster.removeClass('hidden');
          poster.attr('src', response.poster);
        } else {
          errorMessage.removeClass('hidden');
          errorMessage.text(`Could not locate poster for ${movieTitle}`);
          poster.addClass('hidden');
          director.addClass('hidden');
          actors.addClass('hidden');

        }
        
      })
      // window.location.replace('/movie');
    }
  })
})
