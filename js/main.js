// TreeTraque - Système de gestion des traductions et navigation
// Développé pour le projet de science participative TreeTraque

/**
 * Traductions complètes pour le site TreeTraque
 */
const translations = {
    fr: {
        // Site global
        "site.title": "TreeTraque - Science participative sur la phénologie des arbres",
        "site.description": "Projet de science participative pour étudier la phénologie des arbres et comprendre l'impact du changement climatique sur nos forêts.",
        
        // Navigation
        "nav.logo": "TreeTraque",
        "nav.home": "Accueil",
        "nav.theory": "Un peu de théorie",
        "nav.about": "Qui sommes-nous?",
        "nav.spring": "Observations printanières",
        "nav.autumn": "Observations automnales",
        "nav.identification": "Identification",
        "nav.faq": "FAQ",
        
        // Page d'accueil - Section Hero
        "hero.title": "Suivez l'évolution des arbres avec nous",
        "hero.subtitle": "Participez à un projet de science citoyenne pour comprendre l'impact du changement climatique sur la phénologie des arbres au Canada.",
        "hero.cta_participate": "Participer maintenant",
        "hero.cta_learn": "En savoir plus",
        
        // Page d'accueil - Section Introduction
        "home.intro.title": "Bienvenue sur TreeTraque",
        "home.intro.description": "TreeTraque est un projet de science participative qui vous invite à observer et documenter les changements phénologiques des arbres à travers le Canada. Ensemble, contribuons à mieux comprendre l'impact du changement climatique sur nos forêts.",
        "home.intro.learn": "Découvrir la théorie",
        "home.intro.start": "Commencer les observations",
        
        // Page d'accueil - Liens rapides
        "home.quicklinks.title": "Accès rapide",
        "home.quicklinks.spring": "Observations de printemps",
        "home.quicklinks.spring.desc": "Enregistrez vos observations printanières : bourgeonnement, floraison...",
        "home.quicklinks.autumn": "Observations d'automne",
        "home.quicklinks.autumn.desc": "Documentez les changements automnaux : couleurs, chute des feuilles...",
        "home.quicklinks.identify": "Identifier un arbre",
        "home.quicklinks.identify.desc": "Outils et guides pour identifier les espèces d'arbres.",
        
        // Page Théorie
        "theory.page.title": "Un peu de théorie - TreeTraque",
        "theory.page.description": "Découvrez les bases scientifiques de la phénologie des arbres et l'importance de leur observation dans le cadre du changement climatique.",
        "theory.title": "Un peu de théorie",
        "theory.subtitle": "Comprendre la phénologie des arbres et son importance pour l'étude du changement climatique",
        
        // Section Phénologie
        "theory.section.what": "Qu'est-ce que la phénologie ?",
        "theory.definition.title": "Phénologie",
        "theory.definition.type": "nom féminin",
        "theory.definition.text": "Étude scientifique des variations (durée, époque, etc.) que les divers climats font subir à la floraison et à la feuillaison des végétaux.",
        "theory.definition.source": "- Larousse Merriam-Webster",
        "theory.phenology.content": "Pour ce projet, nous mettons l'emphase sur l'observation des arbres. Au printemps, nous notons à quelle date une espèce d'arbre commence à fleurir, celle à laquelle les bourgeons de feuilles s'ouvrent, et celle où les feuilles adultes sont complètement ouvertes. À l'automne, nous observons la chute des feuilles. Nous estimons aussi les pourcentages de feuilles colorées et la proportion de feuilles encore sur les branches quelques fois à chaque semaine.",
        "theory.image.caption": "Érable rouge en pleine floraison, Lennoxville 23 avril 2018",
        
        // Section Importance
        "theory.section.why": "Pourquoi est-ce que la phénologie est importante?",
        "theory.importance.para1": "La phénologie, ou le suivi des phénomènes biologiques dans le temps, est un domaine de recherche important car il permet de détecter l'impact des changements climatiques sur les organismes vivants. Par exemple, des données recueillies dans le nord-est des États Unis montrent qu'en 2001, le lilas fleurissait 9 jours plus tôt qu'en 1965 <sup>(1)</sup>. À Concord au Massachusetts, les fleurs printanières fleurissaient en moyenne 7 jours plus tôt en 2004-2006 qu'entre 1850 et 1900 <sup>(2)</sup>.",
        "theory.importance.para2": "Comment les récents changements climatiques ont-ils affecté les arbres de notre région? Nous l'ignorons car les données phénologiques en Estrie sont très rares. Pour cette raison, nous avons besoin de vous, scientifiques citoyens, pour recueillir des observations phénologiques. Le but du projet est de commencer à recueillir des données qui seront utilisées à l'avenir pour détecter les impacts du réchauffement climatique sur nos arbres.",
        
        // Références
        "theory.section.references": "Références",
        "theory.ref1": "Wolfe, D.W., M.D. Schwartz, A.N. Lakso, Y. Otsuki, R.M. Pool, N.J. Shaulis 2005. Climate change and shifts in spring phenology of three horticultural woody perennials in northeastern USA. <em>International Journal of Biometeorology</em> 49 (5): 303-309.",
        "theory.ref2": "Miller-Rushing, A.J., and R.B. Primack 2008. Global warming and flowering times in Thoreau's Concord: a community perspective. <em>Ecology</em> 89 (2): 332-341.",
        
        // Phénologie (ancien contenu - conservé pour compatibilité)
        "theory.phenology.title": "Qu'est-ce que la phénologie ?",
        "theory.phenology.intro": "La phénologie est l'étude des phénomènes biologiques périodiques et de leur relation avec le climat. Pour les arbres, cela inclut l'observation des moments clés comme le bourgeonnement, la floraison, la fructification et la chute des feuilles.",
        
        // Phases phénologiques
        "theory.phases.budding.title": "Bourgeonnement",
        "theory.phases.budding.description": "Apparition des premiers bourgeons au printemps, marquant la reprise de l'activité végétative.",
        "theory.phases.flowering.title": "Floraison",
        "theory.phases.flowering.description": "Ouverture des fleurs, période cruciale pour la reproduction des arbres.",
        "theory.phases.fruiting.title": "Fructification",
        "theory.phases.fruiting.description": "Formation et maturation des fruits, essentiels pour la dispersion des graines.",
        "theory.phases.senescence.title": "Sénescence",
        "theory.phases.senescence.description": "Changement de couleur et chute des feuilles, préparation à l'hiver.",
        
        // Changement climatique
        "theory.climate.title": "Impact du changement climatique",
        "theory.climate.intro": "Le changement climatique modifie les cycles phénologiques des arbres. L'observation de ces changements nous aide à comprendre l'adaptation des écosystèmes forestiers aux nouvelles conditions climatiques.",
        
        // Impacts climatiques
        "theory.impacts.temperature.title": "Température",
        "theory.impacts.temperature.description": "L'augmentation des températures peut avancer le timing des événements printaniers comme le bourgeonnement et la floraison.",
        "theory.impacts.precipitation.title": "Précipitations",
        "theory.impacts.precipitation.description": "Les changements dans les régimes de précipitations affectent la croissance et la reproduction des arbres.",
        "theory.impacts.seasons.title": "Longueur des saisons",
        "theory.impacts.seasons.description": "Les saisons de croissance s'allongent, modifiant les cycles traditionnels des arbres et des écosystèmes.",
        
        // Science participative
        "theory.citizen.title": "Pourquoi la science participative ?",
        "theory.citizen.intro": "Les observations des citoyens sont essentielles pour documenter les changements phénologiques à grande échelle. Chaque observation contribue à construire une base de données précieuse pour la recherche scientifique.",
        
        // Bénéfices
        "theory.benefits.coverage.title": "Couverture géographique",
        "theory.benefits.coverage.description": "Les observations citoyennes permettent de couvrir un territoire beaucoup plus vaste que les études scientifiques traditionnelles.",
        "theory.benefits.continuity.title": "Continuité temporelle",
        "theory.benefits.continuity.description": "La participation du public assure une collecte de données sur de longues périodes, essentielle pour détecter les tendances climatiques.",
        "theory.benefits.education.title": "Éducation",
        "theory.benefits.education.description": "La participation active sensibilise le public aux enjeux environnementaux et renforce la conscience écologique.",
        
        // CTA Théorie
        "theory.cta.title": "Prêt à contribuer ?",
        "theory.cta.description": "Maintenant que vous comprenez l'importance de ces observations, il est temps de passer à l'action !",
        "theory.cta.spring": "Observations de printemps",
        "theory.cta.autumn": "Observations d'automne",
        
        // Page À propos - Équipe
        "about.page.title": "Qui sommes-nous? - TreeTraque",
        "about.page.description": "Découvrez l'équipe et l'organisation derrière TreeTraque, le projet de science participative sur la phénologie des arbres au Canada.",
        "about.title": "Qui sommes-nous?",
        "about.subtitle": "Découvrez l'équipe et l'organisation derrière le projet TreeTraque",
        
        "about.project.title": "Le Projet TreeTraque",
        "about.project.description": "TreeTraque est un projet de recherche mené par Dr. Elisabeth Levac. Plusieurs étudiants ont été impliqués dans le projet, notamment : Andrew Compton, Anabel Laurie et Jessica Meadows. Leur contribution est reconnue.",
        
        "about.director.title": "Directrice du Projet",
        "about.director.name": "Dr. Elisabeth Levac",
        "about.director.role": "Professeure, Département d'Environnement et de Géographie",
        "about.director.affiliation": "Université Bishop's",
        "about.director.bio1": "Professeur Levac enseigne au département d'Environnement et de Géographie à l'université Bishop's. Elle fait le suivi des aérosols biogéniques (pollen et spores) à Sherbrooke depuis 2006. TreeTraque va permettre d'établir un lien entre la floraison des arbres et les observations du pollen au microscope.",
        "about.director.bio2": "Elle conduit des recherches sur l'impact du pollen aérien et de la pollution de l'air sur la santé. Des travaux en cours examinent la durée de la saison des allergies dues à l'herbe à poux pour déterminer si elle est affectée par les changements climatiques.",
        
        "about.links.title": "Liens de référence",
        "about.links.website": "Site web de recherche",
        "about.links.bishops": "Elisabeth Levac sur le site de Bishop's",
        "about.links.pollen": "Surveillance du pollen",
        "about.links.pollen.name": "Pollen Lennoxville",
        "about.links.other": "Autres projets",
        "about.links.canopy": "Tree Canopy Sherbrooke",
        
        // Contact
        "contact.title": "Nous Contacter",
        "contact.intro": "Vous avez des questions sur TreeTraque ou souhaitez collaborer avec nous ? N'hésitez pas à nous contacter.",
        "contact.email.label": "Email :",
        "contact.phone.label": "Téléphone :",
        "contact.address.label": "Adresse :",
        
        // Page FAQ
        "faq.page.title": "Foire aux questions - TreeTraque",
        "faq.page.description": "Réponses aux questions fréquemment posées sur le projet TreeTraque et la science participative sur la phénologie des arbres.",
        "faq.title": "Foire aux questions",
        "faq.subtitle": "Trouvez rapidement les réponses à vos questions sur TreeTraque",
        
        // Section Comment observer les arbres
        "faq.howto.title": "Comment observer les arbres",
        
        "faq.q1.question": "Est-ce que j'ai besoin d'habilités spéciales?",
        "faq.q1.answer": "Non! Un amour et un intérêt pour la nature suffisent.",
        
        "faq.q2.question": "Combien de temps nécessitent les observations?",
        "faq.q2.answer": "Elles ne prennent que quelques minutes, quelques fois par semaine.",
        
        "faq.q3.question": "Est-il difficile de faire des observations sur les arbres?",
        "faq.q3.answer": "Pas du tout. Vous pouvez consulter le guide \"Comment observer les arbres\" dans le haut de cette page.",
        
        "faq.q4.question": "À quel moment dois-je observer mon arbre?",
        "faq.q4.answer": "Au printemps, la plupart des changements se produisent durant le mois de mai. Les observations peuvent être faites à n'importe quel moment de la journée. À la fin de l'été, dépendamment de la sorte d'arbre, les changements sont visibles entre la fin du mois d'août et la fin d'octobre.",
        
        "faq.q5.question": "Quel est le meilleur arbre à observer?",
        "faq.q5.answer": "Nous avons fait une liste des espèces d'arbres visées par ce projet. Si vous avez un bel arbre en santé sur votre propriété, ce sera parfait. Si vous n'êtes pas propriétaire, vous pouvez choisir d'observer un bel arbre qui pousse dans votre voisinage.",
        
        "faq.q6.question": "Est-ce que je dois avoir beaucoup de connaissances sur les arbres?",
        "faq.q6.answer": "Pas du tout! Si vous avez besoin d'aide pour identifier un arbre, vous pouvez consulter la page Arbre de Ressources naturelles Canada ou PlantNet.",
        
        "faq.q7.question": "À quoi ressemblent les fleurs?",
        "faq.q7.answer": "",
        
        "faq.contact.title": "Vous n'avez pas trouvé votre réponse ?",
        "faq.contact.description": "Notre équipe est là pour vous aider. N'hésitez pas à nous contacter pour toute question supplémentaire.",
        
        // Page Identification
        "identification.page.title": "Identification d'un arbre - TreeTraque",
        "identification.page.description": "Outils et guides pour identifier les différentes espèces d'arbres du Canada.",
        "identification.title": "Identification d'un arbre",
        "identification.intro": "Si vous avez besoin d'aide pour identifier un arbre, vous pouvez consulter les pages web suivantes:",
        "identification.resources.nrcan": "Trees webpage of Natural Resources Canada",
        "identification.resources.cle_forestiere": "La clé forestière (en français seulement)",
        "identification.resources.plantnet": "PlantNet",
        "identification.contact.intro": "Si vous avez encore des questions ou avez besoin d'aide pour identifier votre arbre, veuillez me contacter:",
        "identification.contact.email": "elisabeth.levac@ubishops.ca",
        
        // Page Printemps (Observations printanières)
        "spring.page.title": "Observations printanières - TreeTraque",
        "spring.page.description": "Enregistrez vos observations printanières des arbres : bourgeonnement, floraison, premiers signes de vie végétale.",
        "spring.title": "Enregistrez vos observations de printemps ici",
        "spring.intro.title": "Vous avez déjà choisi votre arbre préféré?",
        "spring.intro.text": "Si vous êtes prêt à enregistrer des observations sur les feuilles qui se déploient ou les fleurs qui s'épanouissent, remplissez-les ci-dessous. Parfois, plusieurs phases peuvent se produire en même temps. Par exemple, les fleurs se fanent pendant que les premières feuilles se déploient. Dans ce cas, entrez 2 observations séparées.",
        "spring.disclaimer.title": "Avertissement",
        "spring.disclaimer.text": "Attention! Veuillez faire preuve de prudence lors de vos observations. Ne grimpez pas aux arbres pour vérifier les nouvelles feuilles ou vérifier s'il y a des fleurs. Nous déclinons toute responsabilité pour tout préjudice subi lors de ces observations.",
        
        // Formulaire
        "form.name": "Nom",
        "form.first": "Prénom",
        "form.last": "Nom de famille",
        "form.email": "Adresse courriel",
        "form.image_upload": "Téléchargement d'image (OPTIONNEL; vous n'avez pas besoin de soumettre une photo)",
        "form.select_image": "Sélectionner une image",
        "form.date": "Date",
        "form.location": "Emplacement",
        "form.locate_me": "📍 Me géolocaliser",
        "form.street": "Nom de la rue (adresse non nécessaire)",
        "form.city": "Ville",
        "form.province": "Province",
        "form.postal_code": "Code postal",
        "form.tree_species": "Espèce d'arbre",
        "form.select": "— Sélectionner —",
        "form.flowering": "Floraison",
        "form.flowering.note": "Examinez l'arbre entier pour estimer le % de fleurs ouvertes",
        "form.budding": "Bourgeonnement (ouverture des bourgeons)",
        "form.leafing_young": "Déploiement des feuilles (jeunes feuilles)",
        "form.leafing_young.note": "Pour la plupart des arbres, attendez que les fleurs ici soient épanouies",
        "form.leafing_mature": "Déploiement des feuilles (feuilles matures)",
        "form.fruiting": "Fructification (fruits, graines, glands, etc.)",
        "form.notes": "Notes /observations",
        "form.age_consent": "J'ai 18 ans ou plus",
        "form.age_yes": "Oui",
        "form.age_supervised": "Non, mais un adulte me supervise",
        "form.consent": "Consentement",
        "form.consent_text": "Je consens à fournir mes observations sur les arbres.",
        "form.submit": "Cliquez pour soumettre votre observation",
        
        // Page Automne (Observations automnales)
        "autumn.page.title": "Observations automnales - TreeTraque",
        "autumn.page.description": "Enregistrez vos observations automnales des arbres : changement de couleur des feuilles, chute des feuilles, préparation à l'hiver.",
        "autumn.title": "Enregistrez vos observations automnales ici",
        "autumn.intro.title": "Vous avez choisi votre arbre préféré?",
        "autumn.intro.text": "Si vous êtes prêts à enregistrer vos observations sur le changement de couleur ou la chute des feuilles, entrez les ici:",
        "autumn.disclaimer.title": "Avertissement",
        "autumn.disclaimer.text": "S'il vous plaît, prenez des précautions. Ne grimpez pas dans les arbres pour examiner les feuilles. Nous ne sommes pas responsable des accidents.",
        
        // Formulaire automne
        "form.leaves_fallen": "Pourcentage de feuilles tombées de l'arbre",
        "form.leaves_fallen.note": "Ceci est probablement plus facile si vous regardez votre arbre régulièrement pour voir quel pourcentage de feuilles sont tombées",
        "form.leaves_color": "Pourcentage de feuilles sur l'arbre qui ont changé de couleur",
        "form.leaves_color.note": "Examinez l'ensemble de l'arbre pour estimer le % des feuilles qui ont changé de couleur.",
        "form.colors_present": "Quelles couleurs sont présentes sur l'arbre (cliquez tout ce qui s'applique)",
        "form.colors_present.note": "Cliquez-plus qu'un choix si 1 couleur si présent",
        "form.color_only_green": "Seulement des feuilles vertes sont présentes",
        "form.color_some_green": "Des feuilles vertes sont présentes (pas tous)",
        "form.color_red": "Des feuilles rouges sont présentes",
        "form.color_yellow": "Des feuilles jaunes sont présentes",
        "form.color_orange": "Des feuilles oranges sont présentes",
        "form.color_brown": "Des feuilles brunes sont présentes",
        "form.color_purple": "Des feuilles pourpres sont présentes",
        
        // Footer
        "footer.copyright": "© 2026 TreeTraque. Tous droits réservés."
    },
    
    en: {
        // Site global
        "site.title": "TreeTraque - Participatory science on tree phenology",
        "site.description": "Participatory science project to study tree phenology and understand the impact of climate change on our forests.",
        
        // Navigation
        "nav.logo": "TreeTraque",
        "nav.home": "Home",
        "nav.theory": "A bit of theory",
        "nav.about": "Who are we?",
        "nav.spring": "Spring observations",
        "nav.autumn": "Autumn observations",
        "nav.identification": "Tree identification",
        "nav.faq": "FAQ",
        
        // Page d'accueil - Section Hero
        "hero.title": "Track tree evolution with us",
        "hero.subtitle": "Join a citizen science project to understand the impact of climate change on tree phenology in Canada.",
        "hero.cta_participate": "Participate now",
        "hero.cta_learn": "Learn more",
        
        // Page d'accueil - Section Introduction
        "home.intro.title": "Welcome to TreeTraque",
        "home.intro.description": "TreeTraque is a participatory science project that invites you to observe and document phenological changes in trees across Canada. Together, let's contribute to better understanding the impact of climate change on our forests.",
        "home.intro.learn": "Discover the theory",
        "home.intro.start": "Start observations",
        
        // Page d'accueil - Liens rapides
        "home.quicklinks.title": "Quick access",
        "home.quicklinks.spring": "Spring observations",
        "home.quicklinks.spring.desc": "Record your spring observations: budding, flowering...",
        "home.quicklinks.autumn": "Autumn observations",
        "home.quicklinks.autumn.desc": "Document autumn changes: colors, leaf fall...",
        "home.quicklinks.identify": "Identify a tree",
        "home.quicklinks.identify.desc": "Tools and guides to identify tree species.",
        
        // Page Théorie
        "theory.page.title": "A bit of theory - TreeTraque",
        "theory.page.description": "Discover the scientific basics of tree phenology and the importance of their observation in the context of climate change.",
        "theory.title": "A bit of theory",
        "theory.subtitle": "Understanding tree phenology and its importance for climate change studies",
        
        // Section Phenology
        "theory.section.what": "What is phenology?",
        "theory.definition.title": "Phenology",
        "theory.definition.type": "feminine noun",
        "theory.definition.text": "Scientific study of the variations (duration, time, etc.) that different climates cause to the flowering and leafing of plants.",
        "theory.definition.source": "- Larousse Merriam-Webster",
        "theory.phenology.content": "For this project, we emphasize tree observation. In the spring, we note the date when a tree species begins to flower, when leaf buds open, and when adult leaves are fully open. In the fall, we observe leaf drop. We also estimate the percentage of colored leaves and the proportion of leaves still on the branches several times each week.",
        "theory.image.caption": "Red maple in full bloom, Lennoxville April 23, 2018",
        
        // Section Importance
        "theory.section.why": "Why is phenology important?",
        "theory.importance.para1": "Phenology, or the tracking of biological phenomena over time, is an important research field because it allows us to detect the impact of climate change on living organisms. For example, data collected in the northeastern United States shows that in 2001, lilacs bloomed 9 days earlier than in 1965 <sup>(1)</sup>. In Concord, Massachusetts, spring flowers bloomed an average of 7 days earlier in 2004-2006 than between 1850 and 1900 <sup>(2)</sup>.",
        "theory.importance.para2": "How have recent climate changes affected the trees in our region? We don't know because phenological data in the Eastern Townships is very scarce. For this reason, we need you, citizen scientists, to collect phenological observations. The goal of the project is to start collecting data that will be used in the future to detect the impacts of global warming on our trees.",
        
        // References
        "theory.section.references": "References",
        "theory.ref1": "Wolfe, D.W., M.D. Schwartz, A.N. Lakso, Y. Otsuki, R.M. Pool, N.J. Shaulis 2005. Climate change and shifts in spring phenology of three horticultural woody perennials in northeastern USA. <em>International Journal of Biometeorology</em> 49 (5): 303-309.",
        "theory.ref2": "Miller-Rushing, A.J., and R.B. Primack 2008. Global warming and flowering times in Thoreau's Concord: a community perspective. <em>Ecology</em> 89 (2): 332-341.",
        
        // Phenology (old content - kept for compatibility)
        "theory.phenology.title": "What is phenology?",
        "theory.phenology.intro": "Phenology is the study of periodic biological phenomena and their relationship with climate. For trees, this includes observing key moments like budding, flowering, fruiting and leaf fall.",
        
        // Phases phénologiques
        "theory.phases.budding.title": "Budding",
        "theory.phases.budding.description": "Appearance of the first buds in spring, marking the resumption of vegetative activity.",
        "theory.phases.flowering.title": "Flowering",
        "theory.phases.flowering.description": "Opening of flowers, crucial period for tree reproduction.",
        "theory.phases.fruiting.title": "Fruiting",
        "theory.phases.fruiting.description": "Formation and maturation of fruits, essential for seed dispersal.",
        "theory.phases.senescence.title": "Senescence",
        "theory.phases.senescence.description": "Color change and leaf fall, preparation for winter.",
        
        // Changement climatique
        "theory.climate.title": "Climate change impact",
        "theory.climate.intro": "Climate change modifies the phenological cycles of trees. Observing these changes helps us understand the adaptation of forest ecosystems to new climatic conditions.",
        
        // Impacts climatiques
        "theory.impacts.temperature.title": "Temperature",
        "theory.impacts.temperature.description": "Rising temperatures can advance the timing of spring events like budding and flowering.",
        "theory.impacts.precipitation.title": "Precipitation",
        "theory.impacts.precipitation.description": "Changes in precipitation patterns affect tree growth and reproduction.",
        "theory.impacts.seasons.title": "Season length",
        "theory.impacts.seasons.description": "Growing seasons are lengthening, modifying the traditional cycles of trees and ecosystems.",
        
        // Science participative
        "theory.citizen.title": "Why participatory science?",
        "theory.citizen.intro": "Citizen observations are essential to document phenological changes on a large scale. Each observation contributes to building a valuable database for scientific research.",
        
        // Bénéfices
        "theory.benefits.coverage.title": "Geographic coverage",
        "theory.benefits.coverage.description": "Citizen observations allow covering a much larger territory than traditional scientific studies.",
        "theory.benefits.continuity.title": "Temporal continuity",
        "theory.benefits.continuity.description": "Public participation ensures data collection over long periods, essential for detecting climate trends.",
        "theory.benefits.education.title": "Education",
        "theory.benefits.education.description": "Active participation raises public awareness of environmental issues and strengthens ecological consciousness.",
        
        // CTA Théorie
        "theory.cta.title": "Ready to contribute?",
        "theory.cta.description": "Now that you understand the importance of these observations, it's time to take action!",
        "theory.cta.spring": "Spring observations",
        "theory.cta.autumn": "Autumn observations",
        
        // Page About - Team
        "about.page.title": "Who are we? - TreeTraque",
        "about.page.description": "Discover the team and organization behind TreeTraque, the participatory science project on tree phenology in Canada.",
        "about.title": "Who are we?",
        "about.subtitle": "Discover the team and organization behind the TreeTraque project",
        
        "about.project.title": "The TreeTraque Project",
        "about.project.description": "TreeTraque is a research project led by Dr. Elisabeth Levac. Many students have been involved in the project, among which: Andrew Compton, Anabel Laurie and Jessica Meadows. Their input is acknowledged.",
        
        "about.director.title": "Project Director",
        "about.director.name": "Dr. Elisabeth Levac",
        "about.director.role": "Professor, Department of Environment and Geography",
        "about.director.affiliation": "Bishop's University",
        "about.director.bio1": "Dr. Levac teaches in the department of Environment and Geography at Bishop's University. She has been monitoring biogenic aerosols (pollen and spores) in Sherbrooke since 2006. TreeTraque will help link observations about the flowering of trees with her pollen observations at the microscope.",
        "about.director.bio2": "She is now conducting research into the health impacts of airborne pollen and air pollution. Ongoing work tracks the length of the ragweed allergy season to see if it is affected by climate change.",
        
        "about.links.title": "Reference links",
        "about.links.website": "Research website",
        "about.links.bishops": "Elisabeth Levac on Bishop's website",
        "about.links.pollen": "Pollen monitoring",
        "about.links.pollen.name": "Pollen Lennoxville",
        "about.links.other": "Other projects",
        "about.links.canopy": "Tree Canopy Sherbrooke",
        
        // Contact
        "contact.title": "Contact Us",
        "contact.intro": "Do you have questions about TreeTraque or would like to collaborate with us? Please don't hesitate to contact us.",
        "contact.email.label": "Email:",
        "contact.phone.label": "Phone:",
        "contact.address.label": "Address:",
        
        // Page FAQ
        "faq.page.title": "FAQ - TreeTraque",
        "faq.page.description": "Frequently asked questions about the TreeTraque project and participatory science on tree phenology.",
        "faq.title": "Frequently Asked Questions",
        "faq.subtitle": "Quickly find answers to your questions about TreeTraque",
        
        // Section How to observe trees
        "faq.howto.title": "How to observe trees",
        
        "faq.q1.question": "Do I need special skills?",
        "faq.q1.answer": "No. All you need is an interest for nature.",
        
        "faq.q2.question": "How much time does it take?",
        "faq.q2.answer": "You only need a few minutes, a few times a week.",
        
        "faq.q3.question": "Is it difficult to make observations about trees?",
        "faq.q3.answer": "Not at all. Please check the guide How to observe trees at the top of this page.",
        
        "faq.q4.question": "When do I need to observe my tree?",
        "faq.q4.answer": "In the spring, most of the changes happen during the month of May. Observations can be made any time during the day. At the end of the summer, depending on the type of tree, changes occur anywhere between late August and the end of October.",
        
        "faq.q5.question": "What tree should I chose to observe?",
        "faq.q5.answer": "We made a list of the tree species targeted by this project. If you have a nice, healthy tree growing on your property, that will be perfect. If you don't own a house, you can choose to watch a nice healthy tree in your neighbourhood.",
        
        "faq.q6.question": "Do I need to know a lot about trees?",
        "faq.q6.answer": "Not at all! If you need help identifying a tree, you can consult the Tree webpage from Natural Resources Canada or PlantNet.",
        
        "faq.q7.question": "What do flowers look like?",
        "faq.q7.answer": "",
        
        "faq.contact.title": "You haven't found your answer?",
        "faq.contact.description": "Our team is here to help you. Please don't hesitate to contact us for any additional questions.",
        
        // Page Identification
        "identification.page.title": "Tree identification - TreeTraque",
        "identification.page.description": "Tools and guides to identify different tree species in Canada.",
        "identification.title": "Tree identification",
        "identification.intro": "If you need help to identify a tree, you can consult these websites:",
        "identification.resources.nrcan": "Trees webpage of Natural Resources Canada",
        "identification.resources.cle_forestiere": "La clé forestière (in French only)",
        "identification.resources.plantnet": "PlantNet",
        "identification.contact.intro": "If you still have questions or are unsure about your tree identification, please contact me:",
        "identification.contact.email": "elisabeth.levac@ubishops.ca",
        
        // Page Spring (Spring observations)
        "spring.page.title": "Spring observations - TreeTraque",
        "spring.page.description": "Record your spring tree observations: budding, flowering, first signs of plant life.",
        "spring.title": "Record spring observations here",
        "spring.intro.title": "You chose your favourite tree?",
        "spring.intro.text": "If you are ready to record observations about leafing out, or flower blooms, fill them in below. Sometimes, more than one phase can occur at the same time. For example, the flowers wither while the first leaves are unfolding. In that case, enter 2 separate observations.",
        "spring.disclaimer.title": "Disclaimer",
        "spring.disclaimer.text": "Attention! Please remain cautious while making your observations. Do not climb on trees to check the new leaves or verify if there are flowers. We claim no responsibilities for any harm incurred while making these observations.",
        
        // Form
        "form.name": "Name",
        "form.first": "First",
        "form.last": "Last",
        "form.email": "Email Address",
        "form.image_upload": "Image Upload (OPTIONAL; you do not need to submit a photo)",
        "form.select_image": "Select Image",
        "form.date": "Date",
        "form.location": "Location",
        "form.locate_me": "📍 Locate me",
        "form.street": "Street name (address not needed)",
        "form.city": "City",
        "form.province": "Province",
        "form.postal_code": "Postal code",
        "form.tree_species": "Tree species",
        "form.select": "— Select —",
        "form.flowering": "Flowering",
        "form.flowering.note": "Examine the whole tree to estimate the % of open flowers",
        "form.budding": "Budding (opening of leaf buds)",
        "form.leafing_young": "Leafing out (young leaves)",
        "form.leafing_young.note": "For most trees, wait until the flowers here bloomed",
        "form.leafing_mature": "Leafing out (mature leaves)",
        "form.fruiting": "Fruiting (fruits, seeds, acorns etc.)",
        "form.notes": "Notes /observations",
        "form.age_consent": "I am 18 years old or older",
        "form.age_yes": "Yes",
        "form.age_supervised": "No, but an adult is supervising me",
        "form.consent": "Consent",
        "form.consent_text": "I consent to provide my observations about trees.",
        "form.submit": "Click to submit your observation",
        
        // Page Autumn (Autumn observations)
        "autumn.page.title": "Autumn observations - TreeTraque",
        "autumn.page.description": "Record your autumn tree observations: leaf color change, leaf fall, preparation for winter.",
        "autumn.title": "Record autumn observations here",
        "autumn.intro.title": "You chose your favourite tree?",
        "autumn.intro.text": "If you are ready to record observations about colour change or leaf drop, fill them in here:",
        "autumn.disclaimer.title": "Disclaimer",
        "autumn.disclaimer.text": "Please, take precautions. Do not climb on trees to check the leaves. We are not responsible for accidents.",
        
        // Autumn form
        "form.leaves_fallen": "Percentage of leaves that have fallen from the tree",
        "form.leaves_fallen.note": "This is probably easier if you look at your tree regularly to see what percentage of leaves have fallen",
        "form.leaves_color": "Percentage of leaves on the tree that have change colour",
        "form.leaves_color.note": "Examine the whole tree to estimate the % of leaves that have changed colour.",
        "form.colors_present": "Which colours are present on the tree (click all that apply)",
        "form.colors_present.note": "Click more than one choice if 1 colour is present",
        "form.color_only_green": "Only green leaves are present",
        "form.color_some_green": "Some green leaves are present (not all)",
        "form.color_red": "Red leaves are present",
        "form.color_yellow": "Yellow leaves are present",
        "form.color_orange": "Orange leaves are present",
        "form.color_brown": "Brown leaves are present",
        "form.color_purple": "Purple leaves are present",
        
        // Footer
        "footer.copyright": "© 2026 TreeTraque. All rights reserved."
    }
};

