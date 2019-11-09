function removeByJquery() {
    let element = $("#text-to-delete");
    element.remove();
}

function add() {
    let but2 = $("#info-btn");
    but2.after("<h1>Hello world!21</h1?>");
}

var current = "darksalmon";
function turn(number) {
    $("#s"+number).css("background-color", current)
    
    if(current === "darksalmon") {
        current = "palegoldenrod";
    } else {
        current = "darksalmon";
    }
    $("#s"+number).prop("disabled", true);
}



$(".square").on("click", turn());