# Poor Man's JS REPL

Minimal and editor agnostic Node.js REPL/Scratchpad with watch and debugging.  
You can install other npm packages and use them with the `require` syntax.

## Up And Running

In your terminal:

``` sh
git clone https://github.com/watofundefined/poor-mans-jsrepl.git
cd poor-mans-jsrepl
npm i
npm run repl
```

Open your favourite editor and make a change inside the `index.js`.  
For example add a new line `hello ("<Your-Name-Here>")`  
*Save*

You should see your name printed in terminal.

You can uncomment the `// boom()` line and save to see how errors look like (should be red).

## Debugging

1. On command line `npm run repl:d`
2. Open Chrome or Chromium based browser (Brave, etc.)
3. Press `Ctrl+Shift+I` to open dev tools
4. You should see a green Node.js logo in the top left of the dev tools, Click it
5. That should open a new window and you can debug your code

Debugging works with future watch rebuilds too.
Just make sure that you let the script complete in the debugger window before saving your file again - otherwise the debugger won't restart.

## Why?

VSCode has amazing [Quokka.js](https://github.com/wallabyjs/quokka) which I used to use but VScode makes my laptop sweat so I prefer more lightweight editors.
After I spent 30mins trying to explain Sublime's Quokka plugin where to look for the Node.js binary managed by [nvm](https://github.com/nvm-sh/nvm) I gave up and made this.
