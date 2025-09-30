#!/bin/bash

echo "Démarrage du serveur frontend..."
cd src/frontend

if [ ! -d "node_modules" ]; then
  echo "Installation des dépendances du frontend..."
  npm install
else
  echo "Dépendances du frontend déjà installées."
fi

npm run dev
