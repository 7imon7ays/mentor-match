$(document).ready(function() {
  var formID = 'ss-form';
  var formKey = '1xvDWH7xO_mZXskH8yvKeMxR0Ok6nIwwHkhEtC9QwtbI';
  var labelName = 'ssTestLabel';
  var testField = 'ssTestValue';
  var submitted = false;

  var $ssForm = $('#'+formID);

  var randomInt = Math.floor((Math.random() * 100) + 1);
  $ssForm.find('#'+testField).attr('placeholder', 'Type "' + randomInt + '" here.');

  $ssForm.submit(function(evt){
    if ($('#'+testField).val() == randomInt) {
      $ssForm.attr({
        'action': 'https://docs.google.com/forms/d/' + formKey + '/formResponse'
      });
      return true;
    } else {
      $ssForm.find("#testFail").removeClass('no-viz');
      $ssForm.find("#testFailMessage").html(
        "<i class='font-icon-arrow-simple-up'></i>Enter \"" +
        randomInt + "\" here so we know you're human."
      );
      return false;
    }
  });
});

