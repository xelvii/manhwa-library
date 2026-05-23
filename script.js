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
    title: "The Executioner",
    coverUrl: "images/the-executioner.webp",
    genres: ["Action", "Adventure", "Fantasy", "Revenge"],
    description: `A hero should never kill anyone, not even the worst of villains. Gangyu could never understand why his team of heroes lived by those words, but he tried his best to do the same… until the villain who wiped out his squad killed his brother in prison. Gangyu breaks his vow and enters Ruculus with permission to kill as the prison’s executioner. Now, he must fight his way through the villains to kill the worst of them all.`,
    categories: ["Ongoing"]
    },
    {
    title: "+99 Reinforced Wooden Stick",
    coverUrl: "images/99-reinforced-wood-stick.jfif",
    genres: ["Action", "Adventure", "Comedy", "Fantasy", "Game"],
    description: `Welcome to “Chrono Life,” a virtual reality game where only the strongest survive. Ji-u logs in to “Chrono Life,” only to be ignored and ridiculed by the other players for his lack of experience, crappy items, and being an overall noob. But when he upgrades his wooden stick to the max reinforcement level of +99, Ji-u realizes he has the power to split continents and slay armies of thousands in just one swing. “It’s time to teach the rest of you a lesson, you f*ckers.”`,
    categories: ["Ongoing"]
    },
    {
    title: "Archmage Transcending Through Regression",
    coverUrl: "images/archmage-transcending-through-regression.webp",
    genres: ["Action", "Adventure", "Fantasy", "Regression"],
    description: `Mikhail Walpurgis, the world's only 9th-circle Archmage, fell in battle due to a damned hero, and managed to cast one final advanced magic spell, . As time rewound, he regressed to 20 years ago."Fine. I’ll just become the hero instead."      `,
    categories: ["Cancelled"]
    },
    {
    title: "Bones",
    coverUrl: "images/bones.webp",
    genres: ["Action", "Adventure", "Drama", "Fantasy"],
    description: `The protagonist, Kang Jihyoung, wanted to become a hunter for his mother.

However, his bullies put his mother into a vegetative state. He tried to take revenge but was thoroughly crushed and trapped...

The boy who lost everything became a beast and began his hunt.`,
    categories: ["Finished"]
    },
    {
    title: "Boundless Necromancer",
    coverUrl: "images/boundless-necromancer.webp",
    genres: ["Action", "Adventure", "Fantasy"],
    description: `I never thought I could become a hunter.I never thought I'd get the chance.But that wasn't the case.「 The 'Tower of Trials' has selected all suitable candidates from Earth. 」 「 Please select your difficulty. 」 「 The rewards you get will be directly proportional to your chosen difficulty. 」I was given a chance just now.A special one, at that.`,
    categories: ["Finished"]
    },
    {
    title: "Damn Reincarnation",
    coverUrl: "images/damn-reincarnation.webp",
    genres: ["Action", "Adventure", "Fantasy", "Reincarnation", "Shounen"],
    description: `Hamel, a warrior who traveled with his colleagues to exterminate the devil. Unfortunately, he died just before the battle with the devil started. "Yes." What the hell? He was reborn as the descendant of his fellow warrior, Vermouth. The descendant from the bloodline of the great Vermouth, Hamel. No, he was now Eugene Lionhart. "It was already enough with me having the delusion that I was a genius in my past life. But… this… It's… It's incomparable.' From a dying body to a new body, he has the achievement that he did not have in his previous life. And, a reincarnation of an unknown origin, the reality of living together with the demons. Facing a new world where everything is questionable. The journey of the unfinished previous life begins with Eugene's body.`,
    categories: ["Hiatus"]
    },
    {
    title: "Duke Pendragon",
    coverUrl: "images/duke-pendragon.webp",
    genres: ["Action", "Adventure", "Demon", "Fantasy", "Reincarnation"],
    description: `Born as the successor of a low-ranking noble household, Raven Varte wears the sin of plotting a rebellion against the empire. To be granted amnesty, he was sent to fight demons alongside the worst corp of the empire, the ''Demon" corp. Most say that it is a place where most won't survive for even a year, but Raven somehow managed to survive for ten. When his amnesty was in front of his eyes, on his last battlefield, he met the 'Successor of the Pendragon Duke Household, Eren Pendragon.`,
    categories: ["Finished"]
    },
    {
    title: "F-Class Destiny Hunter",
    coverUrl: "images/f-class-destiny-hunter.webp",
    genres: ["Action", "Adventure", "Fantasy", "Regression"],
    description: `He lost all his teammates to an assassin, but right before dying, he regressed to his past.Right then, Seo Gangrim made the decision never to leave his life to destiny again.`,
    categories: ["Cancelled"]
    },
    {
    title: "Fated to Be Loved by Villains",
    coverUrl: "images/fated-to-be-loved-by-villains.webp",
    genres: ["Action", "Adventure", "Comedy", "Fantasy"],
    description: `The protagonist became the character Daud Campbell in "Savior Rising," a game he enjoyed and became an veteran in. He possessed the body of a powerless noble living on the outskirts, and decided to live quietly, avoiding others' attention.
On his first day inside the game, he gets involved with the final boss, also known as the vessel of the grey demon, "Elnore Elinarize la Tristan."

After their encounter, the protagonist gains two special rewards: "Desperate Survival," which makes him stronger when his rate of survival decreases, and "Deadly Charm," which charms those who have evil traits.

Not only do these two skills get him entangled with the final boss, but they also get him entangled with other demon vessels. However, with the use of his skills, he calmly overcomes the challenges with his veteran expertise.

But every time he overcomes a challenge, those with evil traits become interested in him...

Finally, he received his end goal.

"Put this continent's fate on the line and charm all of them."`,
    categories: ["Finished"]
    },
    {
    title: "Heavenly Inquisition Sword",
    coverUrl: "images/heavenly-inquisition-sword.webp",
    genres: ["Action", "Adventure", "Murim"],
    description: `"He is the master of the Nine Heavens."Yeon Jeokha was the child of a second wife. Viciously bullied by his father's first wife and his siblings, he was later imprisoned in a warehouse after his father died of illness...It has been ten years since his escape after he had learned martial arts that were out of the world."I regard the Yeon Family with great bitterness."The unstoppable adventure of the sole successor of the Heavenly Inquisition Sword, Yeon Jeokha, begins now\!`,
    categories: ["Finished"]
    },
    {
    title: "Viral Hit",
    coverUrl: "images/viral-hit.jpg",
    genres: ["Action", "Adventure", "Comedy"],
    description: `Scrawny high school student Hobin Yu is probably the last guy you’d expect to star in a NewTube channel that revolves around fighting. But after following some advice from a mysterious NewTube channel, Hobin is soon knocking out guys stronger than him and raking in more money than he could have ever dreamed of. Can Hobin keep this up, or will he eventually meet his match?`,
    categories: ["Finished"]
    },
    {
    title: "I Became a Renowned Family's Sword Prodigy",
    coverUrl: "images/i-became-a-renowned-familys-sword-prodigy.webp",
    genres: ["Action", "Adventure", "Fantasy", "Reincarnation"],
    description: `Baek Woojin is the youngest son of a renowned swordsman family who has neither talent in swordsmanship nor an impressive Aura, despite trying harder than anyone. Although he was dishonored by his own family and killed, he reincarnates as the owner of a Magic Sword. His only goal is the destruction of his own family. `,
    categories: ["Cancelled"]
    },
    {
    title: "I'm Not That Kind of Talent",
    coverUrl: "images/im-not-that-kind-of-talent.webp",
    genres: ["Action", "Adventure", "Comedy", "Fantasy", "Tragedy"],
    description: `I'm not that kind of person. I, Deon Hart, am a sickly person who vomits blood whenever I'm stressed.However, at the same time, I'm Demon Arut, who has somehow been misunderstood and thought of as a strong person, and thereby feared by everyone.`,
    categories: ["Hiatus"]
    },
    {
    title: "Level Up With the Gods",
    coverUrl: "images/level-up-with-the-gods.jpeg",
    genres: ["Action", "Adventure", "Fantasy"],
    description: `A young man discovers he has the ability to level up with the gods, leading to an epic journey of power and self-discovery.`,
    categories: ["Cancelled"]
    },
    {
    title: "Teenage Mercenary",
    coverUrl: "images/teenage-mercenary.webp",
    genres: ["Action", "Adventure", "Drama", "Fantasy", "School Life"],
    description: `At the age of eight, Ijin Yu lost his parents in a plane crash and became stranded in a foreign land, forced to become a child mercenary in order to stay alive. He returns home ten years later to be reunited with his family in Korea, where food and shelter are plenty and everything seems peaceful. But Ijin will soon learn that life as a teenager is a whole other feat of survival. With only one year of high school left, Ijin must master new tactics to maneuver his way around the schoolhouse battleground. Can he survive a year of high school? Or rather, will the school be able to survive him?`,
    categories: ["Ongoing"]
    },
    {
    title: "My Daughter is the Final Boss",
    coverUrl: "images/my-daughter-is-the-final-boss.webp",
    genres: ["Action", "Fantasy", "Romance"],
    description: `My daughter destroyed the world.At the the end of the crossroad, I ended up dying helplessly. However, when I woke up, I saw my five-year-old daughter in front of me.Prevent Seol-Ah's Five Misfortunes. (0/5)I was given another chance. If I fail in raising her well, the world will be destroyed.`,
    categories: ["Cancelled"]
    },
    {
    title: "Myst, Might, Mayhem",
    coverUrl: "images/myst-might-mayhem.webp",
    genres: ["Action", "Adventure", "Crazy MC", "Fantasy", "Murim"],
    description: `Jeong, the Slaughtering Scythe Demon, feels joy in killing others. He happens to look just like Mok Gyeongwoon, the third young master of the Mok Sword Manor... "If you pretend to be me and live my life. I will let you out of this prison." "Will you really give me that chance?" Slash Kill the third young master and live his life pretending to be him. Will the fake Mok Gyeongwoon survive this life? The serial killer begins his new life as the third young master of the great Mok Sword Manor.`,
    categories: ["Hiatus"]
    },
    {
    title: "Player Who Returned 10,000 Years Later",
    coverUrl: "images/player-who-returned-10000-years-later.webp",
    genres: ["Action", "Adventure", "Comedy", "Fantasy"],
    description: `One day, out of the blue, he falls into hell. All he has with him is his desire to live and predatory powers. From the thousandth hell to the nine thousandth, he‘s devoured tens and hundreds of thousands of demons, and even the seven archdukes bowed down to him.   "Why do you wish to go back? Your Highness already has everything in hell.“ "Everything, my ass.“ There's nothing to eat or enjoy here! Hell's nothing but desolate land full of terrible demons! "I will return.“ After ten thousand long years, he finally returns to Earth.`,
    categories: ["Hiatus"]
    },
    {
    title: "Reaper of the Drifting Moon",
    coverUrl: "images/reaper-of-the-drifting-moon.webp",
    genres: ["Action", "Fantasy", "Genius MC", "Murim"],
    description: `He's in the deepest part of the Jianghu. Keep your eyes wide open if you do not wish to get dragged into the abyss.`,
    categories: ["Hiatus"]
    },
    {
    title: "Reborn as the Enemy Prince",
    coverUrl: "images/reborn-as-the-enemy-prince.webp",
    genres: ["Action", "Adventure", "Fantasy"],
    description: `After losing a war, I woke up as a prince of the “enemy nation” that killed me. The weakest of the princes, Prince Callian, at that, who was destined to die soon. If this is my chance to save my motherland, I have no choice but to survive as the prince of the enemy nation...!`,
    categories: ["Cancelled"]
    },
    {
    title: "Reincarnation of the Suicidal Battle God",
    coverUrl: "images/reincarnation-of-the-suicidal-battle-god.webp",
    genres: ["Action", "Fantasy", "Overpowered", "Reincarnation", "Shounen"],
    description: `A time travel action fantasy of the strongest of mankind. “Even if the disgusting gods gave me this chance, an opportunity is still an opportunity. Since they want to end up dead, I will kill them.” The last survivor of mankind, Zephyr. The fight with the demons ended in defeat and the gods gave him a chance to go back 10 years in time. The demons who took everything away from humans and the gods who treated humans as beings for sight-seeing. This time, I will tear them to pieces.`,
    categories: ["Hiatus"]
    },
    {
    title: "Return of the Frozen Player",
    coverUrl: "images/return-of-the-frozen-player.webp",
    genres: ["Action", "Fantasy", "Overpowered", "Reincarnation", "Shounen"],
    description: `5 years after the world changed, the final boss appeared. [The final boss for area earth, the Frost Queen, has appeared.] The Final boss! Of we can just defeat her, out lives will go back to normal! The top five players in the world, including Specter Seo Jun-ho, finally defeated the Frost Queen... But they fell into a deep slumber. 25 years passed. A second floor? It didn't end when the Frost Queen died? Specter awakes from his slumber`,
    categories: ["Ongoing"]
    },
    {
    title: "Solo Leveling",
    coverUrl: "images/solo-leveling.webp",
    genres: ["Action", "Adventure", "Fantasy", "Shounen"],
    description: `10 years ago, after “the Gate” that connected the real world with the monster world opened, some of the ordinary, everyday people received the power to hunt monsters within the Gate. They are known as "Hunters". However, not all Hunters are powerful. My name is Sung Jin-Woo, an E-rank Hunter. I'm someone who has to risk his life in the lowliest of dungeons, the "World's Weakest". Having no skills whatsoever to display, I barely earned the required money by fighting in low-leveled dungeons… at least until I found a hidden dungeon with the hardest difficulty within the D-rank dungeons! In the end, as I was accepting death, I suddenly received a strange power, a quest log that only I could see, a secret to leveling up that only I know about! If I trained in accordance with my quests and hunted monsters, my level would rise. Changing from the weakest  Hunter to the strongest S-rank Hunter!  `,
    categories: ["Finished"]
    },
    {
    title: "Solo Leveling: Ragnarok",
    coverUrl: "images/solo-leveling-ragnarok.webp",
    genres: ["Action", "Adventure", "Fantasy"],
    description: `The Earth's existence is under threat once more as Itarim, the gods of other universes, seek to fill the void left by the Absolute Being. Sung Jinwoo has no choice but to send Beru, the shadow ant king, to awaken his son's powers and start him on the journey he once took. Suho must conquer the shadow dungeon and earn his place in the world of hunters as he navigates through a new world against a new evil looking to swallow the world whole.`,
    categories: ["Hiatus"]
    },
    {
    title: "SSS-Class Suicide Hunter",
    coverUrl: "images/sss-class-suicide-hunter.webp",
    genres: ["Action", "Comedy", "Dungeons", "Fantasy", "Murim", "Tragedy"],
    description: `I want an S-Rank skill too! I want it so badly, I could die for it![You have awakened an S-Rank skill.] [But it only works when you die.]HUH!? WHAT’S THE POINT OF GETTING ONE IF I DIE !?`,
    categories: ["Hiatus"]
    },
    {
    title: "Standard of Reincarnation",
    coverUrl: "images/standard-of-reincarnation.webp",
    genres: ["Action", "Adventure", "Fantasy", "Murim", "Reincarnation"],
    description: `The greatest martial family, Samion. Daven, a member of the Samion family, is a one-armed martial soldier without a right arm. Despite the ridicule and contempt he got for only having a left arm, he surpassed the direct line of the Samion family like a genius. However, he got betrayed by his family and parents in the end, thus meeting a poor end. But, he was reincarnated. "I have a right arm?" He had a new family tradition. A naturally gifted body. Experience from his past life. And the god Yulion with him as well. After his reincarnation, everything changed, and a new adventure started.`,
    categories: ["Ongoing"]
    },
    {
    title: "Swordmaster’s Youngest Son",
    coverUrl: "images/swordmasters-youngest-son.webp",
    genres: ["Action", "Adventure", "Overpowered", "Regression", "Reincarnation", "Shounen"],
    description: `Jin Runcandel was the youngest son of Runcandel, the land's most prestigious swordsman family... And the biggest failure in Runcandel history.He, who was kicked out miserably and came to a meaningless end, was given another chance."How do you want to use this power?" "I want to use it for myself."Memories of his past life, overwhelming talent, and a contract with God... The preparations to become the greatest are complete.`,
    categories: ["Hiatus"]
    },
    {
    title: "The Demon Prince goes back to the Academy",
    coverUrl: "images/the-demon-prince-goes-back-to-the-academy.webp",
    genres: ["Action", "Adventure", "Fantasy", "Murim"],
    description: `A young demon prince is sent to a human academy to learn about the world and prepare for his destiny.`,
    categories: ["Cancelled"]
    },
    {
    title: "The Heavenly Demon's Descendant",
    coverUrl: "images/the-heavenly-demons-descendant.webp",
    genres: ["Action", "Adventure", "Fantasy", "Murim", "Revenge"],
    description: `Jin Suho lost his mother as a child and decided to become a hunter as he sought revenge for her. He gave his life to training himself and finally became a B-rank hunter. Then one day, Suho meets a mysterious man at a Red Gate, which appeared by chance. The mysterious man who introduced himself as the Heavenly Demon revealed to Jin Suho that Suho was his descendant and that he requires Suho’s body to deal with his rival, the Blood Demon. `,
    categories: ["Cancelled"]
    },
    {
    title: "The Player Hides His Past",
    coverUrl: "images/the-player-hides-his-past.webp",
    genres: ["Action", "Adventure", "Comedy", "Fantasy"],
    description: `The virtual reality game “History of the Archana Continent” became part of reality, and “players” who were synchronized with humans appeared to protect the world. Lee Hoyeol, who was an ordinary salaryman, took over the body of the character he created in middle school, "Grandfell Claudi Arpeus Romeo.” Under normal circumstances, it would have been an absolute failure of a career, but Grandfell, whose occupation is a “demon hunter,” becomes extremely proud in front of demons! The only demon hunter in this world, Grandfell (= Lee Hoyeol) starts to make a move!`,
    categories: ["Ongoing"]
    },
    {
    title: "The Priest of Corruption",
    coverUrl: "images/the-priest-of-corruption.webp",
    genres: ["Action", "Adventure", "Fantasy"],
    description: `I used a cheat to create a character in the game. When I came to my senses after pressing the play button, I had possessed the "Priest of Corruption" character I had created. It had to be a character who had bad stats and was hated by all! All I had on me is a woman's dried up hand, but that hand was a goddess's?!`,
    categories: ["Hiatus"]
    },
    {
    title: "Windbreaker",
    coverUrl: "images/windbreaker.jpeg",
    genres: ["Comedy", "Drama", "Romance", "Sports"],
    description: `Write a short summary about the manhwa here.`,
    categories: ["Finished"]
    },
    {
    title: "Worthless Regression",
    coverUrl: "images/worthless-regression.webp",
    genres: ["Action", "Adventure", "Fantasy", "Murim", "Regression"],
    description: `An ordinary middle schooler, Lee Sungmin, is summoned to this world called 'Eria'. He endures for dozens of years with no talents or powers, and makes it through all kinds of hardships to survive, but dies miserably in the end. However, before he dies, he regresses back to the past after obtaining the ‘Stone of the Past Life’ by chance, and gains the opportunity to start his life anew. Yet, he still lives a life without any talents, having nothing. Although he can’t approach the geniuses around him due to the ‘wall’ surrounding them, as well as feeling inferior, he moves forward step by step with firm determination, never giving up. “No matter what, I’m going to live a better life than my previous one even if I have to struggle!”`,
    categories: ["Hiatus"]
    },
    {
    title: "To be added",
    coverUrl: "images/placeholder.webp",
    genres: ["TBA"],
    description: `TBA`,
    categories: ["TBA"]
    },
];

