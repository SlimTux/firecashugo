### How to Run it

First, install [Hugo Extended](https://gohugo.io/getting-started/installing/) ver `0.101.0` or greater. 
```
paru -S hugo-extended-cli
sudo pacman -S hugo-extended-cli
```

```
gh clone https://github.com/SlimTux/firecashugo
cd firecashugo
npm install
npm start
```

Check it on on `http://localhost:6969/`.


## Developing Components 

Create a Svelte file in the `app/components` directory. It must have a custom element tag. 

```svelte
<svelte:options tag="hi-mom" />

<script>
    export let greeting: string;
</script>

<h1>Hi Mom! {greeting}</h1> 
```

Export the component from `app/main.ts`:

```ts
export * from './components/hi-mom.svelte';
```

Now use it in anywhere in your HTML or Markdown. 

```html
<hi-mom greeting="i made a web component"></hi-mom>
```
## Create content to it.
```
cd firecashugo/content/lessons 
 nvim 
upload an thumbnail in the .../lessons/"some_post"/img
```
## Upload-it
```md 
 << git add .>>
 << git commit -m "s">>
 << git pull >>
 << git push>>
```


**Note:** A weird caveat with Svelte web components is that all styles must be encapsulated. You can use Tailwind, BUT only with `@apply` in the component. Global styles will not work.

## Commands

- `npm start`: Main dev server. Runs everything you need. 
- `npm run dev`: Runs components in isolation. Serves `app/index.html` as a playground for components. 
- `npm run hugo`: Only runs static site. 
- `npm run build`: Build for production
