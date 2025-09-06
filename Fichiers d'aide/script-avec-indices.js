// ===== SCRIPT AVEC SYSTÈME D'INDICES INTÉGRÉ =====

// Configuration
const API_URL = 'https://api.quotable.io/random';

// Éléments DOM (pré-déclarés)
const loadingElement = document.getElementById('loading');
const citationContainer = document.getElementById('citation-container');
const citationText = document.getElementById('citation-text');
const citationAuthor = document.getElementById('citation-author');
const btnNouvelle = document.getElementById('nouvelle-citation');

// ===== SYSTÈME D'INDICES SIMPLE =====
let tentatives = {};

function obtenirIndice(action) {
    const count = tentatives[action] = (tentatives[action] || 0) + 1;
    
    const indices = {
        'fetch-api': [
            "💡 Utilisez la fonction fetch() avec l'URL de l'API",
            "📝 Syntaxe : fetch(API_URL)",
            "🎯 N'oubliez pas 'await' devant fetch()",
            "✅ Solution : const response = await fetch(API_URL);"
        ],
        'response-json': [
            "💡 Utilisez .json() pour convertir la réponse",
            "📝 Syntaxe : response.json()",
            "🎯 N'oubliez pas 'await' devant response.json()",
            "✅ Solution : const data = await response.json();"
        ],
        'dom-selection': [
            "💡 Utilisez document.getElementById()",
            "📝 Cherchez l'élément avec l'ID 'citation-text'",
            "🎯 Stockez dans une variable",
            "✅ Solution : document.getElementById('citation-text')"
        ]
    };
    
    const actionIndices = indices[action];
    if (actionIndices && count <= actionIndices.length) {
        const indice = actionIndices[count - 1];
        console.log(`🆘 Indice ${count}/${actionIndices.length} pour ${action}:`);
        console.log(indice);
        
        if (count === actionIndices.length) {
            console.log("💡 Tapez aide.solution('" + action + "') pour insérer la solution");
        }
        
        return indice;
    } else {
        console.log("✅ Plus d'indices disponibles pour " + action);
        return null;
    }
}

// Assistant d'aide simple
window.aide = {
    fetch: () => obtenirIndice('fetch-api'),
    json: () => obtenirIndice('response-json'),
    dom: () => obtenirIndice('dom-selection'),
    
    solution: (action) => {
        const solutions = {
            'fetch-api': 'const response = await fetch(API_URL);',
            'response-json': 'const data = await response.json();',
            'dom-selection': 'const element = document.getElementById("citation-text");'
        };
        
        if (solutions[action]) {
            console.log("✅ Solution pour " + action + ":");
            console.log(solutions[action]);
            console.log("📋 Copiez-collez cette ligne dans votre code");
        }
    },
    
    reset: () => {
        tentatives = {};
        console.log("🔄 Compteur d'indices remis à zéro");
    }
};

//
// ===== ÉTAPE 1 : APPEL API (À COMPLÉTER) =====
/*
🎯 MISSION : Récupérer une citation depuis l'API

📖 THÉORIE :
fetch() permet de récupérer des données depuis internet
async/await permet d'attendre la réponse

💡 AIDE DISPONIBLE :
- aide.fetch() : indices pour fetch()
- aide.json() : indices pour .json()
- aide.solution('fetch-api') : solution complète
*/

async function obtenirCitation() {
   try {
       // 🎯 TODO 1.1 : Faire l'appel API
       // Complétez cette ligne (remplacez les ???) :
       const response = ??? fetch(???);
       
       // 🧪 CHECKPOINT : Vérifiez la réponse
       console.log('📥 Réponse reçue:', response);
       
       // 🎯 TODO 1.2 : Vérifier si la réponse est OK
       if (!response.ok) {
           throw new Error(`Erreur HTTP: ${response.status}`);
       }
       
       // 🎯 TODO 1.3 : Convertir en JSON
       // Complétez cette ligne :
       const data = ??? response.???();
       
       // 🧪 CHECKPOINT : Vérifiez les données
       console.log('✅ Données reçues:', data);
       
       // 🎯 TODO 1.4 : Afficher la citation
       afficherCitation(data);
       
   } catch (error) {
       console.error('❌ Erreur:', error);
       // Si vous avez une erreur, regardez la console !
       // Tapez aide.fetch() pour avoir de l'aide
   }
}

