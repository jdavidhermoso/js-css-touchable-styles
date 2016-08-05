(function(w,d) {
    function init() {
        var touchable = 'ontouchstart' in document.documentElement,
            body = d.getElementsByClassName('body')[0];
        if (touchable) {
            body.classList.add('touchable');
        }

        $("#ts-data-tbody").selectable({
            filter: "tr",
            selected: function( event, ui ) {
                var team_id = 0;
                if( $(".ui-selected, .ui-selecting").length > 1) {
                    $(".ui-selected").not(":first").removeClass("ui-selected");
                }
                team_id = ui.selected.dataset.teamId;
                loadTeamProfile(team_id);
            }
        });
    };

    function loadTeamProfile(team_id) {
        //Notice this would be AJAX in the real world.
        $(".ts-team-profile:not([data-team-id='"+team_id+"'])").addClass('ts-hidden');
        $("[data-team-id='"+team_id+"']").removeClass('ts-hidden');
    }
    d.addEventListener('DOMContentLoaded', function() {
        init();
    });
})(window,document);