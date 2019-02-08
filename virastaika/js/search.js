$(document).ready(function(){
    $(".searching").keyup(function(){
        _this = this;
        $.each($(".tovs a"), function() {
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
               $(this).hide();
            else
               $(this).show();                
        });
    });
});
$(document).ready(function(){
    $(".h2_searching").keyup(function(){
        _this = this;
        $.each($(".tovs a"), function() {
            if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
               $(this).hide();
            else
               $(this).show();                
        });
    });
});/*
function onload(){
	_this = "Нет в наличии";
	$.each($(".tovs a"), function() {
	    if($(this).text().toLowerCase().indexOf(_this.toLowerCase()) === -1)
	       $(this).show();
	    else
	       $(this).hide();                
	});
}

onload();*/