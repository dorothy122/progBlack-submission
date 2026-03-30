https://www.w3schools.com/whatis/whatis_vue.asp  - examples

https://www.youtube.com/watch?v=nhBVL41-_Cw - good video that explains its purpose

https://vuejs.org/guide/introduction.html - tutorial to create a vue application using the terminal#
- need to do npm install node.js first
- after doing npm run dev, run the local url to see the application running, then stop the server (ctrl c) to continue with the tutorial.


https://www.w3schools.com/vue/vue_intro.php
- W3schools tutorial
- When running the html file, just open it as normal from the folder




### ENTRY 2

https://www.w3schools.com/vue/vue_directives.php
- In the Vue directives page, in the example about v-bind, add text between the <div> tags for the v-bind in the app div to see the application of the v-bind.
- the next pages explain further and give examples for the rest of the vue drectives given:
    - v-bind example help:
        - the property size should have values like '20px', '2em', '150%', 'large'. The 2nd example given that adds 'px' means that you could just write say 20 instead of '20px'. Could do the same with + '%' or + 'em'
        - add the size property into the app data() section (where message and vueClass where previously given values)

        - for applying the background color, bgVal should just be a number. Look into the hsl format to know what colour = what value. Can chane this to hex format, or rgb format but removing the hsl(...) and just writing { backgroundColor: bgVal } and then writing bgVal in whatever format you want in the data() section

        - CLICK TRY IT YOURSELF TO SEE THE EXAMPLE USE IN FULL 



- try to combine all examples together onto one html page to help understand what lines are needed for each command. 
- After completeing the first section of the tutorial (up to sclaing up, try to split your html file up into an html file, css file, and a javascript file)