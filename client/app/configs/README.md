# Documentation of configs

This file is here to document configs of angular application.

## Route

This file contains all routes for client routing. The routing part is given by angular's `$routeProvider`. A table of routes indexes all routes providers for client routing.
Here is an example:

```js
var routes = [
    { link: '/path', templateUrl: 'views/file.html', controller: 'ctrl' }
];
```

The angular config binds a path with a template url and a controller. The default route is '/presentation', to change that, edit this line :

```js
$routeProvider.otherwise( '/presentation' );
```

## Translate

This file contains declaration of all languages availables in the application.

The angular config loads languages in the sub-directory 'languages' of 'app'.

All language files must be named like `<language>.lang.js` and must export a json with the definition of constants.

The translation part is provided by [angular-translate](https://angular-translate.github.io/).

You can check the documentation [here](https://angular-translate.github.io/docs/#/api).

### Append a language

- Create a file named `<language>.lang.js` in sub-directory 'languages' of 'app'

```js
module.exports = {
    ...
};
```

- Append your language in the languages' table

```js
var languages = ['en', 'fr', '<language>'];
```

- Rebuild the project with Gulp

```sh
$ gulp build
```

- It's done

#### Example

To append the german language, language symbol 'ge'.

- Create the file `ge.lang.js` in the directory 'languages'

```js
module.exports = {
    ...
};
```

- Now append it to the 'languages' variable.

```js
var languages = ['en', 'fr', 'ge'];
```

- Rebuild the project with Gulp

```sh
$ gulp build
```

- It's done

### Default language

The default language is english, in a future release it will set dynamicly with a request to the language of the Cozy's user.

To change the default language, change the line, with your language :

```js
$translateProvider.preferredLanguage( 'en' );
```

### Fallback language

The fallback language is english, in future a release it will set dynamicly with a request to the language of the Cozy's user.

To change the fallback language, change the line, with your language :

```js
$translateProvider.fallbackLanguage( 'en' );
```

### Sanitize strategy

This part concerns the sanitize strategy adopt by this application. It refers to the angular-translate's [documentation](https://angular-translate.github.io/docs/#/api/pascalprecht.translate.$translateSanitization), follow the previous link for see which value is the best for you.

To change the sanitize strategy change the line :

```js
$translateProvider.useSanitizeValueStrategy( 'sanitize' );
```