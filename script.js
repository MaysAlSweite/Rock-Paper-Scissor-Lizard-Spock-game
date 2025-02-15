document.getElementById("rulesBtn").addEventListener("click", () => {
    document.getElementById("rulesScreen").classList.add("display");
});

document.getElementById("closeBtn").addEventListener("click", () => {
    document.getElementById("rulesScreen").classList.remove("display");
}
);