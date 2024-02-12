console.log("Your index.js file is loaded correctly!");

$(document).ready(function(){
    $(" .flip ").on( "click", function(){
      $(" .panel ").slideDown("slow");
    });
  });