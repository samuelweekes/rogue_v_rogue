function main() 
{
  const canvas = document.querySelector('#glCanvas');
  const context = canvas.getContext('webgl');

  if (gl === null) {
    return;
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;