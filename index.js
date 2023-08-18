function getGreeting() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 0 && hour < 12) {
      return "Good morning";
    } else if (hour >= 12 && hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
}

function askForName() {
    const userName = prompt("Please enter your name:");
    if (userName) {
      const profileParagraph = document.getElementById("profile");
      const greetingParagraph = document.getElementById("greeting");
      profileParagraph.textContent = userName;
      const greeting = getGreeting();
      greetingParagraph.textContent = greeting + ", " + userName;
    }
}

window.onload = askForName;