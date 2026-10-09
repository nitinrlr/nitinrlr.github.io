//https://web3forms.com/

document.getElementById("contact-form").onsubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", "bdffea50-bf91-4981-aa08-9f10856ef14a");

    const result = document.getElementById("result");
    result.classList.remove("success");
    result.classList.remove("error");
    result.innerHTML = "Sending...";

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            result.innerHTML = "Thanks! Your message was sent.";
            result.classList.add("success");
            form.reset();
        } else {
            result.innerHTML = "Error: " + data.message;
            result.classList.add("error");
        }
    } catch (error) {
        result.innerHTML = "Sorry, we couldn't send your message. Please try again.";
        result.classList.add("error");
    }
};
