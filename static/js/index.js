$(document).ready(function(){

  $('#search').click(function(e){

    var placeholder = $('input').attr('placeholder')
    console.log(placeholder)
    $(this).addClass('is-open')
    $('.title').addClass('is-hidden')
  })


})