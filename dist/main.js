
// https://codepen.io/hidanielle/full/MyggJJ -- for help with focus trapping on modals
/**
 * create modal object with all modal info, set target elements, and list focus elements
 */
const modal = {
  set: Array.from(document.querySelectorAll('[data-modal]')),
  openTriggers: Array.from(document.querySelectorAll('[data-modal-trigger]')),
  closeTriggers: Array.from(document.querySelectorAll('[data-modal-close]')),
  focusable: "a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex], *[contenteditable], embed, object, area[href]",
  focused: '',
  bodyTop: 0
};

/**
 * initialize the modal, find the focusable children elements and set up the click handlers
 */
modal.init = () => {
  modal.set.forEach(modal => {
    modal.setAttribute('aria-hidden', 'true');
  });
  modal.openTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      let name = this.dataset.modalTrigger;
      modal.el = modal.set.find(function(value) {
        return value.dataset.modal == name;
      });
      modal.show();
    })
  });
  modal.closeTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      modal.hide();
    })
  });
};

/**
 * capture the current focused element so that you can set focus back to it when you close the modal
 * add a class to the body to style for modal
 * hide the rest of the content
 * set aria hidden to false
 * add class to modal
 * set focus to first focusable element from list created in init function
 */
modal.show = () => {
  modal.setBodyScroll();
  document.querySelector('html').classList.add('is-locked');
  const content = document.querySelector('.main-body-content');
  if (content) {
    content.setAttribute('aria-hidden', true);
  } else {
    document.body.setAttribute('aria-hidden', true);
  }
  modal.focused = document.activeElement;
  modal.el.setAttribute('aria-hidden', 'false');
  modal.el.classList.add('modal-show');
  modal.focusableChildren = Array.from(modal.el.querySelectorAll(modal.focusable));
  modal.focusableChildren[0].focus();
  modal.el.onkeydown = function(e) {
    modal.trap(e);
  }
};

/**
 * remove body classes that were added
 * reset aria hidden values from container
 * reset aria hidden values on modal
 * remove show class from modal
 * set focus to previously focused element
 */
modal.hide = () => {
  document.querySelector('html').classList.remove('is-locked');
  const content = document.querySelector('.main-body-content');
  if (content) {
    content.setAttribute('aria-hidden', false);
  } else {
    document.body.setAttribute('aria-hidden', false);
  }
  modal.clearBodyScroll();
  modal.el.setAttribute('aria-hidden', 'true');
  modal.el.classList.remove('modal-show');
  modal.focused.focus();
};

/**
 * if key is esc, close the modal
 * if key is tab
 * get the current focus
 * get the total focusable items to filter through them later
 * get the index from the focusable items list of the current focused item
 * if key is shift tab (backwards) and you're at the first focusable item, set focus to the last focusable item
 * if not shift tab and the current focused item is the last item, set focus to the first focusable item
 */
modal.trap = (e) => {
  if (e.which == 27) {
    modal.hide();
  }
  if (e.which == 9) {
    let currentFocus = document.activeElement;
    let totalOfFocusable = modal.focusableChildren.length;
    let focusedIndex = modal.focusableChildren.indexOf(currentFocus);
    if (e.shiftKey) {
      if (focusedIndex === 0) {
        e.preventDefault();
        modal.focusableChildren[totalOfFocusable - 1].focus();
      }
    } else {
      if (focusedIndex == totalOfFocusable - 1) {
        e.preventDefault();
        modal.focusableChildren[0].focus();
      }
    }
  }
};

/**
 * sets body top so it doesn't scroll back to the top of the page when opening a modal
 */
modal.setBodyScroll = () => {
  let scroll = window.pageYOffset;
  modal.bodyTop = scroll;
  document.body.style.top = `-${scroll}px`;
}

/**
 * clear body top and scrolls to the original location
 */
modal.clearBodyScroll = () => {
  document.body.style.top = '0';
  window.scrollTo({
    top: modal.bodyTop
  });
}

modal.init();
