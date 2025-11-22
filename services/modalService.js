import { rpgGddTemplate } from '../templates/rpgGddTemplate.js';

export class ModalService {
    static showGenreDetails(genre, genres) {
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = genre.name === 'RPG' 
            ? rpgGddTemplate 
            : this.getGenericGenreDetails(genre);
        document.getElementById('modal').style.display = 'block';
    }

    static closeModal() {
        document.getElementById('modal').style.display = 'none';
    }

    static getGenericGenreDetails(genre) {
        return `
            <div class="modal-body">
                <h2>${genre.name}</h2>
                <div class="modal-section">
                    <h3>Período</h3>
                    <p>Popular desde ${genre.releaseDate}</p>
                </div>
                <div class="modal-section">
                    <h3>Descrição</h3>
                    <p>${genre.description}</p>
                </div>
                <div class="modal-section">
                    <h3>Mecânicas Principais</h3>
                    <ul>${genre.details.mechanics.map(m => `<li>${m}</li>`).join('')}</ul>
                </div>
                <div class="modal-section">
                    <h3>Exemplos</h3>
                    <ul>${genre.details.examples.map(e => `<li>${e}</li>`).join('')}</ul>
                </div>
                <div class="modal-section">
                    <h3>Subgêneros</h3>
                    <ul>${genre.details.subgenres.map(s => `<li>${s}</li>`).join('')}</ul>
                </div>
                <div class="modal-section">
                    <h3>Características Chave</h3>
                    <ul>${genre.details.keyFeatures.map(f => `<li>${f}</li>`).join('')}</ul>
                </div>
                <div class="modal-section">
                    <h3>Preços Mais Comuns</h3>
                    <ul>
                        <li>AAA: R$ 200-250</li>
                        <li>AA: R$ 120-180</li>
                        <li>Indie: R$ 20-80</li>
                        <li>F2P: Grátis com microtransações</li>
                    </ul>
                </div>
                <div class="modal-section">
                    <h3>Plataformas Mais Vendidas</h3>
                    <ul>
                        <li>PC (Steam, Epic, etc.)</li>
                        <li>PlayStation Store</li>
                        <li>Xbox Store / Game Pass</li>
                        <li>Nintendo eShop</li>
                        <li>Mobile (iOS/Android)</li>
                    </ul>
                </div>
            </div>`;
    }
}

