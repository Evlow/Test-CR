# Étape 1 : Construire l'application avec Node.js
FROM node:16-alpine as build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers du projet
COPY . .

# Construire l'application
RUN npm run build

# Étape 2 : Utiliser Nginx pour servir l'application
FROM nginx:alpine

# Copier la configuration nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers de build de l'étape précédente vers Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80
