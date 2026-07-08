const dict_categories = {
	"tiers_payeur": {
		"label": "Tiers payeur",
		"cas" :[
			"c_2",
			"c_3",
			"c_4",
			"c_5",
			"c_6",
			"c_7",
			"c_15",
			"c_16"
		]
	},
	"facturation_multi_flux": {
		"label": "Facturation multi-flux",
		"cas" :[
			"c_1",
			"c_31",
			"c_38",
			"c_39"
		]
	},
	"affacturage": {
		"label": "Affacturage",
		"cas" :[
			"c_8",
			"c_10"

		]
	},
	"intermediaires_mandats": {
		"label": "Intermédiaires / Mandats",
		"cas" :[
			"c_9",
			"c_11",
			"c_12",
			"c_17a",
			"c_17b",
			"c_19a"

		]
	},
	"soustraitance_cotraitance": {
		"label": "Sous-traitance / Co-traitance",
		"cas" :[
			"c_13",
			"c_14"

		]
	},
	"encaissements": {
		"label": "Encaissements",
		"cas" :[
			"c_18",
			"c_26",
			"c_34"

		]
	},
	"auto_facturation": {
		"label": "Auto-facturation",
		"cas" :[
			"c_19b",
			"c_23"

		]
	},
	"acomptes_conditions_de_paiement": {
		"label": "Acomptes / Conditions de paiement",
		"cas" :[
			"c_20",
			"c_21",
			"c_22a",
			"c_22b",
			"c_24"

		]
	},
	"moyens_de_paiement": {
		"label": "Moyens de paiement",
		"cas" :[
			"c_25",
			"c_32",
			"c_40",
			"c_41"

		]
	},
	"cas_sectoriels": {
		"label": "Cas sectoriels",
		"cas" :[
			"c_27",
			"c_28",
			"c_35",
			"c_36",
			"c_37"

		]
	},
	"regimes_tva specifiques": {
		"label": "Régimes TVA spécifiques",
		"cas" :[
			"c_29",
			"c_30",
			"c_33",
			"c_42"

		]
	},
	"international": {
		"label": "International",
		"cas" :[
			"c_43",
			"c_44"

		]
	}
}

const dict_secteur = {
    "btp": {
        "label": "BTP",
		"cas" :[
			"c_4",
			"c_8",
			"c_10",
			"c_13",
			"c_14",
			"c_20",
			"c_21",
			"c_26",
			"c_27",
			"c_31",
			"c_34",
			"c_37",
			"c_38"
		]
    },
    "construction": {
        "label": "Construction",
		"cas" :[
			"c_4",
			"c_8",
			"c_10",
			"c_13",
			"c_14",
			"c_20",
			"c_21",
			"c_26",
			"c_27",
			"c_31",
			"c_34",
			"c_37",
			"c_38"
		]
    },
    "it": {
        "label": "IT",
		"cas" :[
			"c_14",
			"c_20",
			"c_21",
			"c_22a",
			"c_31",
			"c_32",
			"c_38"
		]
    },
    "telecom": {
        "label": "Télécom",
		"cas" :[
			"c_14",
			"c_20",
			"c_21",
			"c_22a",
			"c_31",
			"c_32",
			"c_38"
		]
    },
    "commerce": {
        "label": "Commerce",
		"cas" :[
			"c_4",
			"c_8",
			"c_9",
			"c_10",
			"c_11",
			"c_15",
			"c_17a",
			"c_18",
			"c_19a",
			"c_19b",
			"c_22b",
			"c_23",
			"c_25",
			"c_30",
			"c_33",
			"c_39",
			"c_40",
			"c_42",
			"c_43"
		]
    },
    "distribution": {
        "label": "Distribution",
		"cas" :[
			"c_4",
			"c_8",
			"c_9",
			"c_10",
			"c_11",
			"c_15",
			"c_18",
			"c_19a",
			"c_19b",
			"c_22b",
			"c_25",
			"c_30",
			"c_33",
			"c_39",
			"c_40",
			"c_42",
			"c_43"
		]
    },
    "e_commerce": {
        "label": "E-commerce",
		"cas" :[
			"c_15",
			"c_17a",
			"c_17b",
			"c_23",
			"c_25",
			"c_39"
		]
    },
    "marketplaces": {
        "label": "Marketplaces",
		"cas" :[
			"c_15",
			"c_17a",
			"c_17b",
			"c_23",
			"c_25",
			"c_39"
		]
    },
    "professions_liberales": {
        "label": "Professions libérales",
		"cas" :[
			"c_16",
			"c_22a",
			"c_35",
			"c_36"
		]
    },
    "transport": {
        "label": "Transport",
		"cas": [
			"c_4",
			"c_8",
			"c_10",
			"c_16",
			"c_27",
			"c_43"
		]
    },
    "logistique": {
        "label": "Logistique",
		"cas": [
			"c_4",
			"c_8",
			"c_10",
			"c_16",
			"c_27",
			"c_43"
		]
    },
    "banque": {
        "label": "Banque",
		"cas": [
			"c_18",
			"c_29",
			"c_32",
			"c_37"
		]
    },
    "assurance": {
        "label": "Assurance",
		"cas": [
			"c_18",
			"c_29",
			"c_32",
			"c_37"
		]
    },
    "immobilier": {
        "label": "Immobilier",
		"cas" : [
			"c_12",
			"c_19a",
			"c_29",
			"c_32",
			"c_34",
			"c_37"
		]
    },
    "energie": {
        "label": "Énergie",
		"cas" : [
			"c_13",
			"c_19a",
			"c_26",
			"c_29",
			"c_31",
			"c_32",
			"c_34",
			"c_37",
			"c_40"
		]
    },
    "industrie": {
        "label": "Industrie",
		"cas" : [
			"c_8",
			"c_10",
			"c_11",
			"c_12",
			"c_19a",
			"c_20",
			"c_21",
			"c_22b",
			"c_26",
			"c_29",
			"c_31",
			"c_38",
			"c_40",
			"c_43"
		]
    },
    "manufacturing": {
        "label": "Manufacturing",
		"cas" : [
			"c_8",
			"c_10",
			"c_11",
			"c_12",
			"c_19a",
			"c_20",
			"c_21",
			"c_22b",
			"c_26",
			"c_29",
			"c_31",
			"c_38",
			"c_40",
			"c_43"
		]
    },
    "luxe": {
        "label": "Luxe",
		"cas": [
			"c_9",
			"c_19b",
			"c_33",
			"c_42"
		]
    },
    "mode": {
        "label": "Mode",
		"cas": [
			"c_9",
			"c_19b",
			"c_33",
			"c_42"
		]
    },
    "restauration": {
        "label": "Restauration",
		"cas": [
			"c_24",
			"c_25",
			"c_28",
			"c_30",
			"c_41"
		]
    },
    "hotellerie": {
        "label": "Hôtellerie",
		"cas": [
			"c_24",
			"c_25",
			"c_28",
			"c_30",
			"c_41"
		]
    },
    "sante": {
        "label": "Santé",
		"cas": [
			"c_3",
			"c_4",
			"c_9",
			"c_11",
			"c_30",
			"c_36"
		]
    },
    "pharma": {
        "label": "Pharma",
		"cas": [
			"c_3",
			"c_4",
			"c_9",
			"c_11",
			"c_30",
			"c_36"
		]
    },
    "international": {
        "label": "International",
		"cas": [
			"c_43",
			"c_44"
		]
    },
    "outre_mer": {
        "label": "Outre-mer",
		"cas": [
			"c_43",
			"c_44"
		]
    }
};

