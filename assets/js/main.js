/**
 * main.js - Scripts communs pour toutes les pages
 */

// Fonction pour animer l'entrée des éléments avec un effet fade-in et slide-up
function animateElements(selector, delay = 200) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element, index) => {
      // Définir l'état initial
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      
      // Appliquer l'animation avec délai
      setTimeout(() => {
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, delay * (index + 1));
    });
  }
  
  // Exécuter les animations une fois que le DOM est complètement chargé
  document.addEventListener('DOMContentLoaded', function() {
    // Identifier quelle page est actuellement chargée
    const currentPage = document.body.dataset.page;
    
    // Exécuter les animations spécifiques à chaque page
    switch(currentPage) {
      case 'home':
        animateElements('.card');
        break;
      case 'about':
        animateElements('.skill-category');
        break;
      case 'projects':
        animateElements('.project-card');
        break;
      case 'guides':
        animateElements('.guide-card');
        break;
      default:
        // Animation par défaut pour tout autre type de page
        animateElements('.animate-in');
    }
  });
  
  // Fonction pour détecter si l'utilisateur est en mode sombre au niveau du système
  function prefersDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  // Fonction pour changer les variables CSS en fonction du thème
  function updateTheme(darkMode) {
    const root = document.documentElement;
    
    if (darkMode) {
      root.style.setProperty('--light', '#1a1a1a');
      root.style.setProperty('--dark', '#f5f5f5');
      root.style.setProperty('--text', '#f5f5f5');
      root.style.setProperty('--shadow', 'rgba(0,0,0,0.3)');
    } else {
      root.style.setProperty('--light', '#ecf0f1');
      root.style.setProperty('--dark', '#2c3e50');
      root.style.setProperty('--text', '#333');
      root.style.setProperty('--shadow', 'rgba(0,0,0,0.1)');
    }
  }
  
  // Ajouter un écouteur pour les changements de préférences de thème
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    updateTheme(e.matches);
  });
  
  // Initialiser le thème au chargement de la page
  // Désactivé pour l'instant - décommentez pour activer le mode sombre automatique
   document.addEventListener('DOMContentLoaded', function() {
     updateTheme(prefersDarkMode());
   });