/**
 * Classe principale pour gérer les traductions
 */
class I18nManager {
    constructor() {
        this.currentLang = this.getStoredLanguage() || 'fr';
        this.langToggle = document.getElementById('langToggle');
        this.langText = document.getElementById('langText');
        
        this.init();
    }
    
    /**
     * Initialise le système de traduction
     */
    init() {
        // Applique la langue stockée ou par défaut
        this.setLanguage(this.currentLang);
        
        // Ajoute l'événement au bouton de changement de langue
        if (this.langToggle) {
            this.langToggle.addEventListener('click', () => {
                this.toggleLanguage();
            });
        }
        
        // Met à jour l'affichage du bouton
        this.updateLanguageButton();
    }
    
    /**
     * Change la langue du site
     */
    setLanguage(lang) {
        if (!translations[lang]) {
            console.warn(`Langue '${lang}' non supportée`);
            return;
        }
        
        this.currentLang = lang;
        
        // Met à jour l'attribut lang du HTML
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);
        
        // Traduit tous les éléments
        this.translateElements();
        
        // Sauvegarde la préférence
        this.storeLanguage(lang);
        
        // Met à jour le bouton
        this.updateLanguageButton();
        
        // Déclenche un événement personnalisé
        document.dispatchEvent(new CustomEvent('languageChanged', {
            detail: { language: lang }
        }));
    }
    
    /**
     * Traduit tous les éléments avec data-i18n
     */
    translateElements() {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            
            if (translation) {
                // Vérifie si l'élément a des attributs spéciaux à traduire
                if (element.hasAttribute('title')) {
                    const titleKey = key + '.title';
                    const titleTranslation = this.getTranslation(titleKey);
                    if (titleTranslation) {
                        element.setAttribute('title', titleTranslation);
                    }
                }
                
                if (element.hasAttribute('placeholder')) {
                    const placeholderKey = key + '.placeholder';
                    const placeholderTranslation = this.getTranslation(placeholderKey);
                    if (placeholderTranslation) {
                        element.setAttribute('placeholder', placeholderTranslation);
                    }
                }
                
                if (element.hasAttribute('aria-label')) {
                    const ariaKey = key + '.aria';
                    const ariaTranslation = this.getTranslation(ariaKey);
                    if (ariaTranslation) {
                        element.setAttribute('aria-label', ariaTranslation);
                    }
                }
                
                // Met à jour le contenu ou la valeur
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translation;
                } else if (element.hasAttribute('content')) {
                    element.setAttribute('content', translation);
                } else {
                    element.innerHTML = translation;
                }
            }
        });
        
        // Gère les placeholders personnalisés avec data-i18n-placeholder
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = this.getTranslation(key);
            if (translation) {
                element.setAttribute('placeholder', translation);
            }
        });
    }
    
    /**
     * Récupère une traduction par sa clé
     */
    getTranslation(key) {
        return translations[this.currentLang][key] || null;
    }
    
    /**
     * Basculer entre les langues
     */
    toggleLanguage() {
        const newLang = this.currentLang === 'fr' ? 'en' : 'fr';
        this.setLanguage(newLang);
    }
    
    /**
     * Met à jour l'affichage du bouton de langue
     */
    updateLanguageButton() {
        if (this.langText) {
            this.langText.textContent = this.currentLang.toUpperCase();
        }
        
        // Met à jour l'attribut aria-label
        if (this.langToggle) {
            const label = this.currentLang === 'fr' ? 'Switch to English' : 'Passer en français';
            this.langToggle.setAttribute('aria-label', label);
        }
    }
    
    /**
     * Sauvegarde la langue dans localStorage
     */
    storeLanguage(lang) {
        try {
            localStorage.setItem('treetraque_language', lang);
        } catch (e) {
            console.warn('Impossible de sauvegarder la préférence de langue:', e);
        }
    }
    
    /**
     * Récupère la langue sauvegardée
     */
    getStoredLanguage() {
        try {
            return localStorage.getItem('treetraque_language');
        } catch (e) {
            console.warn('Impossible de récupérer la préférence de langue:', e);
            return null;
        }
    }
    
    /**
     * Récupère la langue du navigateur
     */
    getBrowserLanguage() {
        const lang = navigator.language || navigator.languages[0];
        return lang.startsWith('fr') ? 'fr' : 'en';
    }
}

/**
 * Initialisation principale
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialise le gestionnaire de traductions
    const i18n = new I18nManager();
    
    // Rend le gestionnaire disponible globalement pour le debug
    window.TreeTraque = {
        i18n,
        translations
    };
    
    console.log('🌳 TreeTraque - Site initialisé avec succès');
});

/**
 * Gestion des erreurs globales
 */
window.addEventListener('error', function(event) {
    console.error('Erreur TreeTraque:', event.error);
});

/**
 * Fonctions utilitaires exportées
 */
window.TreeTraqueUtils = {
    getCurrentLanguage: () => window.TreeTraque?.i18n?.currentLang || 'fr',
    setLanguage: (lang) => window.TreeTraque?.i18n?.setLanguage(lang),
    getTranslation: (key) => window.TreeTraque?.i18n?.getTranslation(key)
};