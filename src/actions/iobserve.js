export const iobserve = (
  node,
  { onIntersect, delay, cooldown, once, update }
) => {
  // callback function must be present
  if (!onIntersect || typeof onIntersect !== "function") {
    throw new Error("iobserver actions intersect parameter must be a function");
  }
  // delay parameter must be number if present
  if (delay && typeof delay !== "number") {
    throw new Error("iobserver actions delay parameter must be a number");
  }

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting === true) {
      observer.unobserve(node);
      onIntersect();
      if (!once)
        setTimeout(
          () => {
            observer.observe(node);
          },
          cooldown ? cooldown : 0
        );
    }
  });

  //allow the page to flow the content before triggering intersections
  setTimeout(
    () => {
      observer.observe(node);
    },
    delay ? delay : 0
  );

  return {
    update: (update) => {
      observer.unobserve(node);
      observer.observe(node);
    },
    destroy: () => observer.unobserve(node),
  };
};
