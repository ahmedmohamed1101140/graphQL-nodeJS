This Application is a simple GraphQl API
This was for learning purposes I want to refresh my NodeJS Mongoose and express knowledge as well as learn GraphQL

Because I think it's a cool tool and it's very feauturestic.

## Pre-Setup
```
cp .\.env.example .env

Add your mlab Database URL to nodemon.json envrioment variable

```

## Usage
```
npm install
npm run dev

Go to localhost:3000/graphql
```
## Docker Image

```
docker build -t <your-name>/nodejS-graphgql-books-api .

docker run -p 3000:3000 <your-name>/nodejS-graphgql-books-api


Go to localhost:3000/graphql
```