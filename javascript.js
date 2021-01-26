$(function () {
    $('.nav-link').click(function () {
        //hide the expanded navigation bar after clicking on a menu item 
        $("#collapsibleNavbar").collapse('hide');
    });

    //show all projects
    $("#allbtn").click(function () {
        $(".projectOuterBox").hide().show(1000);
    });

    //show only jQuery projects
    $("#jquerybtn").click(function () {
        $(".projectOuterBox").hide();
        $("#schoolproject").show(1000);
        $("#drawingproject").show(1000);
    });

    //show only JavaScript projects
    $("#jsbtn").click(function () {
        $(".projectOuterBox").hide();
        $("#natureproject").show(1000);
        $("#citiesproject").show(1000);
        $("#multiplicationproject").show(1000);
        $("#drawingproject").show(1000);
        $("#russianproject").show(1000);
        $("#weseeartproject").show(1000);
        $("#shakesproject").show(1000);
    });

    //show only CSS Grid projects
    $("#cssgridbtn").click(function () {
        $(".projectOuterBox").hide();
        $("#natureproject").show(1000);
        $("#shakesproject").show(1000);
        $("#citiesproject").show(1000);
    });

    //show only Bootstrap projects
    $("#bootstrapbtn").click(function () {
        $(".projectOuterBox").hide();
        $("#schoolproject").show(1000);
        $("#russianproject").show(1000);
        $("#weseeartproject").show(1000);
    });

    //show only React.js projects
    $("#reactbtn").click(function () {
        $(".projectOuterBox").hide();
        $("#shakesproject").show(1000);
    });

    //show only Node.js projects
    $("#nodejsbtn").click(function () {
        $(".projectOuterBox").hide();
        $("#weseeartproject").show(1000);
    });

    //show only Third-Party APIs projects
    $("#thirdpartybtn").click(function () {
        $(".projectOuterBox").hide();
        $("#natureproject").show(1000);
        $("#citiesproject").show(1000);
        $("#russianproject").show(1000);
        $("#shakesproject").show(1000);
    });

    //show only ASP.NET projects
    $("#aspnetbtn").click(function () {
        $(".projectOuterBox").hide();
        $("#russianproject").show(1000);
    }); 
   
});