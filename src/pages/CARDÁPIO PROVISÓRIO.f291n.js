import wixWindowFrontend from 'wix-window-frontend';

$w.onReady(function () {
	var petiscos = $w('#sectionPetiscos');
	var carnes = $w('#sectioncarnes');
	var principal = $w('#sectionPrincipal');
	var sobremesa = $w('#sectionSobremesa');
	var acompanhamento = $w('#sectionAcompanhamento');
	var bebidas = $w('#sectionbebidas');
	var dropdown = $w('#dropFilters');

	carnes.hide();
	principal.hide();
	sobremesa.hide();
	acompanhamento.hide();
	bebidas.hide();

	if (wixWindowFrontend.formFactor === "Desktop") {
		petiscos.onClick(function () {
			petiscos.show();
			carnes.hide();
			principal.hide();
			sobremesa.hide();
			acompanhamento.hide();
			bebidas.hide();
		});

		carnes.onClick(function () {
			petiscos.hide();
			carnes.show();
			principal.hide();
			sobremesa.hide();
			acompanhamento.hide();
			bebidas.hide();
		});

		principal.onClick(function () {
			petiscos.hide();
			carnes.hide();
			principal.show();
			sobremesa.hide();
			acompanhamento.hide();
			bebidas.hide();
		});

		sobremesa.onClick(function () {
			petiscos.hide();
			carnes.hide();
			principal.hide();
			sobremesa.show();
			acompanhamento.hide();
			bebidas.hide();
		});

		acompanhamento.onClick(function () {
			petiscos.hide();
			carnes.hide();
			principal.hide();
			sobremesa.hide();
			acompanhamento.show();
			bebidas.hide();
		});

		bebidas.onClick(function () {
			petiscos.hide();
			carnes.hide();
			principal.hide();
			sobremesa.hide();
			acompanhamento.hide();
			bebidas.show();
		});
	};

	if (wixWindowFrontend.formFactor === "Mobile") {
		dropdown.expand();

		dropdown.options = [
			{ "label": "Petiscos", "value": "Petiscos" },
			{ "label": "Carnes", "value": "Carnes" },
			{ "label": "Principal", "value": "Principal" },
			{ "label": "Sobremesa", "value": "Sobremesa" },
			{ "label": "Acompanhamentos", "value": "Acompanhamentos" },
			{ "label": "Bebidas", "value": "Bebidas" }
		]

		dropdown.onChange((event) => {
			switch (event.target.value) {
				case "Principal":
					petiscos.hide();
					carnes.hide();
					principal.show();
					sobremesa.hide();
					acompanhamento.hide();
					bebidas.hide();
					break;
				case "Carnes":
					petiscos.hide();
					carnes.show();
					principal.hide();
					sobremesa.hide();
					acompanhamento.hide();
					bebidas.hide();
					break;
				case "Petiscos":
					petiscos.show();
					carnes.hide();
					principal.hide();
					sobremesa.hide();
					acompanhamento.hide();
					bebidas.hide();
					break;
				case "Sobremesa":
					petiscos.hide();
					carnes.hide();
					principal.hide();
					sobremesa.show();
					acompanhamento.hide();
					bebidas.hide();
					break;
				case "Bebidas":
					petiscos.hide();
					carnes.hide();
					principal.hide();
					sobremesa.hide();
					acompanhamento.hide();
					bebidas.show();
					break;
				case "Acompanhamentos":
					petiscos.hide();
					carnes.hide();
					principal.hide();
					sobremesa.hide();
					acompanhamento.show();
					bebidas.hide();
					break;
				default:
					principal.expand();
					break;
			}
		})
	}
});