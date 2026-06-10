const dict_questions = {
	"q_1": {
		"question": "Je demande un acompte avant la réalisation de ma prestation. Que dois-je faire ?",
		"cas": "c_1"
	},
	"q_2": {
		"question": "Je fais payer mon client immédiatement au moment de la vente. Est-ce que cela change quelque chose pour la facture électronique ? ",
		"cas": "c_2"
	},
	"q_3": {
		"question": "Mon client reçoit la facture mais c’est une autre personne ou un organisme qui paie. Comment gérer cela ?",
		"cas": "c_3"
	}
}

const dict_cas = {
	"c_1":{
		"label" : "CAS 20/21 – Acompte",
		"procedure" : {
			"step_1":{
				"label": "Description",
				"text" : "L’acompte constitue un paiement anticipé versé avant la livraison du bien ou la réalisation complète de la prestation. Il engage définitivement les parties au contrat. \
							Une facture d’acompte peut être émise avant la facture définitive. Elle permet de constater la somme demandée ou encaissée avant l’exécution complète de l’opération. "
			},
			"step_2":{
				"label": "Impact comptable",
				"text" : "L’encaissement de l’acompte doit être suivi séparément. Une régularisation intervient lors de l’émission de la facture finale. \
						  Le traitement de TVA dépend de la nature de l’opération et de la date d’exigibilité. Le collaborateur doit donc distinguer la demande d’acompte, l’encaissement et la facture définitive. \
						  Le risque principal est de comptabiliser deux fois le chiffre d’affaires ou de ne pas imputer correctement l’acompte sur la facture finale."
			},
			"step_3":{
				"label": "Impact facture électronique",
				"text" : "Les factures d’acompte devront être transmises comme les autres factures. Le lien entre la facture d’acompte et la facture définitive doit être conservé. \
						  Les informations relatives au règlement doivent être suivies, en particulier lorsque la TVA est exigible à l’encaissement. \
						  Le logiciel doit permettre d’identifier clairement ce qui relève de l’acompte et ce qui relève du solde."
			},
			"step_4":{
				"label": "Questions à poser",
				"text" : "• Un acompte est-il demandé systématiquement ? \
				          • Quel est son montant ou son pourcentage ? \
						  • À quel moment est-il encaissé ? \
						  • Une facture d’acompte est-elle émise ? \
						  • Comment l’acompte est-il déduit de la facture finale ? "
			},
			"step_5":{
				"label": "Contrôles",
				"text" : "•  Vérifier la cohérence entre acompte et facture finale. \
						  • Vérifier le traitement de TVA. \
						  • Vérifier l’imputation correcte du règlement. \
						  • Contrôler que l’acompte n’est pas comptabilisé deux fois. \
						  • Vérifier que le solde restant dû est cohérent. "
			},
			"step_6":{
				"label": "Vigilances",
				"text" : "• Ne pas confondre acompte et arrhes. \
							• Éviter les doubles comptabilisations. \
							• Vérifier la traçabilité des règlements. \
							• Attention aux logiciels qui ne lient pas correctement acompte et facture finale. \
							• Attention aux régularisations ou annulations d’acompte. "
			},
			"step_7":{
				"label": "Réponse rapide",
				"text" : "Un acompte doit être suivi dès son émission et relié à la facture finale afin d’assurer une traçabilité complète des flux et d’éviter toute double déclaration."
			},
		}
	},
	"c_2":{
		"label" : "CAS 2 - Facture déjà réglée à l’émission",
		"procedure" : {
			"step_1":{
				"label": "Description",
				"text" : "Le règlement intervient avant ou simultanément à l’émission de la facture. C’est notamment le cas des ventes en ligne avec paiement immédiat, \
					des abonnements réglés à la commande ou de certaines prestations encaissées avant leur réalisation. \
					La facture est émise alors que le paiement est déjà connu et encaissé. "
			},
			"step_2":{
				"label": "Impact comptable",
				"text" : "La comptabilisation de la facture reste identique. \
							La créance client existe juridiquement mais son extinction est immédiate puisque le règlement est connu dès l’émission. \
							Les comptes de vente, de TVA et de trésorerie sont impactés dès l’enregistrement. "
			},
			"step_3":{
				"label": "Impact facture électronique",
				"text" : "La facture électronique doit intégrer l’information selon laquelle le règlement est déjà intervenu. \
							Les données relatives au paiement, lorsque disponibles, comme la date, le montant et le moyen de paiement, doivent être transmises dans les flux prévus. \
							Il n’est normalement pas nécessaire d’envoyer un flux complémentaire de suivi d’encaissement si l’information est déjà correctement intégrée à l’émission."
			},
			"step_4":{
				"label": "Questions à poser",
				"text" : "• Le paiement intervient-il avant ou au moment de la facture ? \
							• Le montant est-il réglé en totalité ? \
							• Le moyen de paiement est-il connu ? \
							• Existe-t-il un risque d’annulation ou de remboursement ultérieur ? "
			},
			"step_5":{
				"label": "Contrôles",
				"text" : "• Vérifier que le paiement est effectivement encaissé. \
							• Vérifier la cohérence entre montant facturé et montant encaisser. \
							• Vérifier la date du règlement. \
							• Vérifier l’absence de solde restant dû. "
			},
			"step_6":{
				"label": "Vigilances",
				"text" : "• Ne pas déclarer un paiement non encore encaissé. \
							• Distinguer paiement effectif et simple autorisation bancaire. \
							• Vérifier les remboursements éventuels. "
			},
			"step_7":{
				"label": "Réponse rapide",
				"text" : "Si le client a déjà payé au moment de l’émission de la facture, l’information de règlement doit être intégrée dès l’origine dans la facture électronique."
			}
		}
	},
	"c_3": {
		"label" : "CAS 3 - Facture payée par un tiers ",
		"procedure" : {
			"step_1":{
				"label": "Description",
				"text" : "Le destinataire de la facture est différent du payeur réel. \
							Exemples fréquents : assurance, mutuelle, organisme financeur, société mère, centrale de paiement ou organisme de prise en charge. \
							Le client reste celui à qui la facture est adressée, même si le règlement provient d’un autre acteur. "
			},
			"step_2":{
				"label": "Impact comptable",
				"text" : "La facture reste établie au nom du client concerné. \
							Le règlement est rapproché du compte client même lorsqu’il provient d’un tiers. Des comptes spécifiques peuvent être utilisés selon l’organisation comptable ou selon le type de tiers payeur. \
							Le suivi doit permettre d’identifier les restes à charge, les paiements partiels ou les rejets de prise en charge. "
			},
			"step_3":{
				"label": "Impact facture électronique",
				"text" : "La facture identifie le client facturé. Les informations relatives au payeur peuvent devoir être communiquées lorsque le dispositif ou le logiciel le permet. \
							Les flux de suivi des paiements devront permettre d’identifier l’encaissement provenant du tiers et de le rattacher à la bonne facture. "
			},
			"step_4":{
				"label": "Questions à poser",
				"text" : "• Qui reçoit la facture ? \
							• Qui effectue le paiement ? \
							• Le tiers paie-t-il totalement ou partiellement ? \
							• Existe-t-il une convention de prise en charge ? \
							• Y a-t-il un reste à charge pour le client ? "
			},
			"step_5":{
				"label": "Contrôles",
				"text" : "• Vérifier l’identité du client facturé. \
							• Vérifier l’identité du tiers payeur. \
							• Contrôler les montants réglés. \
							• Contrôler les éventuels restes à charge. \
							• Vérifier le lettrage du compte client. "
			},
			"step_6":{
				"label": "Vigilances",
				"text" : "• Ne pas confondre client et payeur. \
							• Vérifier les paiements partiels. \
							• Gérer correctement les rejets de prise en charge. \
							• Attention aux délais de règlement des organismes tiers."
			},
			"step_7":{
				"label": "Réponse rapide",
				"text" : "Le client facturé reste le destinataire de la facture, même si le règlement est effectué par un tiers. Le paiement doit simplement être rattaché à la bonne facture."
			}
		}
	}
}

const dict_typologie = {
	"BTP": {
		"label": "B.T.P.",
		"questions" :[
			"q_1",
			"q_3"
		]
	},
	"RESTAURANT": {
		"label": "Restaurant",
		"questions" :[
			"q_1",
			"q_2"
		]
	},
	"COMMERCE": {
		"label": "Commerce",
		"questions" :[
			"q_1"
		]
	}
}