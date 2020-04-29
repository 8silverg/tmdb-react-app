## Requirements
To run this demo you need Docker installed on your machine.

## Getting Started
### 1) Add .env file
Create '.env.development' file in '/frontend' folder with your API key
### 2) Run server
(This require docker compose installed on your machine)

In root folder run in bash:

```bash
make dev
```

**OR** 

Go to folder '/frontend' and then run:

```bash
docker build -t movie-app .
decker run -p 3000:3000 movie-app
```
### 3) See website
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
