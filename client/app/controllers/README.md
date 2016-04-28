# Documentation of controllers

This documentation provides some information about controllers of this application.

## navigation

This part porvides information about the internal functionnment of the controller navigation.

First, the menu is provide programaticly, for the moment is wroten in hard but in a future release it is given by request.

The form of the menu is here:

```js
$scope.menu = [
    { link: '<route>', translate: '<translation>' }
];
```

To add a menu entry add an entry in this array.

### Modify the default entry set

To change the default modify the line below:

```js
$scope.setActive( '/presentation' );
```

Set the route that is the default route in argument.

## education

## experiences

## hobbies

## presentation

## skills