$(document).ready(function(){
    // $(".btn").click(function(){
    //   $("this").addClass("btnact");
      
    // });
    $(".edu").hide();
    $(".skills").hide();
    $(".expe").hide();
    $(".achiv").hide();
    $(".abtme").show();
    $(".btn1").click(function() {
        // remove classes from all
        $(".btn2").removeClass("btnact");
        $(".btn3").removeClass("btnact");
        $(".btn4").removeClass("btnact");
        $(".btn5").removeClass("btnact");
        $(".edu").hide();
        $(".skills").hide();
        $(".expe").hide();
        $(".achiv").hide();
        // add class to the one we clicked
        $(this).addClass("btnact");
        $(".abtme").show();
        // stop the page from jumping to the top
        return false;
    });
    $(".btn2").click(function() {
        // remove classes from all
        $(".btn1").removeClass("btnact");
        $(".btn3").removeClass("btnact");
        $(".btn4").removeClass("btnact");
        $(".btn5").removeClass("btnact");
        $(".abtme").hide();
        $(".skills").hide();
        $(".expe").hide();
        $(".achiv").hide();
        // add class to the one we clicked
        $(this).addClass("btnact");
        $(".edu").show();
        // stop the page from jumping to the top
        return false;
    });
    $(".btn3").click(function() {
        // remove classes from all
        $(".btn2").removeClass("btnact");
        $(".btn1").removeClass("btnact");
        $(".btn4").removeClass("btnact");
        $(".btn5").removeClass("btnact");
        $(".edu").hide();
        $(".abtme").hide();
        $(".expe").hide();
        $(".achiv").hide();
        // add class to the one we clicked
        $(this).addClass("btnact");
        $(".skills").show();
        // stop the page from jumping to the top
        return false;
    });
    $(".btn4").click(function() {
        // remove classes from all
        $(".btn1").removeClass("btnact");
        $(".btn3").removeClass("btnact");
        $(".btn2").removeClass("btnact");
        $(".btn5").removeClass("btnact");
        $(".abtme").hide();
        $(".skills").hide();
        $(".edu").hide();
        $(".expe").hide();
        // add class to the one we clicked
        $(this).addClass("btnact");
        $(".achiv").show();
        // stop the page from jumping to the top
        return false;
    });
    $(".btn5").click(function() {
        // remove classes from all
        $(".btn1").removeClass("btnact");
        $(".btn3").removeClass("btnact");
        $(".btn2").removeClass("btnact");
        $(".btn4").removeClass("btnact");
        $(".abtme").hide();
        $(".skills").hide();
        $(".edu").hide();
        $(".achiv").hide();
        // add class to the one we clicked
        $(this).addClass("btnact");
        $(".expe").show();
        // stop the page from jumping to the top
        return false;
    });
});