function loadCategories(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=>res.json())
    .then((data)=> displayCategories(data.categories))
}

function loadVideos(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideo(data.videos));
}

const displayVideo = (videos) => {
    const videoConatiner = document.getElementById("video-container");

    videos.forEach(videos => {
        console.log(videos);

        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
            <div class="card bg-base-100 shadow-sm">
                <figure>
                    <img
                    src="${videos.thumbnail}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${videos.title}</h2>
                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                </div>
        
        `;
        videoConatiner.append(videoCard);
    });
}

function displayCategories(categories){
    const categoryContainer = document.getElementById("category-container");

    for(let cat of categories){

        const categorydiv = document.createElement("div");

        categorydiv.innerHTML = `
          <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;

        categoryContainer.append(categorydiv);
    }
}
loadCategories();
loadVideos();
