const numStars = 100;

/* ======== */

// Sets the number of stars we wish to display
(generateStars = (numberOfStars) => {

  // Create a sky for the stars.
  const wrapper = document.createElement('section');
  wrapper.className = "sky";
  document.body.append(wrapper);

  // Set star coordinates
  getRandomPosition = () => {
    var y = window.outerWidth;
    var x = window.outerHeight;
    var randomX = Math.floor(Math.random() * x);
    var randomY = Math.floor(Math.random() * y);

    return [randomX, randomY];
  }

  // fill the sky with stars
  for (let i = 0; i < numberOfStars; i++) {
    let star = document.createElement("div");
    star.className = "star";
    var xy = this.getRandomPosition();
    star.style.top = xy[0] + 'px';
    star.style.left = xy[1] + 'px';
    wrapper.append(star);
  }
})(numStars);

