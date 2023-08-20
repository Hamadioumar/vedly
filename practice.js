console.log("Before");
getUser(1, (user) => {
  console.log("User", user);
  getRepositories(user.gitHubUsername, (repos) => {
    console.log("Repos", repos);
  });
});

console.log("After");

function getUser(id) {
  return new Promise((id, callback) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      callback({ id: id, gitHubUsername: "HAMADI" });
    }, 2000);
  });
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
