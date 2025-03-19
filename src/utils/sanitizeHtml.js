import DOMPurify from "dompurify";

export const sanitizeHtml = (html) => {
  DOMPurify.addHook("afterSanitizeAttributes", (node) => {
    if (
      node.tagName === "A" &&
      node.getAttribute("data-target")?.includes("blankPage")
    ) {
      node.setAttribute("target", "_blank");
      node.setAttribute("rel", "noopener noreferrer");
    }
  });
  return DOMPurify.sanitize(html);
};
