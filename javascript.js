$(function () {
    $('.nav-link').click(function () {
        //hide the expanded navigation bar after clicking on a menu item 
        $("#collapsibleNavbar").collapse('hide');
    });

    //show all projects
    $("#allbtn").click(function () {
        $(".project-outer-box").hide().show(1000);
    });

    //show only jQuery projects
    $("#jquerybtn").click(function () {
        $(".project-outer-box").hide();
        $("#citiesproject").show(1000);
        $("#schoolproject").show(1000);
        $("#drawingproject").show(1000);
    });

    //show only JavaScript projects
    $("#jsbtn").click(function () {
        $(".project-outer-box").hide();
        $("#natureproject").show(1000);        
        $("#multiplicationproject").show(1000);
        $("#drawingproject").show(1000);           
    });

    //show only CSS Grid projects
    $("#cssgridbtn").click(function () {
        $(".project-outer-box").hide();
        $("#natureproject").show(1000);
        $("#bookproject").show(1000); 
        $("#shakesproject").show(1000);
        $("#citiesproject").show(1000);
        $("#questionsproject").show(1000); 
    });

    //show only Bootstrap projects
    $("#bootstrapbtn").click(function () {
        $(".project-outer-box").hide();
        $("#schoolproject").show(1000);
        $("#russianproject").show(1000);
        $("#weseeartproject").show(1000);
    });

    //show only React.js projects
    $("#reactbtn").click(function () {
        $(".project-outer-box").hide();  
        $("#cartproject").show(1000);     
        $("#shakesproject").show(1000);
        $("#bookproject").show(1000); 
        $("#questionsproject").show(1000);             
    });

    //show only Node.js projects
    $("#nodejsbtn").click(function () {
        $(".project-outer-box").hide();
        $("#weseeartproject").show(1000);
    });

    //show only Third-Party APIs projects
    $("#thirdpartybtn").click(function () {
        $(".project-outer-box").hide();
        $("#natureproject").show(1000);
        $("#citiesproject").show(1000);
        $("#russianproject").show(1000);
        $("#shakesproject").show(1000);
    });

    //show only ASP.NET projects
    $("#aspnetbtn").click(function () {
        $(".project-outer-box").hide();
        $("#russianproject").show(1000);
    }); 
   
});