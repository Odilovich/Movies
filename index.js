"use strict";
movies.splice(100)


// // ------------- HTML Elements ------------------/>

const moviesWrapper = $('.movies');
const categoryOption = $('#category');
const inputSearch = $('#header-input');
const resultCount = $('#result-count');
const body = $('body');
const header = $('header');
const aside = $('aside');
const footer = $('footer');
const input = $$('input');
const select = $('select')
const darkMoonBtn = $('.dark-moon');


// // ------------- Normalize Data -----------------/>

const allMovies = movies.map((el) => {
    return {
        title: el.title,
        year: el.year,
        category: el.categories,
        id: el.imdbId,
        rating: el.imdbRating,
        time: `${Math.trunc(el.runtime / 60)}h ${Math.trunc(el.runtime % 60)}m`,
        language: el.language,
        youtube: `https://www.youtube.com/embed/${el.youtubeId}`,
        summary: el.summary,
        minImage: el.smallThumbnail,
        maxImage: el.bigThumbnail,
    }
})


// // ------------- Movies Category ---------------/>

function getCategory(moviesList) {
    const category = []
    
    if (moviesList.length) {
        moviesList.forEach((el) => {
            el.category.forEach((e) => {
                if (!category.includes(e)) {
                    category.push(e)
                }
            })
        })
    }
    render(category)
}

getCategory(allMovies);


// // ------------- Render Categories ---------------/>

function render(data) {
    if (data.length) {
        data.sort().forEach((el) => {
            const option = createElement('option', '', el);
            categoryOption.appendChild(option);
        })
    }
}


// // ------------- Render All Movies ---------------/>

function renderAllMovies(movieList) {
    if (movieList.length) {
        movieList.forEach((el) => {
            const card = createElement('div', 'card', `
            <img src="${el.minImage}" alt="smth">
            <div class="card-body">
            <h2>${el.title.length > 18 ? el.title.substring(0, 15) + "..." : el.title}</h2>
            <ul>
            <li><strong>Year:</strong> ${el.year}</li>
            <li><strong>Categories:</strong>${el.category}</li>
            <li><strong>Rating:</strong>${el.rating}</li>
            <li><strong>Language:</strong>${el.language}</li>
            </ul>
            
            <div class="flex btn-wrappeer items-center gap-x-3">
            
            <button 
            data-like=${el.id}
            class="grid hover:bg-red-700 hover:text-white duration-500 text-red-700 place-content-center p-4 border w-12 h-12 rounded-full">
            <i class="bi bi-suit-heart-fill "></i>
            </button>
            
            <a href="${el.youtube}" target="_blank" class="flex hover:bg-black hover:text-white duration-500  justify-center gap-x-2 text-xl items-center border min-w-24 px-3 h-12 rounded-full"> 
            <i class="bi bi-play-circle-fill"></i>
            <span>watch movie</span>
            </a>
            </div>
            
            </div>`
            );
            moviesWrapper.appendChild(card) 
        })
    }
}

renderAllMovies(allMovies)


// // ------------- Filter Search Movies ---------------/>

inputSearch.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        moviesWrapper.innerHTML = "<span class='loader'></span>"
    setTimeout(()=> {
        searchProduct(e.target.value)
    },1800)
    }
})
function searchProduct(searchABC) {
    const searchResult = allMovies.filter((el) => el.title.toLowerCase().includes(searchABC.toLowerCase()))
    
    if (searchResult.length) {
        moviesWrapper.innerHTML = ""
        resultCount.innerHTML = `Result: ${searchResult.length} movies found`;
        renderAllMovies(searchResult)
    }
    else {
        moviesWrapper.innerHTML = `
        <div class="found">
        <h1 class=' font-bold text-red-600 font-serif text-3xl'>NO INFORMATION FOUND!</h1>
        <a href="/" class=" px-[16px] py-[8px]  bg-green-600 text-white rounded-lg my-6">Home</a>
        </div>
        `
    }
    
}

// // ------------- function dark-mode Movies ---------------/>


function darkMode() {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode');
    aside.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    input.forEach((el) => {
        el.classList.toggle('dark-mode');
    })

    select.classList.toggle('dark-mode');
}


darkMoonBtn.addEventListener('click', () => {
    darkMode()
})









// // ------------- Dynamical Card ---------------/>



// const card = createElement('div', 'card', `
            
//             <img src="${el.minImage}" alt="smth">
//             <div class="card-body">
//                 <h2>${el.title.length > 26 ? el.title.substring(0, 23) + "..." : el.title}</h2>
//                 <ul>
//                     <li><strong>Year:</strong> ${el.year}</li>
//                     <li><strong>Categories:</strong>${el.category}</li>
//                     <li><strong>Rating:</strong>${el.rating}</li>
//                     <li><strong>Language:</strong>${el.language}</li>
//                 </ul>

//                 <div class="flex btn-wrappeer items-center gap-x-3">
                   
//                     <button 
//                         data-like=${el.id}
//                         class="grid hover:bg-red-700 hover:text-white duration-500 text-red-700 place-content-center p-4 border w-12 h-12 rounded-full">
//                         <i class="bi bi-suit-heart-fill "></i>
//                     </button>

//                     <a href="${el.youtube}" target="_blank" class="flex hover:bg-black hover:text-white duration-500  justify-center gap-x-2 text-xl items-center border min-w-24 px-3 h-12 rounded-full"> 
//                         <i class="bi bi-play-circle-fill"></i>
//                         <span>watch movie</span>
//                     </a>
//                 </div>

//             </div>`)















