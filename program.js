$("#search").submit(function(){
  var input = $("#search :input").val();
  window.open("https://www.google.com/search?q="+input+"&surl=1&safe=active&ssui=on", name="_blank");
});
