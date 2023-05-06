const nameField = document.getElementById("name-field");
const contentField = document.getElementById("content-field");

console.log(nameField, contentField);

function addPost() {
  var toSend = {
    postContent: "test 123",
    postCreatedBy: "Thunder client 123",
  };
  const jsonToString = JSON.stringify(toSend);
  fetch("http://localhost:3000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonToString,
  });
}

addPost();
