# cms

> cms

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## Adding UIkit to the project

install uikit module
> npm install uikit

create uikit plugin file
> touch plugins/uikit.js
```nodejs
import Vue from 'vue'

import UIkit from 'uikit/dist/js/uikit-core'  
import Icons from 'uikit/dist/js/uikit-icons'

UIkit.use(Icons)  
UIkit.container = '#__nuxt'

Vue.prototype.$uikit = UIkit  
``` 

setup nuxt.config.js
````nodejs
/** css block **/
css: [  
    'uikit/dist/css/uikit.min.css',
    'uikit/dist/css/uikit.css',
    '@assets/css/main.css'
  ],

/** Plugins to load before mounting the App */
plugins: [
{ src: '~/plugins/uikit.js', ssr: false }
],

/** install font */
link: [  
  { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Staatliches' }
]
```

create main.css 
> touch assets/css/main.css
```html
a {  
  text-decoration: none;
}
put here your styles...
````

restart server o npm run dev
