var Feature = require('./Feature.js');

Feature.inherits(RotoloCarta, Feature);

function RotoloCarta(feature) {
	Feature.call(this, feature);
}

RotoloCarta.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

RotoloCarta.prototype.in_graph = true;
RotoloCarta.prototype.in_2D_map = false;

RotoloCarta.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  
var acciaioscuro=THREE.ImageUtils.loadTexture("../../assets/textures/general/acciaio.jpg" )

var cylinderGeometry1 = new THREE.CylinderGeometry(0.05,0.05,0.10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.x=Math.PI/2;
      maniglia.position.set(0,0.75,0);
      o1.add(maniglia); 

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.02,0.02,0.14,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.x=Math.PI/2;
      maniglia.position.set(0,0.75,0);
      o1.add(maniglia); 

      var cubeGeometryBase = new THREE.BoxGeometry(0.001,0.2,0.1);
      var cubeMaterial = new THREE.MeshLambertMaterial({});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
      banco.position.set(0.05,0.65,0);
      o1.add(banco);

//sorreggirotolo
      var cubeGeometryBase = new THREE.BoxGeometry(0.01,0.15,0.15);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaioscuro});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
      banco.position.set(-0.12,0.75,0);
      o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.14,0.05,0.01);
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
      banco.position.set(-0.05,0.75,-0.06);
      o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.14,0.05,0.01);
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
      banco.position.set(-0.05,0.75,0.06);
      o1.add(banco);
  
	
	o1.feature = this;
	o1.name = this.id;
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = RotoloCarta;