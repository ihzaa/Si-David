$(document).ready(function () {
  let url =
    "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?where=1%3D1&outFields=Provinsi,Kasus_Posi,Kasus_Semb,Kasus_Meni&outSR=4326&f=json";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dataCovid = data.features;
      for (let i = 0; i < dataCovid.length; i++) {
        idxProv.push(dataCovid[i].attributes.Provinsi);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  goToLanding();
});

function goToLanding() {
  isInLan = true;
  fetch("pages/landing.html")
    .then((response) => response.text())
    .then((data) => {
      $("body").html(data);
      $(".se-pre-con").fadeOut("slow");
    })
    .catch((err) => {
      console.log(err);
    });
}

$(document).on("click", ".btn-home", goToLanding);

function goToNonTunanetra() {
  fetch("pages/nontunanetra.html")
    .then((response) => response.text())
    .then((data) => {
      $("body").html(data);
      let el;
      for (let i = 0; i < dataCovid.length; i++) {
        let el = `
                    <div class="col-md-4 voiceable">
                        <div class="card mb-3">
                            <div class="card-header">
                                <h5 class="card-title">Provinsi ${dataCovid[i].attributes.Provinsi}</h5>
                            </div>
                            <div class="card-body">
                                <p class="card-text">Positif ${dataCovid[i].attributes.Kasus_Posi}</p>
                                <p class="card-text">Sembuh ${dataCovid[i].attributes.Kasus_Semb}</p>
                                <p class="card-text">Meninggal ${dataCovid[i].attributes.Kasus_Meni}</p>
                            </div>
                        </div>
                    </div>
                    `;
        $("#content").html($("#content").html() + el);
      }
      $(".se-pre-con").fadeOut("slow");
    })
    .catch((err) => {
      console.log(err);
    });
}

function goToTunanetra() {
  // msg.text = "halaman sedang di muat, silahkan tunggu!";
  // window.speechSynthesis.speak(msg);
  fetch("pages/tunanetra.html")
    .then((response) => response.text())
    .then((data) => {
      $("body").html(data);
      $(".se-pre-con").fadeOut("slow");
    })
    .then(() => {
      // msg.text =
      //   "halaman berhasil dimuat.silahkan tekan dan tahan tombol disekitaran tengah layar untuk mengaktifkan mikrofon dan sebutkan nama provinsi.";
      // window.speechSynthesis.speak(msg);
    })
    .catch((err) => {
      console.log(err);
    });
}
