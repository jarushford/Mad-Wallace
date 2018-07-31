var suscribeButton = document.querySelector('#suscribe-button');

suscribeButton.AddEventListener('click', function(){
  document.getElementbyId("#email-input").reset();
});