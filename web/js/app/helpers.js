window.utils = {
    // Asynchronously load templates located in separate .html files
    loadTemplate: function(views, callback) {

        var deferreds = [];

        $.each(views, function(index, view) {
                deferreds.push($.get('templates/' + view + '.html', function(data) {
                    Movie.Template[view] = _.template(data);
                }));
           
        });

        $.when.apply(null, deferreds).done(callback);
    }
};