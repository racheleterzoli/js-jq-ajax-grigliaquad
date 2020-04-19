$(document).ready(function(){
  $(".quadrato").click(function(){

    var cubo=$(this);
    if(cubo.hasClass("verde") || cubo.hasClass("giallo")){
      alert("Already clicked!!! Try another.");
    }
    else{

      console.log(cubo);
      $.ajax({
        url : "https://flynn.boolean.careers/exercises/api/random/int",
        method : "GET",
        success : function (data,stato){
          console.log(cubo);

          if(data.response > 5){
            cubo.addClass("verde");
            cubo.html("<p>"+ data.response + "</p>");
          }
          else{
            cubo.addClass("giallo");
            cubo.html("<p>"+ data.response + "</p>");
          }

        }

      });

    }
  });
});
