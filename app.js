function Start_Animate() {
    $(".block").animate({ "top": "160px" }, 150);
}
function Stop_Animate() {
    $(".block").stop();
    $(".block").animate({ "top": "0px" }, 150);
    $(".block").delay(200);
}
