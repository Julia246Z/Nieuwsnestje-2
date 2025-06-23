# Nieuwsnestje

![Nieuwsnestje screenshot](./public/Readmeafbeelding.png)

## Korte omschrijving
Nieuwsnestje is een educatief webplatform voor kinderen uit groep 3 en 4, waarin nieuws op een speelse, veilige en toegankelijke manier wordt aangeboden. Kinderen volgen klassikaal het nieuws via een schattig, digitaal diertje dat hen begeleidt met verhalen, quizvragen en spelelementen.

## Over het project
Nieuwsnestje is ontwikkeld als interdisciplinair project door studenten van Fontys ICT en Fontys Journalistiek. Het platform combineert actuele thema’s met educatieve werkvormen en spelmechanieken, afgestemd op de leerbehoeften van jonge kinderen.

Het doel: het nieuws begrijpelijk en bespreekbaar maken voor jonge kinderen – zonder te overprikkelen, te versimpelen of te veel van leerkrachten te vragen.

## Badges
- [![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)](#)
- [![TailwindCSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)
- [![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)](#)

## Wat ik heb geleerd
- Vibe coding: het consistent vertalen van sfeer en belevingswaarden (zoals ‘veilig’, ‘speels’ en ‘rustig’) naar code en UI-componenten. Denk aan kleurgebruik, whitespace, afgeronde vormen en iconografie in combinatie met semantische HTML.
- Git & versiebeheer: ik werkte met duidelijke commit messages, zodat wijzigingen overzichtelijk en herleidbaar bleven. Dit maakte het samenwerken in GitHub overzichtelijk, en hielp mij bij het bijhouden van iteraties (zoals feedback vanuit gebruikerstests).
- Vercel deployment: ik leerde hoe ik mijn project live kon zetten via Vercel en hoe ik updates automatisch kon pushen vanuit GitHub.

## Projectstructuur
nieuwsnestje/
├── public/                   # Statische assets zoals afbeeldingen
├── src/                      # Broncode van de applicatie
│   ├── components/           # Herbruikbare componenten
│   └── index.html            # HTML-entrypoint voor de app
├── .gitignore                # Git-regels voor bestanden om uit te sluiten
├── bun.lockb                # Lockbestand voor Bun dependency management
├── components.json           # Componentconfiguratie (mogelijk vanuit Lovable)
├── eslint.config.js          # ESLint-configuratiebestand
├── package.json              # Projectmetadata en scripts
├── package-lock.json         # Gesloten afhankelijkheden voor NPM
├── postcss.config.js         # Configuratiebestand voor PostCSS
├── tailwind.config.ts        # Tailwind CSS-configuratiebestand
├── tsconfig.json             # Algemene TypeScript-configuratie
├── tsconfig.app.json         # TypeScript-config voor de app zelf
├── tsconfig.node.json        # TypeScript-config voor Node-gerelateerde zaken
├── vite.config.ts            # Vite-configuratiebestand voor bundling
└── README.md                 # Documentatie van het project


## Toekomstplannen
- Aanpasbare weekthema’s voor leerkrachten
Een dashboard waar leerkrachten zelf kunnen filteren op thema, lengte en gevoeligheid van het nieuwsitem.

- Meertalige ondersteuning
Start met Nederlands, later uitbreiden met Engels en mogelijk Turks of Pools (afhankelijk van gebruikerspopulatie).

- Ingebouwde video-functionaliteit
Voor leerlingen met een lagere taalvaardigheid wordt het nieuws ook visueel ondersteund met korte animaties of video’s.

- Toegankelijkheid & inclusie
Denk aan contrastinstellingen, voorleesopties, en alternatieve input voor kinderen met een beperking.

- Adaptieve quizvragen op niveau
Automatisch moeilijkheidsniveau bepalen op basis van klasgroep of voortgang.

- Offline versie (voor scholen zonder stabiele internetverbinding)
Denk aan een downloadbare versie met lesmateriaal en interactieve opdrachten.
