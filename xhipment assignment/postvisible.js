<div class="level-1">
    <p>Are you dead or alive?</p>
    <ul>
        <li><a href="#dead" data-level="2">Dead</a></li>
        <li><a href="#alive" data-level="2">Alive</a></li>
        <li><a href="#schrodingers_cat" data-level="2">Both</a></li>
    </ul>
    <div id="dead" class="hidden level-2">
        <p>Do you have physical form?</p>
        <ul>
            <li><a href="#corpse" data-level="3">Yes</a></li>
            <li><a href="#ghost" data-level="3">No</a></li>
        </ul>
        <div id="corpse" class="hidden level-3">
            <p>You are a corpse</p>
        </div>
        <div id="ghost" class="hidden level-3">
            <p>You are a ghost</p>
        </div>
    </div>
    <div id="alive" class="hidden level-2">
        <p>Do you have 9 lives?</p>
        <ul>
            <li><a href="#regular_cat" data-level="3">Yes</a></li>
            <li><a href="#maybe_human" data-level="3">No</a></li>
        </ul>
        <div id="regular_cat" class="hidden level-3">
            <p>You are a cat</p>
        </div>
        <div id="maybe_human" class="hidden level-3">
            <p>You might be human</p>
        </div>
    </div>
    <div id="schrodingers_cat" class="hidden level-2">
        <p>You are a cat and you belong to Schrödinger</p>
    </div>
</div>


.hidden {
    display: none;
}


$("a").on("click", function () {
    var id = $(this).attr("href");
    var level = $(this).data("level");
    $(".level-" + level).addClass("hidden");
    $(id).removeClass("hidden");
});


