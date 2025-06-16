document.addEventListener("DOMContentLoaded", () => {
  // Load sidebar
  const sidebarContainer = document.getElementById("sidebar-container");
  if (sidebarContainer) {
    fetch("layout/sidebar.html")
      .then((res) => res.text())
      .then((html) => {
        sidebarContainer.innerHTML = html;
      })
      .catch((err) => console.error("Sidebar failed to load:", err));
  }

});
