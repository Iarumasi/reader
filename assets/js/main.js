$(document).ready(function () {

    let audio;
    let word;

    $('#play').on('click', function () {
        word = $('#word').val();

        for (let i = 0; i < word.length; i++) {
            setTimeout(function () {
                audio = new Audio('audio/' + word[i] + '.wav');
                audio.play();
            }, (i + '000') / 9)
        }

    })

});