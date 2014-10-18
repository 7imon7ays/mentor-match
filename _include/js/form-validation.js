$(document).ready(function() {
  var formID = 'ss-form',
      formKey = '1xvDWH7xO_mZXskH8yvKeMxR0Ok6nIwwHkhEtC9QwtbI',
      labelName = 'ssTestLabel',
      testField = 'ssTestValue',
      submitted = false,
      randomInt = Math.floor((Math.random() * 100) + 1);

  var $ssForm = $('#'+formID),
      $submitButton = $ssForm.find("input[type='submit']");
  $ssForm.find('#'+testField).attr('placeholder', 'Type "' + randomInt + '" here.');

  $ssForm.submit(function(evt){
    if ($('#'+testField).val() == randomInt) {
      $ssForm.attr({
        'action': 'https://docs.google.com/forms/d/' + formKey + '/formResponse'
      });

      $submitButton.fadeOut("fast", function() {
        var successMsg = $("<p>Done. You'll hear from us soon.</p>").hide();
        $submitButton.replaceWith(successMsg);
        successMsg.fadeIn("fast");
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

