# Modal Component
Pure JS modal component.


## Usage
Surround your main content, including header & footer, with the following:
```html
<div class="main-body-content"></div>
```
This will allow that content to be blurred when a modal opens.

:page_facing_up: Note:

Do **not** add `max-width` to the `body` tag. That will cause the body to shift to the left when the screen is wider than the max-width.

### The Trigger
Include both the CSS and JS files from the dist folder.

Add the following to trigger a modal to open:
```html
<button data-modal-trigger="example-modal">Open modal</button>
```
:page_facing_up: Note:

The key here is the `data-modal-trigger`, and can be placed on any actionable html element.
It **must** contain a unique name and match that of the modal's `data-modal`.

### The Modal
Add the following:
```html
<div class="modal" data-modal="example-modal">
  <div class="modal-content" role="dialog" tabindex="0" aria-labelledby="title" aria-describedby="desc">
    <div class="modal-close">
      <button data-modal-close>
        <span class="a11y-hide">Close dialog</span>
      </button>
    </div>

    <h2 class="title">Example Model</h2>

    <p class="desc">This is an example modal.</p>

    <button>Click me, I do nothing!</button>
  </div>
</div>
```
:page_facing_up: Notes:

* You can add anything to the modal itself.
* To keep accessibility, keep the `title` and `desc` classes somewhere in the modal.
* You must keep a close button and it must contain `data-modal-close`.
  * It can be moved to an actual button in the lower part of the modal, inline with other buttons

### Styling
You can style the modal any way you wish in order to keep it in your theme. Below are a list of the classes and their purpose.

| Class Name        | Purpose
| :---------------- | :---------------
| main-body-content | content wrapper that can have a max-width, it is used to apply the blur effect behind the modal
| modal             | full screen background overlay and contains the modal itself
| modal-content     | the modal itself
| modal-close       | the close button
| a11y-hide         | used to visually hide elements but allow them to be used by screen readers
| title             | class used for the modal title (accessibility)
| desc              | class used for the modal description (accessibility)

These classes are used behind the scenes

| Class Name | Purpose
| :--------- | :---------------
| is-locked  | class used to lock the body when modals open
| modal-show | class used to display the modal and overlay
