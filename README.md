This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Running with docker-compose

```bash
docker-compose up
#or
docker-compose up -d platform
```

### Running from scratch

Make sure there's a compatible `NODE_VERSION` installed in your machine.
1. Install the dependencies:

```bash
npm install
```

2. Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Config .env.local with Auth0 credentials

```bash
node -e "console.log(crypto.randomBytes(32).toString('hex'))" 
# to create the AUTH0_SECRET
```

### Accessing the App

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run the authentication you need a .env.local with the appropriate variables set.

## Building and pushing images to Github Registry

In order to build a new image and push it to the [registry], run the script:

```bash
./build.sh
```
