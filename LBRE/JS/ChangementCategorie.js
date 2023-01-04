// Ce fichier javascript permet le changement entre les differentes catégories de jeux //
// On attribue chaque clic sur un bouton de catégorie a une fonction qui modifie les images , titres , descriptions et prix des articles présents sur l'écran //
// Chaque catégorie a 4 jeu //

// FONCTIONS //

function categorieFPS(){
	
	img1.src = "image/overwatch.jpg";
	Nom1.innerHTML = "Overwatch";
	description1.innerHTML = "Overwatch est un jeu vidéo de tir (FPS) en ligne et en équipe, développé et publié par Blizzard Entertainment. L histoire d Overwatch se situe dans un monde néo-futuriste (plus précisément en 2077), 30 ans après la résolution d'une guerre impliquant robots et humains , appelée Crise des Omniums. C'est à cette période que fut créée l'organisation d'Overwatch, dans le but d'éradiquer la menace que représentaient les Omniaques insurgés.";
	valeur1.innerHTML = "10";
	
	img2.src = "image/CallofDutyBlackOps4.png";
	Nom2.innerHTML = "Call Of Duty Black Ops 4";
	description2.innerHTML = "Call of Duty: Black Ops IIII est un jeu vidéo de tir à la première personne développé par Treyarch et édité par Activision, sorti le 12 octobre 2018 . Il s'agit du 15e épisode de la série Call of Duty et 4e opus de la série Black Ops. Il propose son mode multijoueur et son mode zombie habituels mais renouvelés avec le choix de nombreux agent ainsi qu'un nouveau mode battle royale. " ;
	valeur2.innerHTML = "11";
	
	img3.src = "image/Battlefield5.png";
	Nom3.innerHTML = "BattleField 5";
	description3.innerHTML = "Battlefield V est un jeu vidéo de tir à la première personne développé par DICE et édité par Electronic Arts, sorti le 20 novembre 2018 sur PlayStation 4, Xbox One et Microsoft Windows. Ce douzième opus de la série se déroule dans le contexte de la Seconde Guerre Mondiale, revenant aux origines de la série. Semblable aux opus précédents, Battlefield V est un jeu de tir à la première personne se basant sur le travail d'équipe pouvant accueillir jusqu'à 64 joueurs par partie.";
	valeur3.innerHTML = "9";
	
	img4.src = "image/BattleFront2.png";
	Nom4.innerHTML = "Star Wars BattleFront 2";
	description4.innerHTML = "Star Wars Battlefront II est un jeu vidéo de tir à la première et troisième personne développé par DICE, Criterion Games et Motive Studios, et édité par Electronic Arts. Il fait suite au jeu vidéo Star Wars: Battlefront sorti en 2015. La campagne du jeu, présente dans ce second opus, débute après les événements du film Star Wars : Le Retour du Jedi, lorsque la base sidérale de l'Empire galactique, l'Étoile de la Mort, explose, mettant fin au règne de l'Empereur.";
	valeur4.innerHTML = "12";

}

