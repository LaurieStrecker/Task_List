//Event Listeners
$('button').click(addTask);
$('input').keypress(function(event) {
  if(event.which == 13) {
    addTask();
  }
});

//Delete
$(document).on('click', '#delete', removeTask);

//Add Task
function addTask() {
  var task = $('#newtask').val();

  $('#tasks').append('<div class="task-div">' + task + '<span id="delete">✅</span></div>');

  //Clear the box
  $('#newtask').val(" ");
}

//Remove Task
  function removeTask() {

    $(this).closest('div').remove();
  }




