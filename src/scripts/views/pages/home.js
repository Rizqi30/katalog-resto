import TheRestoDbSource from '../../data/therestodbsource';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `
            <div class="content">
                <h2 class="content__heading">Explore Restaurant</h2>
                <div id="movies" class="movies">
                </div>
            </div>
        `;
    },

    async afterRender() {
        const restos = await TheRestoDbSource.homePage();
        const restosContainer = document.querySelector('#movies');
        restos.forEach((resto) => {
            restosContainer.innerHTML += createRestoItemTemplate(resto);
        });
        // TODO tampilkan restos dalam DOM
    },
};

export default Home;