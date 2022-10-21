const gallery = document.getElementById("gallery");

window.onmousemove = (e) => {
  const mouseX = e.clientX,
    mouseY = e.clientY;

  // get the ratio for mouse position
  const xDecimal = mouseX / window.innerWidth,
    yDecimal = mouseY / window.innerHeight;

  const maxX = gallery.offsetWidth - window.innerWidth,
    maxY = gallery.offsetHeight - window.innerHeight;

  // get the respective mouse position of the gallery element based on the decimals
  const panX = maxX * xDecimal * -1,
    panY = maxY * yDecimal * -1;

  // update the CSS to transform the gallery's position by panX/Y numbers of pixels
  gallery.animate(
    {
      transform: `translate(${panX}px, ${panY}px)`,
    },
    {
      duration: 4000,
      fill: "forwards",
      easing: "ease",
    }
  );
};
