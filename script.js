// script.js

// Keep track of the current image, identified by its class
var currentClass = 'knowing';

// List of names of images
var imageTitles = {
    'knowing' : '"Knowing" 2017',
    'ascend' : '"Ascend" 2018',
    'vancouver' : '"Vancouver 717" 2018',
    'content': '"Content" 2018',
    'westminster': '"Westminster 717" 2017',
    'gate': '"Gate" 2017',
    'momentum': '"Momentum" 2016',
    'kadote': 'Triton Kadote model, 2016',
    'armour': '"Terran Shock Armour" 2018',
    'aruarian': '"Aruarian" 2016',
    'kathid': '"Follow" 2018',
    'anubis': '"Silence" 2018'
  };

var setImage = function(clickedButton) {
    // Get the needed class from the ID of the button
    var newClass = String(clickedButton.attr('id'));

    // Remove the current class from all .background elements, and add the new one
    $('.background').removeClass(currentClass).addClass( newClass );

    // Update the current image class
    currentClass = newClass;

    // Change header text
    $('#headerText').text(imageTitles[newClass]);
};

// Wait until the document is ready
$(document).ready(function() {

    // Add styles for each of the buttons
    $('#headerButtons').children('a.button').each(function () {

        var imageName = $(this).attr('id');

        if (imageName == 'knowing') {
            return;
        }

        $('<style> #' + imageName + ' { background-image: url("img/' + imageName + '_smb.png"); }'
        +'.background.' + imageName + ' { background-image: url("img/' + imageName + '_smb.png"); }'
        +'.background.sharpbackground.' + imageName + ' { background-image: url("img/' + imageName + '_sm.jpg"); }'
        +''
        +'@media only screen and (min-width: 768px) {'
        +    '.background.' + imageName + ' { background-image: url("img/' + imageName + '_b.png"); }'
        +    '.background.sharpbackground.' + imageName + ' { background-image: url("img/' + imageName + '.jpg"); }'
        +'}'
        +''
        +'@media only screen and (min-width: 1280px) {'
        +    '.background.sharpbackground.' + imageName + ' { background-image: url("img/' + imageName + '.jpg"); }'
        +'}</style>').appendTo('head');
    });

    // Unhide the image selection buttons
    $('div.header > div.headerStrip > div.headerButtons .button ').css('opacity', '1');

    // Change header text
    $('#headerText').text(imageTitles['knowing']);

    // Click function
    $('div.headerButtons > a.button').on('click', function() {
        setImage( $(this) )
    });
 }); 
