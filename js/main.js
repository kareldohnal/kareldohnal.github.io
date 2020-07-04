// On-load functions
$(() => {
    // Fade out loader after page fully loads itself
    $(window).on('load', () => {
        $('#status').fadeOut();
        $('#loading').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    });
})

// Handles events in Projects section
$(() => {
    let showProjectDetail = false;
    let imgComment1 = document.createComment($("#projectimg1").get(0).outerHTML);
    let imgComment2 = document.createComment($("#projectimg2").get(0).outerHTML);
    let imgComment3 = document.createComment($("#projectimg3").get(0).outerHTML);
    let imgComment4 = document.createComment($("#projectimg4").get(0).outerHTML);
    // Function that fires whenever user clicks on one of the projects AND project list is currently in tile-view.
    $(".projectnav").on("shown.bs.tab", () => {
        if (!showProjectDetail){
            $("#projectimg1").replaceWith(imgComment1);
            $("#projectimg2").replaceWith(imgComment2);
            $("#projectimg3").replaceWith(imgComment3);
            $("#projectimg4").replaceWith(imgComment4);
            $("#projecttiles").addClass('col-lg-4 col-12');
            $("#projecttiles ul").addClass("p-2 m-auto nav-pills d-flex align-content-center listview")
            $("#projecttiles li").addClass("listview align-self-center")
            $(".projectnav").addClass("h5")
            $("#projectdetails").addClass('col-lg-8 col-12');
            $("#projecttiles li").removeClass("col-lg-4 col-md-6")
            $(".projectnav").removeClass("rounded-0 border-0 p-0")
            $(".project-label").removeClass('position-absolute float-left text-light');
            $("#projectdetails").removeClass('col-0');
            showProjectDetail = true;
        }
    });

    // Function that fires whenever user clicks on one of the "return to tile-view" button AND project list is currently in list-view.
    $(".tvjs").on("click", () => {
        if (showProjectDetail){
            $(imgComment1).replaceWith(imgComment1.nodeValue);
            $(imgComment2).replaceWith(imgComment2.nodeValue);
            $(imgComment3).replaceWith(imgComment3.nodeValue);
            $(imgComment4).replaceWith(imgComment4.nodeValue);
            $("#projecttiles").removeClass('col-lg-4 col-12');
            $("#projecttiles ul").removeClass("p-2 m-auto nav-pills d-flex align-content-center listview")
            $("#projecttiles li").removeClass("listview align-self-center")
            $(".projectnav").removeClass("h5")
            $("#projectdetails").removeClass('col-lg-8 col-12');
            $("#projectdetails .active.show").removeClass('active show');
            $("#projecttiles .active").removeClass('active');
            $("#projecttiles li").addClass("col-lg-4 col-md-6")
            $(".projectnav").addClass("rounded-0 border-0 p-0")
            $(".project-label").addClass('position-absolute float-left text-light');
            $("#projectdetails").addClass('col-0');
            showProjectDetail = false;
        }
    });
});