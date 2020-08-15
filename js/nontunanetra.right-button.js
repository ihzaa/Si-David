let dark = false;
$(document).on("click", "#btn_lampu", function () {
  let img = $("#btn_lampu").find("img")[0];
  if (dark) {
    dark = false;
    $(".card").removeClass("bg-dark text-light");
    $("body").removeClass("bg-dark");
    $(img).attr("src", "images/lamp_dark.svg");
  } else {
    dark = true;
    $(".card").addClass("bg-dark text-light");
    $("body").addClass("bg-dark");
    $(img).attr("src", "images/lamp_light.svg");
  }
});

let size = 1;
$(document).on("click", "#btn_font_inc", function () {
  if (size < 3) {
    size++;
    var fontSize = parseInt($("body").css("font-size"));
    fontSize = fontSize + 15 + "px";
    $("body").css({ "font-size": fontSize });
    var fontSize = parseInt($("h5").css("font-size"));
    fontSize = fontSize + 15 + "px";
    $("h5").css({ "font-size": fontSize });
  }
});

$(document).on("click", "#btn_font_dec", function () {
  if (size > 1) {
    size--;
    var fontSize = parseInt($("body").css("font-size"));
    fontSize = fontSize + -15 + "px";
    $("body").css({ "font-size": fontSize });
    var fontSize = parseInt($("h5").css("font-size"));
    fontSize = fontSize + -15 + "px";
    $("h5").css({ "font-size": fontSize });
  }
});

let width = 1;
$(document).on("click", "#btn_text_width_i", function () {
  if (width < 10) {
    width++;
    var textWidth = parseInt($("body").css("letter-spacing"));
    textWidth = textWidth + 1 + "px";
    $("body").css({ "letter-spacing": textWidth });
  }
});

$(document).on("click", "#btn_text_width_d", function () {
  if (width > 1) {
    width--;
    var textWidth = parseInt($("body").css("letter-spacing"));
    textWidth = textWidth + -1 + "px";
    $("body").css({ "letter-spacing": textWidth });
  }
});
