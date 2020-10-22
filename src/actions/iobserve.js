export const iobserve = (node, { onIntersect, delay, once, update }) => {
  // callback function must be present
  if (!onIntersect || typeof onIntersect !== "function") {
    throw new Error("iobserver actions intersect parameter must be a function");
  }
  // delay parameter must be number if present
  if (delay && typeof delay !== "number") {
    throw new Error("iobserver actions delay parameter must be a number");
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting === true) {
        onIntersect();
        if (once) observer.unobserve(node);
      }
    },
    { threshold: [0, 1] }
  );

  //allow the page to flow the content before triggering intersections
  setTimeout(
    () => {
      observer.observe(node);
    },
    delay ? delay : 100
  );

  return {
    update: (update) => {
      observer.unobserve(node);
      observer.observe(node);
    },
    destroy: () => observer.unobserve(node),
  };
};
