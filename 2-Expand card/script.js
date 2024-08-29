const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeEventListener();
        panel.classList.add("active");
    });
});

const removeEventListener = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};