    const modal = document.getElementById("authModal");
    const closeBtn = document.querySelector(".close-btn");
    const cancelBtn = document.querySelector(".btn-cancel");

    document.querySelectorAll(".menu__link").forEach(link => {
    if (link.textContent.trim() === "Вход") {
    link.addEventListener("click", (e) => {
    e.preventDefault(); // не переходить на другую страницу
    modal.style.display = "flex";
});
}
});

    closeBtn.addEventListener("click", () => modal.style.display = "none");
    cancelBtn.addEventListener("click", () => modal.style.display = "none");

    window.addEventListener("click", (e) => {
    if (e.target === modal) {
    modal.style.display = "none";
}
});
