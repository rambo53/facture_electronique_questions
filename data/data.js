const dict_categories = {
	"tiers_payeur": {
		"label": "Tiers payeur",
		"cas" :[
			"c_2",
			"c_3"
		]
	},
	"facturation_multi_flux": {
		"label": "Facturation multi-flux",
		"cas" :[
			"c_1"
		]
	},
	"affacturage": {
		"label": "Affacturage",
		"cas" :[

		]
	},
	"intermediaires_mandats": {
		"label": "Intermédiaires / Mandats",
		"cas" :[

		]
	},
	"soustraitance_cotraitance": {
		"label": "Sous-traitance / Co-traitance",
		"cas" :[

		]
	},
	"encaissements": {
		"label": "Encaissements",
		"cas" :[

		]
	},
	"auto_facturation": {
		"label": "Auto-facturation",
		"cas" :[

		]
	},
	"acomptes_conditions_de_paiement": {
		"label": "Acomptes / Conditions de paiement",
		"cas" :[

		]
	},
	"moyens_de_paiement": {
		"label": "Moyens de paiement",
		"cas" :[

		]
	},
	"cas_sectoriels": {
		"label": "Cas sectoriels",
		"cas" :[

		]
	},
	"regimes_tva specifiques": {
		"label": "Régimes TVA spécifiques",
		"cas" :[

		]
	},
	"international": {
		"label": "International",
		"cas" :[

		]
	}
}

const dict_secteur = {
    "btp": {
        "label": "BTP",
		"cas" :[
			"c_2"
		]
    },
    "construction": {
        "label": "Construction"
    },
    "it": {
        "label": "IT"
    },
    "telecom": {
        "label": "Télécom"
    },
    "commerce": {
        "label": "Commerce"
    },
    "distribution": {
        "label": "Distribution"
    },
    "e_commerce": {
        "label": "E-commerce"
    },
    "marketplaces": {
        "label": "Marketplaces"
    },
    "professions_liberales": {
        "label": "Professions libérales"
    },
    "transport": {
        "label": "Transport"
    },
    "logistique": {
        "label": "Logistique"
    },
    "banque": {
        "label": "Banque"
    },
    "assurance": {
        "label": "Assurance"
    },
    "immobilier": {
        "label": "Immobilier"
    },
    "energie": {
        "label": "Énergie"
    },
    "industrie": {
        "label": "Industrie"
    },
    "manufacturing": {
        "label": "Manufacturing"
    },
    "luxe": {
        "label": "Luxe"
    },
    "mode": {
        "label": "Mode"
    },
    "restauration": {
        "label": "Restauration"
    },
    "hotellerie": {
        "label": "Hôtellerie"
    },
    "sante": {
        "label": "Santé"
    },
    "pharma": {
        "label": "Pharma"
    },
    "international": {
        "label": "International"
    },
    "outre_mer": {
        "label": "Outre-mer"
    }
};

const dict_cas = {
	"c_1":{
		"label" : "CAS 1 - Une facture pour plusieurs commandes ou livraisons",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			},
		}
	},
	"c_2":{
		"label" : "CAS 2 - Facture déjà réglée à l’émission",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ["Le paiement intervient-il avant ou au moment de la facture ?",
							"Le montant est-il réglé en totalité ?",
							"Le moyen de paiement est-il connu ?",
							"Existe-t-il un risque d’annulation ou de remboursement ultérieur ?"
				]
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_3": {
		"label" : "CAS 3 - Facture payée par un tiers ",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				]
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_4": {
		"label" : "CAS 4 - Facture partiellement payée par l'acheteur",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_5": {
		"label" : "CAS 5 - Frais avec facture au nom de l'entreprise",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_6": {
		"label" : "CAS 6 - Frais sans facture au nom de l'entreprise",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_7": {
		"label" : "CAS 7 - Paiement par carte d'entreprise",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_8": {
		"label" : "CAS 8 - Affacturage ou facture à régler à un tiers connu",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_9": {
		"label" : "CAS 9 - Facture à régler à un tiers connu gérant aussi la commande ou la livraison",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_10": {
		"label" : "CAS 10 - Affacturage avec tiers inconnu à l'émission",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_11": {
		"label" : "CAS 11 - Facture reçue et traitée par un tiers pour l'acheteur",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_12": {
		"label" : "CAS 12 - Intermédiaire côté acheteur gérant la facture",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_13": {
		"label" : "CAS 13 - Sous-traitance avec paiement direct",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_14": {
		"label" : "CAS 14 - Co-traitance B2B",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_15": {
		"label" : "CAS 15 - Commande passée par un tiers",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_16": {
		"label" : "CAS 16 - Débours : remboursement de frais payés pour le client",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_17a": {
		"label" : "CAS 17A - Facture payée via un intermédiaire de paiement",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_17b": {
		"label" : "CAS 17B - Facture payée via un intermédiaire de paiement avec mandat de facturation",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_18": {
		"label" : "CAS 18 - Note de débit",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_19a": {
		"label" : "CAS 19A - Facture émise sous mandat",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_19b": {
		"label" : "CAS 19B - Auto-facturation",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_20": {
		"label" : "CAS 20 - Facture d'acompte",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_21": {
		"label" : "CAS 21 - Facture finale après acompte",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_22a": {
		"label" : "CAS 22A - Escompte sur prestations de services",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_22b": {
		"label" : "CAS 22B - Escompte sur vente de biens",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_23": {
		"label" : "CAS 23 - Auto-facturation entre particulier et professionnel",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_24": {
		"label" : "CAS 24 - Gestion des arrhes",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_25": {
		"label" : "CAS 25 - Bons d'achat et cartes cadeaux",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_26": {
		"label" : "CAS 26 - Facture avec retenue contractuelle",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_27": {
		"label" : "CAS 27 - Tickets de péage",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_28": {
		"label" : "CAS 28 - Notes de restaurant",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_29": {
		"label" : "CAS 29 - Groupe TVA / assujetti unique",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_30": {
		"label" : "CAS 30 - Facture émise après une vente déjà déclarée",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_31": {
		"label" : "CAS 31 - Facture mixte",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_32": {
		"label" : "CAS 32 - Paiements mensuels",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_33": {
		"label" : "CAS 33 - TVA sur la marge",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_34": {
		"label" : "CAS 34 - Encaissement partiel ou annulé",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_35": {
		"label" : "CAS 35 - Notes d'auteur",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_36": {
		"label" : "CAS 36 - Secret professionnel",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_37": {
		"label" : "CAS 37 - Facturation dans une société en participation",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_38": {
		"label" : "CAS 38 - Facture avec sous-lignes ou sous-totaux",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_39": {
		"label" : "CAS 39 - Facture regroupant plusieurs vendeurs",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_40": {
		"label" : "CAS 40 - Paiements groupés ou compensation",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_41": {
		"label" : "CAS 41 - Troc interentreprises",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_42": {
		"label" : "CAS 42 - Vente en détaxe",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_43": {
		"label" : "CAS 43 - E-reporting sur opérations B2B internationales",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	},
	"c_44": {
		"label" : "CAS 44 - Transactions avec les DROM, COM ou TAAF",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : ""
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : ""
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : ""
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : ""
			},
			"controles":{
				"label": "Contrôles",
				"text" : ""
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : ""
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : ""
			}
		}
	}
	
}

