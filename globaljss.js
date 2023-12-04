// modal.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch post content
    fetch('post.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('modalId').innerHTML = data;
      })
      .catch(error => console.error('Error fetching post content:', error));
  });
  
  function openPost() {
    const myModal = new bootstrap.Modal(document.getElementById('modalId'))
  }
  
  function closePost() {
    document.getElementById('modalId').style.display = 'none';
  }
  

//Videos
var videos = ["../videos/pastel-blue-loop", "../videos/pastel-pink-loop.mp4"];
var currentVideoIndex = 0;

function fadeInVideo(video) {
  video.style.opacity = 1;
  video.addEventListener('ended', function() {
    fadeOutVideo(video);
  });
}

function fadeOutVideo(video) {
  video.style.opacity = 0;
  currentVideoIndex = (currentVideoIndex + 1) % videos.length;
  video.src = videos[currentVideoIndex];
  video.load();
  video.play();
  fadeInVideo(video);
}