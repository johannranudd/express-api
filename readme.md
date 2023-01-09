## dependencies

```
npm i -D prisma nodemon
npm i express
```

## initiate prisma

```
npx prisma --datasource-provider postgresql
```

## migrate after changes to the schema

```
npx prisma migrate dev --name init
```

## to install prisma client

```
npm i @prisma/client
```

## to manualy regenerate the client

```
npx prisma generate
```
