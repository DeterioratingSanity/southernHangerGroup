/*Code made by gotoplanb*/
var googleSearchIframeName = "cse-search-results";
var googleSearchFormName = "cse-search-box";
var googleSearchFrameWidth = 600;
var googleSearchDomain = "www.google.com";
var googleSearchPath = "/cse";
/*Ahrens code*/
$("#search button").click(function(){
  var input = $("#help").val();
  $("#gSearch").attr("src", "https://www.google.com/custom?q="+input+"+site%3Asouthernhanger.net&btnG=Search");
});
$("#search").submit(function(event){
  event.preventDefault();
  var input = $("#help").val();
  $("#gSearch").attr("src", "https://www.google.com/custom?q="+input+"+site%3Asouthernhanger.net&btnG=Search");
});
