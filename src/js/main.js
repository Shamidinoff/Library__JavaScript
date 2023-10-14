import $ from "./lib/core";

$("button").on("click", function () {
  $(this).toggleClass("active");
});
