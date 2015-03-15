self.port.on('clearField', function() {
  var selectedElement = document.activeElement;
  if ( ( selectedElement.type == 'text' ) || ( selectedElement.type == 'password' ) ) {
    selectedElement.value = '';
  }
});
