$(document).ready(function() {
    $(".flip1").click(function() {
        $(".panel1").slideToggle("slow");
    });
    $(".flip2").click(function() {
        $(".panel2").slideToggle("slow");
    });
    $(".flip3").click(function() {
        $(".panel3").slideToggle("slow");
    });
    $(".flip4").click(function() {
        $(".panel4").slideToggle("slow");
    });
    // 影片介紹滑動


    var movie;
    var CheckBox1 = $('#CheckBox1').attr("Value");
    var CheckBox2 = $('#CheckBox2').attr("Value");
    var CheckBox3 = $('#CheckBox3').attr("Value");
    var CheckBox4 = $('#CheckBox4').attr("Value");
    // var radio=$('input:radio[name=location]:checked').val();

    $("#clickAll").click(function() {
        if ($("#clickAll").prop("checked")) {
            $("input[name='youtube']").each(function() {
                $(this).prop("checked", true);
            });
        } else {
            $("input[name='youtube']").each(function() {
                $(this).prop("checked", false);
            });
        }


       
    });

    $('.check').click(function() {




        movie = " ";
        var radio = $('input[name=location]:checked').val();




        var check=$("input[name='youtube']:checked").length;//判斷有多少個方框被勾選





        if ($('#CheckBox1').attr('checked')) {
            movie += CheckBox1 + ',---';
        }

        if ($('#CheckBox2').attr('checked')) {
            movie += CheckBox2 + ',---';
        }
        if ($('#CheckBox3').attr('checked')) {
            movie += CheckBox3 + ',---';
        }
        if ($('#CheckBox4').attr('checked')) {
            movie += CheckBox4 + ',---';
        }

        movie += "共訂閱" + radio + "個月";


            if(check==0){

                alert("您尚未勾選任何項目");
                return false;//不要提交表單


            }else{

                if(radio== null){
                    alert("請至少選擇一個訂購月份");

                }
                else
                {
                    alert("你勾選了"+check+"個項目");

                 $('.ul1').append('<li style="margin-top:5px; font-size:1.2em">' + movie + '.&nbsp;&nbsp;<button class="delete2">Delete</button></li>');
                return true;//提交表單
                }
                
            }




       
    });


    $(document).on('click', '.delete2', function(event) {
        $(this).parent().remove();
    });

    // button產生新物件

});