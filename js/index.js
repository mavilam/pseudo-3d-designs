// create illo
const illo = new Zdog.Illustration({
  // set canvas with selector
  element: '.zdog-canvas',
  resize: true,
});

// add circle
new Zdog.Ellipse({
  addTo: illo,
  diameter: 100,
  stroke: 20,
  color: '#636',
});

createSquare(undefined, -60, -40)
createSquare(undefined, +60, -40)
createSquare(undefined, -60, +40)
createSquare(undefined, +60, +40)

function createSquare(x, y, z) {
  new Zdog.Rect({
    addTo: illo,
    width: 80,
    height: 80,
    // position further back
    translate: {x: x, y: y, z: z },
    stroke: 12,
    color: '#E62',
    fill: true,
  });
}

function animate() {
  // rotate illo each frame
  illo.rotate.y += 0.03;
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame( animate );
}
// start animation
animate();
// update & render
illo.updateRenderGraph();
