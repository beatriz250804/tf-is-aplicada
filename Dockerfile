# ---------- STAGE: FRONTEND ----------
FROM node:20 AS frontend-build
WORKDIR /app
COPY frontend-ionic/ ./frontend-ionic/
WORKDIR /app/frontend-ionic
RUN npm ci
RUN npm run build -- --prod

# ---------- STAGE: BACKEND ----------
FROM maven:3.9-eclipse-temurin-17 AS backend-build
WORKDIR /app
COPY backend/ ./backend/
WORKDIR /app/backend
RUN mvn -B clean package -DskipTests

# ---------- STAGE: FINAL (solo frontend servido por NGINX) ----------
FROM nginx:alpine
# si Ionic genera /www o /dist dependiendo, ajusta la ruta
COPY --from=frontend-build /app/frontend-ionic/www /usr/share/nginx/html
# Si quieres exponer el backend dentro de la misma imagen, habría que crear otra configuración (no recomendado para producción)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
