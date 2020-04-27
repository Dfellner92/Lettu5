$(document).ready(function () {

  const test = false;
  const now = moment().format('MMMM Do YYYY');

  let nowHour24 = moment().format('H');
  let nowHour12 = moment().format('h');

  if (test) {
    nowHour24 = 13;
    nowHour12 = 1;
  }

  let $dateHeading = $('#title-date');
  $dateHeading.text(now);

    $('#save').on("click", function(){

        $('textarea[type="text"]').each(function(){    
            var id = $(this).attr('id');
            var value = $(this).val();
           localStorage.setItem(id, value);
            
        });   
    });
    
    $('#load').on('click', function(){
        $('textarea[type="text"]').each(function(){    
            var id = $(this).attr('id');
            var value = localStorage.getItem(id);
            
            $(this).val(value);
            
        }); 
    });

    function times () {
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
        var hour = dt.getHours();
        $('.lead').text(time);

    
        const timeSlots = [09, 10, 11, 12, 13, 14, 15, 16]
        for (var i = 0; i < timeSlots.length; i++) {
            if (timeSlots[i] == hour) {
                $('.textarea').attr("background-color", "yellow");
            } else if (timeSlots[i] >= hour) {
                $('.textarea').attr("background-color", "red");
            } else {
            $('.textarea').attr("background-color", "green");

        }
    };
    };

    times();
    setInterval(times, 1000);
});

