# Spenditure

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Clone repo
```bash
git clone https:www.github.com/benjithorpe/spenditure.git
```

Install the dependencies...

```bash
cd spenditure
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```
