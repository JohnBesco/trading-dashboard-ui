function getGreeting() {
  const now = new Date();
  const hour = now.getHours();

  if (hour >= 0 && hour < 12) {
    return "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

function askForName() {
  const userName = prompt("Please enter your name:");
  if (userName) {
    const profileParagraph = document.getElementById("profile");
    const greetingParagraph = document.getElementById("greeting");
    profileParagraph.textContent = userName;
    const greeting = getGreeting();
    greetingParagraph.textContent = greeting + ", " + userName + "!";
  }
}

window.onload = askForName;

function updateCurrentTime() {
  const currentTimeElement = document.getElementById("current-time");
  const now = new Date();

  const options = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const formattedTime = now.toLocaleString("en-US", options);
  currentTimeElement.textContent = formattedTime;
}

updateCurrentTime();

setInterval(updateCurrentTime, 1000);

const anchorTags = document.querySelectorAll(".interval-selector a");

anchorTags.forEach((tag) => {
  tag.addEventListener("click", (event) => {
    event.preventDefault();
    anchorTags.forEach((tag) => {
      tag.classList.remove("selected");
    });
    tag.classList.add("selected");
  });
});
