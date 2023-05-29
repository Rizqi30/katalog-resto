import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodbsource';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
        <div id="movie" class="movie">Detail Resto</div>
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restos = await TheRestoDbSource.detailResto(url.id);
        const restoContainer = document.querySelector('#movie');
        restoContainer.innerHTML = createRestoDetailTemplate(restos);
    },
};

export default Detail;