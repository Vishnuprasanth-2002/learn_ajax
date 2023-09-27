$("#getImg").on("click", function () {
    const selectBreed = document.querySelector("#dog-list");
    console.log(selectBreed.value);
    $("#loading").empty();
    $("body").append('<p id="loading"><span>Loading ...</span></p>');
  
    getRandomImageOfDog(selectBreed.value);
  });
  
  getAllDogsFromApi();
  function getAllDogsFromApi() {
    // https://dog.ceo/api/breeds/list/all
    const url = "https://dog.ceo/api/breeds/list/all";
    $.ajax(url, {
      method: "GET",
      success: function (resp) {
        console.log("Api request success");
        const dogsList = Object.keys(resp.message);
        console.log(dogsList);
        appendToSelect(dogsList);
        //$("#dog-list").html('<img src="'.animal.'"</img>');
      },
      error: function () {
        console.log("Api request error");
      },
      complete: function () {
        console.log("API request completed");
      },
    });
  }
  
  function getRandomImageOfDog(dogBreed) {
    // https://dog.ceo/api/breed/affenpinscher/images/random
    const url = `https://dog.ceo/api/breed/${dogBreed}/images/random`;
    $.ajax(url, {
      method: "GET",
      success: function (resp) {
        console.log("Api request success");
        console.log(resp.message);
        $("#loading").remove();
        $("#animals img").attr("src", resp.message);
      },
      error: function () {
        console.log("Api request error");
      },
    });
  }
  
  function appendToSelect(list) {
    const selectBreed = document.querySelector("#dog-list");
    let i = 1;
    for (let item of list) {
      const option = document.createElement("option");
      option.innerHTML = item;
      option.id = i;
      i++;
      selectBreed.appendChild(option);
    }
  }
  // function doMath(num1, num2, cb) {
  //   return cb(num1, num2);
  // }
  
  // function add(n1, n2) {
  //   return n1 + n2;
  // }
  
  // function subtract(n1, n2) {
  //   return n1 - n2;
  // }