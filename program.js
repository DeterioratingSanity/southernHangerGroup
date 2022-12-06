$("#search button").click(function(){
  $("#search").submit();
}  
$("#search").submit(function(event){
  event.preventDefault();
  var input = $("#help").val();
  $("#gSearch").attr("src", "https://www.google.com/search?q="+input+"+site%3Asouthernhanger.net");
});