function categorieRetro(){
	img1.src = "image/MarioKart64.png";
	Nom1.innerHTML = "Mario Kart 64";
	description1.innerHTML = " Mario Kart 64 est un jeu vidéo de course de karting en 3D développé et édité par Nintendo en 1996 sur Nintendo 64. Deuxième épisode de la célèbre série Mario Kart, il s'est fait remarquer pour son mode multijoueur autorisant, pour la première fois, jusqu'à quatre joueurs sur la même console .";
	valeur1.innerHTML = "30";
	
	img2.src = "image/Zelda Ocarina of time.png";
	Nom2.innerHTML = "Zelda Ocarina Of Time";
	description2.innerHTML = "Zelda Ocarina of Time est un jeu vidéo d'action-aventure développé par Nintendo EAD et édité par Nintendo sur Nintendo 64 . Ocarina of Time raconte l'histoire de Link, un jeune garçon vivant dans un village perdu dans la forêt, qui parcourt le royaume d'Hyrule pour empêcher Ganondorf d'obtenir la Triforce, une relique sacrée .";
	valeur2.innerHTML = "18";
	
	img3.src = "image/Super_Mario_64.jpeg";
	Nom3.innerHTML = "Super_Mario_64";
	description3.innerHTML = "Super Mario 64 est un jeu de plates-formes développé par Nintendo Entertainment Analysis and Development sous la direction de Shigeru Miyamoto et publié par Nintendo pour la Nintendo 64. Il est le premier jeu de la série entièrement en 3D temps réel et propose à ce titre une liberté totale de mouvement, de larges niveaux ouverts, et une 3D polygonale en contraste avec les sprites en 2D des Mario précédents. Il conserve également de nombreux éléments du gameplay et de l'univers des précédents volets.";
	valeur3.innerHTML = "15";
	
	img4.src = "image/DonkeyKongCountry.png";
	Nom4.innerHTML = "Donkey Kong Country";
	description4.innerHTML = "Donkey Kong Country est un jeu de plateforme de 1994 développé par Rare et publié par Nintendo pour le SNES. Il s'agit d'un redémarrage de la franchise Donkey Kong ou l'on suit le gorille Donkey Kong et son neveu Diddy Kong alors qu'ils entreprennent de récupérer leur trésor de bananes volé auprès du roi K.Rool et des Kremlings . Dans 40 niveaux à défilement latéral , le joueur collecte des objets, bat des ennemis et des boss , et trouve des secrets durant leur voyage pour vaincre K. Rool.";
	valeur4.innerHTML = "17";

}

function categorieCourse(){
	img1.src = "image/ForzaHorizon4.png";
	Nom1.innerHTML = "Forza Horizon 4";
	description1.innerHTML = "Forza Horizon 4 est un jeu vidéo de simulation de course en monde ouvert. Quatrième épisode de la série Forza Horizon, le jeu se déroule dans une version fictionnelle de la Grande-Bretagne. Le jeu comprend un mode solo hors ligne, un mode coopératif et un mode multijoueur en ligne avec jusqu'à 16 joueurs via le Xbox Live . En termes d'accueil critique, le jeu est dès lors celui le mieux reçu de sa génération parmi les autres opus édités par Microsoft Studios";
	valeur1.innerHTML = "30";
	
	img2.src = "image/DirtRally2.png";
	Nom2.innerHTML = "Dirt Rally 2.0";
	description2.innerHTML = "Dirt Rally 2.0 est un jeu vidéo de course développé et édité par Codemasters, sorti en 2019 sur Windows, PlayStation 4 et Xbox One. Ce jeu est le treizième titre de la série Colin McRae Rally et le septième à porter le nom de Dirt. Il succède à Dirt Rally et met l'accent sur la simulation de conduite réaliste.";
	valeur2.innerHTML = "8";
	
	img3.src = "image/F12020.png";
	Nom3.innerHTML = "Formula One 2020";
	description3.innerHTML = "F1 2020 est le jeu vidéo officiel des Championnats de Formule 1 et de Formule 2 2020 développé et édité par Codemasters. Il s'agit du treizième titre de la série Formula One développé par le studio, sorti le 10 juillet 2020 pour Microsoft Windows, PlayStation 4, Xbox One et Stadia. Ce jeu, douzième volet de la franchise, présente les vingt-deux circuits, vingt pilotes et dix équipes présents au championnat du monde de Formule 1 2020.";
	valeur3.innerHTML = "14";
	
	img4.src = "image/MarioKart8Deluxe.PNG";
	Nom4.innerHTML = "Mario Kart 8 Edition Deluxe";
	description4.innerHTML = "Mario Kart 8 Deluxe est un jeu vidéo de course développé par Nintendo EAD et édité par Nintendo pour la console Wii U. Huitième opus de la série Mario Kart, il est sorti en 2014 au Japon, en Europe, en Australie et en Amérique du Nord. Cet épisode met toujours en scène les principaux personnages de l'univers de Mario et les oppose dans des courses de kart disputées à douze joueurs sur des circuits situés pour la plupart dans les différents lieux du monde de Mario.";
	valeur4.innerHTML = "40";

}

