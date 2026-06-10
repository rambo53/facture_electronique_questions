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


document.addEventListener("DOMContentLoaded", function () {
	const selectOption = document.getElementById("monChoix");
	const option = document.createElement("option");
	option.value = "";
    option.textContent = "Choisir typologie...";
	selectOption.appendChild(option);
	
	if (typeof dict_typologie !== 'undefined' && selectOption) {
		for (const [cle, donnees] of Object.entries(dict_typologie)){
			// Création d'une balise <option value="CODE">LABEL</option>
			const option_dyn = document.createElement("option");
			option_dyn.value = cle;
            option_dyn.textContent = donnees["label"];
			selectOption.appendChild(option_dyn);
		}
	}
});

document.addEventListener("DOMContentLoaded", function () {
    const selectTypologie = document.getElementById("monChoix");
    const divQuestions = document.getElementById("divQuestions"); // Le conteneur HTML des questions

    selectTypologie.addEventListener("change", function (evenement) {
        const optionChoisie = evenement.target.value; 

        // 1. IMPORTANT : On vide le conteneur à chaque changement pour éviter l'accumulation
        divQuestions.innerHTML = "";

        if (optionChoisie === "") {
            return;
        }

        const donneesTypologie = dict_typologie[optionChoisie];

        if (donneesTypologie) {
            const list_questions = donneesTypologie["questions"];			
			
            // 2. Correction des accolades { } pour le forEach
            list_questions.forEach((question) => {
                
                // On vérifie que la question existe bien dans ton dictionnaire de questions
                if (question in dict_questions) {
                    const question_text = dict_questions[question]["question"];

                    // --- CRÉATION DES ÉLÉMENTS HTML ---
                    
                    // Conteneur de la ligne (<div class="question-row">)
                    const main_div = document.createElement("div");
                    main_div.classList.add("question-row");

                    // Texte de la question (<span class="question-text">)
                    const span = document.createElement("span");
                    span.classList.add("question-text");
                    span.textContent = question_text;

                    // Conteneur du switch (<label class="switch">)
                    const label = document.createElement("label");
                    label.classList.add("switch");

                    // La checkbox (<input type="checkbox">)
                    const input = document.createElement("input");
                    input.setAttribute("type", "checkbox");
                    input.setAttribute("name", dict_questions[question]["cas"]);

                    // Le slider rond (<span class="slider round">)
                    const second_span = document.createElement("span");
                    second_span.classList.add("slider", "round");

                    // --- IMBRICATION DES ÉLÉMENTS (L'étape manquante !) ---
                    
                    // On assemble le switch : on met l'input et le slider DANS le label
                    label.appendChild(input);
                    label.appendChild(second_span);

                    // On assemble la ligne : on met le texte et le switch DANS la ligne
                    main_div.appendChild(span);
                    main_div.appendChild(label);

                    // Enfin, on injecte la ligne complète dans le conteneur principal de la page
                    divQuestions.appendChild(main_div);
                }
            }); 
        }
    });
});

