// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }
})

// import { defineNuxtConfig } from '@nuxt/bridge'

// export default defineNuxtConfig({
//   bridge: false
// })

// /home/akshu/bilzo-assignment/dist
// import { defineNuxtConfig } from 'nuxt'


// sudo ln -s /etc/nginx/sites-available/bilzo /etc/nginx/sites-enabled/
// server {
//   listen 80;
//   server_name bilzo.akshuakr.com www.bilzo.akshuakr.com;

//   root bilzo-assignment/.output/public;
//   index index.html;

//   location / {
//       try_files $uri $uri/ /index.html;
//   }
// }

// bilzo-assignment/.output/public

// sudo chmod -R 755 /home/akshu/bilzo-assignment/dist
// sudo chmod 644 /home/akshu/bilzo-assignment/dist/index.html
// sudo chown -R www-data:www-data /home/akshu/bilzo-assignment/dist
// sudo chown -R www-data:www-data /home/akshu/bilzo-assignment/dist

// sudo chmod -R 755 /home/akshu/bilzo-assignment/.output/public
// sudo chown -R www-data:www-data bilzo-assignment/.output/public
// sudo chown -R www-data:www-data /bilzo-assignment/.output/public