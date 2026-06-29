document.addEventListener("DOMContentLoaded", function () {
	const selectOption = document.getElementById("activitySector");
	const option = document.createElement("option");
	option.value = "";
    option.textContent = "-- Choisir secteur --";
	option.selected = true;
	option.disabled = true;
	selectOption.appendChild(option);
	
	if (typeof dict_secteur !== 'undefined' && selectOption) {
		for (const [cle, donnees] of Object.entries(dict_secteur)){
			// Création d'une balise <option value="CODE">LABEL</option>
			const option_dyn = document.createElement("option");
			option_dyn.value = cle;
            option_dyn.textContent = donnees["label"];
			selectOption.appendChild(option_dyn);
		}
	}
});


document.addEventListener("DOMContentLoaded", function () {
	const categTemplate = document.getElementById('category-template');
	const questTemplate = document.getElementById('question-template');
	const globalContainer = document.getElementById('categories-container');
	
	for (const [key, category] of Object.entries(dict_categories)) {
		const clone = categTemplate.content.cloneNode(true);
		const radioOui = clone.querySelector('.radio-oui');
		const radioNon = clone.querySelector('.radio-non');
		const labelOui = clone.querySelector('.btn-oui');
		const labelNon = clone.querySelector('.btn-non');
	
		clone.querySelector('.category-title').textContent = category.label;
		
		const uniqueCateg = `cat-${key}`;
		clone.querySelector('.categ-div').id = uniqueCateg
		
		const nameGroup = uniqueCateg + `-master`;
    
		// Configuration Radio OUI
		radioOui.name = nameGroup;
		radioOui.id = uniqueCateg+`-oui`;
		labelOui.setAttribute('for', uniqueCateg+`-oui`);
		radioOui.addEventListener('change', () => toggleCategory(key, true));
		
		// Configuration Radio NON
		radioNon.name = nameGroup;
		radioNon.id = uniqueCateg+`-non`;
		labelNon.setAttribute('for', uniqueCateg+`-non`);
		radioNon.addEventListener('change', () => toggleCategory(key, false));
		
		const questionsContainer = clone.querySelector('.questions-container');
		
		questionsContainer.id = `questions-${key}`;
		
		for (const cas of category.cas) {
			if(cas in dict_cas){
				const process_key = "procedure";
				const label_cas = dict_cas[cas]["label"];
				const h3 = document.createElement("h3");
				h3.textContent = label_cas;
				h3.id = cas
				questionsContainer.appendChild(h3);
				
				if(process_key in dict_cas[cas]){
					const process = dict_cas[cas][process_key]
					const questions_a_poser_key = "questions_a_poser"
					if(questions_a_poser_key in process){
						let questionIndex = 1;
						for (const question of process[questions_a_poser_key]["text"]){
							const questClone = questTemplate.content.cloneNode(true);
							const uniqueName = `q_${key}_${cas}_${questionIndex}`;
							
							questClone.querySelector('.question-main').textContent = question;
							
							const radioOui = questClone.querySelector('.q-radio-oui');
							const radioNon = questClone.querySelector('.q-radio-non');
							const labelOui = questClone.querySelector('.q-label-oui');
							const labelNon = questClone.querySelector('.q-label-non');
							
							radioOui.name = uniqueName;
							radioOui.id = `${uniqueName}-oui`;
							labelOui.setAttribute('for', `${uniqueName}-oui`);
							
							radioNon.name = uniqueName;
							radioNon.id = `${uniqueName}-non`;
							labelNon.setAttribute('for', `${uniqueName}-non`);
	
							questionIndex++;
							questionsContainer.appendChild(questClone);
						}
					}
				}
			}
		}
				
		globalContainer.appendChild(clone);
	}
});
	

