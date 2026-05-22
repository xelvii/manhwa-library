// YOUR MANHWA DATABASE
const library = [
    {
    title: "Long ass title of the manhwa test 123 123 123 1 231 312 31 23",
    coverUrl: "https://link-to-your-image.jpg",
    genres: ["Action", "Fantasy"],
    description: "Write a short summary about the manhwa here.",
    category: "Action"
    },
];

const libraryGrid = document.getElementById('libraryGrid');
const categoryFilters = document.getElementById('categoryFilters');
const viewModal = document.getElementById('viewModal');
let currentCategory = 'All';

// Generate Category Selection Buttons dynamically
function initFilters() {
    const categories = ['All', 'Action']; // Removed 'Mature'
    categoryFilters.innerHTML = '';
    
    categories.forEach(cat => {
        const button = document.createElement('button');
        button.className = `category-chip ${cat === currentCategory ? 'active' : ''}`;
        button.innerText = cat;
        button.addEventListener('click', () => {
            currentCategory = cat;
            document.querySelectorAll('.category-chip').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderLibrary();
        });
        categoryFilters.appendChild(button);
    });
}

// Render dynamic elements inside card container grids
function renderLibrary() {
    libraryGrid.innerHTML = '';
    
    library.forEach((item, index) => {
        if (currentCategory !== 'All' && item.category !== currentCategory) return;
        
        const card = document.createElement('div');
        card.className = 'manhwa-card';
        card.addEventListener('click', () => showDetails(index));
        
        card.innerHTML = `
            <img src="${item.coverUrl}" class="manhwa-cover" alt="${item.title}" onerror=\"this.src='https://placehold.co/400x600/1e1e24/e3e2e6?text=No+Image'\">
            <div class="manhwa-title-overlay">${item.title}</div>
        `;
        libraryGrid.appendChild(card);
    });
}

// Open detailed pop-up drawer
function showDetails(index) {
    const item = library[index];
    document.getElementById('viewTitle').innerText = item.title;
    document.getElementById('viewDescription').innerText = item.description;
    
    // Set up cover art
    const imgElement = document.getElementById('viewCover');
    imgElement.src = item.coverUrl;
    imgElement.onerror = () => { imgElement.src = 'https://placehold.co/400x600/1e1e24/e3e2e6?text=No+Image'; };

    // Print genre pills inside details sheet box frame
    const genresContainer = document.getElementById('viewGenres');
    genresContainer.innerHTML = '';
    if (item.genres) {
        item.genres.forEach(genre => {
            const span = document.createElement('span');
            span.className = 'genre-tag';
            span.innerText = genre;
            genresContainer.appendChild(span);
        });
    }

    viewModal.classList.add('active');
}

function closeModal() {
    viewModal.classList.remove('active');
}

document.getElementById('closeViewModalBtn').addEventListener('click', closeModal);
viewModal.addEventListener('click', (e) => {
    if (e.target === viewModal) closeModal();
});

// Fire layout engine hooks on start
initFilters();
renderLibrary();