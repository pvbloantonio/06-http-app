

const fetchQuote = async () => {

    const url = 'https://api.breakingbadquotes.xyz/v1/quotes/'
    const res = await fetch(url);
    const data = await res.json();


    console.log(data[0]);
    return data[0];
}



export const BreakingbadApp = async (element) => {
    document.querySelector('#app-title').innerHTML = 'BreakingBad APP'
    element.innerHTML = 'Loading...'
    // await fetchQuote();


    const quoteLabel = document.createElement('blockquote');
    const authorLavel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.innerText = 'Next Quote';


    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authorLavel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authorLavel, nextQuoteButton);
    }

    // Añadir Listener

    nextQuoteButton.addEventListener('click', async () => {

        element.innerHTML = 'Loading...'
        const quote = await fetchQuote();
        renderQuote(quote);


    })

    fetchQuote()
        .then(renderQuote)

}