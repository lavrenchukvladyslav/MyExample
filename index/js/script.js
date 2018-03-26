$(".list1").hide();
$(".list2").hide();
$(".list3").hide();
$(function () {
    $(".dropdown1").click(function () {
        $(".list1").slideToggle(500);
        $(".list2, .list3").hide(500);
        $(".dropdown1").css("text-decoration", "underline");
        $(".dropdown2").css("text-decoration", "none");
        $(".dropdown3").css("text-decoration", "none");
    });
});
$(function () {
    $(".dropdown2").click(function () {
        $(".list2").slideToggle(500);
        $(".list1, .list3").hide(500);
        $(".dropdown1").css("text-decoration", "none");
        $(".dropdown2").css("text-decoration", "underline");
        $(".dropdown3").css("text-decoration", "none");
    });
});
$(function () {
    $(".dropdown3").click(function () {
        $(".list3").slideToggle(500);
        $(".list2, .list1").hide(500);
        $(".dropdown1").css("text-decoration", "none");
        $(".dropdown2").css("text-decoration", "none");
        $(".dropdown3").css("text-decoration", "underline");
    });
});


