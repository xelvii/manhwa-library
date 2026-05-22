// YOUR MANHWA DATABASE
// Simply add your genres in the array format: genres: ["Genre1", "Genre2"]
const library = [
    {
        title: "The Priest of Corruption",
        coverUrl: "images/the-priest-of-corruption.jpg",
        genres: ["Action", "Adventure", "Fantasy"],
        description: "I used a cheat to create a character in the game. When I came to my senses after pressing the play button, I had possessed the 'Priest of Corruption' character I had created...",
        category: "Action"
    },
    {
        title: "The Max Level Hero has Returned!",
        coverUrl: "images/the-max-level-hero-has-returned.jpg",
        genres: ["Action", "Adventure", "Fantasy", "Isekai", "Murim"],
        description: "The weak prince of an insignificant country, Davey. After becoming comatose, his soul escaped to a temple where the souls of heroes gathered and trained for a thousand years...",
        category: "Action"
    },
    {
        title: "The Heavenly Demon’s Descendant",
        coverUrl: "images/the-heavenly-demons-descendant.jpg",
        genres: ["Action", "Adventure", "Fantasy", "Murim", "Revenge"],
        description: "Jin Suho lost his mother as a child and decided to become a hunter as he sought revenge for her. He gave his life to training himself until he meets a mysterious man who introduced himself as the Heavenly Demon...",
        category: "Action"
    },
    {
        title: "The Executioner",
        coverUrl: "images/the-executioner.jpg",
        genres: ["Action", "Adventure", "Fantasy", "Revenge"],
        description: "Gangyu could never understand why his team of heroes lived by the words of never killing anyone... until a villain wiped out his squad and killed his brother. Now, he enters the prison as an executioner with permission to kill.",
        category: "Action"
    },
    {
        title: "The Dark Magician Transmigrates After 66666 Years",
        coverUrl: "images/the-dark-magician-transmigrates-after-66666-years.jpg",
        genres: ["Adventure", "Fantasy", "Magic", "Overpowered", "Reincarnation", "Shounen"],
        description: "Diablo Volfir, a mighty magician, was sealed for aeons due to the schemes of the 12 Gods. But 66,666 years have passed since then, and he descends to earth once again!",
        category: "Action"
    },
    {
        title: "Talent-Swallowing Magician",
        coverUrl: "images/talent-swallowing-magician.jpg",
        genres: ["Action", "Adventure", "Demon", "Fantasy", "Genius MC", "Magic"],
        description: "Elric Melvinger, the sole heir of a prestigious magic family. Though he possessed innate talent, he had too much of it and could not learn magic until he received a blessing left by his ancestors: Eat and swallow demons.",
        category: "Action"
    },
    {
        title: "Solo Leveling: Ragnarok",
        coverUrl: "images/solo-leveling-ragnarok.jpg",
        genres: ["Action", "Adventure", "Fantasy"],
        description: "The Earth's existence is under threat once more as Itarim, the gods of other universes, seek to fill the void. Sung Jinwoo sends Beru to awaken his son Suho's powers to navigate a new world against a new evil.",
        category: "Action"
    },
    {
        title: "Return of the 8th Class Magician",
        coverUrl: "images/return-of-the-8th-class-magician.jpg",
        genres: ["Fantasy", "Genius MC", "Reincarnation", "Revenge", "Shounen"],
        description: "After being betrayed on the verge of death by Emperor Ragnar, the great 8th class magician uses a dagger with time magic applied to it to regress and put everything back in its place.",
        category: "Action"
    },
    {
        title: "Reborn as the Enemy Prince",
        coverUrl: "images/reborn-as-the-enemy-prince.jpg",
        genres: ["Action", "Adventure", "Comedy", "Fantasy", "Mystery", "Reincarnation"],
        description: "After losing a war, I woke up as the weakest prince of the enemy nation that killed me—Prince Callian, who was destined to die soon.",
        category: "Action"
    },
    {
        title: "Reaper of the Drifting Moon",
        coverUrl: "images/reaper-of-the-drifting-moon.jpg",
        genres: ["Action", "Fantasy", "Genius MC", "Murim"],
        description: "He's in the deepest part of the Jianghu. Keep your eyes wide open if you do not wish to get dragged into the abyss.",
        category: "Action"
    },
    {
        title: "I Became a Renowned Family’s Sword Prodigy",
        coverUrl: "images/i-became-a-renowned-familys-sword-prodigy.jpg",
        genres: ["Action", "Adventure", "Fantasy", "Reincarnation"],
        description: "Baek Woojin is the youngest son of a renowned swordsman family with no talent. Although he was dishonored and killed, he reincarnates as the owner of a Magic Sword with one goal: destruction of his family.",
        category: "Action"
    },
    {
        title: "The Warrior Became an Academy Professor After Divorce",
        coverUrl: "images/the-warrior-became-an-academy-professor-after-divorce.jpg",
        genres: ["Drama", "Fantasy"],
        description: "The story of a legendary warrior who takes on a completely new path as an academy professor following his divorce.",
        category: "Action"
    },
    {
        title: "Ending Maker",
        coverUrl: "images/ending-maker.jpg",
        genres: ["Action", "Comedy", "Fantasy", "Game", "Romance"],
        description: "Two pro gamers obsessed with Legend of Heroes 2 wake up reincarnated as their in-game characters. The rank 1 and rank 2 server veterans team up to change the tragic ending into a happy one.",
        category: "Action"
    },
    {
        title: "Damn Reincarnation",
        coverUrl: "images/damn-reincarnation.jpg",
        genres: ["Action", "Adventure", "Fantasy", "Reincarnation", "Shounen"],
        description: "Hamel, a warrior who traveled to exterminate the devil, dies right before the final battle. He is reborn generations later as Eugene Lionhart, a descendant of his fellow warrior comrade Vermouth.",
        category: "Action"
    },
    {
        title: "Jujutsu Kaisen",
        coverUrl: "images/jujutsu-kaisen.jpg",
        genres: ["Action", "Shounen", "Supernatural"],
        description: "Yuuji is a genius at track and field with zero interest running in circles. He joins the Occult Research Club for kicks, but things get serious when real curses and spirits show up at his high school.",
        category: "Action"
    },
    {
        title: "How to Fight",
        coverUrl: "images/how-to-fight.jpg",
        genres: ["Action", "Adventure", "Comedy", "Drama", "School Life"],
        description: "A low-tier high schooler fights back against bullies by learning specialized martial arts tactics from a mysterious online streaming channel.",
        category: "Action"
    },
    {
        title: "Standard of Reincarnation",
        coverUrl: "images/standard-of-reincarnation.jpg",
        genres: ["Action", "Adventure", "Fantasy", "Murim", "Reincarnation"],
        description: "Daven, a one-armed martial warrior of the Samion family, overcame his limits only to be betrayed. Reincarnated with a fresh start, a gifted body, and both arms, he sets out on a new adventure.",
        category: "Action"
    },
    {
        title: "Worthless Regression",
        coverUrl: "images/worthless-regression.jpg",
        genres: ["Action", "Adventure", "Fantasy", "Murim", "Reincarnation"],
        description: "Lee Sungmin is summoned to the brutal world of Eria with absolutely zero talent. After dying miserably, he gets a chance to regress back to his youth with a magical stone to try and struggle his way forward again.",
        category: "Action"
    },
    {
        title: "Myst, Might, Mayhem",
        coverUrl: "images/myst-might-mayhem.jpg",
        genres: ["Action", "Adventure", "Crazy MC", "Fantasy", "Murim"],
        description: "Jeong, a ruthless killer known as the Slaughtering Scythe Demon, happens to look exactly like Mok Gyeongwoon, the third young master of the Mok Sword Manor. He steps out of prison to live a dangerous fake double-life.",
        category: "Action"
    },
    {
        title: "My Daughter is the Final Boss",
        coverUrl: "images/my-daughter-is-the-final-boss.jpg",
        genres: ["Action", "Fantasy", "Romance"],
        description: "My daughter destroyed the world and I died helplessly. But when I woke up, I regressed back to when she was a five-year-old. I must resolve her five misfortunes to raise her right and change the future.",
        category: "Action"
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