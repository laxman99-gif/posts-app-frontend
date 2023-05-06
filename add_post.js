const nameField = document.getElementById("name-field");
const contentField = document.getElementById("content-field");
function addPost() {
  var postContent = contentField.value;
  var authorName = nameField.value;
  var toSend = {
    postContent: postContent,
    postCreatedBy: authorName,
  };
  const jsonToString = JSON.stringify(toSend);
  fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonToString,
  })
    .then(function (v) {
      window.location.assign("./index.html");
    })
    .catch(function (error) {
      console.log(error);
    });
}
