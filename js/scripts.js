$(document).ready(function() {
  var span = $('#letter_insert');
  var letter = $('#letter');
  $('#form').submit(function(e) {
    e.preventDefault();
    span.text($(this).children('input').val());
    letter.show();
  });
});
