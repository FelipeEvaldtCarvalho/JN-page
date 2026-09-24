const observer =
  typeof IntersectionObserver !== "undefined"
    ? new IntersectionObserver(
        (entries) => {
          entries.forEach(({ isIntersecting, target }) => {
            if (!isIntersecting) return;
            target.classList.add("is-visible");
            observer.unobserve(target);
          });
        },
        { rootMargin: "0px 0px -10% 0px" }
      )
    : null;

export const reveal = {
  mounted(el) {
    if (!observer) return;
    el.classList.add("reveal");
    observer.observe(el);
  },
  unmounted(el) {
    observer?.unobserve(el);
  },
};
