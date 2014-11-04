(function ($) {
    "use strict";
    var $document = $(document);

    $.fn.ghostSocialDetection = function (extensions) {

        function detect(extensions) {
            $.ajax({url: extensions.key}).done(function (data) {
                $('.gsd-buffer').show();
            });
        }

        return detect(extensions);
    };

    $document.ready(function () {
        var extensions = {name: 'buffer', key: 'chrome-extension://noojglkidnpfjbincgijbaiedldjfbhh/manifest.json'};

        $('.gsd-buffer').hide();
        $('body').ghostSocialDetection(extensions);
    });
}(jQuery));