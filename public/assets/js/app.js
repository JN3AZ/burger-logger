$(document).ready(function () {
    $(".gone").on("click", function () {
      event.preventDefault();
      console.log("Devour button clicked");
      let burgerId = $(this).data("id");
      let devoured = $(this).data("eaten");
      let burgerUpdate = { devoured: devoured };
  
      $.ajax("/burgers/" + burgerId, {
        type: "PUT",
        data: burgerUpdate,
      }).done((response) => {
        console.log(response);
        location.reload();
      });
    });
    $("#addBurger").on("click", function () {
      event.preventDefault();
  
      console.log("add button clicked");
      let burger = {
        burger_name: $(add).val(),
        devoured: $(add).data("eaten"),
      };
      $.post("/burgers", burger).done((response) => {
        console.log(response);
        location.reload();
      });
    });
  });