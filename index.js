import './new-movie.js';
 
window.addEventListener('load',() => {
    fetchMovie();
});

async function fetchMovie(){
 
    const result = await fetch('https://itunes.apple.com/us/rss/topmovies/limit=100/json');
    const json = await result.json();
    const data = json.feed.entry;
    const main = document.querySelector('main');

    data.forEach(el => {
        const element = document.createElement('new-movie');
        element.el = el;
        main.appendChild(element);
    });
}
