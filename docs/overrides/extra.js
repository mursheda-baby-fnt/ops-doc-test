document.addEventListener("DOMContentLoaded", function () {
    let printButton = document.createElement("button");
    printButton.innerText = "Export to PDF";
    printButton.style.position = "fixed";
    printButton.style.bottom = "60px";
    printButton.style.right = "20px";
    printButton.style.padding = "10px 15px";
    printButton.style.background = "#007bff";
    printButton.style.color = "#fff";
    printButton.style.border = "none";
    printButton.style.cursor = "pointer";
    printButton.style.borderRadius = "5px";
    printButton.style.zIndex = "1000";

    document.body.appendChild(printButton);

    printButton.addEventListener("click", function () {
        window.print();
    });

    let shareButton = document.createElement("button");
    shareButton.innerText = "Share as PDF";
    shareButton.style.position = "fixed";
    shareButton.style.bottom = "110px";
    shareButton.style.right = "20px";
    shareButton.style.padding = "10px 15px";
    shareButton.style.background = "#28a745";
    shareButton.style.color = "#fff";
    shareButton.style.border = "none";
    shareButton.style.cursor = "pointer";
    shareButton.style.borderRadius = "5px";
    shareButton.style.zIndex = "1000";

    document.body.appendChild(shareButton);

    // Function to handle Share as PDF
    shareButton.addEventListener("click", function () {
        let currentURL = window.location.href + "?print-pdf";

        if (navigator.share) {
            navigator.share({
                title: document.title,
                url: currentURL
            }).catch(console.error);
        } else {
            prompt("Copy the link to share as PDF:", currentURL);
        }
    });
});
