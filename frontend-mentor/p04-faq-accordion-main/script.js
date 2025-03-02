// document.querySelectorAll(".faq-explaination").forEach((e) => {
//     e.style.display = "none";
// });

document.querySelectorAll(".faq-explaination").forEach((e) => {
    e.classList.remove("show"); // Ensure it's hidden initially
});

document.querySelectorAll(".icon-minus").forEach((e) => {
    e.style.display = "none";
})

let faqHeading = document.querySelectorAll(".faq-heading");

faqHeading.forEach((heading) => {
    heading.addEventListener("click", function () {
        let explaination = this.nextElementSibling;
        let plusIcon = this.querySelector(".icon-plus");
        let minusIcon = this.querySelector(".icon-minus");

        if (explaination.classList.contains("show")) {
            explaination.classList.remove("show"); // Hide with animation
            plusIcon.style.display = "inline";
            minusIcon.style.display = "none";
        } else {
            explaination.classList.add("show"); // Show with animation
            plusIcon.style.display = "none";
            minusIcon.style.display = "inline";
        }
      

        // if (explaination.style.display == "none" || explaination.style.display === "") {
        //     explaination.style.display = "block";
        //     plusIcon.style.display = "none";
        //     minusIcon.style.display = "inline";
        // }
        // else {
        //     explaination.style.display = "none";
        //     plusIcon.style.display = "inline";
        //     minusIcon.style.display = "none";
        // }
    })
})