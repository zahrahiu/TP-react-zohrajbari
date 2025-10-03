# Etape 1 : build
FROM node:18-alpine AS build
#khdina img sghira dyal node.js (18) w sminaha build 
WORKDIR /app   
 #حددنا المجلد /app باش نخدمو فيه
COPY package*.json ./   
RUN npm install
COPY . .
RUN npm run build
#النتيجة: فـ الأخير كيتولد مجلد /app/build فيه التطبيق الجاهز.

#Etape 2 : server
FROM nginx:alpine
# khdina img sghira dyal nginx bach nchufu wach had app kayna f nav
COPY --from=build /app/dist /usr/share/nginx/html
# drna copie dyal dak build li l9inah flkhr f had lmrhala 1 dyal nginx
# /app/dist حيث Vite كينشئ dist.

EXPOSE 80
# port 80 fthnah
CMD ["nginx", "-g", "daemon off;"]
# wahd l amr bach nginx yb9a khdam w maysdch 


## النتيجة = Container واحد فيه تطبيق React جاهز للتشغيل فـ أي سيرفر