function categorieAventure(){
	img1.src = "image/Tomb Raider.PNG";
	Nom1.innerHTML = "Shadow of the Tomb Raider Definitive Edition";
	description1.innerHTML = "Shadow of the Tomb Raider est un jeu vidéo d'action-aventure développé par Eidos Montréal en collaboration avec Crystal Dynamics, et édité par Square Enix Europe sorti le 14 septembre 2018. Ce jeu est la suite de Rise of the Tomb Raider sorti en 2015. Seulement âgée de 23 ans, Lara Croft, armée de son courage et de son arc, va devoir arrêter une apocalypse prédite par les Mayas et se battre, une nouvelle fois, contre l’Ordre de la Trinité.";
	valeur1.innerHTML = "12";
	
	img2.src = "image/WatchDogs.PNG";
	Nom2.innerHTML = "Watch Dogs Legion";
	description2.innerHTML = "Watch Dogs: Legion, est un jeu vidéo d'action-aventure et d'infiltration développé par le studio d'Ubisoft Toronto et édité par Ubisoft. Le joueur quitte les États-Unis présent dans les deux premiers épisodes direction Londres. Alors que l'ancien espion Dalton Wolf, devenu membre de Dedsec, tente de désamorcer une bombe dans les sous-sols des Maisons du Parlement, il découvre que plusieurs autres bombes ont été placées dans des endroits stratégiques de la ville.";
	valeur2.innerHTML = "25";
	
	img3.src = "image/Read Dead Redemption 2.PNG";
	Nom3.innerHTML = "Read Dead Redemption 2";
	description3.innerHTML = "Red Dead Redemption II est un jeu vidéo d'action-aventure et de western multiplateforme, développé par Rockstar Studios et édité par Rockstar Games, sorti le 26 octobre 2018. En 1899 (soit douze ans avant les principaux événements de Red Dead Redemption), suite à un braquage qui a mal tourné dans la ville de Blackwater, la bande de Dutch van der Linde est traquée par les agents fédéraux et les chasseurs de primes.";
	valeur3.innerHTML = "22";
	
	img4.src = "image/Cyberpunk-2077.jpg";
	Nom4.innerHTML = "Cyberpunk 2077";
	description4.innerHTML = "Cyberpunk 2077 est un jeu vidéo d'action-RPG en vue à la première personne développé par CD Projekt RED, fondé sur la série de jeu de rôle sur table Cyberpunk 2020 conçue par Mike Pondsmith. Le jeu présente un monde futuriste dystopique de type cyberpunk dans lequel la technologie coexiste avec une société humaine dégénérée. L'histoire de Cyberpunk 2077 prend place sur Terre en 2077 et se déroule dans la mégapole futuriste de Night City, dans l’État libre de Californie.";
	valeur4.innerHTML = "30";

}

