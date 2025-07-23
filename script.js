// --- DOM Element Selection ---
const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultDiv = document.getElementById("result");
const themeToggleBtn = document.getElementById("theme-toggle");

// --- Theme Switcher ---
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 4.75a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 4.75zm0 12.5a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 01.75-.75zM5.5 12a.75.75 0 00-.75-.75h-1.5a.75.75 0 000 1.5h1.5a.75.75 0 00.75-.75zm14 0a.75.75 0 00-.75-.75h-1.5a.75.75 0 000 1.5h1.5a.75.75 0 00.75-.75zM7.22 7.22a.75.75 0 011.06 0l1.06 1.06a.75.75 0 01-1.06 1.06L7.22 8.28a.75.75 0 010-1.06zm9.56 9.56a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM16.78 7.22a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm-9.56 9.56a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM12 8a4 4 0 110 8 4 4 0 010-8z"/></svg>`;
const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 1.75A10.25 10.25 0 1022.25 12 10.25 10.25 0 0012 1.75zm-.22 2.47a.75.75 0 00-1.06 1.06 8.25 8.25 0 1010.58 10.58.75.75 0 00-1.06-1.06 6.75 6.75 0 01-8.46-8.46z" clip-rule="evenodd"/></svg>`;

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.body.setAttribute("data-theme", "dark");
    themeToggleBtn.innerHTML = sunIcon;
  } else {
    document.body.removeAttribute("data-theme");
    themeToggleBtn.innerHTML = moonIcon;
  }
};

const themeSwitch = () => {
  if (document.body.getAttribute("data-theme") === "dark") {
    document.body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeToggleBtn.innerHTML = moonIcon;
  } else {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggleBtn.innerHTML = sunIcon;
  }
};

themeToggleBtn.addEventListener("click", themeSwitch);
// Set theme on initial load
themeCheck();

/**
 * Checks if the given string is a palindrome.
 */

const isPalindrome = (str) => {
  const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = alphanumericStr.split("").reverse().join("");
  return alphanumericStr === reversedStr;
};

/**
 * Handles the click event on the "Check" button.
 */
const handleCheck = () => {
  const inputValue = textInput.value;
  resultDiv.classList.remove("success", "error", "warning");

  if (inputValue.trim() === "") {
    resultDiv.textContent = "Please enter a value to check.";
    resultDiv.classList.add("warning");
    return;
  }

  if (isPalindrome(inputValue)) {
    resultDiv.innerHTML = `<span class="bold">"${inputValue}"</span> is a palindrome!`;
    resultDiv.classList.add("success");
  } else {
    resultDiv.innerHTML = `<span class="bold">"${inputValue}"</span> is not a palindrome.`;
    resultDiv.classList.add("error");
  }
};

// --- Event Listeners ---
checkBtn.addEventListener("click", handleCheck);
textInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleCheck();
  }
});
