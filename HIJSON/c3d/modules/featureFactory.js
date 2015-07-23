// (1) dependencies
var utilities = require('./utilities.js');

// (2) private things
var featureClasses = {};
featureClasses['Feature'] = require('../features/Feature.js');
featureClasses['Antenna'] = require('../features/Antenna.js');
featureClasses['BadgeReader'] = require('../features/BadgeReader.js');
featureClasses['Chair'] = require('../features/Chair.js');
featureClasses['Door'] = require('../features/Door.js');
featureClasses['External_wall'] = require('../features/External_wall.js');
featureClasses['FireExtinguisher'] = require('../features/FireExtinguisher.js');
featureClasses['GraphNode'] = require('../features/GraphNode.js');
featureClasses['Hotspot'] = require('../features/Hotspot.js');
featureClasses['Internal_wall'] = require('../features/Internal_wall.js');
featureClasses['Level'] = require('../features/Level.js');
featureClasses['Light'] = require('../features/Light.js');
featureClasses['Room'] = require('../features/Room.js');
featureClasses['Server'] = require('../features/Server.js');
featureClasses['SurveillanceCamera'] = require('../features/SurveillanceCamera.js');
featureClasses['Table'] = require('../features/Table.js');
featureClasses['Window'] = require('../features/Window.js');
featureClasses['Stair'] = require('../features/Stair.js');
featureClasses['Bed'] = require('../features/Bed.js');
featureClasses['CarrelloMensa'] = require('../features/CarrelloMensa.js');
featureClasses['TavoloMensa'] = require('../features/TavoloMensa.js');
featureClasses['Panca'] = require('../features/Panca.js');
featureClasses['CestinoMensa'] = require('../features/CestinoMensa.js');
featureClasses['Vassoio'] = require('../features/Vassoio.js');
featureClasses['Armadietto'] = require('../features/Armadietto.js');
featureClasses['Lucidatrice'] = require('../features/Lucidatrice.js');
featureClasses['Espositore'] = require('../features/Espositore.js');
featureClasses['Segnale'] = require('../features/Segnale.js');
featureClasses['CarrelloPulizie'] = require('../features/CarrelloPulizie.js');
featureClasses['Scaffale'] = require('../features/Scaffale.js');
featureClasses['Pilastro'] = require('../features/Pilastro.js');
featureClasses['Distributore'] = require('../features/Distributore.js');
featureClasses['Sterilizzatore'] = require('../features/Sterilizzatore.js');
featureClasses['Bicchiere'] = require('../features/Bicchiere.js');
featureClasses['Water'] = require('../features/Water.js');
featureClasses['Lavandino'] = require('../features/Lavandino.js');
featureClasses['MonitorPc'] = require('../features/MonitorPc.js');
featureClasses['TorrePc'] = require('../features/TorrePc.js');
featureClasses['Banco'] = require('../features/Banco.js');
featureClasses['BancoLavandino'] = require('../features/BancoLavandino.js');
featureClasses['RotoloCarta'] = require('../features/RotoloCarta.js');
featureClasses['Asciugamani'] = require('../features/Asciugamani.js');
featureClasses['Frigo'] = require('../features/Frigo.js');
featureClasses['Cucina'] = require('../features/Cucina.js');
featureClasses['Carrello'] = require('../features/Carrello.js');





function capitaliseFirstLetter(featureClass) {
	return featureClass.charAt(0).toUpperCase() + featureClass.slice(1);
}

// (3) public/exported things
var self = module.exports = {
	generateFeature: function(feature) {
		var newFeature;
		var featureClass = capitaliseFirstLetter(feature.properties.class);
		if (featureClass in featureClasses) {
			newFeature = new featureClasses[featureClass](feature);
		} else {
			newFeature = new featureClasses['Feature'](feature);
		}
		return newFeature;
	}
}; //close module.exports