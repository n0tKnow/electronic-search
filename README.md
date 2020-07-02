# electronic-search

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Deploy with docker
modify the backend url in default.conf
```
docker build -t imageName .
docker run -d -p outPort:80 --name Youwang imageName
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