function categorieHorreur(){
	img1.src = "image/ResidentEvil3.PNG";
	Nom1.innerHTML = "Resident Evil 3";
	description1.innerHTML = "Resident Evil 3 est un jeu vidéo de tir à la troisième personne de type survival horror développé et édité par Capcom, sorti le 3 avril 2020. Ce jeu est un remake de Resident Evil 3: Nemesis sorti en 1999 sur PlayStation. Il se déroule au même moment que Resident Evil 2 et met en scène un membre des STARS, Jill Valentine, contre la société pharmaceutique Umbrella, et plus particulièrement contre l'une des armes biologiquement modifiées les plus redoutables de la série : Nemesis.";
	valeur1.innerHTML = "25";
	
	img2.src = "image/Phasmophobia.PNG";
	Nom2.innerHTML = "Phasmophobia";
	description2.innerHTML = "Phasmophobia est un jeu indépendant d'horreur et de survie qui est développé et publié par Kinetic Games. Le joueur prend le contrôle d'un membre d'un groupe de quatre joueurs maximum. Ils jouent des chasseurs de fantômes explorant les villes, qui sont engagés pour s'occuper des fantômes habitant différentes installations abandonnées telles que des maisons, des écoles et des hôpitaux. Afin de savoir quel type de fantôme ils ont rencontré, les joueurs doivent collecter des preuves et communiquer avec lui.";
	valeur2.innerHTML = "8";
	
	img3.src = "image/DeadByDaylight.PNG";
	Nom3.innerHTML = "Dead By Daylight";
	description3.innerHTML = "Dead by Daylight est un jeu vidéo de type survival horror, multijoueur, développé par Behaviour Interactive et édité par Starbreeze Studios, sorti en 2016. Dead By Daylight est un jeu compétitif asymétrique à 5 joueurs. Un des joueurs prend le rôle d'un tueur qui a pour but de sacrifier les autres joueurs appelés « survivants » en les accrochant sur un crochet ou en les tuant grâce à ses compétences ou ses offrandes. De leur côté, les survivants doivent s'échapper de la zone en réparant cinq générateurs.";
	valeur3.innerHTML = "12";
	
	img4.src = "image/Pacify.PNG";
	Nom4.innerHTML = "PACIFY";
	description4.innerHTML = " Pacify est un jeu d'horreur développé par HitchCock Games en 2019. Il y aurait un démon à l'intérieur de cette maison. Quelque chose dans le genre d'un ancien salon funéraire offrant une dernière chance de parler à ses proches décédés. Plus quelque chose dans le style lumières, rires, une fille, des personnes disparues.";
	valeur4.innerHTML = "3";

}

function categorieCombat(){
	img1.src = "image/Tekken7.PNG";
	Nom1.innerHTML = "Tekken 7";
	description1.innerHTML = "Tekken 7 est un jeu vidéo de combat de la série Tekken développé et édité par Bandai Namco Games. Il sort officiellement sur borne d'arcade le 18 mars 2015. Dans cet épisode, deux combattants s'affrontent dans un environnement 3D destructible (limité à certains murs et sols). Le but est de réduire la barre de santé de l'adversaire à 0 en lui assénant des coups. Le jeu attribue une touche à chaque bras et jambe du personnage. Il est alors possible de creer des enchainements.";
	valeur1.innerHTML = "10";
	
	img2.src = "image/StreetFighter5.jpg";
	Nom2.innerHTML = "Street Fighter 5";
	description2.innerHTML = "Street Fighter V est un jeu vidéo de combat de la série Street Fighter développé et édité par Capcom, sorti le 16 février 2016. Comme les précédents opus de la série, les deux joueurs s'affrontent face à face en contrôlant le personnage de leur choix, et doivent mettre K.O. leur adversaire en faisant décroître sa barre de vie à 0 grâce à tous les coups que leur personnage peut exécuter, ou en gardant sa barre de vie supérieure à celle de son adversaire à la fin du temps imparti.";
	valeur2.innerHTML = "6";
	
	img3.src = "image/MortalKombat11.webp";
	Nom3.innerHTML = "Mortal Kombat 11";
	description3.innerHTML = "Mortal Kombat 11 est un jeu vidéo de combat développé par NetherRealm Studios et édité par Warner Bros Interactive Entertainment. Il s’agit du onzième volet de la série Mortal Kombat et de la suite de Mortal Kombat X. Kronika, gardienne du Temps et du Destin, mêle passé et futur afin de rétablir l'équilibre que Dark Raiden a chamboulé, ce dernier étant corrompu.";
	valeur3.innerHTML = "15";
	
	img4.src = "image/KillerInstinct.jpg";
	Nom4.innerHTML = "Killer Instinct";
	description4.innerHTML = "Killer Instinct est un jeu vidéo de combat développé par Double Helix Games, Rare et Microsoft Studios sous la supervision de Ken Lobb. Il s'agit du troisième volet de la série Killer Instinct. L'histoire se divise en 3 saisons et accueille de nombreux nouveaux personnages en plus des personnages des premiers épisodes.";
	valeur4.innerHTML = "25";

}

