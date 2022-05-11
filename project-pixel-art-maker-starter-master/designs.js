var color = document.querySelector('#colorPicker')
var submitBtn = document.querySelector('#sizePicker')

// Call function for height and width of the grid.
function makeGrid(height1, width1) {
  // Resetting the grid when submit was clicked.
  var container = document.querySelector('#pixelCanvas')
  container.remove()

  // Creating a new element table inside the <div>
  var heading = document.querySelector('div')
  var newElement = document.createElement('table')
  heading.appendChild(newElement)
  newElement.setAttribute("id", "pixelCanvas")

  // Setting the Height of our grid.
  for(let i = 0; i < height1; i++){
    var elem = document.querySelector('#pixelCanvas')
    var tr = document.createElement('tr')
    elem.appendChild(tr)

    // Setting the Width of our grid.
    for(let x = 0; x < width1; x++){
      let td = document.createElement('td')
      tr.appendChild(td)

      // Event listener to add color on our pixel.
      td.addEventListener('click', function respondToTheClick() {
        td.style.backgroundColor = color.value
      });
    }
  }
}

// When submit is clicked, it will reset with the given value
submitBtn.addEventListener('submit', function submit(event) {
  var newHeight = document.getElementById("inputHeight").value
  var newWidth = document.getElementById("inputWidth").value
  makeGrid(newHeight,newWidth)
  event.preventDefault();
});
