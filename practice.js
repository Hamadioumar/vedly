console.log("Before");
getUser(1, getRepositories);

console.log("After");

function getRepositories(repos) {
  getRepositories(user.gitHubUsername, getommits);
}

function getommits(getRepositories) {
  getommits(repo, displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

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
