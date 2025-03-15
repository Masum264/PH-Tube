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

const loadCategoryVideos = (id) =>{
        const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;

        fetch(url).then(res=>res.json()).then(data=>displayVideo(data.category));
}

const displayVideo = (videos) => {
    const videoConatiner = document.getElementById("video-container");

    videoConatiner.innerHTML = "";

    videos.forEach(videos => {
        console.log(videos);

        const videoCard = document.createElement("div");
        videoCard.innerHTML = `
            <div class="card bg-base-100 shadow-sm">
            <figure class="relative">
                <img class="w-full h-[150px] object-cover"
                src="${videos.thumbnail}"
                alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-white bg-black rounded-sm text-sm px-2">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-3">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                          <img src="${videos.authors[0].profile_picture}" />
                        </div>
                      </div>
                </div>
                <div class="intro">
                     <h2 class="text-sm font-semibold">Midnight Serenade
                    </h2>
                    <p class="text-sm text-gray-400 flex gap-1">${videos.authors[0].profile_name} 
                        <img class="h-5 w-5" src="https://img.icons8.com/?size=96&id=SRJUuaAShjVD&format=png" alt="">
                    </p>
                    <p class="text-sm text-gray-400"> ${videos.others.views} views </p>
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
          <button onclick = "loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;

        categoryContainer.append(categorydiv);
    }
}
loadCategories();

