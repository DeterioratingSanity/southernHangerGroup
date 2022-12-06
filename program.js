$("#search").submit(function(event){
  event.preventDefault();
  var input = $("#help").val();
  window.open("https://www.google.com/search?q="+input, name="_blank");
});
