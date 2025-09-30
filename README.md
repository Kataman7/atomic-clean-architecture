# Atomic Clean Architecture - Frontend Demo

Une démo d'architecture frontend propre utilisant React, Three.js et une structure atomique (Atomic Design). Le projet est maintenant frontend-only, avec un système d'API configurable pour communiquer avec des services REST externes.

## Fonctionnalités

- **Architecture Atomique** : Composants organisés en atoms, molecules, organisms, pages.
- **3D avec Three.js** : Intégration de scènes 3D (cubes, personnages, Terre).
- **État Global** : Gestion d'état avec Redux Toolkit.
- **API REST** : Système flexible pour communiquer avec des APIs externes (configurable via `.env`).
- **Docker** : Modes dev et build pour faciliter le développement et le déploiement.
- **Tailwind CSS** : Styles utilitaires pour une UI moderne.

## Technologies

- **React 19** avec Vite
- **Three.js** et React Three Fiber/Drei
- **Redux Toolkit** pour la gestion d'état
- **Tailwind CSS** pour les styles
- **Docker** pour la conteneurisation
- **ESLint** pour le linting

## Structure du Projet

```
src/
├── components/          # Composants UI (Atomic Design)
│   ├── atoms/           # AtmButton, AtmCube, etc.
│   ├── molecules/       # MolCounter, etc.
│   ├── organisms/       # ThreeOrgScene, etc.
├── lib/
│   ├── store/           # État global Redux
│   │   ├── slices/      # counterSlice.js
│   │   ├── store.js
├── pages/               # Pages principales (PagHome, PagCubes, etc.)
├── routes/              # Configuration des routes React Router
├── services/            # Communication API
│   ├── products/
│   │   ├── api.js       # Fonction API générique
│   │   ├── queries.js   # Fonctions GET
│   │   ├── mutations.js # Fonctions POST/PUT/DELETE
├── styles/              # Styles globaux
│   ├── globals.css
├── index.jsx            # Point d'entrée React
├── .env                 # Variables d'environnement (API URL)
├── Dockerfile           # Build production
├── Dockerfile.dev       # Dev mode
├── package.json
├── vite.config.js
├── tailwind.config.js
├── eslint.config.js
```

## Installation

### Prérequis
- Docker et Docker Compose
- Node.js (optionnel, pour développement local sans Docker)

### Avec Docker (recommandé)
1. Clone le repo :
   ```bash
   git clone https://github.com/Kataman7/atomic-clean-architecture.git
   cd atomic-clean-architecture
   ```

2. Lance les services :
   ```bash
   docker-compose up --build
   ```
   - Mode dev : `http://localhost:5173`
   - Mode build : `http://localhost:80`

### Sans Docker (développement local)
1. Installe les dépendances :
   ```bash
   npm install
   ```

2. Lance le serveur dev :
   ```bash
   npm run dev
   ```

## Utilisation

### Commandes Docker
- `docker-compose up` : Lance dev et build
- `docker-compose up dev` : Mode dev seulement
- `docker-compose up build` : Mode build seulement
- `docker-compose build` : Construit les images
- `docker-compose down` : Arrête tout

### Configuration API
Modifie `src/.env` pour changer l'URL de l'API :
```
VITE_API_URL=http://votre-api.com
```

### Utilisation des Services API
Importe les fonctions dans tes composants :

```jsx
import { getItems, addItem } from '../services/products/queries.js';

const MyComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleAdd = async () => {
    await addItem({ name: 'Nouvel item' });
    // Recharge les données...
  };

  return (
    <div>
      {/* Ton JSX */}
    </div>
  );
};
```

## Architecture

### Atomic Design
- **Atoms** : Composants de base (boutons, inputs, modèles 3D)
- **Molecules** : Combinaisons d'atoms (compteurs, etc.)
- **Organisms** : Sections complexes (scènes 3D)
- **Pages** : Pages complètes avec logique

### État Global
Utilise Redux pour l'état partagé (ex. : compteur).

### API
Système générique pour les appels REST, avec gestion d'erreurs et sérialisation automatique.

## Déploiement

Pour déployer en production :
1. Construit l'image : `docker-compose build build`
2. Pousse vers un registry ou déploie le conteneur
3. Les fichiers statiques sont servis par Nginx

## Contribution

1. Fork le repo
2. Crée une branche : `git checkout -b feature/nouvelle-fonction`
3. Commit tes changements : `git commit -am 'Ajoute nouvelle fonction'`
4. Push : `git push origin feature/nouvelle-fonction`
5. Ouvre une PR

## Licence

ISC