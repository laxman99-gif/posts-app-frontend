fetch("http://localhost:3000/")
  .then(function (res) {
    return res.text();
  })
  .then(function (jres) {
    console.log(jres);

    const jsonData = JSON.parse(jres);

    for (var i = 0; i < jsonData.length; i++) {
      var post = jsonData[i];
      insertOnePost(
        post.content,
        post.createdBy,
        //formatting date
        moment(post.createdAt).format("ddd, h:m A"),
      );
    }
  })
  .catch(function (error) {
    console.log("Error fetching: " + error);
  });

function insertOnePost(authorName, postContent, date) {
  var toInsert = ` <div class="post">
    <div>
        <div class="author">${authorName}</div>
        <div>on ${date}</div>
    </div>
    <div class="content">${postContent}</div>
</div>`;

  const container = document.getElementById("posts-container");

  container.insertAdjacentHTML("afterbegin", toInsert);
}

// insertOnePost("Author Name", "Content", "hijo");
