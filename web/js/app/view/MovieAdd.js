Movie.View.MovieAdd = Backbone.View.extend({
        el: $('#container'),

        events: {
            'click #form-actions .back-btn': 'goBack',
            'click #form-actions .save-btn': 'saveMovie'
        },

        initialize: function() {
            this.template = Movie.Template.MovieForm;
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON() ));
        },

        goBack: function(e) {
            e.preventDefault();
            this.trigger('back');
        },

        saveMovie: function(e) {
            e.preventDefault();
            
            var title = $.trim($('#title').val());
            var country = $.trim($('#country').val());
            var director = $.trim($('#director').val());
            var year = $.trim($('#year').val());
            var genre = $.trim($('#genre').val());

            this.model.save({
                title: title,
                country: country,
                director: director,
                year: year,
                genre: genre
            }, {
                silent  : false,
                sync    : true,
                success: function() {
                    this.model.trigger('save-success');
                }.bind(this)
            });
        }
    });
