export default function tab() {
  const tablist = document.querySelector("[role='tablist']");
  const tabs = Array.from(tablist.querySelectorAll("button"));
  const panels = document.querySelectorAll("[role='tabpanel']");

  const LEFT_ARROW = "ArrowLeft";
  const RIGHT_ARROW = "ArrowRight";
  const DOWN_ARROW = "ArrowDown";

  tabs.forEach(function (tab, i) {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      let currentTab = tablist.querySelector("[aria-selected]");
      if (e.currentTarget !== currentTab) {
        switchTab(currentTab, e.currentTarget);
      }
    });

    tab.addEventListener("keydown", (e) => {
      const index = tabs.indexOf(e.currentTarget);

      if (e.key === DOWN_ARROW) {
        e.preventDefault();
        panels[i].focus();
      }

      if (e.key === LEFT_ARROW) {
        e.preventDefault();
        if (tabs[index - 1]) {
          switchTab(e.currentTarget, tabs[index - 1]);
        }
      }

      if (e.key === RIGHT_ARROW) {
        e.preventDefault();
        if (tabs[index + 1]) {
          switchTab(e.currentTarget, tabs[index + 1]);
        }
      }
    });
  });

  const switchTab = (oldTab, newTab) => {
    newTab.focus();
    newTab.removeAttribute("tabindex");
    newTab.setAttribute("aria-selected", "true");

    oldTab.removeAttribute("aria-selected");
    oldTab.setAttribute("tabindex", "-1");

    panels[tabs.indexOf(oldTab)].hidden = true;
    panels[tabs.indexOf(newTab)].hidden = false;
  };

}
