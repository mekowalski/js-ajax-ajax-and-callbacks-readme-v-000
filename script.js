//Should wait for page to load before runnng AJAX request
$(document).ready(function() {
  //Now begin AJAX GET request, 1st param is URL w/ data
  //2nd param is a function handling the response
  $.get('sentence.html', function(response) {
    //Get the element on the page with id of sentences
    //And insert the response
    $('#sentences').html(response)
  })
  $.get('this_doesnt_exist.html', function(data) {
    //This won't call because the .html file required doesn't exist
    doSomethingGood()
  }).fail(function(error) {
    //This is called when an error occurs
    consol.log('Something went wrong: ' + error.statusText)
  })
})
