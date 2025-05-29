// If you want to inject the CSS via JavaScript, use the following:
const style = document.createElement('style');
style.textContent = `
.card {
    opacity: 0;
    transform: translateY(30px);
    animation: cardFadeIn 1s forwards;
}
.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.3s; }
.card:nth-child(3) { animation-delay: 0.5s; }
.card:nth-child(4) { animation-delay: 0.7s; }
@keyframes cardFadeIn {
    to { opacity: 1; transform: translateY(0); }
}
`;
document.head.appendChild(style);