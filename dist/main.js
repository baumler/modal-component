const modal={set:Array.from(document.querySelectorAll("[data-modal]")),openTriggers:Array.from(document.querySelectorAll("[data-modal-trigger]")),closeTriggers:Array.from(document.querySelectorAll("[data-modal-close]")),focusable:"a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), *[tabindex], *[contenteditable], embed, object, area[href]",focused:"",bodyTop:0,init:()=>{modal.set.forEach(e=>{e.setAttribute("aria-hidden","true");const t=document.createElement("div");t.classList.add("modal-overlay"),e.dataset.modalOverlayClick&&"true"===e.dataset.modalOverlayClick&&(t.setAttribute("tabIndex","0"),t.setAttribute("role","button"),t.setAttribute("aria-pressed","false"),t.addEventListener("click",function(e){e.target===t&&modal.hide()}),t.addEventListener("keydown",function(e){"Enter"===e.code&&e.target.setAttribute("aria-pressed","true")}),t.addEventListener("keyup",function(e){"Enter"===e.code&&(e.target.setAttribute("aria-pressed","false"),modal.hide())})),e.appendChild(t)}),modal.openTriggers.forEach(e=>{e.addEventListener("click",function(e){e.preventDefault();const t=this.dataset.modalTrigger;modal.el=modal.set.find(function(e){return e.dataset.modal===t}),modal.show()})}),modal.closeTriggers.forEach(e=>{e.addEventListener("click",function(e){e.preventDefault(),modal.hide()})})},show:()=>{modal.setBodyScroll();var e=document.body.getBoundingClientRect().width;document.body.style.width=`${e}px`,document.querySelector("html").classList.add("is-locked");const t=document.querySelector(".page-container");(t||document.body).setAttribute("aria-hidden","true"),modal.focused=document.activeElement,modal.el.setAttribute("aria-hidden","false"),modal.el.classList.add("modal-show"),modal.focusableChildren=Array.from(modal.el.querySelectorAll(modal.focusable)),modal.focusableChildren[0].focus(),modal.el.onkeydown=function(e){modal.trap(e)}},hide:()=>{document.querySelector("html").classList.remove("is-locked");const e=document.querySelector(".page-container");(e||document.body).setAttribute("aria-hidden","false"),modal.clearBodyScroll(),modal.el.setAttribute("aria-hidden","true"),modal.el.classList.remove("modal-show"),modal.focused.focus()},trap:e=>{var t,o;"Esc"===e.code&&modal.hide(),"Tab"===e.code&&(o=document.activeElement,t=modal.focusableChildren.length,o=modal.focusableChildren.indexOf(o),e.shiftKey?0===o&&(e.preventDefault(),modal.focusableChildren[t-1].focus()):o===t-1&&(e.preventDefault(),modal.focusableChildren[0].focus()))},setBodyScroll:()=>{const e=document.querySelector("header");var t=window.pageYOffset;modal.bodyTop=t,"fixed"===e.style.position&&(e.style.top=`${t}px`),document.body.style.top=`-${t}px`},clearBodyScroll:()=>{const e=document.querySelector("header");document.body.style.top="0","fixed"===e.style.position&&(e.style.top="0"),window.scrollTo({top:modal.bodyTop})}};modal.init();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibW9kYWwiLCJzZXQiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvcGVuVHJpZ2dlcnMiLCJjbG9zZVRyaWdnZXJzIiwiZm9jdXNhYmxlIiwiZm9jdXNlZCIsImJvZHlUb3AiLCJpbml0IiwiZm9yRWFjaCIsIm1vZGFsSXRlbSIsInNldEF0dHJpYnV0ZSIsImJhY2tncm91bmQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsIm1vZGFsT3ZlcmxheUNsaWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJoaWRlIiwiY29kZSIsImFwcGVuZENoaWxkIiwidHJpZ2dlciIsInByZXZlbnREZWZhdWx0IiwibmFtZSIsInRoaXMiLCJtb2RhbFRyaWdnZXIiLCJlbCIsImZpbmQiLCJ2YWx1ZSIsInNob3ciLCJzZXRCb2R5U2Nyb2xsIiwiYm9keVdpZHRoIiwiYm9keSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwic3R5bGUiLCJxdWVyeVNlbGVjdG9yIiwiY29udGFpbmVyIiwiYWN0aXZlRWxlbWVudCIsImZvY3VzYWJsZUNoaWxkcmVuIiwiZm9jdXMiLCJvbmtleWRvd24iLCJ0cmFwIiwicmVtb3ZlIiwiY2xlYXJCb2R5U2Nyb2xsIiwidG90YWxPZkZvY3VzYWJsZSIsImZvY3VzZWRJbmRleCIsImN1cnJlbnRGb2N1cyIsImxlbmd0aCIsImluZGV4T2YiLCJzaGlmdEtleSIsImhlYWRlciIsInNjcm9sbCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwicG9zaXRpb24iLCJ0b3AiLCJzY3JvbGxUbyJdLCJtYXBwaW5ncyI6IkFBSUEsTUFBQUEsTUFBQSxDQUNBQyxJQUFBQyxNQUFBQyxLQUFBQyxTQUFBQyxpQkFBQSxpQkFDQUMsYUFBQUosTUFBQUMsS0FBQUMsU0FBQUMsaUJBQUEseUJBQ0FFLGNBQUFMLE1BQUFDLEtBQUFDLFNB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QUFvQixXQUNBSixFQUFBaEIsTUFBQXFCLE9BQUFKLE9BR0F0RCxTQUFBa0MsS0FBQUcsTUFBQXFCLFFBQUFKLE9BTUFSLGdCQUFBLEtBQ0EsTUFBQU8sRUFBQXJELFNBQUFzQyxjQUFBLFVBQ0F0QyxTQUFBa0MsS0FBQUcsTUFBQXFCLElBQUEsSUFFQSxVQUFBTCxFQUFBaEIsTUFBQW9CLFdBQ0FKLEVBQUFoQixNQUFBcUIsSUFBQSxLQUdBSCxPQUFBSSxTQUFBLENBQ0FELElBQUE5RCxNQUFBVSxZQUlBVixNQUFBVyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9jb2RlcGVuLmlvL2hpZGFuaWVsbGUvZnVsbC9NeWdnSkogLS0gZm9yIGhlbHAgd2l0aCBmb2N1cyB0cmFwcGluZyBvbiBtb2RhbHNcbi8qKlxuICogY3JlYXRlIG1vZGFsIG9iamVjdCB3aXRoIGFsbCBtb2RhbCBpbmZvLCBzZXQgdGFyZ2V0IGVsZW1lbnRzLCBhbmQgbGlzdCBmb2N1cyBlbGVtZW50c1xuICovXG5jb25zdCBtb2RhbCA9IHtcbiAgICBzZXQ6IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWxdJykpLFxuICAgIG9wZW5UcmlnZ2VyczogQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC10cmlnZ2VyXScpKSxcbiAgICBjbG9zZVRyaWdnZXJzOiBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1vZGFsLWNsb3NlXScpKSxcbiAgICBmb2N1c2FibGU6IFwiYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksICpbdGFiaW5kZXhdLCAqW2NvbnRlbnRlZGl0YWJsZV0sIGVtYmVkLCBvYmplY3QsIGFyZWFbaHJlZl1cIixcbiAgICBmb2N1c2VkOiAnJyxcbiAgICBib2R5VG9wOiAwXG59O1xuXG4vKipcbiAqIGluaXRpYWxpemUgdGhlIG1vZGFsIGFuZCBzZXQgdXAgdGhlIGNsaWNrIGhhbmRsZXJzXG4gKi9cbm1vZGFsLmluaXQgPSAoKSA9PiB7XG4gICAgbW9kYWwuc2V0LmZvckVhY2gobW9kYWxJdGVtID0+IHtcbiAgICAgICAgbW9kYWxJdGVtLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vdmVybGF5Jyk7XG5cbiAgICAgICAgaWYgKG1vZGFsSXRlbS5kYXRhc2V0Lm1vZGFsT3ZlcmxheUNsaWNrICYmIG1vZGFsSXRlbS5kYXRhc2V0Lm1vZGFsT3ZlcmxheUNsaWNrID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQuc2V0QXR0cmlidXRlKCd0YWJJbmRleCcsICcwJyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCAnZmFsc2UnKTtcblxuICAgICAgICAgICAgLy8gb3ZlcmxheSBldmVudHNcbiAgICAgICAgICAgIGJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gYmFja2dyb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuY29kZSAhPT0gJ0VudGVyJykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1wcmVzc2VkJywgJ3RydWUnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5jb2RlICE9PSAnRW50ZXInKSByZXR1cm47XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLXByZXNzZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZGFsSXRlbS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcbiAgICB9KTtcblxuICAgIG1vZGFsLm9wZW5UcmlnZ2Vycy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5kYXRhc2V0Lm1vZGFsVHJpZ2dlcjtcbiAgICAgICAgICAgIG1vZGFsLmVsID0gbW9kYWwuc2V0LmZpbmQoZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuZGF0YXNldC5tb2RhbCA9PT0gbmFtZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbW9kYWwuc2hvdygpO1xuICAgICAgICB9KVxuICAgIH0pO1xuXG4gICAgbW9kYWwuY2xvc2VUcmlnZ2Vycy5mb3JFYWNoKHRyaWdnZXIgPT4ge1xuICAgICAgICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbW9kYWwuaGlkZSgpO1xuICAgICAgICB9KVxuICAgIH0pO1xufTtcblxuLyoqXG4gKiBjYXB0dXJlIHRoZSBjdXJyZW50IGZvY3VzZWQgZWxlbWVudCBzbyB0aGF0IHlvdSBjYW4gc2V0IGZvY3VzIGJhY2sgdG8gaXQgd2hlbiB5b3UgY2xvc2UgdGhlIG1vZGFsXG4gKiBhZGQgYSBjbGFzcyB0byB0aGUgYm9keSB0byBzdHlsZSBmb3IgbW9kYWxcbiAqIGhpZGUgdGhlIHJlc3Qgb2YgdGhlIGNvbnRlbnRcbiAqIHNldCBhcmlhIGhpZGRlbiB0byBmYWxzZVxuICogYWRkIGNsYXNzIHRvIG1vZGFsXG4gKiBzZXQgZm9jdXMgdG8gZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgZnJvbSBsaXN0IGNyZWF0ZWQgaW4gaW5pdCBmdW5jdGlvblxuICovXG5tb2RhbC5zaG93ID0gKCkgPT4ge1xuICAgIG1vZGFsLnNldEJvZHlTY3JvbGwoKTtcbiAgICBjb25zdCBib2R5V2lkdGggPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUud2lkdGggPSBgJHtib2R5V2lkdGh9cHhgO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKS5jbGFzc0xpc3QuYWRkKCdpcy1sb2NrZWQnKTtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZS1jb250YWluZXInKTtcblxuICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfVxuXG4gICAgbW9kYWwuZm9jdXNlZCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgbW9kYWwuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgIG1vZGFsLmVsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXNob3cnKTtcbiAgICBtb2RhbC5mb2N1c2FibGVDaGlsZHJlbiA9IEFycmF5LmZyb20obW9kYWwuZWwucXVlcnlTZWxlY3RvckFsbChtb2RhbC5mb2N1c2FibGUpKTtcbiAgICBtb2RhbC5mb2N1c2FibGVDaGlsZHJlblswXS5mb2N1cygpO1xuICAgIG1vZGFsLmVsLm9ua2V5ZG93biA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgbW9kYWwudHJhcChlKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIHJlbW92ZSBib2R5IGNsYXNzZXMgdGhhdCB3ZXJlIGFkZGVkXG4gKiByZXNldCBhcmlhIGhpZGRlbiB2YWx1ZXMgZnJvbSBjb250YWluZXJcbiAqIHJlc2V0IGFyaWEgaGlkZGVuIHZhbHVlcyBvbiBtb2RhbFxuICogcmVtb3ZlIHNob3cgY2xhc3MgZnJvbSBtb2RhbFxuICogc2V0IGZvY3VzIHRvIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50XG4gKi9cbm1vZGFsLmhpZGUgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWxvY2tlZCcpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWNvbnRhaW5lcicpO1xuXG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICAgIH1cblxuICAgIG1vZGFsLmNsZWFyQm9keVNjcm9sbCgpO1xuICAgIG1vZGFsLmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIG1vZGFsLmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXNob3cnKTtcbiAgICBtb2RhbC5mb2N1c2VkLmZvY3VzKCk7XG59O1xuXG4vKipcbiAqIGlmIGtleSBpcyBlc2MsIGNsb3NlIHRoZSBtb2RhbFxuICogaWYga2V5IGlzIHRhYlxuICogZ2V0IHRoZSBjdXJyZW50IGZvY3VzXG4gKiBnZXQgdGhlIHRvdGFsIGZvY3VzYWJsZSBpdGVtcyB0byBmaWx0ZXIgdGhyb3VnaCB0aGVtIGxhdGVyXG4gKiBnZXQgdGhlIGluZGV4IGZyb20gdGhlIGZvY3VzYWJsZSBpdGVtcyBsaXN0IG9mIHRoZSBjdXJyZW50IGZvY3VzZWQgaXRlbVxuICogaWYga2V5IGlzIHNoaWZ0IHRhYiAoYmFja3dhcmRzKSBhbmQgeW91J3JlIGF0IHRoZSBmaXJzdCBmb2N1c2FibGUgaXRlbSwgc2V0IGZvY3VzIHRvIHRoZSBsYXN0IGZvY3VzYWJsZSBpdGVtXG4gKiBpZiBub3Qgc2hpZnQgdGFiIGFuZCB0aGUgY3VycmVudCBmb2N1c2VkIGl0ZW0gaXMgdGhlIGxhc3QgaXRlbSwgc2V0IGZvY3VzIHRvIHRoZSBmaXJzdCBmb2N1c2FibGUgaXRlbVxuICovXG5tb2RhbC50cmFwID0gKGUpID0+IHtcbiAgICBpZiAoZS5jb2RlID09PSAnRXNjJykge1xuICAgICAgICBtb2RhbC5oaWRlKCk7XG4gICAgfVxuXG4gICAgaWYgKGUuY29kZSA9PT0gXCJUYWJcIikge1xuICAgICAgICBsZXQgY3VycmVudEZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgICAgbGV0IHRvdGFsT2ZGb2N1c2FibGUgPSBtb2RhbC5mb2N1c2FibGVDaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgIGxldCBmb2N1c2VkSW5kZXggPSBtb2RhbC5mb2N1c2FibGVDaGlsZHJlbi5pbmRleE9mKGN1cnJlbnRGb2N1cyk7XG5cbiAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgIGlmIChmb2N1c2VkSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbW9kYWwuZm9jdXNhYmxlQ2hpbGRyZW5bdG90YWxPZkZvY3VzYWJsZSAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZm9jdXNlZEluZGV4ID09PSB0b3RhbE9mRm9jdXNhYmxlIC0gMSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5mb2N1c2FibGVDaGlsZHJlblswXS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBzZXRzIGJvZHkgdG9wIHNvIGl0IGRvZXNuJ3Qgc2Nyb2xsIGJhY2sgdG8gdGhlIHRvcCBvZiB0aGUgcGFnZSB3aGVuIG9wZW5pbmcgYSBtb2RhbFxuICovXG5tb2RhbC5zZXRCb2R5U2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuICAgIGNvbnN0IHNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBtb2RhbC5ib2R5VG9wID0gc2Nyb2xsO1xuXG4gICAgaWYgKGhlYWRlci5zdHlsZS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJykge1xuICAgICAgICBoZWFkZXIuc3R5bGUudG9wID0gYCR7c2Nyb2xsfXB4YCAvLyBPTkxZIElGIEhFQURFUiBJUyBGSVhFRFxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gYC0ke3Njcm9sbH1weGA7XG59XG5cbi8qKlxuICogY2xlYXIgYm9keSB0b3AgYW5kIHNjcm9sbHMgdG8gdGhlIG9yaWdpbmFsIGxvY2F0aW9uXG4gKi9cbm1vZGFsLmNsZWFyQm9keVNjcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9ICcwJztcblxuICAgIGlmIChoZWFkZXIuc3R5bGUucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgICAgaGVhZGVyLnN0eWxlLnRvcCA9ICcwJzsgLy8gT05MWSBJRiBIRUFERVIgSVMgRklYRURcbiAgICB9XG5cbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IG1vZGFsLmJvZHlUb3BcbiAgICB9KTtcbn1cblxubW9kYWwuaW5pdCgpO1xuIl19