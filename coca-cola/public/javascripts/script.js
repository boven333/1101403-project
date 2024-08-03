$(document).ready(function() {
    function toggleMenu() {
        $('.nav-menu').toggleClass('active');
    }

    // Assuming you have a button or some element to trigger the toggle
    $('#menuButton').on('click', toggleMenu);

});


