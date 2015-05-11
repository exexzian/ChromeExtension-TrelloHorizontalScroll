$(function() {
    $("body").mousewheel(function(event, delta) {
        document.getElementById('board').scrollLeft -= (delta * 30);
        event.preventDefault();
    });
});
