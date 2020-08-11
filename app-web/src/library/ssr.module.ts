// We do this check because the window is not available when rendering server-side
export const isBrowser = () => typeof window !== "undefined";