function categorieManga(){
	img1.src = "image/OnePiecePirateWarriors4.PNG";
	Nom1.innerHTML = "One Piece Pirate Warriors 4";
	description1.innerHTML = "One Piece: Pirate Warriors 4 est un jeu vidéo de type hack 'n' slash développé par Omega Force et édité par Bandai Namco Games, sorti le 27 mars 2020. Ce quatrième opus permet de revivre les aventures de Luffy et des Chapeaux de paille du manga One Piece depuis l'arc Alabasta alors qu'ils voyagent d'île en île, jusqu'aux récents Arcs Whole Cake Island et Wano Kuni";
	valeur1.innerHTML = "18";
	
	img2.src = "image/NarutoUltimateNinjaStorm4.PNG";
	Nom2.innerHTML = "Naruto Ultimate Ninja Storm 4";
	description2.innerHTML = "Naruto Shippūden: Ultimate Ninja Storm 4 est un jeu vidéo de combat adapté du manga Naruto, développé par CyberConnect2 et édité par Bandai Namco Games en février 2016. Naruto Shippūden: Ultimate Ninja Storm 4 reprend le système de jeu des précédents épisodes de la série Ultimate Ninja Storm, avec des combats en un contre un avec deux personnages de soutien se déroulant dans des arènes en trois rounds. L'histoire du jeu débute pendant la 2e partie de la grande guerre des ninjas dès la fin de Naruto Shippūden: Ultimate Ninja Storm 3.";
	valeur2.innerHTML = "12";
	
	img3.src = "image/DragonBallFighterZ.PNG";
	Nom3.innerHTML = "Dragon Ball Fighter Z";
	description3.innerHTML = "Dragon Ball FighterZ est un jeu vidéo de combat basé sur la franchise Dragon Ball développé par Arc System Works et édité par Bandai Namco Games. Il est sorti le 26 janvier 2018 et met en scène les personnages iconiques de la série dans des affrontements explosifs en 3 versus 3. Il contient un mode histoire exclusif ainsi que des combats classés en ligne.";
	valeur3.innerHTML = "15";
	
	img4.src = "image/JumpForce.jpeg";
	Nom4.innerHTML = "Jump Force";
	description4.innerHTML = "Jump Force est un jeu vidéo de combat développé par Spike Chunsoft et édité par Bandai Namco Entertainment, sorti le 14 février 2019 au Japon et le 15 février en Occident. Le jeu réunit les personnages de différentes franchises issues de mangas du Weekly Shōnen Jump, comme One Piece, Dragon Ball, Naruto ou encore Bleach. Les joueurs peuvent créer leur propre personnage jouable unique et participer a des combats.";
	valeur4.innerHTML = "20";

}

function categorieRPG(){
	img1.src = "image/FinalFantasy7remake.PNG";
	Nom1.innerHTML = "Final Fantasy VII Remake";
	description1.innerHTML = "Final Fantasy VII Remake, est un jeu vidéo développé par Square Enix Business Division 1 et édité par Square Enix. Il s'agit du remake du jeu Final Fantasy VII sorti sur PlayStation et PC en 1997. L'histoire prend place dans la métropole cyberpunk, steampunk et dystopique de Midgar, les joueurs prennent le contrôle du mercenaire Cloud Strife tandis que lui et un groupe éco-terroriste connu sous le nom d'AVALANCHE s'opposent à la Shinra Electric Power Company";
	valeur1.innerHTML = "20";
	
	img2.src = "image/Diablo3.jpg";
	Nom2.innerHTML = "Diablo 3";
	description2.innerHTML = "Diablo III est un jeu vidéo d'action et de rôle de type hack and slash développé par Blizzard Entertainment. Il constitue le troisième opus de la série, succédant à Diablo et à Diablo II. Comme ses prédécesseurs, il se déroule dans un monde imaginaire de type médiéval-fantastique dans lequel le joueur peut choisir d’incarner un sorcier, un barbare, un féticheur, un chasseur de démon ou un moine.";
	valeur2.innerHTML = "15";
	
	img3.src = "image/wow.jpg";
	Nom3.innerHTML = "World of Warcraft";
	description3.innerHTML = "World of Warcraft est un jeu vidéo de type MMORPG développé par la société Blizzard Entertainment. C'est le 4e jeu de l'univers médiéval-fantastique Warcraft. Le jeu reprend place dans le monde imaginaire d’Azeroth, et dont le cadre historique se situe quatre ans après les évènements concluant Warcraft III. Le joueur choisit son personnage parmi huit, dix ou douze races disponibles divisées en deux factions : l’Alliance et la Horde.";
	valeur3.innerHTML = "18";
	
	img4.src = "image/Deus-Ex.jpg";
	Nom4.innerHTML = "Deus Ex Human Revolution";
	description4.innerHTML = "Deus Ex: Human Revolution est un jeu de tir à la première personne qui emprunte au jeu de rôle et au jeu d'infiltration. Développé par Eidos Montréal et édité par Square Enix, il sort le 23 août 2011. Troisième épisode de la saga Deus Ex et préquelle des deux premiers opus, son histoire se déroule en l'an 2027, 25 ans avant les faits présentés dans Deus Ex, dans une période où les multinationales gagnent en puissance, bien au-delà du contrôle des gouvernements.";
	valeur4.innerHTML = "10";

}

