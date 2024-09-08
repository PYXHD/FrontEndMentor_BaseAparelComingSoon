const MailValidation = {
    mailInput: document.getElementById("input"),
    submitBtn: document.getElementById("submit"),
    errorMessage: document.getElementById("errorMessage"),
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,

    validation() {
        this.submitBtn.addEventListener("click", () => {
            if (this.regex.test(this.mailInput.value)) {
                alert("Vous êtes inscrit!");
                this.errorMessage.style.visibility = "hidden";
                this.mailInput.classList.remove("error");
                this.mailInput.value = "";
            } else {
                this.errorMessage.style.visibility = "visible";
                this.mailInput.classList.add("error");
            }
        })
    },

    init() {
        this.validation()
    }
}

MailValidation.init();