$(document).ready(function() {
  const titleInput = $('#movie-title');
  const poster = $('#poster');
  const errorMessage = $('#error-message');
  const title = $('#title');
  const year = $('#year');
  const cast = $('#cast');
  titleInput.on('keyup', function(e) {
    if(e.key === 'Enter') {
      const movieTitle = titleInput.val();
      titleInput.val('');
      $.get(`/movieInfo?title=${movieTitle}`, (response) => {
        if (response.poster) {
          errorMessage.addClass('hidden');
          title.removeClass('hidden');
          title.text();
          poster.removeClass('hidden');
          poster.attr('src', response.poster);
        } else {
          errorMessage.removeClass('hidden');
          errorMessage.text(`Could not locate poster for ${movieTitle}`);
          poster.addClass('hidden');

        }
        if (response.title) {
          title.text(response.title);
        } else {
          title.text("no title");
        }
        if (response.year) {
          year.text(response.year);
        } else {
          year.text("no year");
        }
        if (response.cast) {
          cast.text(response.cast);
        } else {
          cast.text("no cast");
        }
      })
      // window.location.replace('/movie');
    }
  })
})
