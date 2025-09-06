# 💬 Mission 1 : Générateur de Citations avec API REST

> **Objectif pédagogique :** Découvrir les APIs REST et JavaScript moderne à travers un projet concret et progressif

## 🎯 Objectifs d'Apprentissage

### Compétences Techniques Visées
- **B1.1** : Analyse et développement d'applications web
- **B1.2** : Conception d'interfaces utilisateur interactives
- **B1.3** : Gestion et consommation de données via API

### Concepts Clés Abordés
- ✅ **APIs REST** : Comprendre et consommer des services web
- ✅ **JavaScript Asynchrone** : Maîtriser `fetch()`, `async/await`
- ✅ **Manipulation DOM** : Créer des interfaces dynamiques
- ✅ **Gestion d'erreurs** : Créer une expérience utilisateur robuste
- ✅ **Git/GitHub** : Workflow de développement moderne
- ✅ **Déploiement continu** : GitHub Pages et workflows

## 📋 Consignes Détaillées

### 🎮 Fonctionnalités Obligatoires
1. **📱 Affichage d'une citation aléatoire** au chargement de la page
2. **🔄 Bouton "Nouvelle citation"** entièrement fonctionnel  
3. **👤 Affichage de l'auteur** de chaque citation avec style approprié
4. **📱 Design responsive** : adaptation mobile et desktop
5. **⚠️ Gestion des erreurs** : messages clairs en cas de problème réseau
6. **⏳ États de chargement** : feedback visuel pendant les appels API

### 🌟 Fonctionnalités Bonus (Optionnelles)
- **📤 Partage social** : Partager une citation via Web Share API
- **⭐ Système de favoris** : Sauvegarder en localStorage
- **⌨️ Raccourcis clavier** : Navigation au clavier (Espace)
- **🎨 Animations CSS** : Transitions fluides
- **♿ Accessibilité** : Support lecteurs d'écran, contraste

## 🔧 API à Utiliser

### Endpoint Principal
```
URL : https://api.quotable.io/random
Méthode : GET
Format : JSON
```

### Structure de Réponse
```json
{
  "content": "Le succès c'est d'aller d'échec en échec sans perdre son enthousiasme.",
  "author": "Winston Churchill",
  "length": 65,
  "_id": "unique-identifier"
}
```

### Exemples d'Utilisation
```javascript
// Appel API basique
const response = await fetch('https://api.quotable.io/random');
const data = await response.json();

// Avec gestion d'erreurs
try {
  const response = await fetch('https://api.quotable.io/random');
  if (!response.ok) throw new Error(`Erreur: ${response.status}`);
  const citation = await response.json();
  console.log(citation.content, '-', citation.author);
} catch (error) {
  console.error('Erreur API:', error);
}
```

## 📁 Structure Projet (OBLIGATOIRE)

```
votre-repo/
├── 📄 index.html          ← Page principale (HTML5 sémantique)
├── 🎨 style.css           ← Styles CSS (responsive + variables)
├── ⚡ script.js           ← Code JavaScript (ES6+)
├── 📋 evaluation.json     ← QCM d'auto-évaluation
├── ⚙️ package.json        ← Configuration npm
├── 🚀 .github/workflows/  ← Déploiement GitHub Pages
│   └── pages.yml
├── 📖 README.md           ← Documentation projet
└── 🙈 .gitignore          ← Fichiers à exclure
```

## 🎓 Progression Pédagogique Recommandée

### 📚 Étape 1 : Découverte de l'API (15 min)
```javascript
// 🎯 Objectif : Premier appel API réussi
// 1. Testez l'API dans votre navigateur
// 2. Examinez la structure JSON retournée
// 3. Implémentez un fetch() basique
```

### 🖥️ Étape 2 : Manipulation du DOM (20 min)
```javascript
// 🎯 Objectif : Afficher les données reçues
// 1. Sélectionnez les éléments HTML
// 2. Mettez à jour le contenu textuel
// 3. Gérez l'affichage/masquage des sections
```

### ⚠️ Étape 3 : Gestion Robuste (15 min)
```javascript
// 🎯 Objectif : Application qui ne plante jamais
// 1. Ajoutez try...catch
// 2. Vérifiez response.ok
// 3. Affichez des messages d'erreur clairs
```

### 🎮 Étape 4 : Interactivité (10 min)
```javascript
// 🎯 Objectif : Application interactive
// 1. Ajoutez les event listeners
// 2. Gérez les états du bouton
// 3. Testez tous les scénarios
```

## 📊 Système d'Évaluation

