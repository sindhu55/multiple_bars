// get updated value of bar
        function changeBarValue(current_value,change_value){
            // current_value - current % of ProgressBar
            // change_value -  changevalue added to ProgressBar

            var new_bar_value = current_value + change_value;
            if(new_bar_value < 0){
                return 0;
            }else{
                return new_bar_value;
            }
  
        }


// code for Dynamic behaviour of Multiple Bars 
    $(document).ready(function(){
        // code will load after complete loading of HTML

        
        

        // Click events 
        $('.button_val').on('click',function(){
            var selected_bar = $('#select_bar').val();
            var current_value = parseInt($('#'+selected_bar).attr("data-val"));
            var change_value = parseInt($(this).attr('data-change'));
            var new_value = current_value + change_value;
            var bar_value = changeBarValue(current_value,change_value);
            var animation_time = 400;   // in milliseconds
            if(new_value >= 100){
                // Progress bar full
                $('#'+selected_bar).next().text(bar_value+'%');
                $('#'+selected_bar).attr("data-val",bar_value)
                $('#'+selected_bar).animate({width:'100%'},animation_time,function(){
                    $('#'+selected_bar).css('background-color','red');
                });
                
                
            }else if(new_value > 0){
                // Active bar
                $('#'+selected_bar).next().text(bar_value+'%');
                $('#'+selected_bar).attr("data-val",bar_value)
                $('#'+selected_bar).animate({width:new_value+'%'},animation_time);
                $('#'+selected_bar).css('background-color','#AFD7E6');

            }else if(new_value <= 0){
                // Empty bar
                $('#'+selected_bar).next().text(bar_value+'%');
                $('#'+selected_bar).attr("data-val",bar_value)
                $('#'+selected_bar).animate({width:'0%'},animation_time);
            }
            
            
        });
    });