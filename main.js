(async () => {
    const response = await fetch("https://750d.netlify.app/test.json");
    const data = await response.json();

    const box = document.createElement("div");
    box.style.position = "fixed";
    box.style.bottom = "10px";
    box.style.left = "50%";
    box.style.transform = "translateX(-50%)";
    box.style.backgroundColor = "rgba(0, 0, 0, 0.05)";
    box.style.color = "#000";
    box.style.padding = "10px 20px";
    box.style.borderRadius = "10px";
    box.style.fontSize = "14px";
    box.style.opacity = "0.2";
    box.style.zIndex = "99999";
    box.style.pointerEvents = "none";
    box.style.maxWidth = "90%";
    box.style.textAlign = "center";
    box.innerText = "Savolni belgilang...";
    document.body.appendChild(box);

    document.addEventListener("mouseup", () => {
        const selectedText = window.getSelection().toString().trim().toLowerCase();

        if (!selectedText) return;

        let foundAnswer = null;

        if (data[selectedText]) {
            foundAnswer = data[selectedText];
        } else {
            for (const key in data) {
                if (key.toLowerCase().includes(selectedText)) {
                    foundAnswer = data[key];
                    break;
                }
            }
        }

        if (foundAnswer) {
            box.innerText = "Javob: " + foundAnswer;
        } else {
            box.innerText = "Javob topilmadi";
        }
    });
})();
