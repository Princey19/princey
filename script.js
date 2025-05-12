const videoSection = document.querySelector("section");
const loader = document.querySelector(".loader-box");

setTimeout(getVideos, 4000);

function getVideos() {
  fetch(
    "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUHGF6zfD2gwLuke95X3CKFQ&key=AIzaSyDtOP_ntaHzEDIr2mQ6vKSzP7-XJSndj24"
  )
    .then((res) => res.json())
    .then((data) => {
      loader.style.display = "none";
      data.items.forEach((el) => {
        videoSection.innerHTML += `
      <a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="yt-video">
         <img src="" />
      <h3>${el.snippet.title}</h3>`;
      });
    })
    .catch((err) => {
      loader.style.display = "none";
      console.log(err);
      videoSection.innerHTML = `<h2>Something went wrong. Check your internet connection or try again later. SUMMIMASE!!</h2>`;
    });
}
