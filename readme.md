# How to do it
Great, you have decided to work on your site again after, I'm guessing... 8 months?  Anyway, everything is self contained in this repo.  Clone it down to a machinea and a directory that has Node.js and NPM.

First up, run the command "npm install".  

You can do that a LOT of times, because that will read the package.json file and install a bunch of dependencies.  That package.json also defines a lot of "user scripts" that will use those dependencies to build and serve this dev setup.

In fact, after you install everything, use "npm run dev" to run the dev site.  That will watch the typescript directory (which is where you have web components on the lit framework) and compile the components into JS, the scss directory (where you have SASS and in particuar the bootstrap sass) that compiles the SCSS into css, and set the web server to run with the _site folder as the root, and refresh the browser for you (Edge or Chrome) each time you save changes to one of those files. 

Now you can fuck up your code REALLY QUICKLY and AUTOMATICALLY


# Intro To Learning
## 2021-10-11
Copying the lit starter pack for TypeScript, then reading the TypeScript tooling overview, then getting made at all the shit in the world that has happened in the past 5 years while I've been doing stupid ATO documentation, I got my barebones setup.

1. Create a directory for the project
2. Install NPM
3. Create a tsconfig.json file based on example from typescriptlang.org
4. Replace that safe one with info from the lit ts starter kit
5. Install typescript from NPM (typescript tooling in 5 minutes)
6. Read up on --watch and add that section to the tsconfig.json file
7. Create a package.json for NPM
8. Add the wds/dev-server for NPM
9. Add some 'scripts' in the package.json (I guess these are shortcuts for NPM commands?)
10. run 'npm install' to read the package file and download a bunch of crap
11. Oopsies, better do a .gitignore to ignore the 3+Gb of NPM files
12. Try out the package.json script for build and serve  Both will watch
13. Write up this readme for lucky #13


# Reorganize the project.
Now I'm going to see about reconfiguring the project to put the output stuff in a "_build" folder. I'm thinking the build folder will contain the actual website.  I'll need to change how the compiled output works, and change where the website serves from.

1. Create the _build filder
2. Copy the website files into it, leaving all the config
    1. Leave all the configuration in the root
    2. Leave all the "coding" in the 'src' folder
    3. Putting all the good good outpu in the '_build'
3. Edit the tsconfig.json to change the compile output directory
4. Edit the package.json, update the script for the wds server with --root-dir flag

## Futzing with NPM scripts.
It isn't really a problem, but right now I am runnig the 'watch' script in one terminal, and the 'serve' in another.  I'd like to make a new script called 'dev' that does both of those things.

1. edit package.json to create a new script
2. new script calls other items...
3. So I had to install ANOTHER npm package called "concurrently" to do this, because that made more sense than installing a package specific to node.

## Bootstap?
Why not, it is okay by me.  So that is bootstrap, the bootstrap icons, and something called popper.js.  Then I need a sass compiler, which now requires something call PostCSS and autoprefixer.  Now I get to add new scripts.  

This has also led me to discover _build is a bad name, so I'm changing it to _site.  Changing the tsconfig.json and package.json.

Then the CSS scripts use a npm-run-all instead of concurrently, and I like that syntax better, so I removed concurrently.

There was a LOT of reading the notes for the PostCSS cli and autoprefix tool.  I'm not sure of the usefulness of it, but okay



# TODO list

1. Limit the amount of bootstrap crap you included
2. Handwrite enough CSS to load the page without anything else