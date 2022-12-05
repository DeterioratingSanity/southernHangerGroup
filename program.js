$("#search button").click(function(){
  var input = $("#search :input").val();
  window.open("google.com/search?q="+input, name="_blank");
});
