function openNav() {
    document.getElementById("mySidenav").style.left = "0";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.left = "-350px";
  }

$(document).ready(function(){
    $(".add").click(function(){

    var count_rows = $('#tabl tbody tr').length +1;
    for(var i=0;i<4;i++){

    var trd="";
    trd +="<tr>";
    trd +=`<td contenteditable='true'>[New Name ${count_rows}]</td>`;
    trd+="<td>";
    trd+="<select class='form-select'><option value=''>Integer</option>\
                                     <option value=''>Float</option>\
                                     <option value=''>String</option>\
                                     <option value=''>Boolean</option>\
                                     <option value=''>Character</option>\
                                     <option value=''>Date</option>\
                                     <option value=''>Date&Time</option>\
                                     </select>";
    trd+="</td>";
    trd+=`<td><input type="text" class="form-control" id="exampleFormControlInput${count_rows}" placeholder="30"></td>`

    trd +="<td contenteditable='true'>[New Descr]<span class='delete_it'>x</span></td>";
    trd+=`<td><input type="checkbox" class="btn-check" id="btn-check-outlined_${count_rows}" checked autocomplete="off">`
    trd+=`<label class="btn btn-outline-success" for="btn-check-outlined_${count_rows}">Nullable</label><br></td>`
    trd+="</tr>";
    }
    $("#tabl tbody tr:last-child").after(trd)
                
    });
  });

  $(document).on('mouseenter', '.table-bordered-custom tr', function () {
      var offset = $(this).offset();
      var top = offset.top;
      var width = parseInt($('.table-responsive').css('width'),10);
      var elem = $(this).find('span.delete_it');
      var parent_padding_left = parseInt($('.table-responsive').parent().css('padding-left'),10)
      
      elem.css({
          "top": top + "px",
          "left": (width + parent_padding_left) - 1 + "px",
          "display": "inline"
      });
  })
  .on('mouseleave', '.table-bordered-custom tr', function () {
      $('span.delete_it').css({
          "display": "none"
      })
  });

  $(document).on('click', '.table-bordered-custom tr .delete_it', function () {
    $(this).parent().parent().remove();
});

var i = 0;
function makeProgress(){
    if(i < 100){
        i = i + 1;
        $(".progress-bar").css("width", i + "%");
    }

    // Wait for sometime before running this script again
    setTimeout("makeProgress()", 20);
}
makeProgress();

