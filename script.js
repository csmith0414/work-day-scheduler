// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  var box1 = ('#hour-9');
  var box2 = ('#hour-10');
  var box3 = ('#hour-11');
  var box4 = ('#hour-12');
  var box5 = ('#hour-1');
  var box12 = ('#hour-2');
  var box11 = ('#hour-3');
  var box10 = ('#hour-4');
  var box9 = ('#hour-5');

  var button9 = ('#btn9');
  var button10 = ('#btn10');
  var button11 = ('#btn11');
  var button12 = ('#btn12');
  var button1 = ('#btn1');
  var button2 = ('#btn2');
  var button3 = ('#btn3');
  var button4 = ('#btn4');
  var button5 = ('#btn5');

  var boxes = [box1, box2, box3, box4, box5, box9, box10, box11, box12];
  var buttons = [button1, button2, button3, button4, button5, button9, button10, button11, button12];
  var entries = ['Entry1', 'Entry2', 'Entry3', 'Entry4', 'Entry5', 'Entry9', 'Entry10', 'Entry11', 'Entry12']; 



  var currentDate = dayjs().format('dddd, MMMM DD ');
  $('#currentDay').text(currentDate);

  var currentTime = dayjs().format('HH')

  function checkTime() { 
    for (let i = 0; i < boxes.length; i++) {
        if ((boxes[i].attr('data-hour')) > currentTime) {
        boxes[i].removeClass('past present future');
        boxes[i].addClass('future');
        } else if (parseInt(boxes[i].attr('data-hour')) === currentTime) {
        boxes[i].removeClass('past present future');
        boxes[i].addClass('present');
        } else {
        boxes[i].removeClass('past present future');
        boxes[i].addClass('past');
  }}};

    buttons[i].addEventListener('click', function(event) {
    event.preventDefault(); 
    for (let i = 0; i < boxes.length && entries.length; i++) {    
    if (boxes[i].val() !== '') {
    localStorage.setItem(entries[i], boxes[i].val());
}}});

  checkTime();
});


