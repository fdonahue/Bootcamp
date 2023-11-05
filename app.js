console.log("Let's get this party started!");

const $gifArea = $("#gif-area");
const $searchBar = $("#searchBar");

function addGif(rslt) {
    let numResults = rslt.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);

        let $newCol = $("<div>", {class: "col-md-4 col-12 mb-4"});
        let $newGif = $("<img>", { 
            src: rslt.data[randomIdx].images.original.url, 
            class: "w-100"
    });
    $newCol.append($newGif);
    $gifArea.append($newCol);
    }
}



$("form").on("submit", async function(e){
    e.preventDefault();

    let searchTerm = $searchBar.val();
    $searchBar.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: searchTerm,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
      });
      addGif(response.data);
    });

    $("#remove").on("click", function() {
        $gifArea.empty();
      });
      

