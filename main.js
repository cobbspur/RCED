(function ($) {

    $.fn.detectExtension = function (extensions) {

        function detect(base, if_installed, if_not_installed) {
            var s = document.createElement('script');
            s.onerror = if_not_installed;
            s.onload = if_installed;
            document.body.appendChild(s);
            s.src = base + '/manifest.json';
        }

        return detect('chrome-extension://' + extensions.key, function() {
            $('<div id= "' + extensions.name + 'Detect">' + extensions.name + '!</div>').appendTo('body');
        });
    };

    $(document).ready(function ($) {
        var extensions = {name: 'buffer', key: 'noojglkidnpfjbincgijbaiedldjfbhh'};
        $('body').detectExtension(extensions);
    });
}(jQuery));