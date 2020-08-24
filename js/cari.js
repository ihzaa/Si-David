function cari(el) {
  let val = el.value;
  for (let i = 0; i < el_col_prov.length; i++) {
    inner = $(el_col_prov[i]).find(".nama_prov").html();
    if (inner.toUpperCase().indexOf(val.toUpperCase()) > -1) {
      $(el_col_prov[i]).show();
    } else {
      $(el_col_prov[i]).hide();
    }
  }
  $.fn.fullpage.reBuild();
}
