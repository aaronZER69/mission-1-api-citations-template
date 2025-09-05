// ===== script.js =====
// Configuration de l'API
const API_URL = 'https://api.quotable.io/random';

// Éléments DOM
const loadingElement = document.getElementById('loading');
const citationContainer = document.getElementById('citation-container');
const errorContainer = document.getElementById('error-container');
const citationText = document.getElementById('citation-text');
const citationAuthor = document.getElementById('citation-author');
const btnNouvelle = document.getElementById('nouvelle-citation');

// ===== FONCTIONS PRINCIPALES =====

/**
 * TODO: Complétez cette fonction pour récupérer une citation via l'API
 * 
 * Instructions:
 * 1. Utilisez fetch() pour appeler API_URL
 * 2. Gérez les erreurs de réseau
 * 3. Convertissez la réponse en JSON
 * 4. Appelez afficherCitation() avec les données
 * 5. En cas d'erreur, appelez gererErreur()
 */
async function obtenirCitation() {
    try {
        // TODO: Afficher le loading
        afficherLoading();
        
        // TODO: Appel API avec fetch()
        const response = await fetch(API_URL);
        
        // TODO: Vérifier si la réponse est OK
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        // TODO: Convertir en JSON
        const data = await response.json();
        
        // TODO: Afficher la citation
        afficherCitation(data);
        
    } catch (error) {
        console.error('Erreur lors de la récupération:', error);
        gererErreur(error);
    }
}

/**
 * TODO: Complétez cette fonction pour afficher une citation
 * 
 * @param {Object} data - Données de l'API {content, author, length}
 */
function afficherCitation(data) {
    // TODO: Masquer loading et erreur
    masquerLoading();
    masquerErreur();
    
    // TODO: Remplir le contenu de la citation
    citationText.textContent = data.content;
    citationAuthor.textContent = data.author;
    
    // TODO: Afficher le container citation
    citationContainer.classList.remove('hidden');
    
    // TODO: Réactiver le bouton
    btnNouvelle.disabled = false;
}

/**
 * TODO: Complétez cette fonction pour gérer les erreurs
 * 
 * @param {Error} error - L'erreur à gérer
 */
function gererErreur(error) {
    // TODO: Masquer loading et citation
    masquerLoading();
    citationContainer.classList.add('hidden');
    
    // TODO: Afficher l'erreur
    errorContainer.classList.remove('hidden');
    
    // TODO: Réactiver le bouton
    btnNouvelle.disabled = false;
    
    // Log pour debug
    console.error('Erreur gérée:', error.message);
}

// ===== FONCTIONS UTILITAIRES =====

function afficherLoading() {
    loadingElement.classList.remove('hidden');
    citationContainer.classList.add('hidden');
    errorContainer.classList.add('hidden');
    btnNouvelle.disabled = true;
}

function masquerLoading() {
    loadingElement.classList.add('hidden');
}

function masquerErreur() {
    errorContainer.classList.add('hidden');
}

// ===== EVENT LISTENERS =====

// TODO: Ajoutez l'event listener pour le bouton "Nouvelle citation"
btnNouvelle.addEventListener('click', () => {
    // TODO: Appeler obtenirCitation()
    obtenirCitation();
});

// TODO: Ajoutez l'event listener pour le chargement initial de la page
document.addEventListener('DOMContentLoaded', () => {
    // TODO: Charger une première citation automatiquement
    obtenirCitation();
});

// ===== BONUS (Optionnel) =====

/**
 * Fonction bonus: Partage sur les réseaux sociaux
 * TODO (Bonus): Implémenter le partage de citation
 */
function partagerCitation() {
    const citation = citationText.textContent;
    const auteur = citationAuthor.textContent;
    const texte = `"${citation}" - ${auteur}`;
    
    if (navigator.share) {
        // API Web Share (mobile)
        navigator.share({
            title: 'Citation inspirante',
            text: texte,
            url: window.location.href
        });
    } else {
        // Fallback: copier dans le presse-papiers
        navigator.clipboard.writeText(texte).then(() => {
            alert('Citation copiée dans le presse-papiers !');
        });
    }
}

/**
 * Fonction bonus: Favoris local storage
 * TODO (Bonus): Sauvegarder les citations favorites
 */
function ajouterAuxFavoris() {
    const citation = {
        content: citationText.textContent,
        author: citationAuthor.textContent,
        date: new Date().toISOString()
    };
    
    // Récupérer favoris existants
    const favoris = JSON.parse(localStorage.getItem('citations-favoris') || '[]');
    
    // Ajouter nouvelle citation
    favoris.push(citation);
    
    // Sauvegarder
    localStorage.setItem('citations-favoris', JSON.stringify(favoris));
    
    alert('Citation ajoutée aux favoris !');
}