### 🏗️ Critères Techniques (/15 points)
| Critère | Points | Description |
|---------|--------|-------------|
| **HTML Sémantique** | 3 pts | Structure correcte, balises appropriées (`<blockquote>`, `<cite>`) |
| **CSS Responsive** | 3 pts | Design adaptatif, variables CSS, animations |
| **JavaScript Fonctionnel** | 4 pts | API opérationnelle, gestion d'erreurs robuste |
| **Git Workflow** | 2 pts | Commits pertinents, messages clairs, branches |
| **GitHub Pages** | 3 pts | Site accessible, déploiement automatique |

### 🧠 QCM de Validation (/5 points)
- **Niveau Débutant** (3 pts) : Concepts de base API, DOM, Git
- **Niveau Intermédiaire** (6 pts) : JavaScript asynchrone, sémantique HTML
- **Niveau Avancé** (12 pts) : Sécurité, bonnes pratiques, outils

### 🌟 Bonus Optionnels (/5 points)
- Fonctionnalités avancées implémentées
- Qualité exceptionnelle du code
- Innovation dans l'UX/UI

## ✅ Checklist de Validation

### Avant de Soumettre
- [ ] ✅ Le site se charge sans erreur
- [ ] ✅ Les citations s'affichent correctement
- [ ] ✅ Le bouton "Nouvelle citation" fonctionne
- [ ] ✅ Les erreurs sont gérées gracieusement
- [ ] ✅ Le design s'adapte au mobile
- [ ] ✅ GitHub Pages est configuré et accessible
- [ ] ✅ Le fichier `evaluation.json` est complété
- [ ] ✅ Le code est commenté et lisible

### Tests Manuels Recommandés
```bash
# Test 1 : Fonctionnement normal
1. Rechargez la page
2. Vérifiez qu'une citation apparaît
3. Cliquez sur "Nouvelle citation"
4. Vérifiez le changement

# Test 2 : Gestion d'erreurs
1. Coupez votre connexion internet
2. Cliquez sur "Nouvelle citation"
3. Vérifiez qu'un message d'erreur apparaît
4. Reconnectez et réessayez

# Test 3 : Responsive
1. Ouvrez les outils développeur (F12)
2. Testez différentes tailles d'écran
3. Vérifiez la lisibilité sur mobile
```

## 📦 Livrable Final

### 🔗 URLs à Fournir
- **Repository GitHub** : `https://github.com/[USERNAME]/assignment-1-api-citations-[USERNAME]`
- **Site en ligne** : `https://[USERNAME].github.io/assignment-1-api-citations-[USERNAME]/`
- **Fichier évaluation** : Complété dans votre repository

### 📋 Contenu du Repository
```
✅ Code source complet et fonctionnel
✅ README.md personnalisé avec votre nom
✅ evaluation.json entièrement rempli
✅ Commits réguliers avec messages descriptifs
✅ GitHub Pages activé et opérationnel
```

## ⏰ Planning Recommandé

| Activité | Durée | Timing |
|----------|-------|--------|
| **Analyse du code fourni** | 10 min | 0-10 min |
| **Implémentation Étape 1-2** | 25 min | 10-35 min |
| **Implémentation Étape 3-4** | 20 min | 35-55 min |
| **Tests et débogage** | 15 min | 55-70 min |
| **QCM et finalisation** | 10 min | 70-80 min |
| **Déploiement et vérification** | 10 min | 80-90 min |

**⏱️ Deadline : Fin de séance + 30 minutes maximum**

## 🆘 Ressources d'Aide

### 📚 Documentation Officielle
- **API quotable.io** : https://quotable.io/
- **MDN fetch()** : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- **JavaScript async/await** : https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await

### 🔧 Outils de Debug
```javascript
// Dans la console du navigateur
debugCitations();     // État actuel de l'app
showFavoris();        // Voir les favoris sauvés
clearFavoris();       // Vider les favoris
```

### 🚨 Problèmes Courants
| Problème | Solution |
|----------|----------|
| **CORS Error** | L'API quotable.io autorise tous les domaines |
| **Citation ne s'affiche pas** | Vérifiez `response.ok` et le parsing JSON |
| **Bouton reste désactivé** | Assurez-vous de réactiver après chaque appel |
| **GitHub Pages 404** | Vérifiez que `index.html` est à la racine |

## 🎉 Pour Aller Plus Loin

### 🚀 Défis Additionnels
- **Thème sombre/clair** avec switch
- **Filtrage par auteur** (quotable.io le supporte)
- **Historique des citations** vues
- **Mode hors-ligne** avec Service Workers
- **Analyse de sentiment** de la citation

### 🏆 Projets Suivants
- **Assignment 2** : CRUD complet avec API
- **Assignment 3** : Application avec authentification
- **Assignment 4** : PWA avec notifications

---

**🎯 Objectif :** Créer une application web moderne qui consomme une API REST de manière élégante et robuste.

**🚀 Bon développement et n'hésitez pas à expérimenter !**

---
*Réalisé par l'équipe pédagogique BTS SIO SLAM - Année 2025-26*