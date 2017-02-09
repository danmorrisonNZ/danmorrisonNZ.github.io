var manu = function(){
  var audio = new Audio('HOO_.mp4');

  $("#massive-manu").on("click", function(){
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    $("#sick-manu").css("top", "-200px")
    for (i = 0; i < 700; i++ ){
      downwardManu(i)
    }
    var name = $("#name").val()
    $("#manu-alert").text("That was meeeeeaaannn " + name + "!")
  })

  function downwardManu(i){
    setTimeout(function(){
      $("#sick-manu").css("top", i+"px")
    },i * 1.5)
  }
}

$(document).ready(manu);
$(document).on('page:load',manu);
