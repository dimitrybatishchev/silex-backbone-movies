Movie.Model.Movie = Backbone.Model.extend({
        urlRoot: '/silex-backbone-movies/web/api/movie',
        defaults: {
            title: "",
            country: "",
            director: "",
            year: "",
            genre: ""
        }
    });