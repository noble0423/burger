// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eat").on("click", function(event) {
        var id = $(this).data("id");
        var newEat = $(this).data("neweat");

        var newDevourState = {
            devoured: newEat
        };

        // Send the PUT request
        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("devoured", newEat);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        
        var newBurger = {
            burger_name: $("#burgerName").val().trim()
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                alert("New burger--begging to be Devoured!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });




});