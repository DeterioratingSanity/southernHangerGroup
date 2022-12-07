$("#search button").click(function(){
  let input = $("#search :input").val();
  $("#shSearch").attr("src", "https://southernhanger.net/search?q="+input);
});
$("#search").submit(function(event){
  event.preventDefault();
  $("#search button").click();
});
