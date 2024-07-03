
# MedQuery Project Setup
## Clone the Github Link 
```sh
git clone https://github.com/ZyrhnDlCmp/dadizhome.git
```

## Backend Setup
```sh
cd dadizhome
cd MedQuery
```

### Install the required Python packages:
```sh
pip install django
pip install djangorestframework 
pip install django-cors-headers
```

## Frontend Setup
```sh
cd frontend
npm install
```
```sh
npm run build
```

## DJANGO DATABASE SETUP 
```sh
cd djangoadmin
python manage.py makemigrations backend
python manage.py migrate 
python manage.py runserver (dapat sabay to sa npm start)
```

# RUN THIS CONCURRENTLY OR SABAY DAPAT. NPM ANG FRONTEND, PYTHON ANG BACKEND
```sh
npm start 
python manage.py runserver 
```
