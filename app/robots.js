export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://todo.pintuweb.com/sitemap.xml",
    host: "https://todo.pintuweb.com",
  };
}
