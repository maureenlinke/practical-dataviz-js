  verticalBar();
  multipleBars();
  pieChart();
  sideByside();


//single bar
function verticalBar() {

    $(".bar").each(function(){
      
      height = Number($(this).attr("data-num"))*5;

      $(this).css("height",height+"px")
      $(".bar:after").css("left",height+"px")
            
      $("#single-bar .bar.vertical").css("color","#707070");

    });

  
     

}

//multuple horizontal bars

function multipleBars () {

        var chartData = [{"name":"Elizabethtown-Lewis Central","overweight":"33","obese":"35"},
        {"name":"Greenport Union Free","overweight":"16","obese":"46"},
        {"name":"Charlotte Valley Central District","overweight":"24","obese":"38"},
        {"name":"Fabius-Pompey Central","overweight":"25","obese":"31"},
        {"name":"Hancock Central ","overweight":"11","obese":"43"},
        {"name":"Brentwood Union Free","overweight":"21","obese":"32"},
        {"name":"Salmon River Central","overweight":"21","obese":"31"}]

        var tableString = '';

            _.each(chartData, function(d, i) {

            width = ((d.obese) * 1.7);
            tableString += '<tr><td class="name">' + d.name + '</td><td class="data"><div class="bar" style="width:' + width + '%" ></div>' + ((d.obese))+"%" + '</td>'+
            '<td class="data"><div class="bar obese" style="width:' + width + '%" ></div>' + ((d.overweight))+"%" + '</td></tr>';
          
            $(".bar.obese").animate({width:width+"%"},6000);
         });
    
        $('#table-wrap table').append(tableString);
        $('.bar.obese').css('background', '#E59E00');
}

function pieChart () {

        $('.pie-charts .chart').easyPieChart({
        animate: 2000,
        barColor:'#c66402'
 
   });
}

function sideByside() {
  var surveyData = [{"type":"lifetime","pre":68,"post":75},
{"type":"value","pre":65,"post":74},
{"type":"child","pre":39,"post":46}]

  _.each(surveyData, function(d, i) {

      var type = d.type;

      preWidth = d.pre;

      postWidth = d.post

      $('.bar-holder .bar.'+type+".pre .top-bar").animate({width:preWidth+"%"},6000);
      $('.bar-holder .bar.'+type+".post .top-bar").animate({width:postWidth+"%"},6000).css('background', '#E59E00');
      
      //adds labels
      $('.bar-holder .bar.'+type+".pre span.label").html(preWidth+"%")
      $('.bar-holder .bar.'+type+".post span.label").html(postWidth+"%")
      $(".bar:after").css("left",preWidth+"px")

   });

}





