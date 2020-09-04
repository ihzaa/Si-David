let recognition = new webkitSpeechRecognition();
var final_transcript = "";
recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "id-ID";
rec = false;

recognition.onstart = function () {
  recognizing = true;
};

recognition.onend = function () {
  baca(final_transcript);
  final_transcript = "";
  recognizing = false;
};

recognition.onresult = function (event) {
  var interim_transcript = "";

  if (typeof event.results == "undefined") {
    recognition.onend = null;
    recognition.stop();
    return;
  }
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      final_transcript += event.results[i][0].transcript;
    } else {
      interim_transcript += event.results[i][0].transcript;
    }
  }
};

// $(document).on("mousedown", "#button_voice", function () {
//   if (!rec) {
//     rec = true;
//     recognition.start();
//   }
// });

// $(document).on("mouseup", "#button_voice", function () {
//   rec = false;
//   recognition.stop();
// });

$(document).on("touchstart", "#button_voice", function () {
  if (!rec) {
    rec = true;
    recognition.start();
  }
});

$(document).on("touchend", "#button_voice", function () {
  rec = false;
  recognition.stop();
});

function baca(nama) {
  const index = idxProv.indexOf(nama);
  if (index > -1) {
    msg.text = `provinsi ${dataCovid[index].attributes.Provinsi}, jumlah kasus positif ${dataCovid[index].attributes.Kasus_Posi}, jumlah pasien sembuh ${dataCovid[index].attributes.Kasus_Semb}, jumlah pasien meninggal ${dataCovid[index].attributes.Kasus_Meni}.`;
    window.speechSynthesis.speak(msg);
  } else {
    msg.text = `Data ${nama} tidak ditemukan`;
    window.speechSynthesis.speak(msg);
  }
}
// isInLanding = true;
// $(document).on("keydown", function () {
//   if (
//     event.keyCode === 32 &&
//     $("#section1").hasClass("active") &&
//     !isInLanding
//   ) {
//     if (!rec) {
//       rec = true;
//       recognition.start();
//     }
//   }
//   if (event.keyCode === 32 && $("#landing").hasClass("active") && isInLanding) {
//     msg.text = `Anda dialihkan ke section tunanetra, tekan dan tahan tombol spasi lalu sebutkan nama provinsi`;
//     window.speechSynthesis.speak(msg);
//     $.fn.fullpage.moveSectionUp();
//   }
// });

// $("#landing").on("touchend", function () {
//   if ($("#landing").hasClass("active")) {
//     isInLanding = false;
//     $.fn.fullpage.moveSectionUp();
//     msg.text = `Anda dialihkan ke section tunanetra, tekan dan tahan tombol di sekitaran tengah layar lalu sebutkan nama provinsi`;
//     window.speechSynthesis.speak(msg);
//   }
// });

$(document).on("keyup", function (e) {
  if (event.keyCode === 32) {
    $(document).off("keyup");
    $(document).on("keyup", function (e) {
      rec = false;
      recognition.stop();
    });
    $(document).on("keydown", function () {
      if (event.keyCode === 32) {
        if (!rec) {
          rec = true;
          recognition.start();
        }
      }
    });
  }
});
