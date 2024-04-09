import wixWindowFrontend from 'wix-window-frontend';

$w.onReady(function () {
	var petiscos = $w('#box2');
	var bolinhos = $w('#box3');
	var carnes = $w('#box4');
	var principal = $w('#box5');
	var sobremesa = $w('#box6');
	var acompanhamento = $w('#box7');
	var doses = $w('#box8');
	var chops = $w('#box9');
	var bebidas = $w('#box10');
	var dropdown = $w('#dropFilters');

	if (wixWindowFrontend.formFactor === "Desktop") {
		$w('#btnPrincipal').onClick(function() {
			principal.expand();
			carnes.collapse();
			petiscos.collapse();
			bolinhos.collapse();
			sobremesa.collapse();
			doses.collapse();
			chops.collapse();
			bebidas.collapse();
			acompanhamento.collapse();
		});

		$w('#btnCarnes').onClick(function() {
			principal.collapse();
			carnes.expand();
			petiscos.collapse();
			bolinhos.collapse();
			sobremesa.collapse();
			doses.collapse();
			chops.collapse();
			bebidas.collapse();
			acompanhamento.collapse();
		});

		$w('#btnPetiscos').onClick(function() {
			principal.collapse();
			carnes.collapse();
			petiscos.expand();
			bolinhos.expand();
			sobremesa.collapse();
			doses.collapse();
			chops.collapse();
			bebidas.collapse();
			acompanhamento.collapse();
		});

		$w('#btnSobremesa').onClick(function() {
			principal.collapse();
			carnes.collapse();
			petiscos.collapse();
			bolinhos.collapse();
			sobremesa.expand();
			doses.collapse();
			chops.collapse();
			bebidas.collapse();
			acompanhamento.collapse();
		});

		$w('#btnBebidas').onClick(function() {
			principal.collapse();
			carnes.collapse();
			petiscos.collapse();
			bolinhos.collapse();
			sobremesa.collapse();
			doses.expand();
			chops.expand();
			bebidas.expand();
			acompanhamento.collapse();
		});

		$w('#btnAcompanhamentos').onClick(function() {
			principal.collapse();
			carnes.collapse();
			petiscos.collapse();
			bolinhos.collapse();
			sobremesa.collapse();
			doses.collapse();
			chops.collapse();
			bebidas.collapse();
			acompanhamento.expand();
		});
	};

	if (wixWindowFrontend.formFactor === "Mobile") {
		dropdown.expand();

		dropdown.options = [
			{"label": "Petiscos", "value": "Petiscos"},
			{"label": "Carnes", "value": "Carnes"},
			{"label": "Principal", "value": "Principal"},
			{"label": "Sobremesa", "value": "Sobremesa"},
			{"label": "Acompanhamentos", "value": "Acompanhamentos"},
			{"label": "Bebidas", "value": "Bebidas"}
		]

		dropdown.onChange((event) => {
			switch (event.target.value) {
				case "Principal":
					principal.expand();
					carnes.collapse();
					petiscos.collapse();
					bolinhos.collapse();
					sobremesa.collapse();
					doses.collapse();
					chops.collapse();
					bebidas.collapse();
					acompanhamento.collapse();
					break;
				case "Carnes":
					principal.collapse();
					carnes.expand();
					petiscos.collapse();
					bolinhos.collapse();
					sobremesa.collapse();
					doses.collapse();
					chops.collapse();
					bebidas.collapse();
					acompanhamento.collapse();
					break;
				case "Petiscos":
					principal.collapse();
					carnes.collapse();
					petiscos.expand();
					bolinhos.expand();
					sobremesa.collapse();
					doses.collapse();
					chops.collapse();
					bebidas.collapse();
					acompanhamento.collapse();
					break;
				case "Sobremesa":
					principal.collapse();
					carnes.collapse();
					petiscos.collapse();
					bolinhos.collapse();
					sobremesa.expand();
					doses.collapse();
					chops.collapse();
					bebidas.collapse();
					acompanhamento.collapse();
					break;
				case "Bebidas":
					principal.collapse();
					carnes.collapse();
					petiscos.collapse();
					bolinhos.collapse();
					sobremesa.collapse();
					doses.expand();
					chops.expand();
					bebidas.expand();
					acompanhamento.collapse();
					break;
				case "Acompanhamentos":
					principal.collapse();
					carnes.collapse();
					petiscos.collapse();
					bolinhos.collapse();
					sobremesa.collapse();
					doses.collapse();
					chops.collapse();
					bebidas.collapse();
					acompanhamento.expand();
					break;
				default:
					principal.expand();
				break;
			}
		})
	}
});