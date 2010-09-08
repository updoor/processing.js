;(function() {

    google.load("jquery", "1");

    window.main = function() {};
    window.initialize = function() {
        var scripts = $('script');
        var loaded  = false;
        $.each(scripts, function(i, script_elm) {
            var s = $(script_elm);
            if (!loaded && s.attr('type') == "application/processing") {
                var src = s.attr('src');
                $.get(src, function(source) {
                    var canvas = $('canvas')[0];
                    Processing(canvas, source);
                });

                loaded = true;
            }
        });

        main();
    };

    google.setOnLoadCallback(initialize);

})();