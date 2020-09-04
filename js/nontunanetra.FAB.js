let dark = false;
$(document).on("click", "#btn_lampu", function () {
  let img = $("#btn_lampu");
  if (dark) {
    dark = false;
    $("body").css("color", "black");
    // $("h2").css("color", "white");
    // $("h3").css("color", "white");
    // $("h4").css("color", "white");
    // $("h5").css("color", "white");
    // $("h6").css("color", "white");
    $(".card").removeClass("bg-dark text-light");
    $("body").removeClass("bg-dark");
    $(img).attr("src", "images/lamp_dark.svg");
  } else {
    $("body").css("color", "white");
    dark = true;
    $(".card").css("border-color", "white");
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
  // $.fn.fullpage.reBuild();
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
  // $.fn.fullpage.reBuild();
});

let width = 1;
$(document).on("click", "#btn_text_width_i", function () {
  if (width < 10) {
    width++;
    var textWidth = parseInt($("body").css("letter-spacing"));
    textWidth = textWidth + 1 + "px";
    $("body").css({ "letter-spacing": textWidth });
  }
  // $.fn.fullpage.reBuild();
});

$(document).on("click", "#btn_text_width_d", function () {
  if (width > 1) {
    width--;
    var textWidth = parseInt($("body").css("letter-spacing"));
    textWidth = textWidth + -1 + "px";
    $("body").css({ "letter-spacing": textWidth });
  }
  // $.fn.fullpage.reBuild();
});
let font = true;
$(document).on("click", "#btn_disleksia", function () {
  if (font) {
    font = false;
    $("body").css("font-family", "Open-Dyslexic");
  } else {
    font = true;
    $("body").css("font-family", "Sans-serif");
  }
});

$(function () {
  $("#masterfab,.backdrop").click(function () {
    if ($(".backdrop").is(":visible")) {
      $(".backdrop").fadeOut();
      $(".fab.child")
        .stop()
        .animate(
          {
            bottom: $("#masterfab").css("bottom"),
            opacity: 0,
          },
          125,
          function () {
            $(this).hide();
          }
        );
      // $.fn.fullpage.reBuild();
    } else {
      $(".backdrop").fadeIn();
      $(".fab.child").each(function () {
        $(this)
          .stop()
          .show()
          .animate(
            {
              bottom:
                parseInt($("#masterfab").css("bottom")) +
                parseInt($("#masterfab").outerHeight()) +
                70 * $(this).data("subitem") -
                $(".fab.child").outerHeight() +
                "px",
              opacity: 1,
            },
            125
          );
      });
      // $.fn.fullpage.reBuild();
    }
  });
});
