// clickjacking protection
if (window.top !== window.self) {
    window.top.location = window.self.location;
}

// disable dangerous inline HTML injection
function safeText(element, text) {
    element.textContent = text;
}

// simple XSS detector
const suspicious = ["<script", "javascript:", "onerror", "onload"];

function detectXSS(input) {

    const value = input.toLowerCase();

    for (let pattern of suspicious) {
        if (value.includes(pattern)) {
            console.warn("Potential XSS blocked");
            return true;
        }
    }

    return false;
}
