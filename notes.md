Useful Pieces - Notes
=====================

Vertical Radio Buttons
----------------------
The vertical radio buttons are something i put together to be able to pick
relations in my database lab. It requires `Bootstrap`, `Angular.Js`, and
`UI-Bootstrap`. From the backend perspective, you give it a collection of
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
require some css to work correctly. in both versions the text is centered to
begin with. the `list-group` version rounds the edges of all items (and is
sized to large for my tastes), while the `button-group` version doesn't
highlight active buttons correctly. the css to fix each of these issues is
included in useful-pieces.css

Dropdown Selectors
------------------
The dropdown selectors were made to be able to construct database statements
from a given set of options. They also require `Bootstrap`, `Angular.js`, and
`UI-Bootstrap`. From the javascript end, the dropdown selectors work much the
same way as the radio buttons: you provide a collection of options, and a
variable that gets set by the user. From the display perspective, you have an
element (whatever you like: i use links) that when clicked on drops down a list
of possible options to choose from (and typically replaces the clicked
element).

In the html, the dropdown consists of 3 parts: a wrapper, a toggle, and a menu.
the toggle is typically a `span` element so as not to break the line around the
text, with the class `dropdown`. the toggle is the visible element, with the
class `dropdown-toggle`, and the value you wish to display bound to it (`ng-bind`).
the menu is a wrapper (again, i'm using `span`) around a collection of items
representing the choices. the wrapper needs only the class `dropdown-menu`. for
the choices, there should be an `ng-click` attribute that either sets the
selection variable directly, or calls a function to do so. (i'm using
`ng-repeat` and `ng-bind` to pull values from the controller to populate the
menu list, but that's not integral to the dropdown)

// vim: set filetype=markdown :
