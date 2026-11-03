// Builds mailto links in the browser so the address never appears verbatim in
// the HTML that address harvesters scrape.
document.querySelectorAll(".js-mail").forEach((link) => {
  const { user, domain, subject } = link.dataset;
  if (!user || !domain) return;
  const address = `${user}@${domain}`;
  link.href = `mailto:${address}` + (subject ? `?subject=${encodeURIComponent(subject)}` : "");
  if (link.hasAttribute("data-show-address")) link.textContent = address;
});
