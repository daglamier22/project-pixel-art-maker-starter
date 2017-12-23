// Select color input
let colorPicker = $('#colorPicker');
let color = colorPicker.val();
colorPicker.on('change', function() {
  color = colorPicker.val();
});

// Select size input
let inputWidth = $('#input_width');
let width = inputWidth.val();
inputWidth.on('change', function() {
  width = inputWidth.val();
});

let inputHeight = $('#input_height');
let height = inputHeight.val();
inputHeight.on('change', function() {
  height = inputHeight.val();
});

// When size is submitted by the user, call makeGrid()
let submitButton = $(':submit');
submitButton.on('click', function( evt ) {
  evt.preventDefault();
  makeGrid();
});

let canvas = $('#pixel_canvas');
function makeGrid() {
  //clear current grid
  canvas.empty();

  //create new grid
  let newFields = "";
  for( let y = 0; y < height; y++ ) {
    newFields += "<tr>";
    for( let x = 0; x < width; x++ ) {
      newFields += "<td></td>";
    }
    newFields += "</tr>";
  }
  canvas.append(newFields);

  //setup event listeners
  canvas.on('click', 'td', function(evt) {
    $(this).attr('bgcolor', color);
  });
}
