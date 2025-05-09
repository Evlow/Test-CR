# Étape 1 : Build avec Node + Vite
FROM node:18-alpine AS build

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie des fichiers de config
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du code source
COPY . .

# Build de l'application
RUN npm run build

# Étape 2 : Serveur statique avec Nginx
FROM nginx:alpine

# Supprime la conf par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copie la conf personnalisée
COPY nginx.conf /etc/nginx/nginx.conf

# Copie les fichiers du build dans le dossier web de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expose le port
EXPOSE 80

# Lance nginx en mode foreground
CMD ["nginx", "-g", "daemon off;"]
