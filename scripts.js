document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const commentList = document.getElementById("comment-list");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (firstName === "" || lastName === "" || message === "") {
      errorMessage.style.display = "block";
      return;
    } else {
      errorMessage.style.display = "none";
    }

    const newComment = document.createElement("div");
    newComment.className = "flex space-x-4 text-sm text-gray-500";

    newComment.innerHTML = `
        <div class="flex-1 py-10 border-t border-gray-200">
          <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message}</p>
          </div>
        </div>
      `;

    commentList.appendChild(newComment);

    form.reset();
  });
});
