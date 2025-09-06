# 📝 Instructions Étudiant – Atelier Générateur de Citations

Bienvenue dans cet atelier ! Suis les étapes ci-dessous pour réussir ta mission.

---

## 1️⃣ Préparation du projet

1. Ouvre le dossier du projet dans VS Code.
2. Vérifie que tu as les fichiers suivants : `index.html`, `style.css`, `script.js`, `README.md`, `evaluation.json`.
3. Ouvre le fichier `index.html` pour voir la structure de la page.

---

## 2️⃣ Découverte de l’API

- Teste l’URL suivante dans ton navigateur :
  `https://api.quotable.io/random`
- Observe le résultat : tu dois voir une citation et son auteur.

**Explication :**
Une API (Application Programming Interface) permet à ton application de récupérer des données sur internet. Ici, l’API te renvoie une citation au format JSON (texte structuré).

---

## 3️⃣ Affichage d’une citation

- Dans `script.js`, ajoute le code pour récupérer une citation avec `fetch()`.
- Affiche le texte de la citation et l’auteur sur la page.
- Exemple :
  ```js
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      // Affiche la citation et l’auteur dans la page
    });
  ```

**Explication :**
`fetch()` est une fonction JavaScript qui permet d’appeler une API. Elle retourne une "promesse" (Promise), c’est-à-dire une opération qui se termine plus tard. On utilise `.then()` pour traiter la réponse quand elle arrive.

Pour afficher la citation, tu dois sélectionner un élément HTML (par exemple un `<div id="citation">`) et modifier son contenu :
```js
// Affiche le texte de la citation
// et le nom de l’auteur dans la page
// (à placer dans le .then du fetch)
document.getElementById('citation').textContent = data.content;
document.getElementById('auteur').textContent = data.author;
```

---

## 4️⃣ Bouton "Nouvelle citation"

- Ajoute un bouton dans `index.html`.
- Relie ce bouton à une fonction JavaScript qui affiche une nouvelle citation à chaque clic.

**Exemple HTML :**
```html
<button id="nouvelle-citation">Nouvelle citation</button>
<div id="citation"></div>
<div id="auteur"></div>
```

**Exemple JS :**
```js
document.getElementById('nouvelle-citation').addEventListener('click', function() {
  // Appelle la fonction qui récupère et affiche une citation
});
```

**Explication :**
`addEventListener` permet d’exécuter du code quand l’utilisateur clique sur le bouton. Tu peux ainsi afficher une nouvelle citation à chaque clic.

---

## 5️⃣ Gestion des erreurs

- Si l’API ne répond pas, affiche un message d’erreur clair à l’utilisateur.
- Utilise `try...catch` ou vérifie `response.ok`.

**Exemple JS :**
```js
async function afficherCitation() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) throw new Error('Problème réseau');
    const data = await response.json();
    document.getElementById('citation').textContent = data.content;
    document.getElementById('auteur').textContent = data.author;
  } catch (error) {
    document.getElementById('citation').textContent = 'Erreur : impossible de récupérer la citation.';
    document.getElementById('auteur').textContent = '';
  }
}
```

**Explication :**
`try...catch` permet de gérer les erreurs : si l’API ne répond pas, on affiche un message à l’utilisateur au lieu de laisser la page vide ou bloquée.

---

## 6️⃣ Design responsive

- Vérifie que la page s’affiche correctement sur mobile et ordinateur.
- Utilise des media queries dans `style.css`.

**Exemple CSS :**
```css
@media (max-width: 600px) {
  body {
    font-size: 1.2em;
  }
  #citation {
    padding: 10px;
  }
}
```

**Explication :**
Les media queries permettent d’adapter le style selon la taille de l’écran. Ainsi, le site reste lisible sur mobile comme sur ordinateur.

---

## 7️⃣ Checklist avant rendu

- [ ] La page affiche une citation au chargement
- [ ] Le bouton fonctionne
- [ ] Les erreurs sont gérées
- [ ] Le design est responsive
- [ ] Le fichier `evaluation.json` est rempli
- [ ] Le site est en ligne sur GitHub Pages

**Conseil :**
Teste chaque fonctionnalité une par une. Si tu bloques, relis les exemples ci-dessus ou demande de l’aide.

---

## 📈 Autoévaluation et progression

