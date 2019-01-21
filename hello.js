$("#click").on("click", run);

let i = false;

function run(){
  if(i==false){
  $("body").css({"background-color":"magenta"});
  i = true;
  }
  else{
    $("body").css({"background-color":"white"});
    i = false;
  }
}

$(".show-alert").on("click", function(){
  $(".alert").css({"visibility":"initial"});
});
$("#close").on("click", function(){
  $(".alert").css({"visibility":"hidden"});
});

let count;
function startCount(){
 count = setTimeout(showPage, 3000);
}

function showPage(){
  $("#loader").css({"display":"none"});
  $("#mainPage").css({"display":"block"});
  console.log("worked");
}
