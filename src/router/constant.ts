export const REDIRECT_NAME = "Redirect";

export const PARENT_LAYOUT_NAME = "ParentLayout";

export const PAGE_NOT_FOUND_NAME = "PageNotFound";

export const LAYOUT = () => import("");

export const getParentLayout = (name?: string) => {
  return () => {
    new Promise((resolve) => {
      resolve({
        name: name || PARENT_LAYOUT_NAME,
      });
    });
  };
};
