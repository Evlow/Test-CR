# Utiliser une image de Node.js
FROM node:16-alpine as build

# Créer un dossier de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tous les fichiers de l'application
COPY . .

# Exécuter la commande de build pour préparer l'application
RUN npm run build

# Utiliser Nginx pour servir le build
FROM nginx:alpine

# Copier la configuration nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers de build depuis l'étape précédente dans le conteneur Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80
