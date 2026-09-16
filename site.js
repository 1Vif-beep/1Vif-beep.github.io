(() => {
  const p = window.PROFILE;
  const text = (id, value) => { document.getElementById(id).textContent = value || ""; };
  text("name", p.name); text("footer-name", p.name); text("english-name", p.englishName);
  text("institution", p.institution); text("department", p.department);
  text("research-note", p.researchNote); text("year", new Date().getFullYear());
  document.title = `${p.name} | 个人主页`;
  document.querySelector('meta[name="description"]').content = `${p.name}的个人主页。${p.institution}。${p.bio.join(" ")}`;
  document.querySelector(".monogram").textContent = p.name === "你的姓名" ? "姓" : Array.from(p.name)[0];
  for (const [id, tag, items] of [["bio", "p", p.bio], ["interests", "span", p.interests]]) {
    const parent = document.getElementById(id); parent.replaceChildren();
    items.forEach(value => { const item = document.createElement(tag); item.textContent = value; parent.append(item); });
  }
  if (p.email) {
    const a = document.createElement("a"); a.textContent = p.email; a.href = `mailto:${p.email}`;
    document.getElementById("email").replaceChildren(a);
    document.querySelector(".contact-link").href = a.href;
  }
  const links = [];
  if (p.github) links.push(["GitHub", `https://github.com/${encodeURIComponent(p.github)}`]);
  if (p.scholar && /^https:\/\//i.test(p.scholar)) links.push(["Google Scholar", p.scholar]);
  links.forEach(([label, url]) => { const a = document.createElement("a"); a.textContent = label; a.href = url; document.getElementById("socials").append(a); });
})();
