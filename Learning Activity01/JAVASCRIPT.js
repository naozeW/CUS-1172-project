// This is file my_javascript.js 
// 
// In this file we include our javascript code. The file inlcudes no HTML or CSS code.
// However, the scripts makes some assumption as to the content of the HTML file it will be 
// linked to. That is, it expect that the container HTML page will have a button element and 
// an element with id=score
// 


document.addEventListener('DOMContentLoaded', function() {
      document.querySelector("button").onclick = inc;
    }
)

let counter = 0
function inc() {

      // update the varable by one.
      counter = counter + 1;
      // Update the innerHTML of the #score element.
      document.querySelector("#score").innerHTML = `Score: ${counter}`;

      if (counter >= 10) {
          counter = 0
          document.querySelector("#score").innerHTML = "You Win!"
      }
}