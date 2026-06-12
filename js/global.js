document.addEventListener("DOMContentLoaded", function () {
    // 1. On cible tous les éléments du DOM
    const inputDossier = document.getElementById("nomDossier");
    const inputCollab = document.getElementById("nomCollaborateur");
    const divOption = document.getElementById("divOption");
    const selectOption = document.getElementById("monChoix");
    const buttonValidation = document.getElementById("buttonValidation");
	const divQuestions = document.getElementById("divCas");
	const divTypologie = document.getElementById("divTypologie");

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
			divQuestions.classList.add("hide");
            buttonValidation.classList.add("hide");
			divTypologie.classList.add("hide");
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
			divTypologie.classList.add("hide");
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
    option.textContent = "Choisir secteur...";
	selectOption.appendChild(option);
	
	if (typeof dict_categories !== 'undefined' && selectOption) {
		for (const [cle, donnees] of Object.entries(dict_categories)){
			// Création d'une balise <option value="CODE">LABEL</option>
			const option_dyn = document.createElement("option");
			option_dyn.value = cle;
            option_dyn.textContent = donnees["label"];
			selectOption.appendChild(option_dyn);
		}
	}
});


document.addEventListener("DOMContentLoaded", function () {
	const selectTypologie = document.getElementById("monChoixTypologie");
	const option = document.createElement("option");
	option.value = "";
    option.textContent = "Choisir typologie...";
	selectTypologie.appendChild(option);
	
	if (typeof dict_secteur !== 'undefined' && selectTypologie) {
		for (const [cle, donnees] of Object.entries(dict_secteur)){
			// Création d'une balise <option value="CODE">LABEL</option>
			const option_dyn = document.createElement("option");
			option_dyn.value = cle;
            option_dyn.textContent = donnees["label"];
			selectTypologie.appendChild(option_dyn);
		}
	}
});


document.addEventListener("DOMContentLoaded", function () {
    const selectSecteur = document.getElementById("monChoix");
    const divQuestions = document.getElementById("divCas"); // Le conteneur HTML des questions

    selectSecteur.addEventListener("change", function (evenement) {
        const optionChoisie = evenement.target.value;
		const divTypologie = document.getElementById("divTypologie");
		divTypologie.classList.remove("hide");

        // 1. IMPORTANT : On vide le conteneur à chaque changement pour éviter l'accumulation
        divQuestions.innerHTML = "";

        if (optionChoisie === "") {
            return;
        }

        const donneesTypologie = dict_categories[optionChoisie];

        if (donneesTypologie) {
            const list_cas = donneesTypologie["cas"];		
			
            list_cas.forEach((cas) => {
                
                // On vérifie que la question existe bien dans ton dictionnaire de questions
                if (cas in dict_cas) {
                    const question_text = dict_cas[cas]["label"];

                    // --- CRÉATION DES ÉLÉMENTS HTML ---
                    
                    // Conteneur de la ligne (<div class="question-row">)
                    const main_div = document.createElement("div");
                    main_div.classList.add("question-row");

                    // Texte de la question (<span class="question-text">)
                    const span = document.createElement("span");
                    span.classList.add("question-title");
                    span.textContent = question_text;
					span.setAttribute("data-id-cas", cas);
					
					const ul = document.createElement("ul");
					ul.classList.add("question-ul");

                    // Conteneur du switch (<label class="switch">)
                    const label = document.createElement("label");
                    label.classList.add("switch");

                    // La checkbox (<input type="checkbox">)
                    const input = document.createElement("input");
                    input.setAttribute("type", "checkbox");
                    input.setAttribute("name", dict_cas[cas]["label"]);

                    // Le slider rond (<span class="slider round">)
                    const second_span = document.createElement("span");
                    second_span.classList.add("slider", "round");

                    // --- IMBRICATION DES ÉLÉMENTS (L'étape manquante !) ---
                    
                    // On assemble le switch : on met l'input et le slider DANS le label
                    label.appendChild(input);
                    label.appendChild(second_span);

                    // On assemble la ligne : on met le texte et le switch DANS la ligne
                    main_div.appendChild(span);
					span.appendChild(ul);
					
					// mettre en place boucle sur questions
					const list_questions_cas = dict_cas[cas]["procedure"]["questions_a_poser"]["text"];
					
					if(Array.isArray(list_questions_cas)){
						list_questions_cas.forEach((question) => {
							const li = document.createElement("li");
							li.classList.add("question-li");
							li.textContent = question;
							ul.appendChild(li);
						});	
					}
				
					main_div.appendChild(label);

                    // Enfin, on injecte la ligne complète dans le conteneur principal de la page
                    divQuestions.appendChild(main_div);
                }
            }); 
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const selectTypologie = document.getElementById("monChoixTypologie");

    selectTypologie.addEventListener("change", function (evenement) {
       const optionChoisie = evenement.target.value;
	   
	   // si une option est choisit on requête le dict des typologie pour retrouver notre typologie "question_background" css
	   // récupérer les cas associés à cette typologie depuis notre balise "div" avec la classe "question_row" et on les passe avec un background vert clair
	   
       if (optionChoisie === "") {
            return;
       }
    });

});
