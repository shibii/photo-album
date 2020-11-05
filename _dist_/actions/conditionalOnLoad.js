export const conditionalOnLoad = (node, condition) => {
  const handleLoad = () => {
    if (condition(node))
      node.dispatchEvent(new CustomEvent("conditionalOnLoad"));
  };

  node.addEventListener("load", handleLoad);

  return {
    destroy() {
      node.removeEventListener("load", handleLoad);
    },
  };
};
