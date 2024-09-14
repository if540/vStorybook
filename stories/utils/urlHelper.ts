export function parseUrl(url: string): string[] {
  const splitUrl = url.toString().split("a11y/");
  return splitUrl[1]?.split("/").map((item) => decodeURI(item)) || [];
}
