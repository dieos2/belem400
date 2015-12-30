jQuery.get("_menu.html", function (data) {
    jQuery("#menu").html(data);

});


jQuery.get("_footer.html", function (data) {
    jQuery("footer").html(data);
})
jQuery.get("_buscar.html", function (data) {
    jQuery("#busca").html(data);
})



