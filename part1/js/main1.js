$(function () {
     Highcharts.setOptions({
        colors: ['#696C71', ' #c66402'],
        chart: {
        style: {
                fontWeight: 500,
                fontSize: '11px',
                fontFamily: 'Helvetica',
                color: '#a2a5a1',

            }
        }

    });
    $('#chart-container').highcharts({
        chart: {
            type: 'bar'
        }, 

        title: {
            text: 'Top ten schools or districts with highest percentage of obese, overweight children'
        },
         credits: {
            enabled: false
        },
       
        xAxis: {
            categories: ['Elizabethtown-Lewis Central School',
                        'Greenport Union Free School',
                        'Charlotte Valley Central School District',
                        'Fabius-Pompey Central School',
                        'Hancock Central School District',
                        'Brentwood Union Free School',
                        'Salmon River Central School',
                        'Pulaski Central School',
                        'Brasher Falls Central School District',
                        'Ellenville Central School']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            },
             labels: {
                formatter: function () {
                    return this.value + '%';
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:12px; font-weight: bold;">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.f} %</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Percent overweight',

            data: [33,16,24,25,11,21,21,28,23,27]

        }, {
            name: 'Percent obese',
            data: [35,46,38,31,43,32,31,25,29,23]



        }]
    });
});