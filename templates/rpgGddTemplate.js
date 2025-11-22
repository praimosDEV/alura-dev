export const rpgGddTemplate = `
<div class="modal-body">
  <h2>RPG - Game Design Document</h2>
  
  <div class="modal-section">
    <h3>1. Visão Geral do Projeto</h3>
    <p><strong>Objetivo:</strong> Criar um framework de RPG que defina os elementos essenciais do gênero, permitindo implementações flexíveis e expansões futuras.</p>
    <p><strong>Escopo:</strong> Este documento estabelece os pilares fundamentais que qualquer jogo RPG deve conter, independente de temática ou subgênero específico.</p>
  </div>

  <div class="modal-section">
    <h3>2. Fundamentos do Gênero RPG</h3>
    <p>O RPG (Role-Playing Game) é definido pela progressão de personagens através de:</p>
    <ul>
      <li>Sistema de experiência e níveis</li>
      <li>Desenvolvimento de habilidades e atributos</li>
      <li>Personalização do personagem</li>
      <li>Tomada de decisões com impacto</li>
      <li>Narrativa interativa</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>3. Sistema de Progressão</h3>
    <p><strong>Experiência (XP):</strong> Moeda de progressão obtida através de:</p>
    <ul>
      <li>Completação de objetivos</li>
      <li>Superação de desafios</li>
      <li>Exploração e descoberta</li>
      <li>Interações sociais bem-sucedidas</li>
    </ul>
    <p><strong>Níveis:</strong> Marcadores de progressão que desbloqueiam:</p>
    <ul>
      <li>Aumento de atributos base</li>
      <li>Novas habilidades</li>
      <li>Acesso a conteúdo avançado</li>
      <li>Personalização adicional</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>4. Sistema de Atributos</h3>
    <p>Atributos fundamentais que definem as capacidades do personagem:</p>
    <ul>
      <li><strong>Físicos:</strong> Força, Agilidade, Resistência</li>
      <li><strong>Mentais:</strong> Inteligência, Percepção, Carisma</li>
      <li><strong>Espirituais:</strong> Vontade, Intuição, Presença</li>
    </ul>
    <p>Cada atributo deve impactar diretamente:</p>
    <ul>
      <li>Chance de sucesso em ações</li>
      <li>Dano ou efetividade de habilidades</li>
      <li>Opções de diálogo disponíveis</li>
      <li>Resistência a efeitos negativos</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>5. Sistema de Habilidades</h3>
    <p><strong>Habilidades Ativas:</strong> Ações que o jogador executa diretamente:</p>
    <ul>
      <li>Custam recursos (mana, stamina, etc.)</li>
      <li>Têm tempo de recarga</li>
      <li>Podem ser aprimoradas com uso</li>
      <li>Podem ser combinadas para efeitos sinérgicos</li>
    </ul>
    <p><strong>Habilidades Passivas:</strong> Bônus constantes ou condicionais:</p>
    <ul>
      <li>Aumentam atributos específicos</li>
      <li>Desbloqueiam opções alternativas</li>
      <li>Modificam regras do jogo</li>
      <li>Proporcionam vantagens situacionais</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>6. Sistema de Equipamentos</h3>
    <p><strong>Tipos de Equipamentos:</strong></p>
    <ul>
      <li><strong>Armas:</strong> Definem método de causar dano/interação</li>
      <li><strong>Armaduras:</strong> Reduzem dano recebido/impacto de falhas</li>
      <li><strong>Acessórios:</strong> Fornecem bônus especiais ou resistências</li>
      <li><strong>Consumíveis:</strong> Recursos de uso único com efeitos variados</li>
    </ul>
    <p><strong>Sistema de Raridade:</strong></p>
    <ul>
      <li>Comum → Incomum → Raro → Épico → Lendário</li>
      <li>Cada nível aumenta potência e adiciona propriedades únicas</li>
      <li>Itens mais raros requerem níveis mais altos para uso</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>7. Sistema de Combate</h3>
    <p><strong>Opções de Abordagem:</strong></p>
    <ul>
      <li>Combate em tempo real com pausa tática</li>
      <li>Sistema por turnos tradicional</li>
      <li>Combate baseado em ações com cooldowns</li>
      <li>Sistema híbrido adaptativo</li>
    </ul>
    <p><strong>Elementos Essenciais:</strong></p>
    <ul>
      <li>Chance de acerto baseada em atributos</li>
      <li>Sistema de dano com variações críticas</li>
      <li>Estados de efeito (buffs/debuffs)</li>
      <li>Posicionamento tático importante</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>8. Sistema de Quests e Narrativa</h3>
    <p><strong>Tipos de Quests:</strong></p>
    <ul>
      <li><strong>Principais:</strong> Avançam a história central</li>
      <li><strong>Secundárias:</strong> Desenvolvem mundo e personagens</li>
      <li><strong>Diárias:</strong> Atividades repetíveis com recompensas</li>
      <li><strong>Eventos:</strong> Conteúdo temporal limitado</li>
    </ul>
    <p><strong>Elementos de Narrativa:</strong></p>
    <ul>
      <li>Árvores de diálogo com consequências</li>
      <li>Escolhas morais com impacto no mundo</li>
      <li>Múltiplos finais baseados em decisões</li>
      <li>Sistema de reputação com facções</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>9. Sistema de Crafting e Progressão Alternativa</h3>
    <p><strong>Tipos de Crafting:</strong></p>
    <ul>
      <li><strong>Fusão:</strong> Combinar itens para criar versões melhores</li>
      <li><strong>Desmontagem:</strong> Extrair componentes de itens obsoletos</li>
      <li><strong>Aprimoramento:</strong> Melhorar propriedades existentes</li>
      <li><strong>Criação:</strong> Fabricar itens do zero</li>
    </ul>
    <p><strong>Requisitos de Crafting:</strong></p>
    <ul>
      <li>Receitas desbloqueadas através de exploração</li>
      <li>Nível mínimo de habilidade em profissão</li>
      <li>Recursos coletados no mundo</li>
      <li>Moedas específicas do sistema</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>10. Sistema de Economia</h3>
    <p><strong>Tipos de Moeda:</strong></p>
    <ul>
      <li><strong>Moeda Comum:</strong> Para transações básicas</li>
      <li><strong>Moeda Premium:</strong> Itens especiais ou cosméticos</li>
      <li><strong>Tokens de Atividade:</strong> Recompensas específicas de conteúdo</li>
      <li><strong>Recursos de Crafting:</strong> Materiais para criação</li>
    </ul>
    <p><strong>Fontes de Renda:</strong></p>
    <ul>
      <li>Venda de itens e equipamentos</li>
      <li>Completação de quests</li>
      <li>Atividades de crafting</li>
      <li>Comércio com outros jogadores</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>11. Sistema de Exploração</h3>
    <p><strong>Elementos de Exploração:</strong></p>
    <ul>
      <li><strong>Mapas Interconectados:</strong> Áreas que se conectam organicamente</li>
      <li><strong>Segredos Ocultos:</strong> Áreas acessíveis com habilidades específicas</li>
      <li><strong>Pontos de Interesse:</strong> Locais que geram recompensas únicas</li>
      <li><strong>Eventos Dinâmicos:</strong> Ocorrências aleatórias no mundo</li>
    </ul>
    <p><strong>Mecânicas de Descoberta:</strong></p>
    <ul>
      <li>Sistema de rastreamento de coleções</li>
      <li>Mapas que se preenchem com exploração</li>
      <li>Fast travel desbloqueado ao descobrir locais</li>
      <li>Conteúdo procedural em áreas específicas</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>12. Sistema de Facções e Reputação</h3>
    <p><strong>Tipos de Facções:</strong></p>
    <ul>
      <li><strong>Principais:</strong> Impactam história e mundo</li>
      <li><strong>Secundárias:</strong> Fornecem benefícios específicos</li>
      <li><strong>Competitivas:</strong> Em conflito entre si</li>
      <li><strong>Cooperativas:</strong> Trabalham juntas por objetivos</li>
    </ul>
    <p><strong>Sistema de Reputação:</strong></p>
    <ul>
      <li>Níveis: Odiado → Hostil → Neutro → Amigável → Reverenciado</li>
      <li>Ações afetam reputação com facções relacionadas</li>
      <li>Benefícios desbloqueados em cada nível</li>
      <li>Reputação pode decair com inatividade</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>13. Sistema de Endgame</h3>
    <p><strong>Conteúdo de Endgame:</strong></p>
    <ul>
      <li><strong>Raids:</strong> Desafios cooperativos de alto nível</li>
      <li><strong>Dungeons Míticas:</strong> Versões modificadas com modificadores</li>
      <li><strong>Sistema de Paragon:</strong> Progressão além do nível máximo</li>
      <li><strong>Temporadas:</strong> Reinício periódico com recompensas exclusivas</li>
    </ul>
    <p><strong>Progressão Contínua:</strong></p>
    <ul>
      <li>Capacidade de níveis alternativos</li>
      <li>Sistema de prestígio com recompensas cosméticas</li>
      <li>Conteúdo de dificuldade crescente</li>
      <li>Competições sazonais</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>14. Sistema de Personalização</h3>
    <p><strong>Personalização Visual:</strong></p>
    <ul>
      <li>Criador de personagem com múltiplas opções</li>
      <li>Transmogrificação de equipamentos</li>
      <li>Cosméticos desbloqueáveis</li>
      <li>Sistema de aparência alternativa</li>
    </ul>
    <p><strong>Personalização de Gameplay:</strong></p>
    <ul>
      <li>Múltiplas builds viáveis por classe</li>
      <li>Respeccing com custo crescente</li>
      <li>Itens que modificam habilidades</li>
      <li>Sistema de talentos ou pontos de habilidade</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>15. Considerações de Balanceamento</h3>
    <p><strong>Princípios de Balanceamento:</strong></p>
    <ul>
      <li>Nenhuma escolha deve ser estritamente melhor</li>
      <li>Vantagens devem ter desvantagens correspondentes</li>
      <li>Diversidade de builds deve ser incentivada</li>
      <li>Sistema de balanceamento ativo pós-lançamento</li>
    </ul>
    <p><strong>Ferramentas de Balanceamento:</strong></p>
    <ul>
      <li>Dados analíticos de uso de habilidades</li>
      <li>Feedback da comunidade</li>
      <li>Testes em servidor de testes</li>
      <li>Patch notes transparentes</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>16. Sistema de Tutorial e Onboarding</h3>
    <p><strong>Fases de Aprendizado:</strong></p>
    <ul>
      <li><strong>Tutorial Básico:</strong> Controles e interface</li>
      <li><strong>Introdução:</strong> Conceitos básicos do gênero</li>
      <li><strong>Descoberta Guiada:</strong> Mecânicas intermediárias</li>
      <li><strong>Maestria:</strong> Conceitos avançados opcionais</li>
    </ul>
    <p><strong>Métodos de Ensino:</strong></p>
    <ul>
      <li>Quests com objetivos progressivos</li>
      <li>Dicas contextuais não intrusivas</li>
      <li>Sistema de ajuda integrado</li>
      <li>Conteúdo de tutorial revisitável</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>17. Considerações Técnicas</h3>
    <p><strong>Requisitos de Sistema:</strong></p>
    <ul>
      <li>Escalabilidade de atributos (evitar overflow)</li>
      <li>Sistema de save com múltiplos slots</li>
      <li>Backup automático de progressão</li>
      <li>Compartibilidade entre versões</li>
    </ul>
    <p><strong>Performance:</strong></p>
    <ul>
      <li>Carregamento assíncrono de inventários grandes</li>
      <li>Otimização de cálculos de atributos</li>
      <li>Sistema de cache para frequentes verificações</li>
      <li>Limpeza periódica de dados obsoletos</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>18. Acessibilidade</h3>
    <p><strong>Recursos de Acessibilidade:</strong></p>
    <ul>
      <li>Opções de dificuldade ajustáveis</li>
      <li>Interface adaptável para diferentes necessidades</li>
      <li>Alternativas visuais para informações sonoras</li>
      <li>Controles remapeáveis completamente</li>
    </ul>
    <p><strong>Considerações Adicionais:</strong></p>
    <ul>
      <li>Modo de jogo com pausa a qualquer momento</li>
      <li>Textos com alto contraste</li>
      <li>Legendas para todos os diálogos</li>
      <li>Indicadores visuais claros para mecânicas</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>19. Monetização e Sustentabilidade</h3>
    <p><strong>Modelos Viables:</strong></p>
    <ul>
      <li><strong>Premium:</strong> Compra única com conteúdo completo</li>
      <li><strong>Free-to-Play:</strong> Com itens cosméticos e conveniência</li>
      <li><strong>Subscription:</strong> Acesso a conteúdo regular</li>
      <li><strong>Expansion-Based:</strong> Conteúdo principal + DLCs</li>
    </ul>
    <p><strong>Princípios de Monetização Ética:</strong></p>
    <ul>
      <li>Nunca pay-to-win</li>
      <li>Itens de conveniência não essenciais</li>
      <li>Cosméticos como principal fonte de receita</li>
      <li>Transparência total sobre itens compráveis</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>20. Roadmap de Desenvolvimento</h3>
    <p><strong>Fase 1 - MVP (Mínimo Produto Viável):</strong></p>
    <ul>
      <li>Sistema de atributos e níveis básico</li>
      <li>Combat system funcional</li>
      <li>Sistema de quests linear</li>
      <li>Progressão até nível 20</li>
    </ul>
    <p><strong>Fase 2 - Expansão de Conteúdo:</strong></p>
    <ul>
      <li>Adicionar crafting system</li>
      <li>Expandir mapa e adicionar exploração</li>
      <li>Introduzir sistema de facções</li>
      <li>Aumentar nível máximo para 50</li>
    </ul>
    <p><strong>Fase 3 - Endgame e Sustentabilidade:</strong></p>
    <ul>
      <li>Sistema de raids e dungeons míticas</li>
      <li>Introduzir sistema de paragon</li>
      <li>Adicionar PvP balanceado</li>
      <li>Implementar sistema de temporadas</li>
    </ul>
  </div>

  <div class="modal-section">
    <h3>Conclusão</h3>
    <p>Este GDD estabelece o framework fundamental para um RPG, fornecendo flexibilidade para adaptações futuras enquanto mantém a essência do gênero. A implementação bem-sucedida destes sistemas garantirá uma experiência autêntica de RPG que pode evoluir com o tempo.</p>
    <p><strong>Próximos Passos:</strong></p>
    <ul>
      <li>Definir temática e ambientação específica</li>
      <li>Criar protótipo jogável dos sistemas core</li>
      <li>Iterar baseado em feedback de playtesters</li>
      <li>Desenvolver conteúdo inicial e planejar expansões</li>
    </ul>
  </div>
</div>
`;