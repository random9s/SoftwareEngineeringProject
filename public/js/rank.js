$(function() {
    $("p#submit_space").text("Changes Saved");
    $("p#submit_space").fadeOut(1);
    $( "#sortable" ).sortable({

        stop: function( event, ui ) {
            var ids = $( "#sortable" ).sortable( "toArray" );

            for (var item in ids) {
                var vals = ids[item].split("-");
                ids[item] = vals[1];
            }

            $.post('/admin/save', {
                    _token: $('meta[name=csrf-token]').attr('content'),
                    ids: ids,
                    courseid: $('meta[name=courseid]').attr('content')
                }
            )
            .done(function(data) {
                    $("p#submit_space").fadeIn(100);
                    $("p#submit_space").fadeOut(2000);
                })
            .fail(function() {
                alert( "error" );
            });
        }
    });
});
$(function() {
    $( "button#course_button" )
        .button()
        .click(function( event ) {
            $("p#submit_space").text("Applicant Choice Submitted");
        });
});
$(function() {
    $( ".ui-state-default" ).tooltip({
        items: "li",
        show: {
            delay: 700
        },
        tooltipClass: "right",
        position: {
            my: "left+250 top-32",
            at: "left"
        },
       content: function() {
            var element = $( this );
            var val = element.attr('value');
            var vals = val.split("|");
            val = vals[1];
            return $("#info-" + val + ".hidden").html();
        }

    });
});