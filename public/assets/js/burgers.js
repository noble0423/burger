$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        

        var newBurger = {
            burger_name: $("#burgerName").val().trim()
            // devoured: $("[name=devoured]:checked").val().trim()
        };
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });




});