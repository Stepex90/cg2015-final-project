var Feature = require('./Feature.js');

Feature.inherits(CestinoMensa, Feature);

function CestinoMensa(feature) {
	Feature.call(this, feature);
}

CestinoMensa.prototype.style = {
			    			prefix: "fa",
	    					icon: "fa-trash-o",
	    					zIndex: 3
						};

CestinoMensa.prototype.in_graph = true;

CestinoMensa.prototype.in_2D_map = true;

CestinoMensa.prototype.get3DModel = function() {
      
      var material3 = new THREE.MeshLambertMaterial({color: 0xC0C0C0});

  	  // lato bottom
      var b0 = new THREE.Mesh(new THREE.BoxGeometry(7,6.25,0.25),material3);
      b0.position.set(0,0.125,0);
      b0.scale.set(0.075,0.1,0.1)
      scene.add(b0);

      // lato 0
      var l0 = new THREE.Mesh(new THREE.BoxGeometry(6.25,10.5,0.25),material3);
      l0.rotation.x=0.5*Math.PI;
      l0.rotation.y=0.5*Math.PI;
      l0.position.set(3.6,0,-5);
      b0.add(l0);

      // lato 1
      var b1 = new THREE.Mesh(new THREE.BoxGeometry(7,10.5,0.25),material3);
      b1.rotation.x=0.5*Math.PI;
      b1.position.set(0,-3,-5);
      b0.add(b1);

      // lato 2
      var b2 = new THREE.Mesh(new THREE.BoxGeometry(7,10.5,0.25),material3);
      b2.rotation.x=-0.5*Math.PI;
      b2.position.set(0,3,-5);
      b0.add(b2);

      // lato up
      var b3 = new THREE.Mesh(new THREE.BoxGeometry(7,6.25,0.25),material3);
      b3.rotation.x=Math.PI;
      b3.position.set(0,0,-9.5);
      b0.add(b3);

      // lato intermedio
      var b4 = new THREE.Mesh(new THREE.BoxGeometry(7,6,0.25),material3);
      b4.rotation.x=Math.PI;
      b4.position.set(0,0,-6.5);
      b0.add(b4);

      // scomparto grande
      var c1 = new THREE.Mesh(new THREE.BoxGeometry(7,5.75,6.25),material3);
      c1.position.set(0.125,0,-3.25);
      b0.add(c1);
   
      //scomparto piccolo
      var c2 = new THREE.Mesh(new THREE.PlaneGeometry(2.75,5.75),material3);
      c2.rotation.y=-0.45*Math.PI
      c2.position.set(-3.3,0,-8);
      b0.add(c2);

      //serratura
      var s1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2,0.2,0.5,32),material3);
      s1.rotation.x=0.5*Math.PI
      s1.rotation.z=0.5*Math.PI
      s1.position.set(-3.2,2,-4.5)
      b0.add(s1);

      var s2 = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.125,0.2),material3);
      s2.position.set(-3.4,2,-4.5);
      b0.add(s2);
		
	    b0.feature = this;
	    b0.name = this.id;
  	  var model = Feature.packageModel(b0);

	    return model;
};

module.exports = CestinoMensa;