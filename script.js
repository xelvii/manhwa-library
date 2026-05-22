// YOUR MANHWA DATABASE
const library = [
    { title: "The Priest of Corruption", coverUrl: "https://cdn.asurascans.com/asura-images/covers/the-priest-of-corruption.b888c9.webp", genres: ["Action", "Adventure", "Fantasy"], category: "Action" },
    { title: "The Max Level Hero has Returned!", coverUrl: "https://cdn.asurascans.com/asura-images/covers/the-max-level-hero-has-returned.3fc2ae.webp", genres: ["Action", "Adventure", "Fantasy", "Isekai", "Murim"], category: "Action" },
    { title: "The Heavenly Demon’s Descendant", coverUrl: "https://cdn.asurascans.com/asura-images/covers/the-heavenly-demons-descendant.a19071.webp", genres: ["Action", "Adventure", "Fantasy", "Murim", "Revenge"], category: "Action" },
    { title: "The Executioner", coverUrl: "https://cdn.asurascans.com/asura-images/covers/the-executioner.9144ef.webp", genres: ["Action", "Adventure", "Fantasy", "Revenge"], category: "Action" },
    { title: "The Dark Magician Transmigrates After 66666 Years", coverUrl: "https://cdn.asurascans.com/asura-images/covers/the-dark-magician-transmigrates-after-66666-years.0800e8.webp", genres: ["Adventure", "Fantasy", "Magic", "Overpowered", "Reincarnation"], category: "Action" },
    { title: "Talent-Swallowing Magician", coverUrl: "https://cdn.asurascans.com/asura-images/covers/talent-swallowing-magician.8d261c.webp", genres: ["Action", "Adventure", "Demon", "Fantasy", "Genius MC", "Magic"], category: "Action" },
    { title: "Solo Leveling: Ragnarok", coverUrl: "https://cdn.asurascans.com/asura-images/covers/solo-leveling-ragnarok.9ead3a.webp", genres: ["Action", "Adventure", "Fantasy"], category: "Action" },
    { title: "Return of the 8th Class Magician", coverUrl: "https://cdn.asurascans.com/asura-images/covers/return-of-the-8th-class-magician.3c03f3.webp", genres: ["Fantasy", "Genius MC", "Reincarnation", "Revenge"], category: "Action" },
    { title: "Reborn as the Enemy Prince", coverUrl: "https://cdn.asurascans.com/asura-images/covers/reborn-as-the-enemy-prince.04538f.webp", genres: ["Action", "Adventure", "Comedy", "Fantasy", "Mystery", "Reincarnation"], category: "Action" },
    { title: "Reaper of the Drifting Moon", coverUrl: "https://cdn.asurascans.com/asura-images/covers/reaper-of-the-drifting-moon.d67783.webp", genres: ["Action", "Fantasy", "Genius MC", "Murim"], category: "Action" },
    { title: "I Became a Renowned Family’s Sword Prodigy", coverUrl: "https://cdn.asurascans.com/asura-images/covers/i-became-a-renowned-familys-sword-prodigy.e34982.webp", genres: ["Action", "Adventure", "Fantasy", "Reincarnation"], category: "Action" },
    { title: "The Warrior Became an Academy Professor After Divorce", coverUrl: "https://static.tnlycdn.com/2024/08/academy_after_2-75x106.png", genres: ["Drama", "Fantasy"], category: "Action" },
    { title: "Ending Maker", coverUrl: "https://cdn.asurascans.com/asura-images/covers/ending-maker.cfbf53.webp", genres: ["Action", "Comedy", "Fantasy", "Game", "Romance"], category: "Action" },
    { title: "Lily of the Valley", coverUrl: "https://res.mbbcdn.com/thumb/lily-of-the-valley.png", genres: ["Historical", "Yuri"], category: "Action" },
    { title: "Damn Reincarnation", coverUrl: "https://cdn.asurascans.com/asura-images/covers/damn-reincarnation.6735aa.webp", genres: ["Action", "Adventure", "Fantasy", "Reincarnation"], category: "Action" },
    { title: "Jujutsu Kaisen", coverUrl: "https://res.mbbcdn.com/thumb/jujutsu-kaisen.png", genres: ["Action", "Shounen", "Supernatural"], category: "Action" },
    { title: "Archmage Transcending Through Regression", coverUrl: "https://cdn.asurascans.com/asura-images/covers/archmage-transcending-through-regression.b63f09.webp", genres: ["Action", "Adventure", "Fantasy", "Regression"], category: "Action" },
    { title: "How to Fight", coverUrl: "https://static.tnlycdn.com/2020/07/Read-How-to-Fight-manga-free-75x106.png", genres: ["Action", "Adventure", "Comedy", "Drama", "School Life"], category: "Action" },
    { title: "Standard of Reincarnation", coverUrl: "https://cdn.asurascans.com/asura-images/covers/standard-of-reincarnation.32ce34.webp", genres: ["Action", "Adventure", "Fantasy", "Murim", "Reincarnation"], category: "Action" },
    { title: "Worthless Regression", coverUrl: "https://cdn.asurascans.com/asura-images/covers/worthless-regression.e2bea5.webp", genres: ["Action", "Adventure", "Fantasy", "Murim", "Reincarnation"], category: "Action" },
    { title: "Myst, Might, Mayhem", coverUrl: "https://cdn.asurascans.com/asura-images/covers/myst-might-mayhem.98fc44.webp", genres: ["Action", "Adventure", "Crazy MC", "Fantasy", "Murim"], category: "Action" },
    { title: "My Daughter is the Final Boss", coverUrl: "https://cdn.asurascans.com/asura-images/covers/my-daughter-is-the-final-boss.7276ba.webp", genres: ["Action", "Fantasy", "Romance"], category: "Action" },
    { title: "The Regressed Son of a Duke is an Assassin", coverUrl: "https://cdn.asurascans.com/asura-images/covers/the-regressed-son-of-a-duke-is-an-assassin.b4385d.webp", genres: ["Action", "Adventure", "Fantasy", "Regression", "Revenge"], category: "Action" },
    { title: "The Regressed Mercenary's Machinations", coverUrl: "https://cdn.asurascans.com/asura-images/covers/the-regressed-mercenarys-machinations.3acc20.webp", genres: ["Action", "Adventure", "Fantasy", "Regression", "Revenge"], category: "Action" },
    { title: "The Novel’s Extra (Remake)", coverUrl: "https://cdn.asurascans.com/asura-images/covers/the-novels-extra-remake.e249e9.webp", genres: ["Action", "Adventure", "Fantasy", "School Life"], category: "Action" },
    { title: "The Knight King Who Returned with a God", coverUrl: "https://cdn.asurascans.com/asura-images/covers/the-knight-king-who-returned-with-a-god.04a2c1.webp", genres: ["Action", "Adventure", "Fantasy", "Overpowered", "Reincarnation"], category: "Action" },
    { title: "Revenge of the Iron-Blooded Sword Hound", coverUrl: "https://cdn.asurascans.com/asura-images/covers/revenge-of-the-iron-blooded-sword-hound.41b6fb.webp", genres: ["Action", "Adventure", "Fantasy", "Murim", "Reincarnation", "Revenge"], category: "Action" },
    { title: "Academy's Genius Swordmaster", coverUrl: "https://cdn.asurascans.com/asura-images/covers/academys-genius-swordmaster.38ec68.webp", genres: ["Action", "Adventure", "Fantasy", "Genius MC", "Reincarnation"], category: "Action" },
    { title: "Regressor Instruction Manual", coverUrl: "https://cdn.asurascans.com/asura-images/covers/regressor-instruction-manual.e2dfe7.webp", genres: ["Action", "Adventure", "Fantasy"], category: "Action" },
    { title: "Wind Breaker", coverUrl: "https://res.mbbcdn.com/thumb/wind-breaker.png", genres: ["Comedy", "Drama", "Romance", "Sports", "Tragedy"], category: "Action" },
    { title: "Absolute Regression", coverUrl: "https://cdn.asurascans.com/asura-images/covers/absolute-regression.5742b2.webp", genres: ["Action", "Adventure", "Fantasy", "Murim", "Regression", "Revenge"], category: "Action" },
    { title: "Player Who Returned 10,000 Years Later", coverUrl: "https://cdn.asurascans.com/asura-images/covers/player-who-returned-10000-years-later.3e4f8d.webp", genres: ["Action", "Adventure", "Comedy", "Fantasy"], category: "Action" }
];

const libraryGrid = document.getElementById('libraryGrid');
const categoryFilters = document.getElementById('categoryFilters');
const viewModal = document.getElementById('viewModal');
let currentCategory = 'All';

// Generate Category Selection Buttons dynamically
function initFilters() {
    const categories = ['All', 'Action', 'Mature'];
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