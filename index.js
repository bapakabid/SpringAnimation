<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Spring Animation</title>
<style>
.spring {
  width: 100px;
  height: 100px;
  background-color: coral;
  position: relative;
  top: 0;
  left: 0;
  transition: top 0.3s, left 0.3s;
}
</style>
</head>
<body>

<div class="spring"></div>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const springElement = document.querySelector(".spring");
  let isAnimating = false;

  springElement.addEventListener("mousedown", startAnimation);
  springElement.addEventListener("mouseup", stopAnimation);

  function startAnimation(event) {
    if (!isAnimating) {
      isAnimating = true;
      document.addEventListener("mousemove", moveSpring);
    }
  }

  function moveSpring(event) {
    const boundingRect = springElement.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.width / 2;
    const offsetY = event.clientY - boundingRect.height / 2;

    springElement.style.left = offsetX + "px";
    springElement.style.top = offsetY + "px";
  }

  function stopAnimation() {
    if (isAnimating) {
      isAnimating = false;
      document.removeEventListener("mousemove", moveSpring);
    }
  }
});
</script>

</body>
</html>
