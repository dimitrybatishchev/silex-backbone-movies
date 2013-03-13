Movie.Collection.Movie = Backbone.Collection.extend({
        model: Movie.Model.Movie,
        url: '/silex-backbone-movies/web/api/movie'
    });
