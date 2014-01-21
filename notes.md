Useful Pieces - Notes
=====================

Vertical Radio Buttons
----------------------
The vertical radio buttons are something i put together to be able to pick
relations in my database lab. It requires `Bootstrap`, `Angular.Js`, and
`Ui-Bootstrap`. From the backend perspective, you give it a collection of
choices, and it gives you back the user's choice. From the display perspective,
you've got a list of items you can click on, which become 'active' once
clicked. in the underlying html, there are two ways to go about this: you can
do it with a bootstrap `list-group` or with the `vertical-button-group`. They
require comparable amounts of html/css, so there's really not much difference
between them.

Both methods consist of a single `div` element wrapped around a single `li`
element (this isn't really set in stone, it's just what's worked for me). The
`li` element should have in its classes `btn` and `btn-default`. it should have
an Angular.js `ng-repeat` attribute (necessary to pull from the javascript, but
not for the radio-button effect). there should be an Angular.js `ng-model`
attribute pointing to the variable you wish to set with this radio button
group. there should be a `btn-radio` attribute with the value you wish to set
when this item is selected, and finally, (if you're using `ng-repeat`) there
should be an `ng-bind` attribute to display this item's value to the user.

The primary difference between the `list-group` version and the
`vertical-button-group` version is how it's displayed to the user. both methods
require 

Dropdown Selectors
------------------
- TODO

// vim: set filetype=markdown :
