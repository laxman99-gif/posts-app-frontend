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
    .then(function (res) {
      return res.text();
    })
    .then(function (v) {
      console.log(v);
    })
    .catch(function (error) {
      console.log(error);
    });
}

// addPost("Test", "Hari Bahadur");
