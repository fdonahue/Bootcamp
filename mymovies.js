//sets original id to 0 to easily select.
let currentId = 0;

//create array of movies to add/delete
let list = [];

$(function(){

    $("#new-movie-form").on("submit", function(e){
        //stop page from refresh
        e.preventDefault();
        //select input values
        let rating = $("#rating").val();
        let title = $("#title").val();
        //assignt movie data to single value
        let movieData = {title, rating, currentId};
        const HTMLtoAppend = createMovieDataHTML(movieData);

        currentId++
        list.push(movieData);
    
        $("#movie-table-body").append(HTMLtoAppend);
        $("#new-movie-form").trigger("reset");

    });

        $("tbody").on("click", "btn.btn-danger", function(e){

            let indexToRemove = list.findIndex(movie => 
                movie.currentId === +$(e.target).data("deleteId"))

            list.splice(indexToRemove, 1)
            
            $(e.target)
                .closest("tr")
                .remove();

        });



        $(".fas").on("click", function(e){

            let ratingDirection = $(e.target).hasClass("fa-sort-down") ? "down" : "up";

            let keyToSortBy = $(e.target).attr("id");
            let sortMovie = sortBy(list, keyToSortBy, ratingDirection);


            $("#movie-table-body").empty();

        for (let movie of sortMovie) {
            const HTMLtoAppend = createMovieDataHTML(movie);
            $("#movie-table-body").append(HTMLtoAppend);
        }

            // toggle the arrow
            $(e.target).toggleClass("fa-sort-down");
            $(e.target).toggleClass("fa-sort-up");



        });




});

function sortBy(array, keyToSortBy, ratingDirection) {
    //array.sort sorts by number of alphabet
    return array.sort(function(a,b){
         // convert the strings to numbers
    if (keyToSortBy === "rating") {
        a[keyToSortBy] = +a[keyToSortBy];
        b[keyToSortBy] = +b[keyToSortBy];
      }
      if (a[keyToSortBy] > b[keyToSortBy]) {
        // if rating is a is higher, return 1 else return -1
        return ratingDirection === "up" ? 1 : -1;
        //vice versa
      } else if (b[keyToSortBy] > a[keyToSortBy]) {
        return ratingDirection === "up" ? -1 : 1;
      }
      return 0;


    })
}

function createMovieDataHTML(data) {
    return `
      <tr>
        <td>${data.title}</td>
        <td>${data.rating}</td>
        <td>
          <button class="btn btn-danger" data-delete-id=${data.currentId}>
            Delete
          </button>
        </td>
      <tr>
    `;
  }