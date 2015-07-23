var Feature = require('./Feature.js');

Feature.inherits(Bicchiere, Feature);

function Bicchiere(feature) {
      Feature.call(this, feature);
}

Bicchiere.prototype.style = {
                                    prefix: "fa",
                                    icon: "plus",
                                    zIndex: 3
                                    };

Bicchiere.prototype.in_graph = true;

Bicchiere.prototype.in_2D_map = false;

Bicchiere.prototype.get3DModel = function() {


	    var green = new THREE.MeshLambertMaterial({color: 0x009966});

      var bicchiere=new THREE.Object3D();
      scene.add(bicchiere);
      bicchiere.position.y=0.5;

      var curve = new THREE.SplineCurve3([
                new THREE.Vector3( 0, 0, 0 ),
                new THREE.Vector3( 0.04, 0, 0 ),
                new THREE.Vector3( 0.05, 0, 0.12 ),]
      );

      var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
      green.side = THREE.DoubleSide;
      var lathe = new THREE.Mesh( geometry, green );
      lathe.rotation.x=-Math.PI/2;
      bicchiere.add(lathe);

	    bicchiere.feature = this;
      bicchiere.name = this.id;
      var model = Feature.packageModel(bicchiere);

      return model;
};

module.exports = Bicchiere;