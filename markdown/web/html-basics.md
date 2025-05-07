---
title: Les bases du HTML
date: 2025-04-30
tags: [HTML, Frontend, Web]
---

# Les bases du HTML

HTML (HyperText Markup Language) est le langage standard utilisé pour créer et structurer des pages web. Ce guide couvre les fondamentaux du HTML que tout développeur web devrait connaître.

## Structure de base d'une page HTML

Toute page HTML commence par une structure de base :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Titre de la page</title>
</head>
<body>
  <!-- Contenu de la page -->
</body>
</html>
```

## Éléments et balises HTML

Le HTML utilise des balises pour structurer le contenu. Les balises sont entourées de chevrons (`<` et `>`).

### Paragraphes

```html
<p>Ceci est un paragraphe.</p>
```

### Titres

Il existe six niveaux de titres, de `<h1>` (le plus important) à `<h6>` (le moins important).

```html
<h1>Titre principal</h1>
<h2>Sous-titre</h2>
<h3>Sous-sous-titre</h3>
```

### Listes

#### Liste non ordonnée

```html
<ul>
  <li>Élément 1</li>
  <li>Élément 2</li>
  <li>Élément 3</li>
</ul>
```

#### Liste ordonnée

```html
<ol>
  <li>Premier élément</li>
  <li>Deuxième élément</li>
  <li>Troisième élément</li>
</ol>
```

### Liens

```html
<a href="https://www.example.com">Cliquez ici</a>
```

### Images

```html
<img src="image.jpg" alt="Description de l'image">
```

## Attributs HTML

Les attributs fournissent des informations supplémentaires sur un élément HTML. Ils sont toujours spécifiés dans la balise d'ouverture.

```html
<a href="https://www.example.com" target="_blank" title="Ouvre dans un nouvel onglet">Lien externe</a>
```

## Balises sémantiques

HTML5 a introduit plusieurs balises sémantiques qui aident à décrire la signification du contenu plutôt que simplement sa présentation.

```html
<header>En-tête de la page</header>
<nav>Navigation</nav>
<main>Contenu principal</main>
<article>Article autonome</article>
<section>Section de contenu</section>
<aside>Contenu secondaire</aside>
<footer>Pied de page</footer>
```

## Formulaires HTML

Les formulaires permettent de collecter des données utilisateur.

```html
<form action="/submit" method="post">
  <label for="name">Nom :</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email :</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Message :</label>
  <textarea id="message" name="message" rows="4"></textarea>
  
  <button type="submit">Envoyer</button>
</form>
```

## Bonnes pratiques

1. **Indentation** - Maintenez un code propre et lisible
2. **Sémantique** - Utilisez les balises appropriées pour leur signification
3. **Accessibilité** - Assurez-vous que votre site est accessible à tous
4. **Validation** - Validez votre HTML avec des outils comme le validateur W3C

## Ressources utiles

- [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/HTML)
- [W3Schools](https://www.w3schools.com/html/)
- [HTML5 Doctor](http://html5doctor.com/) - Pour comprendre les éléments sémantiques

---

Ce guide n'est qu'une introduction aux bases du HTML. La pratique est essentielle pour maîtriser ce langage de balisage fondamental.