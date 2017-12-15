$(function () {
    $("#my-form").submit(function(e) {
    e.preventDefault();
    alert("hello gvoner!");
    
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      alert("Thank you!");
    });
  });
});