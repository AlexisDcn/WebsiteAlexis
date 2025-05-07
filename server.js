/**
 * server.js - Serveur simple pour gérer les fichiers Markdown
 * 
 * Ce script crée un serveur Express qui:
 * 1. Sert les fichiers statiques (HTML, CSS, JS)
 * 2. Expose les fichiers Markdown du dossier "markdown"
 * 3. Gère les redirections pour les routes SPA
 */

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Servir les fichiers statiques du répertoire racine
app.use(express.static(path.join(__dirname)));

// Route spécifique pour servir les fichiers markdown
app.get('/markdown/:category/:file', (req, res) => {
  const { category, file } = req.params;
  const filePath = path.join(__dirname, 'markdown', category, file);
  
  // Vérifier si le fichier existe
  if (fs.existsSync(filePath)) {
    // Définir le type de contenu comme texte brut
    res.set('Content-Type', 'text/plain');
    // Envoyer le fichier
    res.sendFile(filePath);
  } else {
    res.status(404).send('Fichier non trouvé');
  }
});

// Liste des fichiers markdown disponibles (optionnel)
app.get('/api/guides', (req, res) => {
  const guides = [];
  const markdownDir = path.join(__dirname, 'markdown');
  
  // Vérifier si le répertoire markdown existe
  if (fs.existsSync(markdownDir)) {
    // Lire les catégories (sous-répertoires)
    const categories = fs.readdirSync(markdownDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
      
    // Pour chaque catégorie, lire les fichiers markdown
    categories.forEach(category => {
      const categoryPath = path.join(markdownDir, category);
      const files = fs.readdirSync(categoryPath)
        .filter(file => file.endsWith('.md'));
        
      // Pour chaque fichier, extraire les métadonnées (si présentes)
      files.forEach(file => {
        const filePath = path.join(categoryPath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extraire les métadonnées du frontmatter
        let title = file.replace('.md', '');
        let date = '';
        let tags = [];
        
        const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n/);
        if (frontmatterMatch) {
          const frontmatter = frontmatterMatch[1];
          
          // Extraire le titre
          const titleMatch = frontmatter.match(/title:\s*(.+)$/m);
          if (titleMatch) title = titleMatch[1];
          
          // Extraire la date
          const dateMatch = frontmatter.match(/date:\s*(.+)$/m);
          if (dateMatch) date = dateMatch[1];
          
          // Extraire les tags
          const tagsMatch = frontmatter.match(/tags:\s*\[(.*)\]/);
          if (tagsMatch) {
            tags = tagsMatch[1].split(',').map(tag => tag.trim());
          }
        }
        
        guides.push({
          path: `${category}/${file}`,
          category,
          file,
          title,
          date,
          tags
        });
      });
    });
  }
  
  res.json(guides);
});

// Pour le SPA routing (rediriger vers index.html)
app.get('/guides/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'guides', 'index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
  console.log(`Les guides sont disponibles sur http://localhost:${port}/guides/`);
});