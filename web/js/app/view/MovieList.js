Movie.View.MovieList = Backbone.View.extend({
        el: $('#container'),
 
        initialize: function() {
            this.template = Movie.Template.MovieList;
            this.collection = new Movie.Collection.Movie;
        },

        render: function() {
            this.$el.html(this.template({ movies: this.collection.toJSON()}));
        }
        
    });
