# bandapixels-nodejs-test-task

Test task for the position of Junior Nodejs Developer in the company BandaPixels

### About project

The project consists in parsing products from the site [rozetka.com.ua](https://rozetka.com.ua "https://rozetka.com.ua") and displaying them on the page

### Requirements for launching the project
To start the project, you will need:

1. Docker >= **26.0.0**
2. Docker Compose >= **1.29.2**

### How to launch the project?
1. Clone a repository:

   `git clone https://github.com/shavlenkov/bandapixels-nodejs-test-task.git`
2. Go to the bandapixels-nodejs-test-task folder:

   `cd bandapixels-nodejs-test-task`
3. Make an .env file from the .env.example file:

   `cp .env.example .env`

   `cp ./frontend/.env.example ./frontend/.env`

   `cp ./backend/.env.example ./backend/.env`
4. Update the following lines in the .env file:
   ```
   MYSQL_ROOT_PASSWORD=
   MYSQL_DATABASE=
   ```
   Update the following line in the backend/.env file:
   ```
   DATABASE_URL=mysql://MYSQL_ROOT_USER:MYSQL_ROOT_PASSWORD@mysql:3306/MYSQL_DATABASE
   ```
5. Run containers using Docker Compose:

   `docker-compose up -d`
6. Open a browser and go to the address:
   [http://localhost:3000/](http://localhost:3000/ "http://localhost:3000/")
