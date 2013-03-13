Movie.View.MovieDetail = Backbone.View.extend({
        el: $('#container'),

        initialize: function() {
            this.template = Movie.Template.MovieDetail;
        },
        
        events: {
            'click .delete': 'deleteMovie',
            'click .edit': 'editMovie'
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON() ));
        },
        
        deleteMovie: function() {
            this.model.destroy({
                success: function() {
                    console.log('Movie deleted successfully');
                    this.model.trigger('delete-success');
		}.bind(this)
            });
            return false;
	},
        
        editMovie: function() {
            this.trigger('edit');
        }

        
    });
