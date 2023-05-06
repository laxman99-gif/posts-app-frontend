fetch("http://localhost:3000/")
  .then(function (res) {
    return res.text();
  })
  .then(function (jres) {
    console.log(jres);

    const jsonData = JSON.parse(jres);

    console.log(jsonData);
  })
  .catch(function (error) {
    console.log("Error fetching: " + error);
  });

function insertOnePost() {
  var toInsert = ` <div class="post">
    <div>
        <div class="author">Shyam Karki</div>
        <div>on 29 May, 2023</div>
    </div>
    <div class="content">Hello there, this is my first post.</div>
</div>`;

  const container = document.getElementById("posts-container");

  container.insertAdjacentHTML("beforeend", toInsert);
}

insertOnePost();
