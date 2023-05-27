function saveModal() {
  const modal = bootstrap.Modal.getInstance(
    document.getElementById("addContentModal")
  );
  const data = modal.data;
  let tier_row = document.getElementById(data.tier);
  const tier_row_num = parseInt(data.tier.replace(/^tier-/, ""));
  const tier_row_name = tiers[tier_row_num % tiers.length].toLowerCase();

  const stretch = document.getElementById("flexSwitchCheckDefault").checked;
  const color = document.getElementById("colorInput").value;
  const files = toArray(document.getElementById("formFile").files);

  tier_row.firstChild.classList.remove(
    `tlm-bgcolor-${tier_row_name}`
  );
  tier_row.firstChild.style.backgroundColor = color;

  files.forEach((image) => {
    loadImageAndAddToDOM(image, stretch, (el) => {
      tier_row.children[1].appendChild(el);
    });
  });

  modal.hide();

  document.getElementById("formFile").value = null;
}
