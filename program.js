$("#search button").click(function(){
  let input = $("#search :input").val();
  $("#shSearch").attr("src", "https://southernhanger.net/search?q="+input);
});
$("#search").submit(function(event){
  event.preventDefault();
  $("#search button").click();
});
$(document).ready(function(){
  $("#accept").click(){
    document.cookie = "LocationOnOpen="+navigator.geolocation.getCurrentPosition()+"; expires=Thu, 18 Dec 2100 12:00:00 UTC";
  }
});
