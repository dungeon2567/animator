export default ({ app, router, store, Vue }) => {
  const map = new Map();

  router.beforeEach((to, from, next) => {
    for (let element of document.querySelectorAll("[data-flip-id]")) {
      map.set(
        element.getAttribute("data-flip-id"),
        {
          el: element,
          rect: element.getBoundingClientRect()
        }
      );
    }

    next();
  });

  router.afterEach(() => {
    Vue.nextTick(() => {
      for (let el of document.querySelectorAll("[data-flip-id]")) {
        let { el: otherEl, rect: first } = map.get(el.getAttribute("data-flip-id"));

        if (first && el != otherEl) {
          let last = el.getBoundingClientRect();

          let clone = el.cloneNode();

          clone.style.position = "absolute";
          clone.style.top = last.top + 'px';
          clone.style.left = last.left + 'px';
          clone.style.width = last.width + 'px';
          clone.style.height = last.height + 'px';

          document.body.appendChild(clone);

          el.style.visibility = "hidden";


          const deltaX = first.left - last.left;
          const deltaY = first.top - last.top;
          const deltaW = first.width / last.width;
          const deltaH = first.height / last.height;

          clone.animate(
            [
              {
                transformOrigin: "top left",
                transform: `
    translate(${deltaX}px, ${deltaY}px)
    scale(${deltaW}, ${deltaH})
  `
              },
              {
                transformOrigin: "top left",
                transform: "none"
              }
            ],
            {
              duration: 300,
              easing: "linear",
              fill: "both"
            }
          ).onfinish  = () => {
            el.style.visibility = "visible";

            document.body.removeChild(clone);
          };
        }
      }

      map.clear();
    });
  });

  /*
  Vue.directive("shared-transition", {
    bind(el, binding, vnode) {
      if (elements.has(binding.id)) {
        el.style.visibility = "hidden";

        let first = elements.get(binding.id).getBoundingClientRect();

        requestAnimationFrame(() => {
          let last = el.getBoundingClientRect();

          p.set(el, last);

          const deltaX = first.left - last.left;
          const deltaY = first.top - last.top;
          const deltaW = first.width / last.width;
          const deltaH = first.height / last.height;

          el.animate(
            [
              {
                transformOrigin: "top left",
                transform: `
    translate(${deltaX}px, ${deltaY}px)
    scale(${deltaW}, ${deltaH})
  `
              },
              {
                transformOrigin: "top left",
                transform: "none"
              }
            ],
            {
              duration: 300,
              easing: "ease-in-out",
              fill: "both"
            }
          );

          el.style.visibility = "visible";
        });
      } else {
        elements.set(binding.id, el);
      }
    },
    unbind(el, binding, vnode) {
      let other = elements.get(binding.id);

      if (other === el) {
        elements.delete(binding.id);
      } else if (other) {
        other.style.visibility = "hidden";

        let first = p.get(el);

        p.delete(el);

        requestAnimationFrame(() => {
          let last = other.getBoundingClientRect();

          const deltaX = first.left - last.left;
          const deltaY = first.top - last.top;
          const deltaW = first.width / last.width;
          const deltaH = first.height / last.height;

          other.animate(
            [
              {
                transformOrigin: "top left",
                transform: `
    translate(${deltaX}px, ${deltaY}px)
    scale(${deltaW}, ${deltaH})
  `
              },
              {
                transformOrigin: "top left",
                transform: "none"
              }
            ],
            {
              duration: 300,
              easing: "ease-in-out",
              fill: "both"
            }
          );

          other.style.visibility = "visible";
        });
      }
    }
  });
  */
};
