/**
 * 
 * @param {HTMLElement} element 
 */

export const ChuckNorrisApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'Chuck Norris';
    element.innerHTML = 'Loading...';

    // const quote = await fetchQuote();

    const quoteLabel = document.createElement('blockquote')
    const authoLabel = document.createElement('h3')
    const nextQouteButton = document.createElement('button')
    nextQouteButton.innerText = 'next quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.value;
        authoLabel.innerHTML = data.created_at;
        element.replaceChildren(quoteLabel, authoLabel, nextQouteButton);
    }

    fetchQuote()
        .then(renderQuote);

    nextQouteButton.addEventListener('click', async () => {
        element.innerHTML = 'Loading...';
        nextQouteButton.setAttribute('disabled', true);

        const quote = await fetchQuote();
        renderQuote(quote);
        nextQouteButton.removeAttribute('disabled');


    })



}

/**
 * @returns {Object} quote information
 */
const fetchQuote = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await res.json();
    // console.log(data)
    return data;
}