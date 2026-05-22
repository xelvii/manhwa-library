// YOUR MANHWA DATABASE
const library = [
    {
    title: "Academy's Genius Swordmaster",
    coverUrl: "images/academys-genius-swordmaster.webp",
    genres: ["Action", "Fantasy"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Return of the 8th Class Magician",
    coverUrl: "images/return-of-the-8th-class-magician.webp",
    genres: ["Fantasy", "Genius MC", "Reincarnation", "Revenge", "Shounen"],
    description: `It's been many years since I've bloodied my hands for the United Empire and its emperor, Ragnar. I wanted to return to my hometown and live a quiet life as if to repent for my sins. However, "You are a great 8th class magician who is able to overthrow me and the empire at any time" "How could I let a monster like you stay alive?" After being betrayed on the verge of death by Ragnar, who was my friend as well as my Emperor, He stabbed my heart with a dagger that had time magic applied to it. "The redemption I want is to put everything back to its place."  `,
    categories: ["Finished"]
    },
    
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
];

const libraryGrid = document.getElementById('libraryGrid');
const categoryFilters = document.getElementById('categoryFilters');
const viewModal = document.getElementById('viewModal');
let currentCategory = 'All';

// Generate Category Selection Buttons dynamically
function initFilters() {

    const categories = [
        'All',
        'Finished',
        'Ongoing',
    ];

    categoryFilters.innerHTML = '';

    categories.forEach(cat => {

        const button = document.createElement('button');

        button.className =
            `category-chip ${cat === currentCategory ? 'active' : ''}`;

        button.innerText = cat;

        button.addEventListener('click', () => {

            currentCategory = cat;

            document
                .querySelectorAll('.category-chip')
                .forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');

            renderLibrary();
        });

        categoryFilters.appendChild(button);
    });
}

// Render dynamic elements inside card container grids
function renderLibrary() {
    libraryGrid.innerHTML = '';

    // SORT A-Z
    library.sort((a, b) => a.title.localeCompare(b.title));

    library.forEach((item, index) => {
        if (
            currentCategory !== 'All' &&
            !item.categories.includes(currentCategory)
        ) return;

        const card = document.createElement('div');
        card.className = 'manhwa-card';

        card.addEventListener('click', () => showDetails(index));

        card.innerHTML = `
            <img
                src="${item.coverUrl}"
                class="manhwa-cover"
                alt="${item.title}"
                onerror="this.src='https://placehold.co/400x600/1e1e24/e3e2e6?text=No+Image'"
            >

            <div class="manhwa-title-overlay">
                ${item.title}
            </div>
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