function categorieSport(){
	img1.src = "image/Fifa21.PNG";
	Nom1.innerHTML = "Fifa 21";
	description1.innerHTML = "FIFA 21 est un jeu vidéo de football développé par EA Canada et EA Roumanie et édité par EA Sports. Pour cette édition de FIFA, c'est l'international français Kylian Mbappé qui figure sur la jaquette du jeu. Cette nouvelle édition est marquée par quelques changements dans la plupart des modes de jeu comme la carrière et l'ultimate team mais reste fidèle à la licence.";
	valeur1.innerHTML = "24";
	
	img2.src = "image/Nba2k21.jpg";
	Nom2.innerHTML = "NBA 2k21";
	description2.innerHTML = "NBA 2K21 est un jeu vidéo de simulation de basket-ball développé par Visual Concepts et édité par 2K Sports, basé sur la National Basketball Association. C'est le 22ᵉ jeu vidéo de la franchise NBA 2K et le successeur de NBA 2K20. Le joueur joue principalement à des matchs de la NBA avec des joueurs et des équipes réels ou personnalisés; les jeux suivent les règles et les objectifs des matchs de la NBA.";
	valeur2.innerHTML = "18";
	
	img3.src = "image/PES2021.jpg";
	Nom3.innerHTML = "eFootball PES 2021";
	description3.innerHTML = "PES 2021 est un jeu vidéo de simulation de football de la série Pro Evolution Soccer, développé par PES Productions et édité par Konami. Il s'agit de la suite d'eFootball PES 2020 sorti en septembre 2019. Le jeu intègre notamment de nouvelles célébrations et de nouveaux entraîneurs , on note aussi le retour du championnat colombien après près d'une demi-année d'absence dans le jeu";
	valeur3.innerHTML = "20";
	
	img4.src = "image/MaddenNFL21.jpg";
	Nom4.innerHTML = "Madden NFL 21";
	description4.innerHTML = "Madden NFL 21 est un jeu vidéo de football américain basé sur la Ligue nationale de football (NFL), developpé par EA Tiburon et publié par Electronic Arts. Madden NFL 21 comprend de nouvelles mécaniques de gameplay innovantes qui offrent des niveaux avancés de contrôle de la balle. Le nouveau système de porteur de balle donne à l’utilisateur un meilleur contrôle et les mouvements frais de ruée vers la passe seront introduits.";
	valeur4.innerHTML = "15";

}


// APPELS DES FONCTIONS //

document.getElementById("Retro").onclick = categorieRetro;
document.getElementById("FPS").onclick = categorieFPS;
document.getElementById("Course").onclick = categorieCourse;
document.getElementById("Aventure").onclick = categorieAventure;
document.getElementById("Horreur").onclick = categorieHorreur;
document.getElementById("Combat").onclick = categorieCombat;
document.getElementById("Manga").onclick = categorieManga;
document.getElementById("RPG").onclick = categorieRPG;
document.getElementById("Sport").onclick = categorieSport;
