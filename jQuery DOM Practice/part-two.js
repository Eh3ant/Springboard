$(document).ready(function(){
    $('#form').on('submit',function(e){
        e.preventDefault();

        const $titleVal = $('#title').val();
        const $ratingVal = $('#rating').val();

        $('#titlesContainer').append(`
            <div>
                <span>Title: ${$titleVal}</span>
                <span>Rating: ${$ratingVal}</span>
                <button class="removeBtn">Remove</button>
            </div>
        `);

        $('#title').val('');
        $('#rating').val('');
    });

    $('#titlesContainer').on('click', '.removeBtn', function() {
        $(this).parent().remove();
    });
});