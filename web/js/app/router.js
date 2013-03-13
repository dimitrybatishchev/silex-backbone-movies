Movie.Router = Backbone.Router.extend({
        routes: {
            '':     'movieList',
            'movie/add': 'add',
            'movie/:id': 'movieDetail',
            'movie/:id/edit': 'edit'
            
        },
        initialize: function() {
            this.views = {};
        },
        add: function() {
            this.addOrEdit(function(movie, view) {
                view.render();
            }, null);
        },
        edit: function(id) {
            this.addOrEdit(function(movie, view) {
                movie.fetch({
                    success: function() {
                        view.render();
                    }
                });
            }, id);
        },
        addOrEdit: function(callback, id) {
            var movie, view;

            movie = new Movie.Model.Movie({ id: id });
            view = this.views.movieAdd = this.views.movieAdd || new Movie.View.MovieAdd();
            view.model = movie;

            callback(movie, view);

            view.on('back', function() {
                delete view;
                this.navigate('#/')
            }.bind(this));
            view.model.on('save-success', function() {
                delete view;
                this.navigate('#/');
            }.bind(this));
        },
        movieList: function() {
            var view = this.views.list = this.views.list || new Movie.View.MovieList;
            view.collection.fetch({
               success: function() {
                   view.render();
                }
            });
        },
        movieDetail: function(id){
            var movie = new Movie.Model.Movie({ id: id });
            var view = this.views.movieDetail = this.views.movieDetail || new Movie.View.MovieDetail();
            view.model = movie;
            
            movie.fetch({
                success: function () {
                   view.render();
                }
            });   
            
            view.on('edit', function() {
                delete view;
                this.navigate('#/movie/'+movie.id+'/edit')
            }.bind(this));
            view.model.on('delete-success', function() {
                delete view;
                this.navigate('#/');
            }.bind(this));
        }
    });

utils.loadTemplate(['MovieDetail', 'MovieForm', 'MovieList'], function() {
    new Movie.Router;
    Backbone.history.start();
});