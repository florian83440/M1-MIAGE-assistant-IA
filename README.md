# Application MIAGEGPT

MIAGEGPT est une application interactive permettant d'interagir avec plusieurs bots capables de générer du texte, des images et des réponses audio à l'aide des API d'OpenAI.

## Binôme

Florian AIME & Amina MOUCHTAHI

## Fonctionnalités

### Chatbot
- **Génération de Texte**: Les utilisateurs peuvent saisir des prompts textuels qui sont envoyés à l'API OpenAI pour générer des réponses en utilisant le modèle GPT-3.5 Turbo.
- **Historique de Chat**: Les conversations sont sauvegardées dans une base de données MongoDB, accessible via l'API RESTful pour récupérer les chats précédents.

### Imagebot
- **Génération d'Images**: Les utilisateurs peuvent saisir un prompot ainsi que spécifier divers paramètres tels que le type d'image, la forme, le support, le fond, etc., pour générer des images à l'aide de l'API OpenAI Image. Les images générées sont sauvegardées avec leurs paramètres associés dans MongoDB et puis affichées sur notre application.

### Speechbot
- **Génération de Réponses Audio**: Les utilisateurs peuvent saisir des prompts textuels qui sont transformés en réponses audio générées par l'API OpenAI. Les fichiers audio sont stockés localement pour un accès ultérieur.

## Technologies Utilisées

### Backend (Express.js)
- **Express.js**: Framework minimaliste pour le serveur Node.js.
- **MongoDB**: Base de données NoSQL utilisée pour le stockage des conversations de chat et des URL d'images générées.
- **Mongoose**: ODM (Object Data Modeling) pour Node.js et MongoDB, facilitant l'interaction avec la base de données.
- **Multer**: Middleware pour gérer les données de formulaire multipart/encoded dans Express.
- **Axios**: Bibliothèque HTTP basée sur des promesses pour effectuer des requêtes AJAX depuis le backend vers les APIs et le frontend.

### Frontend (Vue.js)
- **Vue.js**: Framework JavaScript progressif pour la création d'interfaces utilisateur.
- **Vue Router**: Bibliothèque de routage officielle pour la navigation entre les composants Vue.
- **Axios**: Utilisé également dans le frontend pour communiquer avec le backend.

### API OpenAI Utilisées
- **OpenAI GPT-3.5 Turbo**: Utilisé pour la génération de texte naturel et de réponses conversationnelles.
- **OpenAI Image API**: Utilisé pour la génération d'images en fonction de prompts textuels spécifiques.
- **OpenAI Audio API**: Utilisé pour la génération de réponses audio à partir de prompts textuels.

### Autres Librairies et Outils
- **FontAwesome**: Pour l'intégration d'icônes visuelles dans l'interface utilisateur Vue.js.
