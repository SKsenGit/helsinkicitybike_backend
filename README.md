# helsinkicitybike_backend
The implementation of pre-assignment for Solita Dev Academy Finland fall 2022.

1. The app has two git-repositories
    - front-end part https://github.com/SKsenGit/helsinkicitybike_frontend
    - back-end part https://github.com/SKsenGit/helsinkicitybike_backend

2. The app was deployed on Heroku
https://solitacitybike.herokuapp.com
Now, the deployed version of app has a problem with db PostgreSQL authorization only on Heroku, the local version works well.

3. For a local running:
    - create PostgreSQL database.
    - run script from file "SQL script" of back-end part project directory.
    - create .env file in the root of back-end part project directory.
    - add to .env file PostgreSQL credential:
        PGHOST = 
        PGPORT = 
        PGDATABASE = 
        PGUSER = 
        PGPASSWORD = 
    - in the back-end part project directory run: 'node index.js' script
    - open the app in a browser http://localhost:3001/

4. Implemented features:
    # import stations to database
    - the best way is to use fixed file of stations 'Helsingin_ja_Espoon_kaupunki_fixed.csv' from DataSets directory.
    