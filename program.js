$("#search").submit(function(event){
  event.preventDefault();
  var input = $("#help").val();
  window.open("https://www.google.com/search?q="+input+"&surl=1&safe=active&ssui=on", name="_blank");
});
