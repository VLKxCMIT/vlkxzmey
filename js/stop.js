if(window.stop !== undefined) {
  window.stop();
} else if (document.execCommand !== undefined) { // для IE
  document.execCommand("Stop", false);
}