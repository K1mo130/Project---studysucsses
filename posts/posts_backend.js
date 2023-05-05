const form = document.querySelector('form');
const postList = document.querySelector('#post-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const title = document.querySelector('#post-title').value;
  const text = document.querySelector('#post-text').value;

  const post = document.createElement('div');
  post.classList.add('post');

  const postTitle = document.createElement('h3');
  postTitle.textContent = title;

  const postText = document.createElement('p');
  postText.textContent = text;

  post.appendChild(postTitle);
  post.appendChild(postText);

  postList.insertBefore(post, postList.firstChild);

  form.reset();
});