const dict_cas = {
	"c_1":{
		"label" : "CAS 1 - Une facture pour plusieurs commandes ou livraisons",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Une entreprise peut effectuer plusieurs livraisons ou prestations pour un même client avant d'établir une facture unique récapitulative.\n\nCette pratique est fréquente dans le négoce, l'industrie, les fournitures récurrentes ou les contrats de prestations périodiques.\n\nLa facture regroupe alors plusieurs bons de commande, bons de livraison ou interventions."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le chiffre d'affaires reste comptabilisé à la date de la facture selon les règles habituelles.\n\nLe collaborateur doit s'assurer que toutes les livraisons ou prestations regroupées sur la facture sont correctement identifiées et qu'aucune opération n'est omise ou facturée deux fois.\n\nLes pièces justificatives doivent permettre de faire le lien entre les opérations réalisées et la facture émise."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La réforme autorise le regroupement de plusieurs opérations sur une même facture.\n\nLe logiciel doit toutefois être capable de conserver le détail des commandes ou livraisons concernées afin de garantir la traçabilité des informations transmises.\n\nLes références aux documents d'origine doivent rester accessibles."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Regroupez-vous déjà plusieurs livraisons sur une même facture ?",
				"Utilisez-vous des bons de commande ou des bons de livraison ?",
				"À quelle fréquence les factures récapitulatives sont-elles établies ?",
				"Le logiciel permet-il de rattacher plusieurs documents à une facture ?",
				"Les clients demandent-ils un détail des livraisons ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier la présence des bons de commande ou de livraison.",
				"Contrôler que toutes les opérations sont bien reprises.",
				"Vérifier les dates des opérations regroupées.",
				"Contrôler les quantités et montants facturés.",
				"Vérifier l'absence de doublons ou d'omissions."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque d'oublier une livraison dans la facture récapitulative.",
				"Risque de facturer deux fois la même opération.",
				"Attention aux périodes de facturation trop longues.",
				"Vérifier la cohérence entre les documents commerciaux et la facture."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Oui. Une facture peut regrouper plusieurs commandes ou livraisons.\n\nIl faut simplement que le logiciel conserve le lien avec les documents d'origine afin de garantir la traçabilité des opérations."
			},
		}
	},
	"c_2":{
		"label" : "CAS 2 - Facture déjà réglée à l’émission",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Le règlement intervient avant ou simultanément à l’émission de la facture. C’est notamment le cas des ventes en ligne avec paiement immédiat, des abonnements réglés à la commande ou de certaines prestations encaissées avant leur réalisation.\n\nLa facture est émise alors que le paiement est déjà connu et encaissé."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "La comptabilisation de la facture reste identique.\n\nLa créance client existe juridiquement mais son extinction est immédiate puisque le règlement est connu dès l’émission.\n\nLes comptes de vente, de TVA et de trésorerie sont impactés dès l’enregistrement."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La facture électronique doit intégrer l’information selon laquelle le règlement est déjà intervenu.\n\nLes données relatives au paiement, lorsque disponibles, comme la date, le montant et le moyen de paiement, doivent être transmises dans les flux prévus.\n\nIl n’est normalement pas nécessaire d’envoyer un flux complémentaire de suivi d’encaissement si l’information est déjà correctement intégrée à l’émission."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Le paiement intervient-il avant ou au moment de la facture ?",
				"Le montant est-il réglé en totalité ?",
				"Le moyen de paiement est-il connu ?",
				"Existe-t-il un risque d’annulation ou de remboursement ultérieur ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier que le paiement est effectivement encaissé.",
				"Vérifier la cohérence entre montant facturé et montant encaisser.",
				"Vérifier la date du règlement.",
				"Vérifier l’absence de solde restant dû."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Ne pas déclarer un paiement non encore encaissé.",
				"Distinguer paiement effectif et simple autorisation bancaire.",
				"Vérifier les remboursements éventuels."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Si le client a déjà payé au moment de l’émission de la facture, l’information de règlement doit être intégrée dès l’origine dans la facture électronique."
			}
		}
	},
	"c_3": {
		"label" : "CAS 3 - Facture payée par un tiers ",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Le destinataire de la facture est différent du payeur réel.\n\nExemples fréquents : assurance, mutuelle, organisme financeur, société mère, centrale de paiement ou organisme de prise en charge.\n\nLe client reste celui à qui la facture est adressée, même si le règlement provient d’un autre acteur."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "La facture reste établie au nom du client concerné.\n\nLe règlement est rapproché du compte client même lorsqu’il provient d’un tiers. Des comptes spécifiques peuvent être utilisés selon l’organisation comptable ou selon le type de tiers payeur.\n\nLe suivi doit permettre d’identifier les restes à charge, les paiements partiels ou les rejets de prise en charge."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La facture identifie le client facturé. Les informations relatives au payeur peuvent devoir être communiquées lorsque le dispositif ou le logiciel le permet.\n\nLes flux de suivi des paiements devront permettre d’identifier l’encaissement provenant du tiers et de le rattacher à la bonne facture."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Qui reçoit la facture ?",
				"Qui effectue le paiement ?",
				"Le tiers paie-t-il totalement ou partiellement ?",
				"Existe-t-il une convention de prise en charge ?",
				"Y a-t-il un reste à charge pour le client ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier l’identité du client facturé.",
				"Vérifier l’identité du tiers payeur.",
				"Contrôler les montants réglés.",
				"Contrôler les éventuels restes à charge.",
				"Vérifier le lettrage du compte client."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Ne pas confondre client et payeur.",
				"Vérifier les paiements partiels.",
				"Gérer correctement les rejets de prise en charge.",
				"Attention aux délais de règlement des organismes tiers."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Le client facturé reste le destinataire de la facture, même si le règlement est effectué par un tiers. Le paiement doit simplement être rattaché à la bonne facture."
			}
		}
	},
	"c_4": {
		"label" : "CAS 4 - Facture partiellement payée par l'acheteur",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Une facture peut être réglée en plusieurs fois ou faire l'objet d'un paiement partiel avant son règlement définitif.\n\nCette situation est fréquente lorsqu'un client rencontre des difficultés de trésorerie, lorsqu'un échéancier est mis en place ou lorsqu'une partie de la facture est contestée."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "La facture reste enregistrée pour son montant total.\n\nLe collaborateur doit suivre le montant réellement encaissé ainsi que le solde restant dû.\n\nLe compte client doit refléter la situation réelle jusqu'au paiement complet.\nLes règlements partiels doivent être correctement lettrés afin d'éviter les écarts de suivi."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La facture électronique conserve son montant initial.\n\nEn revanche, le suivi du cycle de vie devient important afin d'identifier si la facture est totalement réglée ou seulement partiellement payée.\n\nLes informations de paiement doivent rester cohérentes avec la situation réelle."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Les clients règlent-ils fréquemment en plusieurs fois ?",
				"Existe-t-il des échéanciers de paiement ?",
				"Les paiements partiels sont-ils suivis dans le logiciel ?",
				"Les relances tiennent-elles compte des montants déjà encaissés ?",
				"Certaines activités fonctionnent-elles avec des acomptes réguliers ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier le montant facturé et le montant encaissé.",
				"Contrôler le solde restant dû.",
				"Vérifier le lettrage des règlements.",
				"Contrôler les échéances prévues.",
				"Vérifier que le statut de paiement correspond à la réalité."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de considérer une facture comme réglée alors qu'un solde subsiste.",
				"Risque d'erreur dans les relances clients.",
				"Risque d'écart entre le logiciel de gestion et la comptabilité.",
				"Attention aux activités soumises à la TVA sur les encaissements."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Les paiements partiels restent possibles.\nIl faudra simplement vérifier que le logiciel suit correctement les encaissements successifs et le solde restant dû jusqu'au règlement complet de la facture."
			}
		}
	},
	"c_5": {
		"label" : "CAS 5 - Frais avec facture au nom de l'entreprise",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Une dépense est engagée pour les besoins de l'entreprise et la facture est établie à son nom.\n\nLe paiement peut toutefois être réalisé par un dirigeant ou un salarié qui sera ensuite remboursé."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "La charge appartient à l'entreprise.\n\nLe remboursement du salarié ou du dirigeant doit être correctement enregistré.\n\nLes règles habituelles de récupération de TVA continuent de s'appliquer."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Si le fournisseur émet une facture électronique au nom de l'entreprise, celle-ci suivra le circuit normal des factures fournisseurs même si le paiement initial a été effectué par une autre personne."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"La facture est-elle bien au nom de l'entreprise ?",
				"Qui a effectué le paiement ?",
				"Un remboursement est-il prévu ?",
				"Les justificatifs sont-ils conservés ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier le nom figurant sur la facture.",
				"Contrôler le remboursement effectué.",
				"Vérifier la TVA récupérée.",
				"Contrôler les justificatifs."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Facture au nom du salarié au lieu de l'entreprise.",
				"Justificatifs incomplets.",
				"Mauvaise récupération de TVA.",
				"Confusion entre note de frais et achat fournisseur."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Si la facture est bien établie au nom de l'entreprise, elle pourra être traitée normalement même si le paiement a été avancé par un salarié ou un dirigeant."
			}
		}
	},
	"c_6": {
		"label" : "CAS 6 - Frais sans facture au nom de l'entreprise",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Certaines dépenses professionnelles sont engagées sans que la facture soit établie au nom de l'entreprise.\n\nIl peut s'agir d'un ticket de caisse, d'un justificatif simplifié ou d'un document établi au nom d'un salarié ou du dirigeant."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "La charge peut parfois être enregistrée en comptabilité si elle est justifiée et engagée dans l'intérêt de l'entreprise.\n\nEn revanche, les conditions de récupération de TVA peuvent être remises en cause selon la nature du justificatif disponible."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Ces dépenses ne basculent pas automatiquement dans le circuit de facturation électronique.\n\nLe traitement dépend principalement de la qualité du justificatif conservé."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Quel justificatif est disponible ?",
				"Pourquoi la facture n'est-elle pas au nom de l'entreprise ?",
				"La dépense est-elle strictement professionnelle ?",
				"Existe-t-il une procédure interne pour ces situations ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier le justificatif disponible.",
				"Contrôler la nature professionnelle de la dépense.",
				"Vérifier les règles de récupération de TVA.",
				"Contrôler la cohérence des montants."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de rejet de TVA.",
				"Risque de dépense personnelle comptabilisée.",
				"Justificatifs insuffisants.",
				"Difficulté de justification en cas de contrôle."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Une dépense peut parfois être comptabilisée même sans facture au nom de l'entreprise, mais il faudra vérifier les justificatifs disponibles et les conditions de récupération de TVA."
			}
		}
	},
	"c_7": {
		"label" : "CAS 7 - Paiement par carte d'entreprise",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "L'entreprise met à disposition une ou plusieurs cartes bancaires permettant aux salariés ou dirigeants de régler directement certaines dépenses professionnelles."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le paiement est effectué directement par l'entreprise.\n\nLe collaborateur doit rapprocher les dépenses engagées avec les relevés bancaires et les justificatifs correspondants."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le mode de paiement ne modifie pas les règles de facturation électronique.\n\nLa question principale reste l'identification correcte de l'entreprise sur la facture et la conservation des justificatifs."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Combien de cartes sont utilisées ?",
				"Qui peut les utiliser ?",
				"Les justificatifs sont-ils systématiquement récupérés ?",
				"Existe-t-il un outil de suivi des dépenses ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier les justificatifs associés aux dépenses.",
				"Contrôler les relevés bancaires.",
				"Vérifier le nom figurant sur les factures.",
				"Contrôler la récupération de TVA."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Dépenses personnelles réglées avec la carte société.",
				"Justificatifs manquants.",
				"Difficulté de rapprochement bancaire.",
				"TVA récupérée sans justificatif conforme."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Le paiement par carte d'entreprise reste inchangé.\n\nIl faudra surtout conserver les justificatifs et assurer le rapprochement entre les dépenses et les relevés bancaires."
			}
		}
	},
	"c_8": {
		"label" : "CAS 8 - Affacturage ou facture à régler à un tiers connu",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "La créance est cédée à un organisme d’affacturage connu dès l’émission.\n\nLe débiteur est informé que le règlement devra être effectué auprès du factor. Le circuit de paiement est donc particulier dès l’origine de la facture."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "La créance client est suivie selon les règles comptables applicables à l’affacturage.\n\nDes comptes spécifiques liés au factor peuvent être utilisés. Le suivi des règlements est réalisé via le factor, avec rapprochement entre factures cédées, financements, commissions et règlements clients."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La facture doit comporter les informations permettant d’identifier le destinataire du paiement.\n\nLes coordonnées du factor peuvent devoir être transmises. Les flux de paiement devront refléter ce circuit particulier et éviter que le client règle directement le fournisseur si la créance a été cédée."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Le factor est-il identifié dès l’émission ?",
				"Le client paie-t-il directement le factor ?",
				"Existe-t-il une notification de cession ?",
				"L’affacturage est-il avec ou sans recours ?",
				"Les coordonnées de paiement sont-elles indiquées sur la facture ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier l’existence du contrat d’affacturage.",
				"Vérifier les coordonnées de règlement.",
				"Vérifier la cohérence entre facture et contrat.",
				"Contrôler la notification au client.",
				"Rapprocher les relevés du factor avec les factures cédées."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Éviter toute incohérence entre facture et instructions de paiement.",
				"Contrôler les changements de factor.",
				"Contrôler les rejets ou litiges.",
				"Attention aux règlements reçus directement par erreur.",
				"Attention aux commissions et retenues du factor."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Lorsque le factor est connu dès l’émission, les informations de paiement doivent orienter le règlement vers celui-ci."
			}
		}
	},
	"c_9": {
		"label" : "CAS 9 - Facture à régler à un tiers connu gérant aussi la commande ou la livraison",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Dans certaines situations, la facture est émise par un vendeur identifié mais le paiement est effectué auprès d'un tiers connu qui intervient également dans la gestion de la commande, de la livraison ou de l'encaissement.\n\nCe fonctionnement est fréquent avec certaines plateformes, centrales d'achat ou intermédiaires spécialisés."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit identifier clairement les rôles de chaque intervenant : vendeur, acheteur et tiers intermédiaire.\n\nLe chiffre d'affaires reste enregistré chez le vendeur, mais les flux financiers peuvent transiter par un tiers avant reversement.\n\nLes comptes de tiers doivent être correctement paramétrés afin de suivre les sommes à recevoir."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La facture électronique doit permettre d'identifier les différents acteurs de l'opération.\n\nLe logiciel doit être capable de distinguer l'entreprise qui vend, celle qui achète et le tiers qui intervient dans le processus commercial ou financier.\n\nLes informations transmises doivent rester cohérentes avec la réalité économique de l'opération."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Qui encaisse réellement le paiement du client ?",
				"Le tiers intervient-il uniquement pour le paiement ou également pour la commande et la livraison ?",
				"Existe-t-il un contrat avec ce tiers ?",
				"Le tiers prélève-t-il une commission ?",
				"Comment les reversements sont-ils suivis en comptabilité ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier l'identité des différents intervenants.",
				"Contrôler les contrats ou conventions existants.",
				"Vérifier les flux financiers réellement encaissés.",
				"Contrôler les commissions éventuellement retenues.",
				"Vérifier la cohérence entre facturation, encaissement et comptabilité."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de confusion entre vendeur et intermédiaire.",
				"Risque d'erreur sur l'identification des parties dans les logiciels.",
				"Risque de mauvais suivi des sommes en attente de reversement.",
				"Attention aux plateformes qui cumulent plusieurs rôles dans l'opération."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Ce fonctionnement est prévu par la réforme.\n\nNous devrons surtout vérifier que les rôles de chaque intervenant sont correctement identifiés dans le logiciel et que les flux financiers sont suivis de manière cohérente."
			}
		}
	},
	"c_10": {
		"label" : "CAS 10 - Affacturage avec tiers inconnu à l'émission",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "La facture est émise sans connaître le futur organisme d’affacturage.\n\nLa cession intervient après l’émission. Le circuit de paiement initial peut donc être modifié après la création de la facture."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "La facture est enregistrée normalement.\n\nLa cession ultérieure de créance fait l’objet des traitements comptables appropriés. Le collaborateur doit assurer la traçabilité entre la facture d’origine, la cession, le financement éventuel et le règlement final."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La facture initiale ne contient pas les informations du factor.\n\nLorsque la cession intervient après émission, les informations complémentaires doivent être transmises via les mécanismes prévus par la réforme.\n\nLe cycle de vie de la facture doit refléter la modification du circuit de paiement."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"À quel moment intervient la cession ?",
				"Le client est-il informé après émission ?",
				"Le factor devient-il l’unique destinataire du paiement ?",
				"Comment le logiciel suit-il la modification ?",
				"Existe-t-il une notification formelle de cession ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier la date de cession.",
				"Vérifier l’information transmise au client.",
				"Vérifier la concordance des flux.",
				"Contrôler le lettrage de la créance.",
				"Rapprocher les documents du factor avec les factures concernées."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Éviter les incohérences entre facture initiale et circuit réel de paiement.",
				"Assurer la traçabilité de la cession.",
				"Attention aux règlements effectués avant la notification.",
				"Attention aux changements de coordonnées de paiement.",
				"Ne pas modifier la facture initiale sans respecter le circuit prévu."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Si le factor n’est pas connu lors de l’émission, la facture est émise normalement puis les informations complémentaires sont transmises ultérieurement."
			}
		}
	},
	"c_11": {
		"label" : "CAS 11 - Facture reçue et traitée par un tiers pour l'acheteur",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Certaines entreprises confient la réception, le traitement ou la validation de leurs factures à un tiers spécialisé : cabinet comptable, centre de services partagés, société de gestion administrative ou plateforme dédiée.\n\nLe tiers intervient dans le traitement de la facture sans être l'acheteur réel."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Les charges et la TVA restent enregistrées chez l'acheteur.\n\nLe collaborateur doit s'assurer que les factures reçues et traitées par le tiers sont correctement intégrées dans la comptabilité de l'entreprise concernée et qu'aucune facture n'est perdue dans le circuit."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le circuit de réception doit permettre d'identifier clairement l'acheteur final et le tiers qui intervient dans le traitement.\n\nLes droits d'accès, validations et workflows devront être correctement paramétrés."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Qui réceptionne réellement les factures ?",
				"Existe-t-il une plateforme intermédiaire ?",
				"Qui valide les factures avant paiement ?",
				"Plusieurs sociétés utilisent-elles le même outil ?",
				"Comment les factures sont-elles transmises à la comptabilité ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier le circuit de réception.",
				"Contrôler les habilitations des utilisateurs.",
				"Vérifier l'identification de l'acheteur final.",
				"Contrôler l'intégration comptable.",
				"Vérifier la conservation des pièces."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de facture reçue mais non traitée.",
				"Risque de confusion entre plusieurs sociétés.",
				"Risque de perte d'information lors des transferts.",
				"Attention aux délégations insuffisamment formalisées."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Oui, un tiers peut traiter les factures pour votre compte.\n\nIl faut simplement sécuriser le circuit de réception et identifier clairement l'entreprise concernée."
			}
		}
	},
	"c_12": {
		"label" : "CAS 12 - Intermédiaire côté acheteur gérant la facture",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Un intermédiaire peut intervenir dans le processus d'achat en négociant, centralisant ou administrant les factures pour le compte de l'acheteur.\n\nIl facilite la gestion sans devenir nécessairement le destinataire économique final de l'opération."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Les achats restent comptabilisés chez l'acheteur final.\n\nLe collaborateur doit vérifier les rôles de chaque acteur afin d'assurer la bonne affectation des factures et des paiements."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le logiciel devra identifier l'acheteur réel ainsi que l'intermédiaire intervenant dans le traitement de la facture.\n\nLes informations transmises devront rester cohérentes avec la réalité économique."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Quel est le rôle exact de l'intermédiaire ?",
				"Qui passe commande ?",
				"Qui reçoit la facture ?",
				"Qui réalise le paiement ?",
				"Existe-t-il un contrat précisant les rôles de chacun ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier l'identité des parties.",
				"Contrôler les contrats existants.",
				"Vérifier les flux de facturation.",
				"Contrôler les paiements.",
				"Vérifier la cohérence comptable."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de confusion entre acheteur et intermédiaire.",
				"Risque d'erreur sur les identifiants utilisés.",
				"Risque de mauvais routage des factures.",
				"Attention aux circuits complexes impliquant plusieurs acteurs."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "L'intervention d'un intermédiaire reste possible.\n\nNous devons simplement identifier précisément le rôle de chaque intervenant afin de sécuriser le circuit de facturation."
			}
		}
	},
	"c_13": {
		"label" : "CAS 13 - Sous-traitance avec paiement direct",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Une entreprise réalise une prestation pour le compte d’une autre entreprise assujettie.\n\nDans certains secteurs, notamment certains travaux immobiliers, le mécanisme d’autoliquidation peut s’appliquer. Le sous-traitant facture alors sans TVA et le donneur d’ordre autoliquide la taxe."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "La facture peut être émise sans TVA lorsque l’autoliquidation est applicable.\n\nLe donneur d’ordre réalise les traitements de TVA correspondants. Le collaborateur doit vérifier que les comptes de TVA et les déclarations sont cohérents avec le mécanisme retenu."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La mention d’autoliquidation doit être correctement transmise.\n\nLes codes fiscaux associés doivent être correctement renseignés. Le flux de facture électronique doit permettre de comprendre que l’absence de TVA facturée est volontaire et justifiée."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Qui est le donneur d’ordre ?",
				"Qui est le sous-traitant ?",
				"L’opération relève-t-elle de l’autoliquidation ?",
				"Les deux parties sont-elles assujetties ?",
				"Le secteur concerné impose-t-il un traitement spécifique ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier les numéros de TVA.",
				"Vérifier le secteur d’activité.",
				"Vérifier la présence des mentions obligatoires.",
				"Contrôler l’absence de TVA facturée si l’autoliquidation s’applique.",
				"Contrôler la déclaration de TVA du donneur d’ordre."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Mauvaise qualification de l’opération.",
				"TVA facturée à tort.",
				"Oubli des mentions obligatoires.",
				"Confusion entre sous-traitance et co-traitance.",
				"Paramétrage incorrect du logiciel de facturation."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "En sous-traitance B2B relevant de l’autoliquidation, la facture est généralement émise sans TVA avec les mentions adaptées."
			}
		}
	},
	"c_14": {
		"label" : "CAS 14 - Co-traitance B2B",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "La co-traitance correspond à une situation dans laquelle plusieurs entreprises réalisent ensemble une prestation pour un même client dans le cadre d’un contrat commun.\n\nChaque co-traitant reste responsable de sa propre prestation et facture généralement sa part des travaux ou services. Contrairement à la sous-traitance, il n’existe pas nécessairement de relation de donneur d’ordre et d’exécutant entre les entreprises intervenantes."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Chaque entreprise comptabilise sa propre facture.\n\nLa TVA est généralement facturée selon les règles normales applicables à la prestation réalisée. Les flux comptables restent individualisés entre chaque co-traitant et le client final.\n\nLorsqu’un mandataire centralise certains flux, le traitement comptable doit être sécurisé."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Chaque co-traitant émet sa propre facture électronique, sauf organisation particulière prévue au contrat.\n\nLes données transmises doivent refléter la réalité économique de l’opération. L’identification correcte du client facturé demeure essentielle."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Existe-t-il un contrat de co-traitance ?",
				"Chaque entreprise facture-t-elle directement le client ?",
				"Un mandataire est-il désigné ?",
				"Existe-t-il des flux financiers entre co-traitants ?",
				"Qui encaisse les règlements du client final ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier la nature juridique de la relation.",
				"Vérifier le contrat conclu avec le client.",
				"Vérifier les modalités de facturation.",
				"Vérifier les règles de TVA applicables.",
				"Contrôler les flux gérés par un éventuel mandataire."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Ne pas confondre co-traitance et sous-traitance.",
				"Vérifier les responsabilités de chaque intervenant.",
				"Contrôler les flux financiers gérés par un mandataire.",
				"Attention aux refacturations entre co-traitants.",
				"Attention au paramétrage si plusieurs entités interviennent."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "En co-traitance, chaque entreprise facture généralement sa propre prestation au client final selon les règles normales de facturation et de TVA."
			}
		}
	},
	"c_15": {
		"label" : "CAS 15 - Commande passée par un tiers",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Dans certains secteurs, une personne ou une société passe commande pour le compte d'un tiers.\n\nLe donneur d'ordre n'est pas toujours le destinataire final de la facture ou des biens livrés."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit identifier qui supporte réellement la charge et qui doit recevoir la facture.\n\nLa personne qui commande n'est pas nécessairement celle qui sera facturée ou qui déduira la TVA."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Les informations transmises devront permettre d'identifier correctement les différents acteurs de l'opération afin d'éviter toute ambiguïté dans le traitement des flux."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Qui passe réellement la commande ?",
				"Qui reçoit les biens ou services ?",
				"Qui paie la facture ?",
				"Qui bénéficie économiquement de l'opération ?",
				"Existe-t-il un mandat ou une convention ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier les documents contractuels.",
				"Contrôler l'identité du client facturé.",
				"Vérifier les modalités de paiement.",
				"Contrôler les justificatifs disponibles."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de facturer la mauvaise entité.",
				"Risque de TVA non déductible.",
				"Risque de contestation du client.",
				"Attention aux commandes passées pour le compte de filiales ou de sociétés liées."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Ce fonctionnement est possible.\n\nIl faut toutefois identifier clairement qui commande, qui paie et qui doit recevoir la facture afin de sécuriser le traitement comptable et fiscal."
			}
		}
	},
	"c_16": {
		"label" : "CAS 16 - Débours : remboursement de frais payés pour le client",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Un débours correspond à une dépense payée par l'entreprise au nom et pour le compte de son client.\n\nL'entreprise ne réalise pas de marge sur cette dépense et agit comme intermédiaire."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Un vrai débours ne doit pas être traité comme du chiffre d'affaires classique.\n\nLe collaborateur doit distinguer un débours d'une simple refacturation de frais. Dans une refacturation classique, l'entreprise facture en son nom ; dans un débours, elle agit au nom du client.\n\nLe traitement comptable dépend donc de la nature réelle de l'opération et des justificatifs."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le logiciel doit permettre de présenter correctement les sommes refacturées ou remboursées.\n\nSi le débours est mal qualifié, l'information transmise peut donner l'impression d'un chiffre d'affaires alors qu'il s'agit d'un remboursement de frais engagés pour le client."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Refacturez-vous des frais à vos clients ?",
				"La facture du fournisseur est-elle au nom de votre client ou au nom de votre entreprise ?",
				"Avez-vous un mandat ou une preuve que vous agissez pour le compte du client ?",
				"Prenez-vous une marge sur ces frais ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier le nom figurant sur la facture initiale.",
				"Vérifier si l'entreprise agit en son nom ou au nom du client.",
				"Contrôler l'absence de marge si le traitement en débours est retenu.",
				"Vérifier les justificatifs conservés.",
				"Contrôler le compte utilisé en comptabilité."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"La confusion entre débours et refacturation est très fréquente.",
				"Si la facture fournisseur est au nom de l'entreprise, il s'agit souvent d'une refacturation et non d'un débours.",
				"Le traitement TVA peut être différent selon la qualification retenue.",
				"En cas de doute, le cas doit être validé avant paramétrage."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Nous devons d'abord vérifier s'il s'agit vraiment d'un débours.\n\nSi vous payez une dépense au nom de votre client sans marge, le traitement n'est pas le même qu'une refacturation classique."
			}
		}
	},
	"c_17a": {
		"label" : "CAS 17A - Facture payée via un intermédiaire de paiement",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "La marketplace agit uniquement comme intermédiaire entre le vendeur et l’acheteur.\n\nLe vendeur reste juridiquement responsable de la vente. La plateforme peut encaisser les fonds ou percevoir une commission sans devenir le vendeur de l’opération.\n\nExemples fréquents : plateformes de réservation, places de marché généralistes ou plateformes spécialisées."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "La vente est comptabilisée chez le vendeur.\n\nLa commission de la plateforme est comptabilisée comme une charge distincte. Le chiffre d’affaires correspond au montant total de la vente réalisée avec le client final, et non au montant net reversé par la plateforme.\n\nLe collaborateur doit rapprocher les relevés de plateforme, les ventes et les encaissements."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La facture électronique est émise par le vendeur réel.\n\nLes données de facturation doivent identifier le client et le vendeur. La commission de la plateforme peut générer des flux complémentaires distincts, notamment une facture fournisseur de la plateforme."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Qui est juridiquement vendeur ?",
				"Qui encaisse les fonds ?",
				"La plateforme facture-t-elle une commission ?",
				"Le client identifie-t-il clairement le vendeur ?",
				"La plateforme fournit-elle des relevés détaillés ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier les conditions générales de la plateforme.",
				"Vérifier les modalités d’encaissement.",
				"Vérifier la facturation des commissions.",
				"Vérifier le traitement de la TVA.",
				"Rapprocher chiffre d’affaires brut, commissions et virements reçus."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Ne pas confondre commission et chiffre d’affaires.",
				"Vérifier les relevés de marketplace.",
				"Contrôler les retenues opérées par la plateforme.",
				"Attention aux ventes internationales via plateforme.",
				"Attention aux remboursements et litiges clients."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Si la marketplace agit uniquement comme intermédiaire, c’est le vendeur qui reste responsable de la facture électronique et de la déclaration de son chiffre d’affaires."
			}
		}
	},
	"c_17b": {
		"label" : "CAS 17B - Facture payée via un intermédiaire de paiement avec mandat de facturation",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Dans certains cas prévus par la réglementation, la marketplace est réputée acheter puis revendre le bien ou le service.\n\nElle devient alors le vendeur fiscalement reconnu pour tout ou partie de l’opération. Le schéma diffère fortement d’une simple intermédiation."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Les flux comptables peuvent être décomposés en plusieurs opérations : vente du fournisseur à la plateforme, puis revente de la plateforme au client final.\n\nLe traitement dépend du modèle économique retenu, des conditions contractuelles et du rôle exact de la plateforme. Le collaborateur doit vérifier si le client comptabilise une vente au client final ou une vente à la plateforme."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La plateforme devient souvent l’émetteur principal de la facture destinée au client.\n\nLes obligations déclaratives sont adaptées à ce schéma. Les flux électroniques doivent refléter le rôle fiscal réel de chaque acteur et ne pas faire apparaître le vendeur initial comme vendeur final si ce n’est pas le cas."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"La plateforme est-elle réputée vendeur ?",
				"Quel est le type de produit ou service vendu ?",
				"Qui facture le client final ?",
				"Qui supporte la TVA collectée ?",
				"Quels documents la plateforme remet-elle au vendeur ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier les conditions contractuelles.",
				"Vérifier le rôle fiscal de la plateforme.",
				"Vérifier les règles de TVA applicables.",
				"Contrôler les relevés de plateforme.",
				"Vérifier la cohérence entre ventes déclarées et virements reçus."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de confusion entre vendeur réel et vendeur réputé.",
				"Vérifier les obligations de chaque partie.",
				"Contrôler la cohérence des flux déclaratifs.",
				"Attention aux plateformes étrangères.",
				"Attention aux cas où la plateforme est intermédiaire pour certaines ventes et réputée vendeur pour d’autres."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Lorsque la marketplace est réputée vendeur, elle devient généralement l’acteur principal pour la facturation vis-à-vis du client final."
			}
		}
	},
	"c_18": {
		"label" : "CAS 18 - Note de débit",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Une note de débit permet d'augmenter le montant initialement facturé lorsqu'un complément doit être demandé au client.\n\nElle peut concerner un oubli de facturation, un ajustement de prix, des frais complémentaires ou une régularisation contractuelle."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "La note de débit génère un produit complémentaire et, le cas échéant, une TVA supplémentaire.\n\nLe collaborateur doit vérifier que le complément est correctement rattaché à l'opération initiale et qu'il ne crée pas de double facturation."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le document complémentaire doit pouvoir être relié à la facture d'origine. Les informations transmises doivent permettre de comprendre qu'il s'agit d'une augmentation de montant et non d'une nouvelle opération indépendante."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Pourquoi un complément est-il demandé ?",
				"Existe-t-il une facture d'origine ?",
				"Le montant complémentaire est-il prévu contractuellement ?",
				"Le client a-t-il accepté ce complément ?",
				"Le logiciel permet-il de rattacher les documents entre eux ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier la facture initiale.",
				"Contrôler le calcul du complément.",
				"Vérifier le taux de TVA appliqué.",
				"Contrôler la cohérence des montants.",
				"Vérifier le lien entre les documents."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de double facturation.",
				"Risque d'erreur de TVA.",
				"Risque d'absence de justification du complément.",
				"Attention aux contestations du client."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Une note de débit permet de réclamer un complément de facturation.\n\nElle doit rester clairement rattachée à la facture initiale afin de justifier l'augmentation demandée."
			}
		}
	},
	"c_19a": {
		"label" : "CAS 19A - Facture émise sous mandat",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Le mandat de facturation signifie qu'un tiers émet les factures au nom et pour le compte du vendeur.\n\nLe vendeur reste responsable de sa facturation, même si la facture est préparée ou envoyée par un autre acteur."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "La facture reste une facture de vente du client.\n\nLe chiffre d'affaires et la TVA restent comptabilisés chez le vendeur.\n\nLe collaborateur doit vérifier que les factures émises par le tiers sont bien intégrées dans la comptabilité du vendeur.\n\nLa numérotation, les doublons et la cohérence avec les ventes doivent être contrôlés."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le circuit de facture électronique doit identifier correctement le vendeur et le tiers qui agit pour lui.\n\nLe mandat doit être clair afin que la plateforme ou le logiciel sache qui émet la facture et pour le compte de qui."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Qui crée réellement vos factures ?",
				"Existe-t-il un contrat ou mandat écrit ?",
				"Le tiers utilise-t-il votre logiciel ou le sien ?",
				"Comment récupérez-vous les factures émises ?",
				"Comment contrôlez-vous la numérotation ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier l'existence d'un mandat.",
				"Contrôler l'identité du vendeur sur la facture.",
				"Vérifier la numérotation des factures.",
				"Contrôler l'intégration en comptabilité.",
				"Vérifier que le logiciel ou la plateforme gère ce fonctionnement."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Le tiers ne devient pas le vendeur : il facture pour le compte du vendeur.",
				"Risque de doublons si le vendeur et le tiers émettent chacun des factures.",
				"Risque de rupture dans la numérotation.",
				"Le mandat doit être conservé et clairement documenté."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "C'est possible, mais il faut sécuriser le mandat.\n\nLe tiers peut établir les factures, mais elles restent vos factures.\n\nNous devons vérifier le mandat, la numérotation et l'intégration comptable."
			}
		}
	},
	"c_19b": {
		"label" : "CAS 19B - Auto-facturation",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "L'auto-facturation signifie que l'acheteur établit la facture pour le compte du vendeur.\n\nCe fonctionnement nécessite un accord ou mandat entre les parties."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Même si la facture est créée par l'acheteur, elle reste une facture de vente pour le vendeur et une facture d'achat pour l'acheteur.\n\nLe vendeur doit récupérer la facture, la contrôler et l'intégrer dans sa comptabilité.\n\nLe collaborateur doit vérifier que toutes les factures auto-établies sont bien comptabilisées et qu'il n'y a pas de doublon avec une facture émise par le vendeur."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le sens du flux est particulier : l'acheteur crée la facture pour le vendeur. Le logiciel et la plateforme doivent gérer ce cas sans inverser les rôles économiques.\n\nLes statuts de cycle de vie peuvent également être plus difficiles à comprendre pour les utilisateurs."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Votre client établit-il les factures à votre place ?",
				"Existe-t-il un mandat ou accord d'auto-facturation ?",
				"Comment recevez-vous les factures ?",
				"Les contrôlez-vous avant comptabilisation ?",
				"Émettez-vous parfois une facture en plus de celle créée par le client ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier l'existence d'un mandat d'auto-facturation.",
				"Contrôler que le vendeur récupère toutes les factures.",
				"Vérifier l'absence de doublons.",
				"Contrôler les montants HT, TVA et TTC.",
				"Vérifier l'intégration comptable."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de facture manquante chez le vendeur.",
				"Risque de double facturation si le vendeur émet aussi sa facture.",
				"Risque de mauvaise compréhension par le client, car celui qui crée la facture n'est pas celui qui vend.",
				"Ce cas doit être expliqué simplement aux collaborateurs."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "L'auto-facturation est possible, mais elle doit être encadrée.\n\nVotre client peut établir la facture pour vous, mais nous devons vérifier le mandat, la récupération des factures et l'absence de doublons."
			}
		}
	},
	"c_20": {
		"label" : "CAS 20 - Facture d'acompte",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "L’acompte constitue un paiement anticipé versé avant la livraison du bien ou la réalisation complète de la prestation. Il engage définitivement les parties au contrat.\n\nUne facture d’acompte peut être émise avant la facture définitive. Elle permet de constater la somme demandée ou encaissée avant l’exécution complète de l’opération."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "L’encaissement de l’acompte doit être suivi séparément. Une régularisation intervient lors de l’émission de la facture finale.\n\nLe traitement de TVA dépend de la nature de l’opération et de la date d’exigibilité. Le collaborateur doit donc distinguer la demande d’acompte, l’encaissement et la facture définitive.\n\nLe risque principal est de comptabiliser deux fois le chiffre d’affaires ou de ne pas imputer correctement l’acompte sur la facture finale."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Les factures d’acompte devront être transmises comme les autres factures. Le lien entre la facture d’acompte et la facture définitive doit être conservé.\n\nLes informations relatives au règlement doivent être suivies, en particulier lorsque la TVA est exigible à l’encaissement. Le logiciel doit permettre d’identifier clairement ce qui relève de l’acompte et ce qui relève du solde."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Un acompte est-il demandé systématiquement ?",
				"Quel est son montant ou son pourcentage ?",
				"À quel moment est-il encaissé ?",
				"Une facture d’acompte est-elle émise ?",
				"Comment l’acompte est-il déduit de la facture finale ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier la cohérence entre acompte et facture finale.",
				"Vérifier le traitement de TVA.",
				"Vérifier l’imputation correcte du règlement.",
				"Contrôler que l’acompte n’est pas comptabilisé deux fois.",
				"Vérifier que le solde restant dû est cohérent."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Ne pas confondre acompte et arrhes.",
				"Éviter les doubles comptabilisations.",
				"Vérifier la traçabilité des règlements.",
				"Attention aux logiciels qui ne lient pas correctement acompte et facture finale.",
				"Attention aux régularisations ou annulations d’acompte."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Un acompte doit être suivi dès son émission et relié à la facture finale afin d’assurer une traçabilité complète des flux et d’éviter toute double déclaration."
			}
		}
	},
	"c_21": {
		"label" : "CAS 21 - Facture finale après acompte",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "L’acompte constitue un paiement anticipé versé avant la livraison du bien ou la réalisation complète de la prestation. Il engage définitivement les parties au contrat.\n\nUne facture d’acompte peut être émise avant la facture définitive. Elle permet de constater la somme demandée ou encaissée avant l’exécution complète de l’opération."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "L’encaissement de l’acompte doit être suivi séparément. Une régularisation intervient lors de l’émission de la facture finale.\n\nLe traitement de TVA dépend de la nature de l’opération et de la date d’exigibilité. Le collaborateur doit donc distinguer la demande d’acompte, l’encaissement et la facture définitive.\n\nLe risque principal est de comptabiliser deux fois le chiffre d’affaires ou de ne pas imputer correctement l’acompte sur la facture finale."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Les factures d’acompte devront être transmises comme les autres factures. Le lien entre la facture d’acompte et la facture définitive doit être conservé.\n\nLes informations relatives au règlement doivent être suivies, en particulier lorsque la TVA est exigible à l’encaissement. Le logiciel doit permettre d’identifier clairement ce qui relève de l’acompte et ce qui relève du solde."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Un acompte est-il demandé systématiquement ?",
				"Quel est son montant ou son pourcentage ?",
				"À quel moment est-il encaissé ?",
				"Une facture d’acompte est-elle émise ?",
				"Comment l’acompte est-il déduit de la facture finale ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier la cohérence entre acompte et facture finale.",
				"Vérifier le traitement de TVA.",
				"Vérifier l’imputation correcte du règlement.",
				"Contrôler que l’acompte n’est pas comptabilisé deux fois.",
				"Vérifier que le solde restant dû est cohérent."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Ne pas confondre acompte et arrhes.",
				"Éviter les doubles comptabilisations.",
				"Vérifier la traçabilité des règlements.",
				"Attention aux logiciels qui ne lient pas correctement acompte et facture finale.",
				"Attention aux régularisations ou annulations d’acompte."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Un acompte doit être suivi dès son émission et relié à la facture finale afin d’assurer une traçabilité complète des flux et d’éviter toute double déclaration."
			}
		}
	},
	"c_22a": {
		"label" : "CAS 22A - Escompte sur prestations de services",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "L'escompte est une réduction financière accordée au client lorsqu'il règle sa facture avant l'échéance prévue. Dans ce cas, le montant effectivement payé est inférieur au montant initialement facturé."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit suivre l'écart entre le montant facturé et le montant encaissé.\n\nL'escompte accordé constitue une charge financière pour le vendeur et un produit financier pour l'acheteur."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Les informations de facturation doivent permettre d'identifier les conditions d'escompte prévues.\n\nLe logiciel doit être capable de gérer les écarts liés aux paiements anticipés."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Accordez-vous des escomptes de règlement ?",
				"Les conditions figurent-elles sur les factures ?",
				"Les clients utilisent-ils régulièrement cet avantage ?",
				"Le logiciel calcule-t-il automatiquement l'escompte ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier les conditions d'escompte.",
				"Contrôler le calcul appliqué.",
				"Vérifier le montant réellement encaissé.",
				"Contrôler les écritures de régularisation."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque d'erreur de calcul.",
				"Risque de confusion avec une remise commerciale.",
				"Vérifier le traitement TVA applicable.",
				"Contrôler les conditions contractuelles."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "L'escompte reste possible.\n\nIl faut simplement vérifier que les conditions sont clairement prévues et que le logiciel suit correctement les montants réellement encaissés."
			}
		}
	},
	"c_22b": {
		"label" : "CAS 22B - Escompte sur vente de biens",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Une réduction financière est accordée lorsque le client paie avant l'échéance prévue.\n\nCe mécanisme est fréquent dans le commerce et le négoce afin d'accélérer les encaissements"
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le montant encaissé peut être inférieur au montant initialement facturé.\n\nLe collaborateur doit vérifier la cohérence entre la facture, le règlement reçu et les écritures de régularisation liées à l'escompte accordé."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le logiciel doit permettre d'identifier les conditions d'escompte et de conserver la traçabilité entre le montant facturé et le montant réellement réglé."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Des escomptes sont-ils proposés aux clients ?",
				"Les conditions figurent-elles sur les factures ?",
				"Quel pourcentage est appliqué ?",
				"Le logiciel gère-t-il automatiquement les calculs ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier le calcul de l'escompte.",
				"Contrôler le règlement reçu.",
				"Vérifier les écritures de régularisation.",
				"Contrôler la cohérence des soldes clients."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque d'écart entre facture et règlement.",
				"Risque d'erreur dans les calculs.",
				"Attention au traitement TVA applicable.",
				"Vérifier les mentions figurant sur les factures."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "La réforme ne remet pas en cause les escomptes.\n\nLe logiciel doit simplement être capable de suivre correctement les conditions accordées et les montants réellement encaissés."
			}
		}
	},
	"c_23": {
		"label" : "CAS 23 - Auto-facturation entre particulier et professionnel",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Certaines activités conduisent un professionnel à acheter des biens ou des produits auprès de particuliers.\n\nUn document est alors établi afin de matérialiser l'opération et permettre son enregistrement comptable."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit vérifier l'identité du vendeur particulier, la nature de l'opération et les règles fiscales applicables.\n\nCes opérations présentent souvent des particularités documentaires et fiscales."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Ce type d'opération ne suit pas toujours le circuit classique de facturation électronique entre professionnels.\n\nLes justificatifs devront néanmoins permettre d'identifier correctement les parties et la nature de l'opération."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Quelle est la nature du bien acheté ?",
				"Le vendeur est-il réellement un particulier ?",
				"Existe-t-il un document justificatif ?",
				"Ces opérations sont-elles fréquentes ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier l'identité du vendeur.",
				"Contrôler les montants versés.",
				"Vérifier les justificatifs conservés.",
				"Contrôler le traitement comptable retenu."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de requalification de l'opération.",
				"Justificatifs insuffisants.",
				"Difficultés de contrôle de l'identité du vendeur.",
				"Traitement TVA spécifique selon les situations."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Ces opérations restent possibles.\n\nIl faudra surtout conserver des justificatifs suffisants et identifier correctement le particulier concerné."
			}
		}
	},
	"c_24": {
		"label" : "CAS 24 - Gestion des arrhes",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Les arrhes représentent une somme versée lors de la conclusion d’un contrat mais permettent en principe aux parties de renoncer à l’opération sous certaines conditions.\n\nElles se distinguent juridiquement de l’acompte, qui engage plus fortement les parties sur l’exécution du contrat."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le traitement dépend de l’évolution de l’opération : réalisation normale, annulation, conservation des arrhes ou remboursement.\n\nDes conséquences comptables différentes peuvent apparaître selon le scénario retenu. Le collaborateur doit donc vérifier la qualification juridique et le traitement réellement appliqué par l’entreprise."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Les flux doivent refléter correctement la nature de la somme encaissée.\n\nEn cas d’annulation, les éventuelles régularisations doivent être correctement documentées. Le lien avec la vente finale ou avec l’annulation doit être conservé."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Le contrat mentionne-t-il des arrhes ou un acompte ?",
				"L’opération a-t-elle été réalisée ?",
				"Les arrhes ont-elles été conservées ?",
				"Existe-t-il une annulation ?",
				"Une facture ou un document de régularisation est-il émis ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier la qualification juridique retenue.",
				"Vérifier le traitement de TVA applicable.",
				"Vérifier les justificatifs contractuels.",
				"Contrôler le traitement en cas d’annulation.",
				"Vérifier le rapprochement entre encaissement et opération finale."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Confusion fréquente entre acompte et arrhes.",
				"Conséquences fiscales différentes selon le cas.",
				"Gestion des annulations.",
				"Attention aux arrhes conservées par l’entreprise.",
				"Attention aux libellés utilisés dans le logiciel de facturation."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Les arrhes ne doivent pas être assimilées automatiquement à un acompte car leur régime juridique et fiscal peut être différent."
			}
		}
	},
	"c_25": {
		"label" : "CAS 25 - Bons d'achat et cartes cadeaux",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Les bons d’achat et cartes cadeaux permettent à leur détenteur d’obtenir ultérieurement des biens ou services.\n\nLe traitement dépend notamment de la connaissance ou non du taux de TVA au moment de l’émission. La réglementation distingue notamment les bons à usage unique et les bons à usages multiples."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "L’encaissement initial peut être traité différemment selon la nature du bon.\n\nUne partie du traitement comptable peut intervenir lors de l’émission du bon, ou seulement lors de son utilisation effective. Le collaborateur doit s’assurer que le chiffre d’affaires et la TVA ne sont pas constatés au mauvais moment."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Les flux transmis doivent tenir compte de la qualification du bon.\n\nLe moment de l’exigibilité de la TVA peut varier selon la catégorie concernée. Le logiciel doit permettre de distinguer l’émission, l’utilisation partielle ou totale et l’éventuelle expiration du bon."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"S’agit-il d’une carte cadeau ou d’un bon d’achat ?",
				"Les biens ou services futurs sont-ils connus ?",
				"Le taux de TVA est-il déterminable dès l’origine ?",
				"Le bon est-il partiellement utilisé ?",
				"Existe-t-il une date d’expiration ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier la qualification du bon.",
				"Vérifier la date d’émission.",
				"Vérifier la date d’utilisation.",
				"Vérifier le traitement de TVA retenu.",
				"Contrôler les bons non utilisés ou expirés."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Distinction usage unique / usages multiples.",
				"Gestion des expirations.",
				"Gestion des utilisations partielles.",
				"Risque de TVA déclarée trop tôt ou trop tard.",
				"Risque de double chiffre d’affaires entre vente du bon et utilisation."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Le traitement dépend principalement de la qualification du bon et du moment où la TVA devient exigible."
			}
		}
	},
	"c_26": {
		"label" : "CAS 26 - Facture avec retenue contractuelle",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Une retenue contractuelle correspond à une partie du prix qui n'est pas payée immédiatement, souvent pour garantir la bonne exécution d'une prestation ou de travaux."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "La facture peut être émise pour le montant total, mais une partie seulement est encaissée immédiatement.\n\nLe collaborateur doit suivre séparément le montant facturé, le montant payé et la retenue restant à percevoir.\n\nLa retenue doit rester identifiable jusqu'à son règlement ou sa régularisation."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le montant net à payer peut-être différent du total de la facture en raison de la retenue.\n\nLe logiciel doit permettre de suivre cette différence sans considérer la facture comme anormalement impayée."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Vos clients appliquent-ils une retenue de garantie ?",
				"Quel pourcentage est retenu ?",
				"À quelle date la retenue doit-elle être libérée ?",
				"Le logiciel suit-il cette retenue ?",
				"Le cas concerne-t-il des marchés de travaux ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier le contrat ou marché.",
				"Contrôler le pourcentage de retenue.",
				"Vérifier le montant facturé et le montant réellement encaissé.",
				"Suivre la date de libération prévue.",
				"Contrôler le compte client et les soldes."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Très fréquent dans certains marchés de travaux.",
				"Risque de laisser des soldes clients inexpliqués.",
				"Risque de relance à tort si la retenue est normale contractuellement.",
				"Attention à la TVA et aux règles d'exigibilité selon la situation."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "La retenue contractuelle est possible.\n\nNous devons vérifier que le logiciel distingue le total facturé, le montant payé immédiatement et la retenue qui sera réglée plus tard."
			}
		}
	},
	"c_27": {
		"label" : "CAS 27 - Tickets de péage",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Les tickets de péage ou justificatifs de télépéage sont souvent utilisés comme pièces de frais professionnels. Ils peuvent concerner l'entreprise directement ou être intégrés dans des notes de frais de salariés."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le traitement comptable reste celui d'un frais de déplacement ou de transport.\n\nLe collaborateur doit vérifier la qualité du justificatif et la possibilité de récupérer la TVA selon les règles applicables.\n\nEn cas de télépéage, il peut exister une facture périodique plus complète que les tickets unitaires."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le péage peut être traité soit comme un justificatif de frais, soit via une facture électronique si le fournisseur émet une facture au nom de l'entreprise.\n\nLe point important est de ne pas confondre ticket justificatif, note de frais et facture fournisseur électronique."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Utilisez-vous des badges télépéage ?",
				"Les salariés avancent-ils les péages ?",
				"Recevez-vous une facture périodique au nom de l'entreprise ?",
				"Les justificatifs sont-ils conservés ?",
				"Les péages sont-ils intégrés aux notes de frais ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier le type de justificatif : ticket, facture, relevé télépéage.",
				"Contrôler le nom indiqué sur le document.",
				"Vérifier la date, le montant et la TVA.",
				"Contrôler l'intégration dans la note de frais si nécessaire.",
				"Vérifier l'absence de doublon entre ticket et facture périodique."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de comptabiliser deux fois le même péage si le ticket et la facture télépéage sont tous les deux saisis.",
				"Attention aux justificatifs incomplets pour la TVA.",
				"Attention aux frais personnels mélangés aux frais professionnels.",
				"En cas de flotte importante, privilégier une facture périodique centralisée."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Les tickets de péage restent utilisables comme justificatifs, mais il faut vérifier si vous recevez aussi une facture télépéage.\n\nL'objectif est d'éviter les doublons et de sécuriser la récupération éventuelle de TVA."
			}
		}
	},
	"c_28": {
		"label" : "CAS 28 - Notes de restaurant",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Le salarié engage une dépense professionnelle puis demande le remboursement à l'entreprise. Le justificatif peut être une facture au nom de l'entreprise, une facture au nom du salarié ou un simple ticket."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le principe des notes de frais ne disparaît pas.\n\nL'entreprise continue à comptabiliser la charge et le remboursement au salarié.\n\nLa récupération de TVA dépend toujours de la nature du frais et de la qualité du justificatif. Une facture au nom de l'entreprise est plus sécurisante qu'un ticket ou une facture au nom du salarié.\n\nLe collaborateur doit surtout contrôler que les règles habituelles de déductibilité sont respectées : frais professionnels, justificatif conservé, TVA récupérable uniquement si les conditions sont réunies."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La réforme ne transforme pas une note de frais en facture électronique émise par le salarié.\n\nSi la facture est au nom de l'entreprise et transmise dans le circuit électronique, elle peut être traitée comme une facture fournisseur classique.\n\nSi le justificatif est au nom du salarié ou s'il s'agit d'un ticket, il reste dans le circuit note de frais et doit être conservé dans l'outil ou le dossier comptable."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Les salariés avancent-ils souvent des frais ?",
				"Les justificatifs sont-ils au nom de l'entreprise ou du salarié ?",
				"Utilisez-vous un logiciel de notes de frais ?",
				"Les salariés paient-ils avec une carte personnelle, une carte société ou une carte logée ?",
				"Les notes de frais sont-elles validées avant remboursement ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier la présence du justificatif.",
				"Vérifier le nom figurant sur la facture ou le ticket.",
				"Contrôler la nature de la dépense : restaurant, hôtel, transport, carburant, péage, etc.",
				"Contrôler si la TVA est récupérable ou non.",
				"Vérifier le rapprochement entre note de frais, remboursement salarié et comptabilité."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Ne pas répondre que toutes les notes de frais devront passer en facture électronique.",
				"Attention aux justificatifs incomplets ou au nom du salarié pour la récupération de TVA.",
				"Attention aux tickets de restaurant ou de péage utilisés comme justificatifs : ils ne donnent pas toujours les mêmes droits qu'une facture complète.",
				"En cas de volume important, recommander un outil de gestion des notes de frais ou une procédure interne claire."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "La réforme ne supprime pas les notes de frais.\n\nVos salariés pourront continuer à avancer des frais. Il faudra surtout distinguer les factures au nom de l'entreprise des justificatifs au nom du salarié, et conserver les pièces dans votre circuit habituel de note de frais."
			}
		}
	},
	"c_29": {
		"label" : "CAS 29 - Groupe TVA / assujetti unique",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Plusieurs sociétés peuvent être réunies au sein d'un même assujetti unique à la TVA.\n\nChaque société conserve son existence juridique mais certaines obligations TVA sont centralisées au niveau du groupe."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit identifier les sociétés membres, les flux internes et les règles de fonctionnement du groupe.\n\nLes traitements comptables doivent rester cohérents avec les obligations TVA applicables au groupe."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Les logiciels devront identifier correctement les différentes entités du groupe et permettre la gestion des flux dans le respect des règles applicables à l'assujetti unique."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Quelles sociétés appartiennent au groupe ?",
				"Depuis quelle date le groupe existe-t-il ?",
				"Qui pilote les obligations TVA ?",
				"Plusieurs logiciels sont-ils utilisés ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier le périmètre du groupe.",
				"Contrôler les identifiants utilisés.",
				"Vérifier les flux entre sociétés.",
				"Contrôler le paramétrage des logiciels."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Mauvaise identification des sociétés.",
				"Erreurs de paramétrage.",
				"Traitement TVA incohérent.",
				"Cas nécessitant souvent un accompagnement spécialisé."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Le groupe TVA est pleinement compatible avec la réforme, mais il nécessite un paramétrage rigoureux afin d'identifier correctement les différentes sociétés concernées."
			}
		}
	},
	"c_30": {
		"label" : "CAS 30 - Facture émise après une vente déjà déclarée",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Le client a réalisé une vente initialement traitée comme une vente à un particulier, puis une facture est demandée après coup, par exemple par un professionnel ou pour un besoin administratif."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit éviter que la même vente soit déclarée deux fois : une première fois dans les ventes de caisse ou le chiffre d'affaires B2C, puis une seconde fois via la facture émise ensuite.\n\nIl faut contrôler la cohérence entre la vente initiale, l'encaissement et la facture établie a posteriori.\n\nLa TVA peut déjà avoir été collectée lors de la vente initiale."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La réforme prévoit que certaines ventes déjà déclarées puissent faire l'objet d'une facture ultérieure.\n\nLe point clé est d'éviter le double envoi ou la double déclaration de la même opération."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"La vente a-t-elle déjà été encaissée ?",
				"Était-ce une vente caisse ou une vente en ligne ?",
				"Le client est-il un particulier ou une entreprise ?",
				"La TVA a-t-elle déjà été déclarée ?",
				"Pourquoi la facture est-elle demandée après coup ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Retrouver la vente initiale.",
				"Contrôler l'encaissement.",
				"Vérifier si la vente a déjà été incluse dans les données déclarées.",
				"Éviter la double comptabilisation.",
				"Vérifier les mentions de la facture établie après coup."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de double chiffre d'affaires.",
				"Risque de double TVA collectée.",
				"Attention aux demandes tardives de factures par des professionnels.",
				"Les logiciels de caisse et de facturation doivent être cohérents entre eux."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "On peut établir une facture après coup, mais il faut vérifier que la vente n'est pas déclarée deux fois.\n\nNous devons rapprocher la facture de la vente déjà encaissée."
			}
		}
	},
	"c_31": {
		"label" : "CAS 31 - Facture mixte",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Une facture mixte regroupe plusieurs natures d'opérations : par exemple une vente de produit et une prestation de service, ou plusieurs lignes avec des traitements TVA différents."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit vérifier la ventilation comptable par nature d'opération : ventes de marchandises, prestations, accessoires, frais, etc.\n\nPlusieurs comptes de produits peuvent être nécessaires sur une même facture.\n\nPlusieurs taux de TVA peuvent aussi coexister. Le total de facture peut être juste, mais la ventilation peut être fausse."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le flux de facture électronique doit permettre de comprendre le détail des lignes. Les lignes ne doivent pas être regroupées de manière à masquer les différences de nature ou de TVA.\n\nLe logiciel de facturation doit donc produire des lignes suffisamment détaillées."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Facturez-vous des biens et des services sur une même facture ?",
				"Utilisez-vous plusieurs taux de TVA ?",
				"Facturez-vous des frais accessoires, livraisons, garanties ou prestations annexes ?",
				"Le logiciel distingue-t-il les lignes par nature comptable ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Contrôler les lignes de facture une par une.",
				"Vérifier les comptes comptables associés à chaque ligne.",
				"Vérifier les taux de TVA utilisés.",
				"Contrôler le total HT, la TVA et le TTC.",
				"Vérifier que les imports comptables ne regroupent pas tout dans un seul compte."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Une facture peut être correcte en montant total mais incorrecte en ventilation comptable.",
				"Attention aux logiciels qui affectent le même compte ou le même taux de TVA à toutes les lignes.",
				"Attention aux prestations accessoires : elles peuvent suivre le régime de l'opération principale ou nécessiter un traitement distinct."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Vous pouvez continuer à faire des factures avec plusieurs types d'opérations.\n\nNous devons simplement vérifier que le logiciel détaille correctement les lignes, les comptes et les taux de TVA."
			}
		}
	},
	"c_32": {
		"label" : "CAS 32 - Paiements mensuels",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Certains clients paient par mensualités, acompte permanent ou échéancier, avec une régularisation finale.\n\nC'est fréquent pour les abonnements, contrats de maintenance, loyers, assurances ou prestations récurrentes."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit distinguer les paiements mensuels, les factures périodiques et la régularisation finale.\n\nIl faut contrôler que les encaissements sont correctement affectés et que le chiffre d'affaires n'est pas comptabilisé deux fois.\n\nLa régularisation finale peut générer un complément à payer ou un trop-perçu."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le logiciel doit gérer correctement les factures ou échéances associées aux paiements mensuels.\n\nLe cycle de vie doit rester cohérent : une mensualité encaissée ne signifie pas forcément que toute la facture annuelle est soldée."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Vos clients paient-ils par mensualités ?",
				"Y a-t-il une facture chaque mois ou une facture de régularisation ?",
				"Comment gérez-vous les trop-perçus ?",
				"Le logiciel suit-il les échéances automatiquement ?",
				"Les paiements sont-ils prélevés ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier le calendrier de facturation.",
				"Contrôler les encaissements mensuels.",
				"Vérifier la facture de régularisation.",
				"Contrôler les soldes clients.",
				"Vérifier le traitement des trop-perçus et compléments."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de confusion entre paiement, acompte et facture.",
				"Risque de chiffre d'affaires comptabilisé trop tôt ou deux fois.",
				"Attention aux régularisations négatives ou remboursements.",
				"Les logiciels doivent être paramétrés pour suivre les échéances."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Les paiements mensuels restent possibles.\n\nNous devons vérifier si vous facturez chaque mois ou si vous faites une régularisation finale, afin que le logiciel suive correctement les encaissements et le solde client."
			}
		}
	},
	"c_33": {
		"label" : "CAS 33 - TVA sur la marge",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Le régime de TVA sur la marge s’applique dans certaines situations particulières prévues par la réglementation.\n\nLa TVA est calculée sur la marge réalisée et non sur le prix total de vente. On retrouve notamment ce régime dans certains secteurs de négoce de biens d’occasion, œuvres d’art, objets de collection ou véhicules d’occasion."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le suivi des achats et des ventes doit permettre de justifier la marge réalisée.\n\nLes écritures comptables doivent assurer la traçabilité des opérations concernées. Le collaborateur doit vérifier que les achats ouvrant droit au régime de la marge sont bien identifiés et que le calcul est documenté."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La facture électronique doit comporter les mentions spécifiques liées au régime de TVA sur la marge.\n\nLes données transmises doivent permettre d’identifier correctement ce régime particulier. Le flux ne doit pas faire apparaître une TVA calculée sur le prix total si le régime de la marge est applicable."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Quels produits sont concernés ?",
				"Le régime de la marge est-il effectivement applicable ?",
				"Les justificatifs d’achat sont-ils conservés ?",
				"Les opérations sont-elles réalisées en France ou à l’international ?",
				"Le logiciel permet-il d’identifier les ventes à la marge ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier les conditions d’éligibilité.",
				"Vérifier les calculs de marge.",
				"Vérifier les mentions obligatoires sur facture.",
				"Vérifier la cohérence des justificatifs.",
				"Contrôler que la TVA n’est pas affichée à tort."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Application à tort du régime de la marge.",
				"Mauvaise détermination de la base taxable.",
				"Absence de justificatifs suffisants.",
				"Risque de paramétrage standard du logiciel avec TVA sur le prix total.",
				"Attention aux ventes internationales ou aux achats auprès d’assujettis."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "La TVA sur la marge nécessite un suivi renforcé des opérations et des mentions spécifiques dans les flux de facturation électronique."
			}
		}
	},
	"c_34": {
		"label" : "CAS 34 - Encaissement partiel ou annulé",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Une facture peut être réglée en plusieurs fois, partiellement, ou faire l'objet d'un encaissement annulé après saisie, par exemple en cas de rejet de prélèvement ou de remboursement."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le suivi du compte client devient essentiel : la facture peut être émise, partiellement payée, puis soldée plus tard.\nLe collaborateur doit vérifier que les règlements partiels sont correctement lettrés et que le solde restant dû est cohérent.\nEn cas d'annulation d'encaissement, il faut contrôler que l'écriture inverse ou le remboursement est correctement comptabilisé."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le cycle de vie de la facture doit refléter la réalité du paiement. Une facture ne doit pas être considérée comme totalement encaissée si elle ne l'est que partiellement.\nLes statuts de paiement deviennent un point de suivi important, surtout pour les prestations de services avec TVA due à l'encaissement."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Les clients paient-ils en plusieurs fois ?",
				"Avez-vous des échéanciers ?",
				"Utilisez-vous des prélèvements automatiques ?",
				"Avez-vous des rejets de prélèvement ou des remboursements clients ?",
				"Le logiciel distingue-t-il paiement partiel et paiement total ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier le montant facturé, le montant encaissé et le solde restant dû.",
				"Contrôler les échéances et les dates de règlement.",
				"Vérifier le lettrage du compte client.",
				"Contrôler les remboursements ou rejets enregistrés.",
				"Vérifier que le statut de paiement dans le logiciel correspond à la réalité."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de facture marquée réglée alors qu'elle ne l'est que partiellement.",
				"Risque de TVA déclarée au mauvais moment pour les activités à l'encaissement.",
				"Attention aux paiements annulés : ils doivent être suivis comme des mouvements réels et non simplement supprimés.",
				"Les logiciels anciens peuvent gérer le paiement comme un simple champ oui/non, ce qui est insuffisant."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Les paiements partiels sont prévus.\n\nNous devons vérifier que votre logiciel suit chaque encaissement et que le solde de la facture reste exact jusqu'au règlement complet."
			}
		}
	},
	"c_35": {
		"label" : "CAS 35 - Notes d'auteur",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Les rémunérations versées au titre de droits d'auteur obéissent à des règles particulières selon le statut de l'auteur, la nature des droits cédés et le régime fiscal applicable."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit vérifier le statut du bénéficiaire, les modalités de calcul de la rémunération et les obligations déclaratives associées.\n\nLes traitements comptables peuvent différer d'une facture classique."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Certaines situations peuvent ne pas suivre le schéma classique de facturation entre deux entreprises.\n\nLe logiciel devra néanmoins permettre de conserver les justificatifs et les informations nécessaires."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Le bénéficiaire est-il un auteur indépendant ?",
				"Existe-t-il un contrat de cession de droits ?",
				"Les rémunérations sont-elles régulières ?",
				"Quel est le régime fiscal appliqué ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier les contrats existants.",
				"Contrôler les montants versés.",
				"Vérifier le traitement fiscal retenu.",
				"Contrôler les justificatifs conservés."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Régimes spécifiques parfois complexes.",
				"Risque de mauvaise qualification des revenus.",
				"Difficultés de paramétrage des logiciels.",
				"Vérifier les obligations déclaratives associées."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Les droits d'auteur peuvent présenter des particularités.\n\nIl conviendra de vérifier le statut du bénéficiaire et le traitement applicable avant le paramétrage."
			}
		}
	},
	"c_36": {
		"label" : "CAS 36 - Secret professionnel",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Certaines professions réglementées ou activités sensibles sont soumises à des obligations de confidentialité renforcées concernant les informations figurant sur les factures ou les documents transmis."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Les opérations continuent d'être comptabilisées normalement.\n\nLe collaborateur doit toutefois veiller à ce que les informations sensibles soient traitées conformément aux obligations légales et réglementaires applicables."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La réforme prévoit des mécanismes permettant de transmettre les informations nécessaires tout en respectant les exigences de confidentialité.\n\nLes logiciels devront être paramétrés en conséquence."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Quelle profession exercez-vous ?",
				"Existe-t-il des obligations particulières de confidentialité ?",
				"Certaines informations doivent-elles être limitées ou masquées ?",
				"Utilisez-vous déjà des procédures spécifiques ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier les obligations réglementaires.",
				"Contrôler les informations figurant sur les factures.",
				"Vérifier les droits d'accès aux documents.",
				"Contrôler le paramétrage des logiciels."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Divulgation involontaire d'informations sensibles.",
				"Paramétrage insuffisant des accès.",
				"Non-respect des obligations professionnelles.",
				"Conservation sécurisée des documents."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "La réforme tient compte des professions soumises au secret professionnel.\n\nNous devrons vérifier les règles applicables à votre activité et sécuriser le paramétrage des outils utilisés."
			}
		}
	},
	"c_37": {
		"label" : "CAS 37 - Facturation dans une société en participation",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "La société en participation permet à plusieurs partenaires de réaliser une opération commune sans créer une société disposant de la personnalité morale.\n\nLes règles de facturation dépendent de l'organisation retenue entre les participants."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit identifier la répartition des rôles, des recettes et des charges.\n\nLes flux doivent être correctement ventilés entre les participants selon les accords prévus."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Les systèmes devront permettre d'identifier clairement l'entité qui facture et les modalités de répartition entre les différents participants."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Existe-t-il une convention de société en participation ?",
				"Qui facture les clients ?",
				"Comment les recettes sont-elles réparties ?",
				"Qui supporte les dépenses ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier les conventions existantes.",
				"Contrôler la répartition des flux.",
				"Vérifier les factures émises.",
				"Contrôler la cohérence comptable."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Mauvaise répartition des produits.",
				"Difficulté d'identification des rôles.",
				"Risque fiscal en cas de documentation insuffisante.",
				"Paramétrage parfois complexe."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "La société en participation reste compatible avec la réforme.\n\nIl faudra simplement formaliser clairement les rôles de chaque participant et les circuits de facturation."
			}
		}
	},
	"c_38": {
		"label" : "CAS 38 - Facture avec sous-lignes ou sous-totaux",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Certaines factures présentent une structure complexe avec des regroupements de lignes, des sections, des sous-totaux intermédiaires ou plusieurs niveaux de détail destinés à améliorer la lisibilité du document."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Les montants globaux restent comptabilisés selon les règles habituelles.\n\nLe collaborateur doit toutefois s'assurer que les sous-totaux correspondent correctement aux lignes détaillées et que les calculs sont cohérents."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le logiciel doit être capable de transmettre les informations détaillées sans perdre la structure logique de la facture.\n\nLes regroupements doivent rester compréhensibles pour le destinataire et les systèmes de traitement."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Utilisez-vous des sous-totaux sur vos factures ?",
				"Les regroupements sont-ils générés automatiquement ?",
				"Plusieurs taux de TVA coexistent-ils ?",
				"Les clients ont-ils besoin d'un fort niveau de détail ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier la cohérence des calculs.",
				"Contrôler les sous-totaux.",
				"Vérifier les taux de TVA.",
				"Contrôler les montants finaux."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Erreurs de totalisation.",
				"Regroupements masquant certaines informations.",
				"Difficultés d'intégration dans certains logiciels.",
				"Contrôle des calculs automatiques."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Les sous-lignes et sous-totaux restent possibles.\n\nLe logiciel devra simplement conserver suffisamment de détail pour garantir la compréhension et la traçabilité des informations."
			}
		}
	},
	"c_39": {
		"label" : "CAS 39 - Facture regroupant plusieurs vendeurs",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Certaines opérations impliquent plusieurs vendeurs participant à une même prestation ou à une même vente.\n\nLa question se pose alors de la présentation et du traitement des flux de facturation."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit identifier précisément la part revenant à chaque vendeur.\n\nChaque entreprise reste responsable de sa propre comptabilité, de son chiffre d'affaires et de ses obligations fiscales."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Les systèmes devront permettre d'identifier clairement les différents intervenants et leurs rôles respectifs.\n\nUne attention particulière devra être portée au paramétrage des flux."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Combien de vendeurs interviennent ?",
				"Qui facture le client final ?",
				"Existe-t-il une convention entre les parties ?",
				"Comment les recettes sont-elles réparties ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier les contrats existants.",
				"Contrôler la répartition des montants.",
				"Vérifier les identités des vendeurs.",
				"Contrôler les déclarations de chaque entité."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de confusion entre les intervenants.",
				"Mauvaise répartition du chiffre d'affaires.",
				"Risque fiscal en cas de mauvaise identification des parties.",
				"Paramétrage complexe des logiciels."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Ce type de situation nécessite d'identifier précisément chaque vendeur et le rôle qu'il joue dans l'opération afin de sécuriser le traitement comptable et fiscal."
			}
		}
	},
	"c_40": {
		"label" : "CAS 40 - Paiements groupés ou compensation",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Certaines entreprises regroupent plusieurs factures dans un même règlement.\n\nD'autres pratiquent la compensation lorsqu'elles sont à la fois clientes et fournisseurs d'une même entreprise.\n\nLes dettes et créances sont alors rapprochées afin de réduire les flux financiers."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit identifier les factures concernées par le paiement ou la compensation.\n\nLes opérations doivent être correctement lettrées afin d'assurer le suivi des soldes clients et fournisseurs."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "La réforme ne remet pas en cause les paiements groupés ni les compensations.\n\nLes logiciels devront toutefois permettre de rattacher correctement un règlement à plusieurs factures ou à plusieurs opérations compensées."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Les règlements concernent-ils plusieurs factures ?",
				"Pratiquez-vous des compensations avec certains partenaires ?",
				"Comment les opérations sont-elles suivies actuellement ?",
				"Le logiciel permet-il de gérer ces rapprochements ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier les factures concernées.",
				"Contrôler les montants compensés.",
				"Vérifier les soldes restants.",
				"Contrôler le lettrage des comptes."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque d'erreur dans les rapprochements.",
				"Risque de facture laissée ouverte à tort.",
				"Risque de déséquilibre entre comptabilité et réalité économique.",
				"Attention aux compensations insuffisamment documentées."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Les paiements groupés et les compensations restent possibles.\n\nIl faudra simplement assurer un suivi précis des factures concernées et des montants rapprochés."
			}
		}
	},
	"c_41": {
		"label" : "CAS 41 - Troc interentreprises",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Deux entreprises peuvent échanger des biens ou des services sans règlement monétaire direct.\n\nChaque partie fournit une prestation ou livre un bien en contrepartie de celui reçu."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Chaque entreprise doit enregistrer son chiffre d'affaires et sa charge selon les règles habituelles.\n\nL'absence de paiement ne supprime pas l'existence de l'opération économique ni ses conséquences fiscales."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Les opérations doivent rester identifiables et documentées.\n\nLa réforme ne dispense pas d'établir les documents nécessaires à la justification de l'échange."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Quelle est la nature des biens ou services échangés ?",
				"Existe-t-il une convention entre les parties ?",
				"Les valeurs échangées sont-elles équivalentes ?",
				"Ces opérations sont-elles régulières ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier l'existence des prestations réalisées.",
				"Contrôler la valorisation des échanges.",
				"Vérifier les écritures comptables.",
				"Contrôler le traitement TVA applicable."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Sous-évaluation ou surévaluation des échanges.",
				"Oubli de comptabilisation.",
				"Risque d'erreur de TVA.",
				"Difficulté de justification en cas de contrôle."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Même sans paiement, les échanges entre entreprises doivent être suivis et justifiés.\n\nLes obligations comptables et fiscales continuent de s'appliquer."
			}
		}
	},
	"c_42": {
		"label" : "CAS 42 - Vente en détaxe",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "La vente en détaxe concerne certains achats réalisés par des voyageurs résidant hors de l'Union Européenne.\n\nSous conditions, ces ventes peuvent bénéficier d'un régime particulier permettant la restitution de la TVA."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit vérifier que les conditions de détaxe sont réunies et que les justificatifs nécessaires sont conservés.\n\nLe traitement comptable doit être cohérent avec le régime fiscal appliqué."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Les opérations concernées devront rester identifiables dans les systèmes de gestion.\n\nLes justificatifs liés à la détaxe continueront à jouer un rôle important."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Réalisez-vous des ventes à des voyageurs étrangers ?",
				"Utilisez-vous un opérateur de détaxe ?",
				"Comment les justificatifs sont-ils conservés ?",
				"Le volume de ces opérations est-il important ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier les justificatifs de détaxe.",
				"Contrôler l'identité du voyageur.",
				"Vérifier les montants concernés.",
				"Contrôler le traitement TVA retenu."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Justificatifs incomplets.",
				"Conditions de détaxe non respectées.",
				"Risque de régularisation TVA.",
				"Attention aux procédures spécifiques des opérateurs de détaxe."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "La réforme ne supprime pas la détaxe.\n\nIl faudra continuer à respecter les conditions prévues et conserver les justificatifs nécessaires."
			}
		}
	},
	"c_43": {
		"label" : "CAS 43 - E-reporting sur opérations B2B internationales",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Les opérations réalisées avec des entreprises établies hors de France ne relèvent pas toujours du même dispositif que les opérations domestiques.\n\nCertaines données devront néanmoins être transmises à l'administration dans le cadre du e-reporting."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit identifier le pays du client ou du fournisseur ainsi que le régime fiscal applicable : Union Européenne, exportation, importation, autoliquidation ou prestation internationale."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Ces opérations sont principalement concernées par le e-reporting.\n\nLe logiciel devra être capable d'identifier les flux internationaux et de transmettre les informations attendues par l'administration."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Travaillez-vous avec des clients étrangers ?",
				"Dans quels pays ?",
				"S'agit-il de biens ou de services ?",
				"Les numéros de TVA sont-ils renseignés ?",
				"Le logiciel distingue-t-il les opérations internationales ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier le pays du client ou du fournisseur.",
				"Contrôler les numéros de TVA intracommunautaires.",
				"Vérifier les mentions obligatoires.",
				"Contrôler le régime TVA appliqué."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Confusion entre e-invoicing et e-reporting.",
				"Erreurs de TVA internationale.",
				"Paramétrage incomplet des clients étrangers.",
				"Risque d'informations incohérentes dans les logiciels."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Les opérations internationales ne suivent pas toujours le même circuit que les factures françaises mais elles peuvent nécessiter du e-reporting.\n\nIl faut surtout sécuriser le paramétrage TVA et les données clients."
			}
		}
	},
	"c_44": {
		"label" : "CAS 44 - Transactions avec les DROM, COM ou TAAF",
		"procedure" : {
			"description":{
				"label": "Description",
				"text" : "Les opérations réalisées avec les départements et collectivités d'outre-mer ou les Terres australes et antarctiques françaises obéissent à des règles fiscales particulières.\n\nSelon le territoire concerné, le traitement TVA et les obligations déclaratives peuvent différer de celles applicables en métropole."
			},
			"impact_comptable":{
				"label": "Impact comptable",
				"text" : "Le collaborateur doit identifier précisément le territoire concerné et le régime fiscal applicable.\n\nLes règles de TVA, d'exonération ou d'autoliquidation peuvent varier selon la nature de l'opération et la localisation du client ou du fournisseur."
			},
			"impact_facture_electronique":{
				"label": "Impact facture électronique",
				"text" : "Le logiciel doit être capable d'identifier correctement ces opérations afin de garantir la cohérence des informations transmises et le respect des règles propres à chaque territoire."
			},
			"questions_a_poser":{
				"label": "Questions à poser",
				"text" : [
				"Avec quels territoires travaillez-vous ?",
				"S'agit-il de ventes de biens ou de prestations ?",
				"Les opérations sont-elles régulières ?",
				"Le logiciel distingue-t-il ces territoires de la métropole ?"
			]
			},
			"controles":{
				"label": "Contrôles",
				"text" : [
				"Vérifier le territoire concerné.",
				"Contrôler le régime TVA applicable.",
				"Vérifier les mentions figurant sur les factures.",
				"Contrôler les déclarations associées."
			]
			},
			"vigilances":{
				"label": "Vigilances",
				"text" : [
				"Risque de confusion avec les opérations métropolitaines.",
				"Risque d'erreur de TVA.",
				"Paramétrage insuffisant des logiciels.",
				"Régimes variables selon les territoires."
			]
			},
			"reponse_rapide":{
				"label": "Réponse rapide",
				"text" : "Les opérations avec les territoires d'outre-mer restent possibles mais nécessitent une attention particulière sur le régime fiscal applicable et le paramétrage des outils."
			}
		}
	}
	
}
