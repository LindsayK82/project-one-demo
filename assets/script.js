var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('btn');

function getApi() {
  
  var requestUrl = 'https://api.github.com/users/repos?per_page=10';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}