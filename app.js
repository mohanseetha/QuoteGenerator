quotes = [
    `“Remain calm in every situation because peace equals power.” `,
    `“Timing is everything. When you’re REALLY ready for it, it will come.” `,
    `“Don’t ruin today by reliving yesterday’s problems.”`,
    `“Life is way better when you’re laughing.”`,
    `“Look forward with hope, not backwards with regret.”`,
    `“Stop stressing, let go, and move on.”`,
    `“Life’s like photography, you use the negatives to develop.”`,
    `“It is never too late to make things right.”`,
    `“There’s only 2 options: Make progress or make excuses.”`,
    `“Live your life to the fullest. You only get one.”`
]

function generateQuote(){
    const i = Math.floor(Math.random() * 10);
    const quote =  quotes[i];
    const q = document.getElementById("quote");
    q.innerHTML = quote;
}
