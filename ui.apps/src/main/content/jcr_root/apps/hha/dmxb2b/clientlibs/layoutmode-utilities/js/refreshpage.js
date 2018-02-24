/* *
* This code is to refresh the page when the wcmmode is changed
* in the TouchUI Mode
*/
"use strict";
(function ($, channel) {
    $(function () {
        channel.on("cq-layer-activated", function (event) {
            let ANNOTATE_LAYER = "Annotate",
                TIME_WRAP_LAYER = "Timewarp";
            if ( event.prevLayer && event.layer !== event.prevLayer &&
                 event.layer != ANNOTATE_LAYER &&
                 event.prevLayer != ANNOTATE_LAYER &&
                 event.layer !== TIME_WRAP_LAYER
               ) {
                location.reload();
            }
        });
    });
})(Granite.$, jQuery(document));
