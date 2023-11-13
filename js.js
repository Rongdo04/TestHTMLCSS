const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("mousedown", function () {
    button.style.backgroundColor = "#aaa";
  });

  button.addEventListener("mouseup", function () {
    button.style.backgroundColor = "#8A6DFF";
    
  });
});
