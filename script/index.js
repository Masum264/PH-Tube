function loadCategories(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=>res.json())
    .then((data)=> displayCategories(data.categories))
}

function displayCategories(categories){
    const categoryContainer = document.getElementById("category-container");

    for(let cat of categories){

        console.log(cat);
        const categorydiv = document.createElement("div");

        categorydiv.innerHTML = `
          <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
        `;

        categoryContainer.append(categorydiv);
    }
}
loadCategories();
