!(function($) {

    // Popup
    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    // Tooltip
    $(document).ready(function() {
        $('[data-toggle="tooltip"]').tooltip();
    });

    // Popover
    $(document).ready(function() {
        $('[data-toggle="popover"]').popover();
    });

    // Toast
    $(document).ready(function() {
        $('#myBtn').click(function() {
            $('.toast').toast({ delay: 2000 });
            $('.toast').toast('show');
        });
    });

    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    }

    $('input').textcounter();


    $('input').textcounter({
        type: "word",
        max: 15,
        stopInputAtMaximum: false
    });


    $('input').textcounter({
        min: 20,
        countDownText: "%d characters remaining"
    });

    // Javascript
    var fileinclude = require('gulp-file-include'),
        gulp = require('gulp');

    gulp.task('fileinclude', function() {
        gulp.src(['index.html'])
            .pipe(fileinclude({
                prefix: '@@',
                basepath: '@file'
            }))
            .pipe(gulp.dest('./'));
    });

})(jQuery);

$(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

$(function() {
    var includes = $('[data]')
    $.each(includes, function() {
        var file = 'data/' + $(this).data('include') + '.html'
        $(this).load(file)
    })
})

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-50px";
    }
}