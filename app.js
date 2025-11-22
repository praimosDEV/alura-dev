import { ModalService } from './services/modalService.js';

class GameGenreApp {
    constructor(gameGenres) {
        this.genres = gameGenres;
        this.filteredGenres = [...this.genres]; // Cria uma cópia para filtragem
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderGenres();
    }

    setupEventListeners() {
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));

        const modal = document.getElementById('modal');
        const closeBtn = document.querySelector('.close');
        
        closeBtn.addEventListener('click', () => ModalService.closeModal());
        window.addEventListener('click', (e) => {
            if (e.target === modal) ModalService.closeModal();
        });
    }

    handleSearch(query) {
        const searchTerm = query.toLowerCase().trim();
        
        if (searchTerm === '') {
            this.filteredGenres = [...this.genres];
        } else {
            this.filteredGenres = this.genres.filter(genre => 
                genre.name.toLowerCase().includes(searchTerm) ||
                genre.description.toLowerCase().includes(searchTerm) ||
                genre.details.mechanics.some(m => m.toLowerCase().includes(searchTerm)) ||
                genre.details.examples.some(e => e.toLowerCase().includes(searchTerm))
            );
        }
        
        this.renderGenres();
    }

    renderGenres() {
        const grid = document.getElementById('genresGrid');
        grid.innerHTML = '';

        if (this.filteredGenres.length === 0) {
            grid.innerHTML = '<p style="text-align: center; color: white; font-size: 1.2rem;">Nenhum gênero encontrado.</p>';
            return;
        }

        this.filteredGenres.forEach(genre => {
            const card = this.createGenreCard(genre);
            grid.appendChild(card);
        });
    }

    createGenreCard(genre) {
        const card = document.createElement('div');
        card.className = 'genre-card';
        card.innerHTML = `
            <h3>${genre.name}</h3>
            <div class="date">Desde ${genre.releaseDate}</div>
            <div class="description">${genre.description}</div>
            <button class="details-btn">Ver Detalhes</button>
        `;
        card.querySelector('.details-btn').addEventListener('click', () => ModalService.showGenreDetails(genre, this.genres));
        return card;
    }
}

// Função principal assíncrona para carregar os dados e iniciar a aplicação
async function main() {
    try {
        const response = await fetch('database.json');
        if (!response.ok) {
            throw new Error(`Erro ao carregar o banco de dados: ${response.statusText}`);
        }
        const gameGenres = await response.json();
        new GameGenreApp(gameGenres); // Inicia a aplicação com os dados carregados
    } catch (error) {
        console.error("Falha ao iniciar a aplicação:", error);
        document.getElementById('genresGrid').innerHTML = '<p style="text-align: center; color: red; font-size: 1.2rem;">Não foi possível carregar os dados dos gêneros. Tente recarregar a página.</p>';
    }
}

main(); // Executa a função principal