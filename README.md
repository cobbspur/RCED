RCED
====

# Responsive Chrome Extension Detection

This is a jQuery plugin to detect chrome extensions by their key value and serve custom content 

Initially the goal is to detect the buffer chrome extension and simply serve content on successful detection:

    <div class=".gsd-buffer">BUFFER!</div>

The main script for this was taken from http://blog.kotowicz.net/2012/02/intro-to-chrome-addons-hacking.html

To use this in a Ghost theme add ghostSocialDetection.js to assets/js/ folder of theme file
Link to this file in default.hbs

    <script type="text/javascript" src="{{asset "js/ghostSocialDetection.js"}}"></script>

Finally add html element as a placeholder for the content you wish to show/hide with a class of .gsd-buffer
E.g:
    <div class=".gsd-buffer">
    <a href="http://bufferapp.com/add" class="buffer-add-button" data-text="{{title}}" data-url="{{url absolute="true"}}" data-count="vertical" ></a>
    <script type="text/javascript" src="https://d389zggrogs7qo.cloudfront.net/js/button.js"></script>
    </div>

By default this element will be hidden, then shown if the buffer extension is found.

