const quotes = [
    {
        quote: `“No matter what people tell you, words and ideas can change the world.”`,
        author: `~ Robin Williams`
    },
    {
        quote: `“Life isn’t about finding yourself. Life is about creating yourself.”`,
        author: `~ George Bernard Shaw`
    },
    {
        quote: `“Life becomes easier when you learn to accept the apology you never got.”`,
        author: `~ R. Brault`
    },
    {
        quote: `“To live is the rarest thing in the world. Most people just exist.” `,
        author: `~ Oscar Wilde`
    },
    {
        quote: `“A person who never made a mistake never tried anything new.” `,
        author: `Albert Einstein`
    },
    {
        quote: `“Those who dare to fail miserably can achieve greatly.”`,
        author: `~ John F. Kennedy`
    },
    {
        quote: `“The roots of education are bitter, but the fruit is sweet.”`,
        author: `~ Aristotle`
    },
    {
        quote: `“You never really know what's coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.”`,
        author: `~ Alysha Speer`
    },
    {
        quote: `“I was not born to be free---I was born to adore and obey.”`,
        author: `~ C.S. Lewis`
    },
    {
        quote: `“The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.”`,
        author: `~ Aaron Lauritsen`
    },
    {
        quote: `“Life calls the tune, we dance.”`,
        author: `~ John Galsworthy`
    },
    {
        quote: `“Even when you’d lost everything you thought there was to lose, somebody came along and gave you something for free.”`,
        author: `~Jenny Valentine`
    },
    {
        quote: `“Him that I love, I wish to be free -- even from me.”`,
        author: `~ Anne Morrow Lindbergh`
    },
    {
        quote: `“You want to be free. You also want to be mine. You can't be both.”`,
        author: `~ Nenia Campbell`
    },
]


const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
});