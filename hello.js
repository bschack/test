$("#click").on("click", run);

function run(){
  let i = false;

  if(i==false){
  $("body").css({"background-color":"magenta"});
  i = true;
  }
  else{
    $("body").css({"background-color":"white"});
    i = false;
  }
}
