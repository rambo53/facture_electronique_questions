document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // CHARGEMENT DES SECTEURS
    // =========================

    const selectOption = document.getElementById("activitySector");

    if (selectOption) {
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "-- Choisir secteur --";
        option.selected = true;
        option.disabled = true;
        selectOption.appendChild(option);

        if (typeof dict_secteur !== "undefined") {
			// Tri par ordre alphabétique selon la clé (a[0] vs b[0])
            const secteursTries = Object.entries(dict_secteur).sort((a, b) => 
                a[0].localeCompare(b[0])
            );
			
            for (const [cle, donnees] of secteursTries) {
                const option_dyn = document.createElement("option");
                option_dyn.value = cle;
                option_dyn.textContent = donnees["label"];
                selectOption.appendChild(option_dyn);
            }
        }
    }


    // =========================
    // CHARGEMENT DES CATÉGORIES / CAS / QUESTIONS
    // =========================

    const categTemplate = document.getElementById("category-template");
    const questTemplate = document.getElementById("question-template");
    const globalContainer = document.getElementById("categories-container");

    if (categTemplate && questTemplate && globalContainer) {

        for (const [key, category] of Object.entries(dict_categories)) {

            const clone = categTemplate.content.cloneNode(true);

            const radioOui = clone.querySelector(".radio-oui");
            const radioNon = clone.querySelector(".radio-non");
            const labelOui = clone.querySelector(".btn-oui");
            const labelNon = clone.querySelector(".btn-non");

            clone.querySelector(".category-title").textContent = category.label;

            const uniqueCateg = `cat-${key}`;
            clone.querySelector(".categ-div").id = uniqueCateg;

            const nameGroup = uniqueCateg + "-master";

            radioOui.name = nameGroup;
            radioOui.id = uniqueCateg + "-oui";
            labelOui.setAttribute("for", uniqueCateg + "-oui");
            radioOui.addEventListener("change", () => toggleCategory(key, true));

			radioNon.name = nameGroup;
			radioNon.id = uniqueCateg + "-non";
			labelNon.setAttribute("for", uniqueCateg + "-non");
			radioNon.addEventListener("change", () => toggleCategory(key, false));

			// Catégorie ouverte par défaut
			radioOui.checked = true;
			radioNon.checked = false;
			clone.querySelector(".categ-div").classList.remove("disabled");
			setTimeout(() => toggleCategory(key, true), 0);

            const questionsContainer = clone.querySelector(".questions-container");
            questionsContainer.id = `questions-${key}`;

            for (const cas of category.cas) {

                if (cas in dict_cas) {

                    // Bloc complet du cas
                    const casBlock = document.createElement("div");
                    casBlock.className = "cas-block";
                    casBlock.id = "bloc-" + cas;
                    casBlock.dataset.cas = cas;

                    const process_key = "procedure";
                    const label_cas = dict_cas[cas]["label"];

                    const h3 = document.createElement("h3");
                    h3.textContent = label_cas;
                    h3.id = cas;

                    casBlock.appendChild(h3);

                    if (process_key in dict_cas[cas]) {

                        const process = dict_cas[cas][process_key];
                        const questions_a_poser_key = "questions_a_poser";

                        if (questions_a_poser_key in process) {

                            let questionIndex = 1;

                            for (const question of process[questions_a_poser_key]["text"]) {

                                const questClone = questTemplate.content.cloneNode(true);
                                const uniqueName = `q_${key}_${cas}_${questionIndex}`;

                                questClone.querySelector(".question-main").textContent = question;

                                const qRadioOui = questClone.querySelector(".q-radio-oui");
                                const qRadioNon = questClone.querySelector(".q-radio-non");
                                const qLabelOui = questClone.querySelector(".q-label-oui");
                                const qLabelNon = questClone.querySelector(".q-label-non");

                                qRadioOui.name = uniqueName;
                                qRadioOui.id = `${uniqueName}-oui`;
                                qLabelOui.setAttribute("for", `${uniqueName}-oui`);

                                qRadioNon.name = uniqueName;
                                qRadioNon.id = `${uniqueName}-non`;
                                qLabelNon.setAttribute("for", `${uniqueName}-non`);

                                casBlock.appendChild(questClone);

                                questionIndex++;
                            }
                        }
                    }

                    questionsContainer.appendChild(casBlock);
                }
            }

            globalContainer.appendChild(clone);
        }
    }


    // =========================
    // SURBRILLANCE PAR SECTEUR
    // =========================

    const selectTypologie = document.getElementById("activitySector");

    if (selectTypologie) {

        selectTypologie.addEventListener("change", function (evenement) {

            const optionChoisie = evenement.target.value;

            if (optionChoisie === "") {
                return;
            }

            const categ_container = document.getElementById("categories-container");

            if (!categ_container) {
                return;
            }

            // Nettoyage des anciens cas verts
            categ_container
                .querySelectorAll(".cas-block.cas_background")
                .forEach(bloc => bloc.classList.remove("cas_background"));

            if (optionChoisie in dict_secteur) {

                const dict_secteur_option = dict_secteur[optionChoisie];

                if ("cas" in dict_secteur_option) {

                    for (const cas of dict_secteur_option["cas"]) {

                        const bloc = document.getElementById("bloc-" + cas);

                        if (bloc) {
                            bloc.classList.add("cas_background");
                        }
                    }
                }
            }
        });
    }


    // =========================
    // EXPORT PDF
    // =========================

    const form = document.getElementById("classificationForm");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const element = document.getElementById("template-pdf");

            if (!element) {
                console.error("L'élément #template-pdf n'existe pas dans le DOM.");
                return;
            }

			const client_name = document.getElementById("clientName").value;
			const collab_name = document.getElementById("collabName").value;
			const date_rdv = document.getElementById("appointmentDate").value;
			const client_activity_select = document.getElementById("activitySector");
			const client_activity = client_activity_select.options[client_activity_select.selectedIndex]?.textContent || "";
			const free_notes = document.getElementById("freeNotes").value.trim();

			document.getElementById("client_name").textContent = client_name;
			document.getElementById("collab_name").textContent = collab_name;
			document.getElementById("date_rdv").textContent = date_rdv;
			document.getElementById("client_activity").textContent = client_activity;
			document.getElementById("pdf_free_notes").textContent = free_notes || "Aucune note";

            const container = document.getElementById("categories-container");
            const elementsActifs = container.querySelectorAll("div.categ-div:not(.disabled)");

            const ul = document.getElementById("cas-ok");
            ul.innerHTML = "";

            let dictCasKey = {};

            for (const div_categ of elementsActifs) {

                const categ = div_categ.querySelector("h2").textContent;
				const casBlocks = div_categ.querySelectorAll(".cas-block");

				for (const casBlock of casBlocks) {

				const casTitre = casBlock.querySelector("h3");
				const auMoinsUnOui = casBlock.querySelector('.q-radio-oui:checked');

				const remarks = casBlock.querySelectorAll(".question-remark");
				const notes = [];

				remarks.forEach(input => {
					const valeur = input.value.trim();

					if (valeur !== "") {
						const question = input
							.closest(".question-item")
							.querySelector(".question-main")
							.textContent;

						notes.push(question + " : " + valeur);
					}
				});

				// On remonte le cas si au moins une réponse est OUI
				// OU si au moins une note est renseignée
				if (!auMoinsUnOui && notes.length === 0) {
					continue;
				}

				const li = document.createElement("li");
				const cas_text = casTitre.textContent;

				// IMPORTANT :
					// On ajoute la fiche détaillée uniquement si au moins une réponse est à OUI.
					// Une simple note permet d'afficher le cas dans la liste "Cas traités",
					// mais ne doit pas faire remonter la fiche complète du cas.
					if (auMoinsUnOui) {
						dictCasKey[casTitre.id] = dict_cas[casTitre.id];
					}

				li.textContent = categ + " : " + cas_text;

				if (notes.length > 0) {
					const sousListe = document.createElement("ul");

					notes.forEach(note => {
						const noteLi = document.createElement("li");
						noteLi.textContent = note;
						sousListe.appendChild(noteLi);
					});

					li.appendChild(sousListe);
				}

				ul.appendChild(li);
				}
            }

            const div_table_main = document.getElementById("div-table-main");
            div_table_main.innerHTML = "";

            for (const [cas_key, cas_data] of Object.entries(dictCasKey)) {

                const div_table = document.getElementById("template-table");
                const clone_table = div_table.content.cloneNode(true);

                const h3_table = clone_table.querySelector("h3");
                h3_table.textContent = cas_data["label"];

                const tbody_table = clone_table.querySelector("tbody");

                for (const [key_process, process_data] of Object.entries(cas_data["procedure"])) {

                    const tr = document.createElement("tr");
                    const th = document.createElement("th");
                    const td = document.createElement("td");

                    th.textContent = process_data["label"];

                    if (Array.isArray(process_data["text"])) {
                        td.innerHTML = process_data["text"]
                            .map(t => `<p>${t}</p>`)
                            .join("");
                    } else {
                        td.textContent = process_data["text"];
                    }

                    tr.appendChild(th);
                    tr.appendChild(td);
                    tbody_table.appendChild(tr);
                }

                
					// Chaque cas est placé dans un conteneur dédié
					const wrapperCas = document.createElement("div");
					wrapperCas.className = "pdf-cas-page";

					wrapperCas.appendChild(clone_table);

					div_table_main.appendChild(wrapperCas);
            }

            element.classList.remove("hide");

				const options = {
					margin: 10,
					filename: "mon_document.pdf",
					image: {
						type: "jpeg",
						quality: 0.98
					},
					html2canvas: {
						scale: 2,
						logging: false,
						useCORS: true
					},
					jsPDF: {
						unit: "mm",
						format: "a4",
						orientation: "portrait"
					},
					pagebreak: {
						mode: ["css", "legacy"],
						before: ".pdf-cas-page",
						avoid: ["tr", "td", "th"]
					}
				};

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


	// =========================
	// ACTIVATION / DÉSACTIVATION CATÉGORIE
	// =========================

	function toggleCategory(catLetter, isEnabled) {

		const block = document.getElementById("cat-" + catLetter);
		const container = document.getElementById("questions-" + catLetter);

		if (!block || !container) {
			return;
		}

		const radioButtons = container.querySelectorAll('input[type="radio"]');
		const remarkInputs = container.querySelectorAll(".question-remark");

		if (!isEnabled) {

			block.classList.add("disabled");

			remarkInputs.forEach(input => {
				input.disabled = true;
				input.value = "";
			});

			radioButtons.forEach(radio => {
				radio.disabled = true;

				if (radio.value === "NON") {
					radio.checked = true;
				} else {
					radio.checked = false;
				}
			});

		} else {

			block.classList.remove("disabled");

			remarkInputs.forEach(input => {
				input.disabled = false;
			});

			radioButtons.forEach(radio => {
				radio.disabled = false;
			});
		}
	}
