export function displayHeroImage(image) {
  const heroImg = document.querySelector(".hero-image-container");
  const imageUrl = image.hero_banner.formats.large.url;
  const imageAlt = image.hero_banner_alt_text;

  heroImg.innerHTML = `<div>
                          <img src="${imageUrl}" class="hero-img" alt="${imageAlt}">
                        </div>`;
}
