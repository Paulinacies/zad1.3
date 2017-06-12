// JavaScript Document
    
$(document).ready(function(){        
    var nav = $ ("#nav-bar");
    
    nav.hide();
    
    $("#button").click(function(){
        
        nav.stop().slideToggle("slow");
    
    });
});