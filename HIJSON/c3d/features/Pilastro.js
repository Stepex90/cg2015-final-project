var Feature = require('./Feature.js');
var React = require('react');
Feature.inherits(Pilastro, Feature);

function Pilastro(feature) {
	Feature.call(this, feature);
}

Pilastro.prototype.style = {
							weight: 0,
						    color: "#d8d8d8",
						    fillOpacity: 1,
						    zIndex: 2
						};

Pilastro.prototype.in_graph = true;
Pilastro.prototype.in_2D_map = true;

Pilastro.prototype.get3DModel = function() {
	var shape = Feature.generatePolygonShape(this.geometry);
	var geometry = shape.extrude({
                curveSegments: 1,
                steps: 1,
                amount: 4,
                bevelEnabled: false
            });

	var material = new THREE.MeshLambertMaterial( {color: 0xd8d8d8} );
	var wireMaterial = new THREE.MeshLambertMaterial( {color: 0x000000, wireframe: true, wireframeLinewidth: 2} );

	var pilastro = new THREE.Mesh(geometry, material);
	pilastro.receiveShadow = true;
	pilastro.castShadow = true;
	pilastro.feature = this;
	pilastro.name = this.id;
	var model = Feature.packageModel(pilastro);

	return model;
};

module.exports = Pilastro;