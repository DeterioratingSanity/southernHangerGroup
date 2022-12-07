$("#search button").click(function(){
  var input = $("#search :input").val();
  window.open("https://www.google.com/search?q="+input+"+site%3Asouthernhanger.net", name="_blank");
});
$("#search").submit(function(event){
  event.preventDefault();
  var input = $("#search :input").val();
  window.open("https://www.google.com/search?q="+input+"+site%3Asouthernhanger.net", name="_blank");
});
