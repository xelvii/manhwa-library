// YOUR MANHWA DATABASE
// Simply add your genres in the array format: genres: ["Genre1", "Genre2"]
const library = [
    {
        title: "Solo Leveling",
        coverUrl: "images/sololeveling.jpg",
        // You can have two genres:
        genres: ["Action", "Fantasy"], 
        description: "In a world where hunters must battle deadly monsters..."
    },
    {
        title: "My Demon",
        coverUrl: "images/mydemon.jpg",
        // You can add brand new genres here:
        genres: ["Romance", "Rom-Com", "Supernatural"], 
        description: "A flawless demon loses his powers after getting entangled with a cold-hearted chaebol heiress."
    },
    {
        title: "Omniscient Reader's Viewpoint",
        coverUrl: "images/orv.png",
        // You can have as many genres as you want:
        genres: ["Action", "Drama", "Fantasy", "Psychological"], 
        description: "Dokja was an average office worker whose sole interest was reading his favorite web novel..."
    },
    {
        title: "Title Here",
        coverUrl: "images/filename.jpg",
        genres: ["Action", "Romance"],
        description: "Synopsis goes here."
    },
];

// App Variables
const libraryGrid = document.getElementById('libraryGrid');
const categoryFilters = document.getElementById('categoryFilters');
const viewModal = document.getElementById('viewModal');
let currentFilter = "All"; // Track which filter button is active

// Sort data alphabetically right away so indexing remains consistent
library.sort((a, b) => a.title.localeCompare(b.title));

// Generate the unique filter chips at the top of the page
function setupFilters() {
    // Collect all unique genres across all manhwas
    const allGenres = new Set();
    library.forEach(item => {
        if (item.genres) {
            item.genres.forEach(genre => allGenres.add(genre));
        }
    });

    // Turn set into a sorted list and prepend "All"
    const genreList = ["All", ...Array.from(allGenres).sort()];

    categoryFilters.innerHTML = '';
    genreList.forEach(genre => {
        const button = document.createElement('button');
        button.className = `chip ${genre === currentFilter ? 'active' : ''}`;
        button.innerText = genre;
        
        button.onclick = () => {
            // Update active state visuals
            document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
            button.classList.add('active');
            
            // Filter library display
            currentFilter = genre;
            displayLibrary();
        };
        categoryFilters.appendChild(button);
    });
}

// Display Grid Cards based on chosen Category Filter Filter Mode
function displayLibrary() {
    libraryGrid.innerHTML = '';
    
    library.forEach((item, index) => {
        // If a filter is selected, check if item includes it
        if (currentFilter !== "All" && (!item.genres || !item.genres.includes(currentFilter))) {
            return; // Skip this manhwa if it doesn't match the active filter chip
        }

        const card = document.createElement('div');
        card.className = 'manhwa-card';
        card.onclick = () => showDetails(index);

        card.innerHTML = `
            <img src="${item.coverUrl}" class="manhwa-cover" alt="${item.title}" onerror="this.src='https://placehold.co/400x600/1e1e24/e3e2e6?text=No+Image'">
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

function closeModal() { viewModal.classList.remove('active'); }
document.getElementById('closeViewModalBtn').onclick = closeModal;
window.onclick = (event) => { if (event.target === viewModal) { closeModal(); } };

// Initialize App Setup Elements
setupFilters();
displayLibrary();