const libraryGrid = document.getElementById('libraryGrid');
const categoryFilters = document.getElementById('categoryFilters');
const viewModal = document.getElementById('viewModal');
let currentCategory = 'All';
let searchQuery = '';

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

    // 1. Always keep "To be added" grouped at the absolute bottom
    library.sort((a, b) => {
        if (a.title === "To be added") return 1;
        if (b.title === "To be added") return -1;
        return a.title.localeCompare(b.title);
    });

    library.forEach((item, index) => {
        // 2. Filter by Category Chip selection
        if (currentCategory !== 'All' && !item.categories.includes(currentCategory)) return;

        // 3. Filter by Search input text query matches (checks titles and arrays of genres)
        const matchesTitle = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesGenre = item.genres && item.genres.some(genre => 
            genre.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (searchQuery && !matchesTitle && !matchesGenre) return;

        // 4. Generate Cards UI
        const card = document.createElement('div');
        card.className = 'manhwa-card';
        card.onclick = () => showDetails(index);

        card.innerHTML = `
            <img src="${item.coverUrl}" class="manhwa-cover" alt="${item.title}" 
                 onerror="this.src='https://placehold.co/400x600/1e1e24/e3e2e6?text=No+Image'">
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

document.getElementById('searchInput').addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderLibrary(); // Re-render items in real time as the user types
});