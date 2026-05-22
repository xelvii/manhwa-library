// YOUR MANHWA DATABASE
const library = [
    {
    title: "Academy's Genius Swordmaster",
    coverUrl: "images/academys-genius-swordmaster.webp",
    genres: ["Action", "Adventure", "Fantasy", "Genius MC", "Reincarnation"],
    description: `Ronan lived a wasteful life filled with regrets. A second chance befalls him at the end of his futile life. He went back to the time when he was a ten-year-old child! For the people who sacrificed themselves for him, he becomes determined to live a new life.  `,
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
    title: "Childhood Friend of the Zenith",
    coverUrl: "images/childhood-friend-of-the-zenith.webp",
    genres: ["Action", "Fantasy", "Murim"],
    description: `Gu Yangchun, who betrayed the Orthodox sects, became a demonic human under the Heavenly Demon.

Living as a demonic human, he led a life filled with regret. He committed countless evils not of his own accord, but under the orders of the Heavenly Demon.

In the Great Orthodox-Demon War, thanks to Wi Seol-ah, who cut down the Heavenly Demon that made even the three supremes of the Orthodox forces kneel, Gu Yangchun was taken prisoner by the Orthodox forces and suffered for his sins.

With whatever morals he had left in him, he died giving Wi Seol-ah information about the Demon Cult due to a bind the Heavenly Demon had placed on him.

Then, for some reason, Gu Yangchun regressed to when he had first met Wi Seol-ah. Realizing the regression was not a dream, Gu Yangchun decided to live a quiet life. However, bad ties from his previous life began to draw near, one by one.


`,
    categories: ["Hiatus"]
    },
    {
    title: "Return of the Mount Hua Sect",
    coverUrl: "images/return-of-the-mount-hua-sect.webp",
    genres: ["Action", "Adventure", "Comedy", "Fantasy", "Murim", "Reincarnation", "Shounen"],
    description: `Chung Myung, The 13th Disciple of the Mount Hua Sect, One of the 3 Great Swordsmen, Plum Blossom Sword Saint, defeated Chun Ma, who brought destruction and disarray onto the world. After the battle, he breathes his last breath on top of the headquarter mountain of the Heavenly Demon Sect. He is reborn after 100 years in the body of a child. ......What? The Mount Hua Sect has fallen? What kind of nonsense is that!?`,
    categories: ["Ongoing"]
    },
    {
    title: "Star-Embracing Swordmaster",
    coverUrl: "images/star-embracing-swordmaster.webp",
    genres: ["Action", "Adventure", "Fantasy", "Genius MC"],
    description: `Vlad was a vagrant child of the slums who always admired knights. After an incident where he was struck by black lightning, he began hearing a voice. A knight of blue moonlight appeared one day, and Vlad's back-alley life was turned upside down... Even an obscure star that does not shine in the highest peaks of the night sky is still a star if it wishes to shine.`,
    categories: ["Ongoing"]
    },
    {
    title: "The Knight King Who Returned with a God",
    coverUrl: "images/the-knight-king-who-returned-with-a-god.webp",
    genres: ["Action", "Adventure", "Fantasy", "Overpowered", "Reincarnation"],
    description: `I returned to Earth after hunting demons in the otherworld for three hundred years. But I did not return alone.`,
    categories: ["Ongoing"]
    },
    {
    title: "Infinite Mage",
    coverUrl: "images/infinite-mage.webp",
    genres: ["Action", "Adventure", "Fantasy", "Genius MC", "Shounen"],
    description: `Abandoned at birth in a stable, Shirone was raised by commoners.As a child, he had gifted Insight and had learned how to read. After visiting the city, he finally saw the workings of magic, which he was immensely curious about.This inspired Shirone's dream of becoming a mage. However, the city was a place with a cruel and rigid social hierarchy. Here, Shirone discovered the hidden side of the world before he even reached adulthood...Will Shirone be able to achieve his dream of becoming a mage in this twisted world?`,
    categories: ["Ongoing"]
    },
    {
    title: "Regressor Instruction Manual",
    coverUrl: "images/regressor-instruction-manual.webp",
    genres: ["Action", "Adventure", "Fantasy"],
    description: `One day, I was summoned to this world.Beasts poured out, and an incredible crisis came.My talents couldn't have been worse.[The player's talent level is at rock bottom.] [Almost all the numbers are hopeless.] Whether you have to become a warrior or a wizard. Whether you've gone back in time.You have to take advantage of everything in order to survive."What about it?""I'll use everything I have to survive!"`,
    categories: ["Ongoing"]
    },
    {
    title: "Solo Max-Level Newbie",
    coverUrl: "images/solo-max-level-newbie.webp",
    genres: ["Action", "Adventure", "Comedy", "Fantasy", "Game", "Tower"],
    description: `Jinhyuk, a gaming Nutuber, was the only person who saw the ending of the game [Tower of Trials]. However, when the game's popularity declined, it became difficult for him to continue making a living as a gaming Nutuber. Since he already saw the ending of the game, he was about to quit playing. But that day, [Tower of Trials] became reality, and Jinhyuk, who knew about every single thing in the game, took over everything faster than anyone possibly could! "I'll show you what a true pro is like."`,
    categories: ["Ongoing"]
    },
    {
    title: "Terminally-Ill Genius Dark Knight",
    coverUrl: "images/terminally-ill-genius-dark-knight.webp",
    genres: ["Action", "Adventure", "Fantasy", "Game"],
    description: `<Inner Lunatic> is a fantasy RPG infamous for its extreme difficulty.


However, to Yoo Chan, who was diagnosed with a terminal illness at a young age, this game was his entire life and has now become his reality.


From now on, Yoo Chan has to survive in this world as Nox von Reinharber, the worst villain in the first act of the game. Will he be able to reach the end of the story safely?   `,
    categories: ["Ongoing"]
    },
    {
    title: "The Extra’s Academy Survival Guide",
    coverUrl: "images/the-extras-academy-survival-guide.webp",
    genres: ["Action", "Adventure", "Fantasy", "Isekai"],
    description: `I possessed a third-rate extra villain character in my favorite game. I have no ambitions and I just want to live a quiet life. But sheesh, this world is a hard place to survive in. I will survive to the ending of this story, in a way the protagonist cannot. I will survive in the way of a third-rate villainous character.`,
    categories: ["Ongoing"]
    },
    {
    title: "The Reincarnated Assassin is a Genius Swordsman",
    coverUrl: "images/the-reincarnated-assassin-is-a-genius-swordsman.webp",
    genres: ["Action", "Adventure", "Fantasy", "Murim", "Reincarnation"],
    description: `I was a chained dog in my past life. I didn't remember my parents and I lived an emotionless life; like a tool. That life ended with my master horrifically killing me. I thought that was the end of my life. But when I opened my eyes again, I was born as the youngest child of the continent's most powerful family. For both revenge and those who treasure me in my new life, I wielded the sword instead of the dagger.`,
    categories: ["Ongoing"]
    },
    {
    title: "Omniscient Reader’s Viewpoint",
    coverUrl: "images/omniscient-readers-viewpoint.webp",
    genres: ["Action", "Adventure", "Fantasy"],
    description: `‘This is a development that I know of.’The moment he thought that the world had been destroyed, a new universe had unfolded.The new life of an ordinary reader begins within the world of the novel, a novel that he alone had finished.`,
    categories: ["Hiatus"]
    },
    {
    title: "The Max-Level Player's 100th Regression",
    coverUrl: "images/the-max-level-players-100th-regression.webp",
    genres: ["Action", "Adventure", "Fantasy", "Regression"],
    description: `Everyone between the age of 15 and 25 worldwide is required to participate in the death game of twenty rounds. The main character starts his 100th challenge thanks to his ability to regress. Having experienced the game 99 times beforehand, he is able to become overwhelmingly more powerful than anyone else. Once he realizes that the condition of the last round is to have at least five people, he starts to take in party members in order to avoid repeating his past mistakes.`,
    categories: ["Ongoing"]
    },
    {
    title: "The Novel’s Extra",
    coverUrl: "images/the-novels-extra-remake.webp",
    genres: ["Action", "Adventure", "Fantasy", "School Life"],
    description: `Billions of characters exist inside the single world of a novel.However, no one aside from the heroines and 'important supporting characters' receives a name. “Chundong, what is your standing?” I don’t know. I don’t even know why my name is Chundong. This world is a novel I wrote.However, I ended up as a character I'd never even written about. Other than getting accepted into the Agent Military Academy, this character isn't particularly extraordinary, has no interactions with anyone in the novel, and isn’t even mentioned at all. Therefore, I became an extra in the novel....No. I became dust on the novel.`,
    categories: ["Ongoing"]
    },
    {
    title: "I Obtained a Mythic Item",
    coverUrl: "images/i-obtained-a-mythic-item.webp",
    genres: ["Action", "Adventure", "Fantasy", "Revenge", "Shounen"],
    description: `D-Rank non-combat raider becomes a great enemy of god that will save the world with the strongest restoration item.`,
    categories: ["Ongoing"]
    },
    {
    title: "Revenge of the Iron-Blooded Sword Hound",
    coverUrl: "images/revenge-of-the-iron-blooded-sword-hound.webp",
    genres: ["Action", "Adventure", "Fantasy", "Murim", "Reincarnation", "Revenge"],
    description: `He was the hound of the Baskerville family: Vikir.Yet his loyalty was rewarded by the blade of a guillotine dirtied by slander."I will never live the life of a hound slaughtered after the rabbit is caught."In place of death, an unexpected opportunity awaits him.Vikir's eyes glowed red as he sharpened his canines in the dark."Just you wait, Hugo. I will rip out your throat this time."It's time for the hound to exact bloody revenge on his owner.`,
    categories: ["Ongoing"]
    },
    {
    title: "The Dark Magician Transmigrates After 66666 Years",
    coverUrl: "images/the-dark-magician-transmigrates-after-66666-years.webp",
    genres: ["Action", "Adventure", "Fantasy", "Magic", "Overpowered", "Reincarnation"],
    description: `Diablo Volfir, a mighty magician, was sealed for aeons due to the schemes of the 12 Gods but, 66666 years have passed since then, and he descends to earth once again!`,
    categories: ["Ongoing"]
    },
    {
    title: "The Max Level Hero has Returned!",
    coverUrl: "images/the-max-level-hero-has-returned.webp",
    genres: ["Action", "Adventure", "Fantasy", "Isekai", "Murim"],
    description: `The weak prince of an insignificant country, Davey. After becoming comatose, his soul escaped to a temple where the souls of heroes gathered. He trained for a thousand years and has now returned as a max level hero!!“Just you guys wait, I’m gonna face you all head on!”The refreshing story of Davey’s royal life and revenge has just begun.`,
    categories: ["Ongoing"]
    },
    {
    title: "A Dragonslayer's Peerless Regression",
    coverUrl: "images/a-dragonslayers-peerless-regression.gif",
    genres: ["Action", "Adventure", "Fantasy", "Regression", "Revenge"],
    description: `Zeke Draker, the first direct descendant of the Dragon Slayer family to fail awakening. Possessing the talent of a healer instead of a swordsman, he was cast out by his family. Struggling desperately to grow stronger, Zeke met a tragic end.

At the moment of his death, mysterious words appeared before his eyes:

[The soul of an Elder Dragon is engraved upon the will of the one who persists.]

[An irreversible, promised power is being activated.]

When he regained consciousness, he found himself back in the Dragon Slayer family that had abandoned him, 20 years in the past.

"If I can become strong, I’ll make use of anything and everything."

Armed with a newfound, immortal power, the legend of a Dragon Slayer in a class of his own begins.`,
    categories: ["Ongoing"]
    },
    {
    title: "Absolute Regression",
    coverUrl: "images/absolute-regression.webp",
    genres: ["Action", "Adventure", "Fantasy", "Murim", "Regression", "Revenge"],
    description: `"Please send me back to the past." If he cannot not kill that person in this era, he just needs to go back to the past. The man used the "Great Regression Technique" to cross time, going back to the past he desired so much. The "Unrivaled Swordsman" who had lost everything, his family, friends, and life. This is his first step to taking his revenge.`,
    categories: ["Ongoing"]
    },
    {
    title: "Nano Machine",
    coverUrl: "images/nano-machine.webp",
    genres: ["Action", "Adventure", "Fantasy", "Murim", "System"],
    description: `Nanotechnology meets martial arts at the Mashin Academy. Yeo-un’s mother may not be one of the High Priest’s six official wives, but his father’s blood still qualifies him for a chance at the position of Minor Priest. Will a mysterious nanomachine injection from a future descendent help Yeo-un in this fierce competition against his powerful half-siblings?`,
    categories: ["Ongoing"]
    },
    {
    title: "Pick Me Up, Infinite Gacha",
    coverUrl: "images/pick-me-up-infinite-gacha.webp",
    genres: ["Action", "Adventure", "Comedy", "Fantasy", "System"],
    description: `The mobile gacha game 'Pick Me Up!' is known for being brutally difficult, and no one has been able to clear a dungeon. Loki, the fifth among all the world's masters, loses consciousness while trying to clear the dungeon. Upon waking up, Loki finds himself turned into a 1-star level 1 hero, 'Islat Han'. "It's him! I'm certain he's the one who brought me here!" In order to return to Earth, he must lead novice masters and heroes and break through the 100th floor of the dungeon! "You messed with the wrong person." This is the story of master Loki who is forced to carry everyone to victory and cannot afford a single defeat.`,
    categories: ["Ongoing"]
    },
    {
    title: "Return of the Disaster-Class Hero",
    coverUrl: "images/return-of-the-disaster-class-hero.webp",
    genres: ["Action", "Adventure", "Fantasy", "Magic", "Reincarnation", "Shounen"],
    description: `I was the greatest hero on Earth."But he's dead. How could the guy we've killed come back?""I dunno. But if he can come back, just let him."I really came back after 20 years?"Why're you so surprised? What? Did you do something to hurt your conscience?"You bastards. Just you wait.`,
    categories: ["Ongoing"]
    },
    {
    title: "Talent-Swallowing Magician",
    coverUrl: "images/talent-swallowing-magician.webp",
    genres: ["Action", "Adventure", "Demon", "Fantasy", "Genius MC", "Magic"],
    description: `Elric Melvinger. The sole heir of the prestigious magic family. Though he possessed innate talent, he had too much talent, and as such, could not learn magic. However, he then received a blessing left by his ancestors! [Eat demons.] [Swallow demons.] [Drink demons.] [Continue to keep accumulating demons within yourself, and achieve new magic!] Reach high.Reach a height so high that no one will ever reach me.`,
    categories: ["Ongoing"]
    },
    {
    title: "The Heavenly Demon Can't Live a Normal Life",
    coverUrl: "images/the-heavenly-demon-cant-live-a-normal-life.webp",
    genres: ["Action", "Fantasy", "Magic", "Murim", "Shounen"],
    description: `'Heavenly Demon' Baek Joong-Hyuk opens his eyes as the eldest son of the Dimitry family. Known as the fool of the Dimitry family, pushed over by the second son. The world's opinion is irrelevant. 'Heavenly Demon', no, Roman Dimitry, cannot live a normal life. OP 'Heavenly Demon' fantasy!`,
    categories: ["Ongoing"]
    },
    {
    title: "The Regressed Son of a Duke is an Assassin",
    coverUrl: "images/the-regressed-son-of-a-duke-is-an-assassin.webp",
    genres: ["Action", "Adventure", "Fantasy", "Regression", "Revenge"],
    description: `Cyan Vert, the best assassin of the continent, meets a pitiful death after having been betrayed by his own brother, whom he had trusted all his life. If I were given another chance at life, I would live it differently. I would only trust myself, and achieve all the things I want on my own without serving anyone else but myself. That is how I was given a second chance at life. The Cyan Vert, a shadow who lived for others, is no more. I will now pave a path on my own, for myself!`,
    categories: ["Ongoing"]
    },
    {
    title: "The World After The End",
    coverUrl: "images/the-world-after-the-end.webp",
    genres: ["Action", "Adventure", "Fantasy", "Shounen"],
    description: `This is about a man who didn't regress when everyone else returned back to the past.Humans were suddenly summoned to become "Walkers", and they needed to clear the tower to save the world. . . Floor 77: The "Stone of Regression" was discovered.Walkers could now "return" to the past. Slowly, everyone left. . . Humanity's last hope, "Carpe Diem", was formed, made up of people who refused to abandon the world. . . The last Walker reached floor 100.He no longer knew what to believe.`,
    categories: ["Ongoing"]
    },
    {
    title: "Ending Maker",
    coverUrl: "images/ending-maker.webp",
    genres: ["Action", "Comedy", "Fantasy", "Game", "Romance"],
    description: `There are two people who were obssessed with the game, Legend of Heroes 2, and spent thousands of hours on it.

The forever number one, Kang Jinho, and the forever number two, Hong Yoohee.

One day, when they woke up, they had been reincarnated into their characters within the game…

“Hey… You too?”

“Hey… Me too!”

Legend of Heroes 2’s ending is the end of the human world.

However, since there are two of them instead of just one, and not just any two, but the server’s rank one and rank two, things could be different.

The journey of the veteran gamers to accomplish the happy ending starts now!`,
    categories: ["Ongoing"]
    },
    {
    title: "The Regressed Mercenary's Machinations",
    coverUrl: "images/the-regressed-mercenarys-machinations.webp",
    genres: ["Action", "Adventure", "Fantasy", "Regression", "Revenge"],
    description: `Ghislain Perdium, the Mercenary King and one of the continent's top seven, started a great war in an attempt to avenge his fallen family.

His plans of revenge were going smoothly until he was slain by Idun, who he had never expected to make an appearance. Ghislain thought he died, but he woke up as a younger version of himself from before the fall of his household.

With this second chance, he decided to fix all the wrong pieces of the puzzle and avoid making the same mistakes he did in his past life!`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
    },
    {
    title: "Title",
    coverUrl: "images/placeholder.webp",
    genres: ["genres"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Ongoing"]
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
        'Hiatus',
        'Cancelled'
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