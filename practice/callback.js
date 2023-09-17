console.log("Before");
getUser(1, getRepositories);

const p = getUser(1);
p.then((user) => getRepositories(user.gitHubUsername));
p.then((repos) => getommits(repos[0]));
p.then((commits) => console.log("Commits", commits));
p.catch((err) => console.log("Error", err.message));

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
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a user from a database...");
      resolve({ id: id, gitHubUsername: "HAMADI" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}
