$(document).ready(function() {
 
    $('#schools-table').dataTable( {
        "data": dataset,
         "order": [[ 1, "asc" ]],
        ///creating highlighting function that will highlight all values greater than 15
        "createdRow": function ( row, data, index ) {
            if ( data[6].replace(/[\%,]/g, '') * 1 > 15 ) {
                $('td', row).eq(6).addClass('highlight');
            }
        },
        "columns": [
            { "title": "County" },
            { "title": "Area name" },
            { "title": "Region " },
            { "title": "No. Overweight", "class": "center" },
            { "title": "Pct. Overweight", "class": "center" },
            { "title": "No. Obese", "class": "center" },
            { "title": "Pct. Obese", "class": "center" }
        ]
    } );   
} );
        