const loadCatagories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCatagories(data.categories))
}

const loadPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => displayPets(data.pets))
}
// remove active class from all button 
const removeActiveStyle = () => {
    const allActiveBtn = document.getElementsByClassName('category-btn');
    for (btn of allActiveBtn) {
        btn.classList.remove('active');
    }
}

const loadCategoryWise = category => {
    const url = `https://openapi.programming-hero.com/api/peddy/category/${category}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            // remove active style from all button
            removeActiveStyle();

            // add active style 
            const activeBtn = document.getElementById(`btn-${category}`)
            activeBtn.classList.add('active')
            displayPets(data.data)
        })
}

// funcion for displaying data 


// Loading modal data
// modal one 
const loadingModal = (id) => {

    // fecthing data 
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        .then(res => res.json())
        .then(data => showingModal(data.petData))

    my_modal_5.showModal()
}

// modal two 
const loadSecondModal = (id) => {
    const adoptBtn = document.getElementById(`adopt-btn-${id}`);
    adoptBtn.innerText = 'Adopted';
    adoptBtn.disabled = true;
    my_modal_3.showModal()

}
// shoing data on modal 
const showingModal = (pet) => {
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = `
    <img class="w-full rounded-lg" src='${pet.image}' />
    <h2 class="text-2xl font-bold">${pet.pet_name}</h2>
    <h3  class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
  </svg>
     Breed:   ${pet.breed ? pet.breed : "No Information"}</h3>
    <h3 class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>
     Birth:   ${pet.date_of_birth ? pet.date_of_birth : "No Information"}</h3>
    <h3  class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
  </svg>
     Gender:   ${pet.gender ? pet.gender : "No Information"}</h3>
    <h3 class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
     Price:   ${pet.price ? pet.price : "No Information"}</h3>
     <h2 class="text-xl font-bold">Details Information</h2>
     <p class="text-gray-500">${pet.pet_details}</p>
    `
}

// display all categories 
const displayCatagories = (categories) => {
    const catagoriesContainer = document.getElementById('all-catagories');


    categories.forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
        <button id="btn-${category.category}" onclick="loadCategoryWise('${category.category}')" class="flex items-center gap-5 category-btn btn md:px-12, md:py-8 rounded-lg bg-gray-200">
            <img class="w-8 h-8" src=${category.category_icon} />
            <span class="text-xl font-bold">${category.category}</span>
        </button>
        `;

        catagoriesContainer.appendChild(div);
    })
}
// show liked pets 
const showLikedPets = (petImg) => {
    const likedPetsContainer = document.getElementById('liked-pets');
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${petImg}" />
    `
    likedPetsContainer.appendChild(div)

}
const displayPets = (pets) => {
    const petsContainer = document.getElementById('show-pets');
    petsContainer.innerHTML = '';
    if (pets.length == 0) {
        petsContainer.classList.remove('grid')
        petsContainer.innerHTML = `
        <div class="flex flex-col items-center justify-center my-12 space-y-4">
            <img src='../images/error.webp' />
            <h1 class="text-xl text-center md:text-4xl font-bold">No Information Available</h1>
            <p class="text-gray-400 text-center">It is a long established fact that a reader will be distracted by the readable content  of a page when looking at <br/> its layout. The point of using Lorem Ipsum is that it has a.</p>
        </div>
        `
        return;
    }
    pets.forEach(pet => {
        petsContainer.classList.add('grid')
        const petCard = document.createElement('div');
        petCard.innerHTML = `
        <div class="card bg-base-100  shadow-sm">
            <figure class="px-10 pt-10 w-full h-full">
                <img
                      src=${pet.image}
                      alt="Shoes"
                      class="rounded-xl w-full md:h-32 lg:h-40" />
          </figure>
          <div class="card-body ">
                <h2 class="card-title">${pet.pet_name}</h2>
                <h3  class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
              </svg>
                 Breed:   ${pet.breed ? pet.breed : "No Information"}</h3>
                <h3 class="flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
                 Birth:   ${pet.date_of_birth ? pet.date_of_birth : "No Information"}</h3>
                <h3  class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
                 Gender:   ${pet.gender ? pet.gender : "No Information"}</h3>
                <h3 class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
                 Price:   ${pet.price ? pet.price : "No Information"}</h3>
                <div class="card-actions flex   mt-5">
                    <button onclick="showLikedPets('${pet.image}')" class="btn btn-outline text-[#0E7A81]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>
                  </button>
                    <button id="adopt-btn-${pet.petId}" onclick="loadSecondModal(${pet.petId})" class="btn btn-outline text-[#0E7A81]">Adopt</button>
                    <button onclick="loadingModal(${pet.petId})" class="btn btn-outline text-[#0E7A81]">Details</button>
                </div>
          </div>
        </div>
        `
        petsContainer.appendChild(petCard)
    })
}


// calling functions 
loadCatagories();
loadPets();