// code from https://codepen.io/GabEsu/pen/VdKjPE
let eyeBall = document.getElementById('eyeball'),
  pupil = document.getElementById('pupil'),
  eyeArea = eyeBall.getBoundingClientRect(),
  pupilArea = pupil.getBoundingClientRect(),
  R = eyeArea.width / 2,
  r = pupilArea.width / 2,
  centerX = eyeArea.left + R,
  centerY = eyeArea.top + R;

document.addEventListener('mousemove', (e) => {
  let x = e.clientX - centerX,
    y = e.clientY - centerY,
    theta = Math.atan2(y, x),
    angle = (theta * 180) / Math.PI + 360;

  pupil.style.transform = `translateX(${R - r + 'px'}) rotate(${
    angle + 'deg'
  })`;
  pupil.style.transformOrigin = `${r + 'px'} center`;
});
