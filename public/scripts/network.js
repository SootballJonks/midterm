/*  SEARCH FUNCTIONALITY IS A STRETCH.
    IT IS NOT A REQUIREMENT FOR THE MIDTERM PROJECT.
*/

//Function to append URL for filtering stories
/*
function searchStories(params) {
  let url = "/api/stories/search";
  if (params) {
    url += "?" + params;
  }
  return $.ajax({
    url,
  });
}
*/

const createNewStory = function (data) {
  $.ajax({
    method: "POST",
    url: "/users/:userNAME",
    data,
  }).then((data) => console.log(data));
};

//Get session username

const sessionUsername = () => {
  $.ajax({
    method: "GET",
    url: "/users",
  }).then((res) => {
    return res;
  });
};
