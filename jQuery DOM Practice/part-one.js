
/* 1. */
$(function(){
    console.log("Let's get ready to party with jQuery!")
})
/* 2. */
$("article img").addClass("image-center")

/* 3. */
$("article p:last-child").remove()

/* 4. */
$("#title").css("font-size",Math.random()* 100)

/* 5. */
$('ol').append("<li>HERE IS THE NEW LIST ITEM</li>")

/* $("ol").append($("<li>", {text: "I can add to lists with jQuery!"})); */

/* 6. */
$('aside').empty().append("<p>the list was remove</p>")

/* 7. */

/* $("body").css("background-color", "rgb(" + $(".form-control").eq(0).val() + "," + $(".form-control").eq(2).val() + "," + $(".form-control").eq(1).val() +")") */

$('input').on('keyup', function(){
    let red = $(".form-control").eq(0).val();
    let blue = $(".form-control").eq(1).val();
    let green = $(".form-control").eq(2).val();
    $('body').css('backgroundColor',"rgb(" + red + "," + green + "," + blue + ")")
});

/* 8. */

$('img').on('click',function(){
    $(this).remove()
})



