// (function(){
// })

// (function () {
//   let screen = document.querySelector(".screen");
//   let buttons = document.querySelectorAll(".btn");
//   let clear = document.querySelector(".btn-clear");
//   let equal = document.querySelector(".btn-equal");
//   console.log(buttons);

//   // first functionality
//   buttons.forEach(function (button) {
//     button.addEventListener("click", function (e) {
//       let userInput = e.target.dataset.num;
//       screen.value += userInput;
//       // screen.value = screen.value + userInput;
//     });
//   });
//   // second functionality equal sign

//   equal.addEventListener("click", function (e) {
//     if (screen.value === "") {
//       screen.value = "";
//     } else {
//       let answer = eval(screen.value);
//       screen.value = answer;
//     }
//   });

//   // third functionality

//   clear.addEventListener("click", function (e) {
//     screen.value = "";
//   });
// })();

// step one
(function () {
  let screen = document.querySelector(".screen");
  let button = document.querySelectorAll(".btn");
  let equal = document.querySelector(".btn-equal");
  let clear = document.querySelector(".btn-clear");
  console.log(button);
  // step 2
  button.forEach(function (button) {
    button.addEventListener("click", function (e) {
      let userInput = e.target.dataset.num;
      // screen.value = screen.value + userInput;
      screen.value += userInput;
    });
  });

  // step three
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });
  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
