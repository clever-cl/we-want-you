$(document).ready(function(){

  $('#search').each(function(){
    var placeholder = $('input').attr('placeholder')
    var placeholderArray = placeholder.split(/ +/)
    console.log(placeholder)
    console.log(placeholderArray)
    if(placeholderArray.length){
      var spans = $('<div/>')
      $.each(placeholderArray, 
        function(index, value){
          spans.append($('<span/>').html(value + '&nbsp;'))
      })
      $(this).children('div').append(spans)
    }
    $('#search').click(function(){
      $(this).addClass('is-open')
      $('.title').addClass('is-hidden')
      $('.search-button').toggle()
        setTimeout(function(){
          $(this).find('input').focus()
        }, 750)
      })
    $(document).click(function(e) {
      console.log("hola")
      if(!$(e.target).is($('#search')) && !jQuery.contains($('#search')[0], e.target)) {
        $('#search').removeClass('is-open')
        $('.title').removeClass('is-hidden')
        $('.search-button').toggle()
      }
    })
  })
  $('.search-button')

})