Pour chaque étape, indique si tu l’as terminée, la difficulté ressentie, le temps passé et si tu as eu besoin d’aide :
- Étape 1 : Appel API
- Étape 2 : Affichage DOM
- Étape 3 : Gestion des erreurs
- Étape 4 : Événements (bouton)
- Bonus : Fonctionnalités avancées

Liste les concepts que tu maîtrises (fetch, async/await, DOM, gestion erreurs, event listeners, git/github, HTML sémantique, CSS responsive) et ceux à revoir.

Note les difficultés rencontrées, tes points forts et ce que tu aimerais améliorer.

---

## 🛠️ Évaluation technique

Vérifie que tu as bien réalisé chaque fonctionnalité :
- [ ] Appel API fonctionnel (la citation s’affiche bien)
- [ ] Affichage correct de la citation
- [ ] Gestion des erreurs (message clair si problème)
- [ ] Design responsive (mobile et desktop)
- [ ] Interactivité du bouton "Nouvelle citation"
- [ ] Déploiement sur GitHub Pages

### Bonus optionnels
- [ ] Partage social (Web Share API)
- [ ] Favoris enregistrés (localStorage)
- [ ] Animations CSS
- [ ] Raccourcis clavier
- [ ] Accessibilité (lecteur d’écran, contraste)

Pour chaque point, explique ce que tu as fait et ce qui fonctionne.

---

## 📝 QCM de validation

### Niveau Débutant
1. **Quelle méthode JavaScript permet de faire un appel API asynchrone moderne ?**
   - fetch(), call(), request(), api()
   - *Astuce : la réponse se trouve dans les exemples de code ci-dessus.*
2. **Que signifie l'acronyme API ?**
   - Application Programming Interface, Automated Program Interface, Advanced Programming Interface, Application Process Interface
3. **Comment récupère-t-on un élément HTML par son ID en JavaScript ?**
   - document.getElementById('monId'), document.getElement('monId'), getElementById('monId'), document.find('#monId')

### Niveau Intermédiaire
4. **Comment gère-t-on une erreur avec la méthode fetch() ?**
   - try...catch avec async/await, error() callback, fail() method, exception handler
5. **Quelle balise HTML est sémantiquement correcte pour afficher une citation ?**
   - <blockquote>, <cite>, <quote>, <div class='citation'>
6. **Que fait la commande 'git push origin main' ?**
   - Envoie les commits locaux vers le repository distant, Récupère les modifications du serveur, Crée une nouvelle branche main, Supprime les fichiers du repository

### Niveau Avancé
8. **Que retourne l'API quotable.io dans sa réponse ?**
   - Un objet JSON avec les propriétés content, author et length, Du texte brut sans formatage, Un fichier XML structuré, Une image avec le texte de la citation
9. **Quelle est la différence principale entre .then() et async/await ?**
   - async/await offre une syntaxe plus lisible pour le code asynchrone, .then() est plus performant, async/await ne gère pas les erreurs, Il n'y a aucune différence fonctionnelle
10. **Pourquoi utilise-t-on textContent plutôt que innerHTML pour afficher du texte utilisateur ?**
   - Pour éviter les injections XSS et les failles de sécurité, textContent est plus rapide, innerHTML ne fonctionne pas avec du texte, C'est une préférence de style de code

*Justifie chaque réponse pour valider ta compréhension.*

---

## 💡 Astuces

- N’hésite pas à demander de l’aide si tu bloques !
- Consulte la documentation officielle :
  - [API quotable.io](https://quotable.io/)
  - [MDN fetch()](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)

Bon courage ! 🚀

---

## 🧠 Réflexion pédagogique

- Temps total nécessaire pour finir l’atelier
- Étape la plus difficile et pourquoi
- Étape la plus intéressante
- Utilité des commentaires dans le code
- Clarté des instructions
- Suggestions d’amélioration pour le prochain atelier
- Niveau de satisfaction
- Recommanderais-tu cet exercice à un autre étudiant ?

---

## 📝 Grille de notation

- QCM débutant : /3 points
- QCM intermédiaire : /6 points
- QCM avancé : /12 points
- Technique obligatoire : /15 points
- Bonus optionnel : /9 points
- Note finale sur 20 : ...
- Appréciation générale : ...

---

## 📅 Meta-évaluation

- Date de l’évaluation
- Nom de l’évaluateur
- Durée de l’évaluation
- Outils utilisés
- Observations

---
