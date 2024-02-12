# From client folder
### Install
```
$ npm install
```

## Run
```
$ npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# From hasura folder

### Install
```
$ npm install
```
```
$ docker compose up
```
```
$ npx hasura metadata apply
```
```
$ npx hasura migrate apply
```

## Run
```
$ npm run start
```
Open [http://localhost:9695](http://localhost:9695) to view it in the browser.

If you get error: `You have been redirected because your GraphQL Engine metadata is in an inconsistent state` click `Delete all` (on hasura console http://localhost:9695) and run again:
```
$ npx hasura metadata apply
```
```
$ npx hasura migrate apply
```
```
$ npm run start
```
