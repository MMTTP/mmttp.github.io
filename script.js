document.addEventListener("DOMContentLoaded", function() {
    let feedbackSection = document.createElement("section");
    feedbackSection.id = "feedback";
    feedbackSection.innerHTML = `
        <h2>Give Your Feedback</h2>
        <form id="feedbackForm">
            <input type="text" id="name" placeholder="Your Name" required>
            <textarea id="comments" placeholder="Your Feedback" required></textarea>
            <button type="submit">Submit</button>
        </form>
        <div id="feedbackDisplay"></div>
    `;

    document.body.appendChild(feedbackSection);

    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let comments = document.getElementById("comments").value;

        let feedbackDisplay = document.getElementById("feedbackDisplay");
        let newFeedback = document.createElement("p");
        newFeedback.textContent = `${name}: ${comments}`;
        feedbackDisplay.appendChild(newFeedback);

        document.getElementById("feedbackForm").reset();
    });
});
