export default {
  name: "Sam",
  url: "https://sammathis.com",
  title: "Sam · Assistant & VFX Editor",
  description:
    "Assistant and VFX editor for feature films, series and commercials. Selected credits and contact.",
  // The address is split so it never appears verbatim in the generated HTML;
  // assets/js/mail.js joins it in the browser.
  mailUser: "hello",
  mailDomain: "sammathis.com",
  mastodon: "https://mastodon.social/@samplue",
  crewUnited: "https://www.crew-united.com/en/Sam-Pluemacher_509691.html",
  year: new Date().getFullYear(),
  // The github.io preview lives under a path prefix and must not be indexed.
  preview: Boolean(process.env.PATH_PREFIX && process.env.PATH_PREFIX !== "/"),
};
