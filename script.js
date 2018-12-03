//Should wait for page to load before runnng AJAX request
$(document).ready(function() {
  //Now begin AJAX GET request, 1st param is URL w/ data
  //2nd param is a function handling the response
  $.get('sentence.html', function(response) {
    //Get the element on the page with id of sentences
    //And insert the response
    $('#sentences').html(response)
  })
})
