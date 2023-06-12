const base = "/Reversi";

export const path = (path: string) => {
  // pathが/から始まっていなかったら追加する
  if (!path.startsWith("/")) {
    path = `/${path}`;
  }
  // @ts-ignore-
  if (base === "/") {
    return path;
  }
  return `${base}${path}`;
};
