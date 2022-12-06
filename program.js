$("#search").submit(function(event){
  event.preventDefault();
  var input = $("#help").val();
  window.open("https://www.google.com/search?q="+input+"+site%3Asouthernhanger.net", name="_blank");
});
