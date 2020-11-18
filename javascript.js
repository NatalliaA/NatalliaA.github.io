$(function(){
    $('.nav-link').click(function(){
        //hide the expanded navigation bar after clicking on a menu item 
        $("#collapsibleNavbar").collapse('hide');
    });    

    //show all projects
    $("#allbtn").click(function(){  
        $(".projectImage").hide().show(1000); 
    });

    //show only jQuery projects
    $("#jquerybtn").click(function(){
        $(".projectImage").hide();
        $("#schoolproject").show(1000);
        $("#drawingproject").show(1000);
    });

    //show only JavaScript projects
    $("#jsbtn").click(function(){
        $(".projectImage").hide();
        $("#natureproject").show(1000);
        $("#citiesproject").show(1000);         
        $("#multiplicationproject").show(1000);
        $("#drawingproject").show(1000);        
        $("#russianproject").show(1000);
        $("#weseeartproject").show(1000);
        $("#weseenatureproject").show(1000);
    });

    //show only Bootstrap projects
    $("#bootstrapbtn").click(function(){
        $(".projectImage").hide();
        $("#schoolproject").show(1000);       
        $("#russianproject").show(1000);
        $("#weseeartproject").show(1000);
        $("#weseenatureproject").show(1000);
    });
      //show only Node.js projects
      $("#nodejsbtn").click(function(){
        $(".projectImage").hide();       
        $("#weseeartproject").show(1000);
        $("#weseenatureproject").show(1000);
    });

    //show only Third-Party APIs projects
    $("#thirdpartybtn").click(function(){
        $(".projectImage").hide();
        $("#natureproject").show(1000);     
        $("#citiesproject").show(1000);
        $("#russianproject").show(1000);
    });

    //show only ASP.NET projects
    $("#aspnetbtn").click(function(){
        $(".projectImage").hide();      
        $("#russianproject").show(1000);
    });
    
  //show only UX projects
    $("#uxbtn").click(function(){
        $(".projectImage").hide();      
        $("#russianproject").show(1000);
    });

    //open CV
    $("#openCV").click(function(){
        $("#CViframe").fadeIn("slow");
        $("#openCV").hide();
        $("#closeCV").show(); 
    });

    //close CV
    $("#closeCV").click(function(){
        $("#CViframe").hide();
        $("#openCV").show();
        $("#closeCV").hide();  
    });  
});