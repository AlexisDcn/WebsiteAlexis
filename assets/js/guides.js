/**
 * guides.js - Scripts spécifiques à la page des guides
 */

// Référence à la modal
const modal = document.getElementById('guideModal');
const modalTitle = document.getElementById('modal-title');
const guideContent = document.getElementById('guide-content');

// Ouvrir un guide
function openGuide(filename) {
  // Extraire le nom du guide à partir du nom du fichier
  const guideName = filename.replace('.md', '').replace(/_/g, ' ');
  modalTitle.textContent = guideName;
  
  // Afficher la modal
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Empêcher le défilement de la page
  
  // Afficher l'indicateur de chargement
  guideContent.innerHTML = '<div class="loading"><i class="fas fa-spinner"></i> Chargement du guide...</div>';
  
  // Charger le contenu du guide
  fetch(`guides/${filename}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Guide non trouvé');
      }
      return response.text();
    })
    .then(markdown => {
      // Convertir le markdown en HTML
      const htmlContent = marked.parse(markdown);
      guideContent.innerHTML = htmlContent;
      
      // Activer la syntaxe highlighting si présente
      if (window.Prism) {
        Prism.highlightAll();
      }
    })
    .catch(error => {
      console.error('Erreur lors du chargement du guide:', error);
      guideContent.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
          <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #e74c3c; margin-bottom: 1rem;"></i>
          <p>Impossible de charger le guide. Veuillez vérifier que le fichier existe dans le dossier "guides".</p>
          <p style="font-size: 0.9rem; margin-top: 1rem; color: #7f8c8d;">
            Erreur: ${error.message}
          </p>
        </div>
      `;
    });
}

// Fermer la modal
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = ''; // Réactiver le défilement de la page
  guideContent.innerHTML = '';
}

// Fermer la modal si l'utilisateur clique en dehors
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};

// Fermer la modal avec la touche Escape
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});