// ===== ÉTAPE 2 : AFFICHAGE DOM (À COMPLÉTER) =====
/*
🎯 MISSION : Afficher la citation dans la page

📖 THÉORIE :
document.getElementById() sélectionne un élément HTML
element.textContent modifie le texte affiché

💡 AIDE : aide.dom() pour les indices
*/

function afficherCitation(data) {
   // 🎯 TODO 2.1 : Sélectionner l'élément citation
   // Complétez cette ligne :
   const elementCitation = document.???(???);
   
   // 🎯 TODO 2.2 : Afficher le texte de la citation
   // Complétez cette ligne :
   elementCitation.??? = data.???;
   
   // 🎯 TODO 2.3 : Sélectionner et afficher l'auteur
   const elementAuteur = document.getElementById('citation-author');
   elementAuteur.textContent = data.author;
   
   // 🎯 TODO 2.4 : Masquer le loading et afficher la citation
   loadingElement.classList.add('hidden');
   citationContainer.classList.remove('hidden');
   
   console.log('✅ Citation affichée !');
}

// ===== FONCTION DE VALIDATION AUTOMATIQUE =====
function testerMonCode() {
   console.log('🧪 Test de votre code...');
   
   // Test 1 : Fonction existe
   if (typeof obtenirCitation !== 'function') {
       console.error('❌ La fonction obtenirCitation() n\'existe pas');
       return;
   }
   
   // Test 2 : Appel de test
   obtenirCitation()
       .then(() => {
           console.log('✅ Test réussi ! Votre code fonctionne.');
           console.log('🎉 Bravo ! Vous pouvez passer à l\'étape suivante.');
       })
       .catch(error => {
           console.error('❌ Test échoué:', error.message);
           console.log('💡 Utilisez les indices : aide.fetch() ou aide.json()');
       });
}

// ===== ÉVÉNEMENTS (DÉJÀ FONCTIONNELS) =====
document.addEventListener('DOMContentLoaded', () => {
   console.log('🚀 Page chargée !');
   console.log('💡 Aide disponible :');
   console.log('- aide.fetch() : indices pour fetch()');
   console.log('- aide.json() : indices pour .json()');
   console.log('- aide.dom() : indices pour DOM');
   console.log('- testerMonCode() : teste votre code');
   
   // Première citation au chargement
   setTimeout(obtenirCitation, 500);
});

// Bouton nouvelle citation
if (btnNouvelle) {
   btnNouvelle.addEventListener('click', obtenirCitation);
}

// ===== FONCTIONS UTILITAIRES (DÉJÀ COMPLÈTES) =====
function afficherLoading() {
   loadingElement.classList.remove('hidden');
   citationContainer.classList.add('hidden');
   btnNouvelle.disabled = true;
   btnNouvelle.textContent = '⏳ Chargement...';
}

function masquerLoading() {
   loadingElement.classList.add('hidden');
   btnNouvelle.disabled = false;
   btnNouvelle.textContent = '🔄 Nouvelle Citation';
}

// ===== DEBUG HELPER (BONUS) =====
window.debug = {
   testAPI: () => {
       console.log('🧪 Test direct de l\'API...');
       fetch('https://api.quotable.io/random')
           .then(r => r.json())
           .then(data => {
               console.log('✅ API fonctionne :', data);
               console.log(`📝 Citation: "${data.content}"`);
               console.log(`👤 Auteur: ${data.author}`);
           })
           .catch(e => console.error('❌ Erreur API:', e));
   },
   
   checkDOM: () => {
       const elements = ['citation-text', 'citation-author', 'loading'];
       elements.forEach(id => {
           const el = document.getElementById(id);
           console.log(el ? `✅ ${id} trouvé` : `❌ ${id} manquant`);
       });
   }
};

console.log('🔧 Debug disponible : debug.testAPI() et debug.checkDOM()');