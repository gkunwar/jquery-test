$(document).ready(function(){
  $('#testForm').submit(function(){
    var text = $("#name").val();
    var id = $('tr').length;
    var element_id = $("#item_id").val();
    if (element_id != "") {
      $("#"+element_id).closest('tr').find('td:eq(1)').text(text);
    }else{
      if (text != "") {
        var newRowContent = "<tr id="+id+"><td>"+id+"</td><td class='text-content'>"+text+"</td><td><span class='edit-item'>Edit</span> | <span class='delete-item'>delete</span></td></tr>";
        $("#display-text tbody").prepend(newRowContent);
      }
    }
    $("#name").val('');
    return false;
  })

  $(document).on("click",".delete-item",function(){
    var r = confirm("Please confirm!");
    if (r == true) {
      var whichtr = $(this).closest("tr");
      whichtr.remove()
    }
  });

  $(document).on("click",".edit-item",function(){
    var text = $(this).closest("tr").find('td:eq(1)').text();
    var id = $(this).closest("tr").find('td:first').text();
    $("#name").val(text);
    $("#item_id").val(id)
  });
})