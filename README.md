
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
npm install concurrently
pip install django
pip install djangorestframework 
pip install django-cors-headers
pip install django-allauth
```

## Frontend Setup
```sh
cd frontend
npm install
npm install papaparse 
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

# RUN THIS FOR CONCURRENTLY. RUNNING 3 SCRIPTS AT ONCE MADAFUCKER
```sh
npm run start-all

```
