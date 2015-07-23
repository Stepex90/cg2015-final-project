var Feature = require('./Feature.js');

Feature.inherits(Vassoio, Feature);

function Vassoio(feature) {
	Feature.call(this, feature);
}

Vassoio.prototype.style = {
			    			prefix: "fa",
	    					icon: "plus",
	    					zIndex: 3
						};

Vassoio.prototype.in_graph = true;

Vassoio.prototype.in_2D_map = false;

Vassoio.prototype.get3DModel = function() {
	
      var green = new THREE.MeshLambertMaterial({color: 0x009966});


      //vassoio fondo
      var v1 = new THREE.Mesh(new THREE.BoxGeometry(0.45,0.01,0.35),green);
      scene.add(v1);
      v1.position.set(0,0.05,0)

      //vassoio spessore corto
      var v3 = new THREE.Mesh(new THREE.BoxGeometry(0.015,0.015,0.35),green);
      v3.position.set(-0.2175,0.01,0)
      v1.add(v3);

      var v4 = new THREE.Mesh(new THREE.BoxGeometry(0.015,0.015,0.35),green);
      v4.position.set(0.2175,0.01,0)
      v1.add(v4);
    
      //vassoio spessore lungo
      var v5 = new THREE.Mesh(new THREE.BoxGeometry(0.45,0.015,0.015),green);
      v5.position.set(0,0.01,-0.1675)
      v1.add(v5);

      var v6 = new THREE.Mesh(new THREE.BoxGeometry(0.45,0.015,0.015),green);
      v6.position.set(0,0.01,0.1675)
      v1.add(v6);

      //vassoio superiore corto
      var v3 = new THREE.Mesh(new THREE.BoxGeometry(0.025,0.009,0.378),green);
      v3.position.set(-0.222,0.02,0)
      v1.add(v3);

      var v4 = new THREE.Mesh(new THREE.BoxGeometry(0.025,0.009,0.378),green);
      v4.position.set(0.222,0.02,0)
      v1.add(v4);

      //vassoio superiore lungo
      var v5 = new THREE.Mesh(new THREE.BoxGeometry(0.421,0.009,0.03),green);
      v5.position.set(0,0.02,-0.174)
      v1.add(v5);

      var v6 = new THREE.Mesh(new THREE.BoxGeometry(0.421,0.009,0.03),green);
      v6.position.set(0,0.02,0.174)
      v1.add(v6);
    
	v1.feature = this;
      v1.name = this.id;
      var model = Feature.packageModel(v1);

	return model;
};

module.exports = Vassoio;