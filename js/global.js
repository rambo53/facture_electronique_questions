document.addEventListener("DOMContentLoaded", function () {
    // 1. On cible tous les éléments du DOM
    const inputDossier = document.getElementById("nomDossier");
    const inputCollab = document.getElementById("nomCollaborateur");
    const divOption = document.getElementById("divOption");
    const selectOption = document.getElementById("monChoix");
    const buttonValidation = document.getElementById("buttonValidation");

    // 2. Fonction principale de vérification
    function verifierFormulaire() {
        // Récupération des valeurs en nettoyant les espaces inutiles
        const valeurDossier = inputDossier.value.trim();
        const valeurCollab = inputCollab.value.trim();
        const valeurSelect = selectOption ? selectOption.value : "";

        // Condition A : Le dossier est rempli
        const dossierValide = valeurDossier !== "";

        // Condition B : Le collaborateur contient EXACTEMENT 3 lettres majuscules
        const regexTroisMajuscules = /^[A-Z]{3}$/;
        const collabValide = regexTroisMajuscules.test(valeurCollab);

        // --- ÉTAPE 1 : Gestion de l'affichage de la liste déroulante ---
        if (dossierValide && collabValide) {
            divOption.classList.remove("hide");
        } else {
            divOption.classList.add("hide");
            // Sécurité : Si on recache la liste, on réinitialise sa valeur et on cache le bouton
            if (selectOption) selectOption.value = ""; 
            buttonValidation.classList.add("hide");
            return; // On s'arrête là si les premiers inputs ne sont plus valides
        }

        // --- ÉTAPE 2 : Gestion de l'affichage du bouton Valider ---
        // Condition C : Une option de la liste a été sélectionnée (valeur non vide)
        const selectValide = valeurSelect !== "";

        if (selectValide) {
            buttonValidation.classList.remove("hide");
			divQuestions.classList.remove("hide");
			
        } else {
            buttonValidation.classList.add("hide");
			divQuestions.classList.add("hide");
        }
    }

    // 3. Écoute des événements sur les différents champs
    inputDossier.addEventListener("input", verifierFormulaire);
    inputCollab.addEventListener("input", verifierFormulaire);
    
    if (selectOption) {
        selectOption.addEventListener("change", verifierFormulaire);
    }
});