function toggleCategory(catLetter, isEnabled) {
	
        const block = document.getElementById('cat-' + catLetter);
        const container = document.getElementById('questions-' + catLetter);
        const radioButtons = container.querySelectorAll('input[type="radio"]');
        const remarkInputs = container.querySelectorAll('.question-remark');

        if (!isEnabled) {
            block.classList.add('disabled');
            
            remarkInputs.forEach(input => {
                input.disabled = true;
                input.value = ''; 
            });

            radioButtons.forEach(radio => {
                radio.disabled = true;
                if (radio.value === 'NON') {
                    radio.checked = true;
                } else {
                    radio.checked = false;
                }
            });
        } else {
            block.classList.remove('disabled');
            
            remarkInputs.forEach(input => {
                input.disabled = false;
            });

            radioButtons.forEach(radio => {
                radio.disabled = false;
            });
        }
    }


document.addEventListener("DOMContentLoaded", function () {
    const selectTypologie = document.getElementById("activitySector");

    selectTypologie.addEventListener("change", function (evenement) {
       const optionChoisie = evenement.target.value;
	   
	   if (optionChoisie === "") {
            return;
       }
	   
	   // si une option est choisit on requête le dict des typologie pour retrouver notre typologie "cas_background" css
	   // récupérer les cas associés à cette typologie depuis notre balise "div" avec la classe "question_row" et on les passe avec un background vert clair
	   if(optionChoisie in dict_secteur){
		   const dict_secteur_option = dict_secteur[optionChoisie];
		   const cas_key = "cas";
		   
		   const categ_container = document.getElementById("categories-container");
		   const list_background_green = categ_container.querySelectorAll('.cas_background');
		   
		   for (const element_green of list_background_green){
				element_green.classList.remove("cas_background");
			}
		   
		   
		   if(cas_key in dict_secteur_option){
			   for (const cas of dict_secteur_option[cas_key]){
				   const cas_element = document.getElementById(cas);
				   cas_element.classList.add("cas_background");
				   const divs = document.querySelectorAll('h3 ~ div');
				   
				   for (const div of divs){
					   div.classList.add("cas_background");
				   }
			   }
		   }
	   }
	   
    });

});


document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById('classificationForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop la soumission native immédiatement
            
            const element = document.getElementById('template-pdf');
            
            if (!element) {
                console.error("L'élément #template-pdf n'existe pas dans le DOM.");
                return;
            }
			
			const client_name = document.getElementById("clientName").value;
			const collab_name = document.getElementById("collabName").value;
			const date_rdv = document.getElementById("appointmentDate").value;
			const client_activity = document.getElementById("activitySector").value;
			
			document.getElementById('client_name').textContent = client_name;
			document.getElementById('collab_name').textContent = collab_name;
			document.getElementById('date_rdv').textContent = date_rdv;
			document.getElementById('client_activity').textContent = client_activity;
			
			const container = document.getElementById('categories-container');
			const elementsActifs = container.querySelectorAll('div.categ-div:not(.disabled)');
			
			const ul = document.getElementById("cas-ok");
			
			let dictCasKey = {};
			
			for(const div_categ of elementsActifs){
				const categ = div_categ.querySelector('h2').textContent;
				const casActifs = div_categ.querySelectorAll('h3');
				
				for(const cas of casActifs){
					const li = document.createElement("li");
					const cas_text = cas.textContent;
					dictCasKey[cas.id] = dict_cas[cas.id]
					cas.id
					li.textContent = categ + " : " + cas_text;
					ul.appendChild(li);
				}				
			};
			
			const div_table_main = document.getElementById('div-table-main');
			
			for (const [cas_key, cas_data] of Object.entries(dictCasKey)){
				const div_table = document.getElementById('template-table');
				const clone_table = div_table.content.cloneNode(true);
				const h3_table = clone_table.querySelector('h3');
				h3_table.textContent = cas_data["label"];
				div_table_main.appendChild(clone_table);
			};
			
			element.classList.remove("hide");

            // Options configurées proprement
            const options = {
                margin:       10,
                filename:     'mon_document.pdf',
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { 
                    scale: 2, 
                    logging: false, // Change à true si tu veux debugger l'image interne
                    useCORS: true   // Évite les blocages d'images si tu en ajoutes
                }, 
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };
            
            // Version chaînée (worker pattern) recommandée par la documentation de html2pdf
            html2pdf()
                .set(options)
                .from(element)
                .save()
                .catch(err => {
                    console.error("Erreur html2pdf :", err);
                });
        });
    }
});
