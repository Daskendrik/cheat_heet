function showBlock(id){
    if($(`#${id}`).hasClass("displayBlock")) {
        $(`#${id}`).removeClass("displayBlock");
    } else {
        $(`#${id}`).addClass("displayBlock");
    }
}


$('.btn').on('click', function (e) {
    showBlock(e.currentTarget.attributes[1].value)
});