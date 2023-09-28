$(document).ready(function() {
  $("#load-div").append('<p id="load"><span>Loading ...</span></p>');
  $("#getImg").on("click", function() {
    const selectBreed = $("#dog-list");
    console.log(selectBreed.val());
    $("body").append('<p id="loading"><span>Loading ...</span></p>');

    getRandomImageOfDog(selectBreed.val());
  });

  getAllDogsFromApi();

  function getAllDogsFromApi() {
    const url = "https://dog.ceo/api/breeds/list/all";
    $.ajax({
      url: url,
      method: "GET",
      success: function(resp) {
        console.log("Api request success");
        const dogsList = Object.keys(resp.message);
        console.log(dogsList);
        appendToSelect(dogsList);
      },
      error: function() {
        console.log("Api request error");
      },
      complete: function() {
        console.log("API request completed");
        $("#load").remove();
      },
    });
  }

  function getRandomImageOfDog(dogBreed) {
    const url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
    $.ajax({
      url: url,
      method: "GET",
      success: function(resp) {
        console.log("Api request success");
        console.log(resp.message);
        $("#animals img").attr("src", resp.message);
       
      },
      error: function() {
        console.log("Api request error");
      },
      complete: function() {
        $("#loading").remove();
      },
    });
  }

  function appendToSelect(list) {
    const selectBreed = $("#dog-list");
    let i = 1;
    for (let item of list) {
      const option = $("<option></option>").html(item).attr("id", i);
      i++;
      selectBreed.append(option);
    }
  }
});

  // function doMath(num1, num2, cb) {
  //   return cb(num1, num2);
  // }
  
  // function add(n1, n2) {
  //   return n1 + n2;
  // }
  
  // function subtract(n1, n2) {
  //   return n1 - n2;
  // }