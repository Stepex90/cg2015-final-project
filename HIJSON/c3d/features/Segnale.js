var Feature = require('./Feature.js');

Feature.inherits(Segnale, Feature);

function Segnale(feature) {
      Feature.call(this, feature);
}

Segnale.prototype.style = {
                                    prefix: "fa",
                                    icon: "plus",
                                    zIndex: 3
                                    };

Segnale.prototype.in_graph = true;

Segnale.prototype.in_2D_map = false;

Segnale.prototype.get3DModel = function() {
      
   var yellow =  new THREE.MeshLambertMaterial({color: 0xF7DA00});
 
      var shape = new THREE.Shape([ new THREE.Vector2(0,0),
                                    new THREE.Vector2(0,0.5),
                                    new THREE.Vector2(0.3,0.5),
                                    new THREE.Vector2(0.3,0 )])
 
      // Creazione del buco
      var hole1 = new THREE.Path();
      hole1.absellipse(0.15, 0.4, 0.1, 0.05, 0, Math.PI ,true);
      shape.holes.push(hole1);

      var extrudeSettings1 = {  amount: 0.02, 
                                bevelThickness: 0.5, 
                                bevelSegments: 0.5, 
                                bevelSize: 1, 
                                bevelEnabled: false, 
                                curveSegments: 12, 
                                steps: 1
                             };


      var geometry1 = new THREE.ExtrudeGeometry( shape, extrudeSettings1 );

      var mesh = new THREE.Mesh( geometry1, yellow );
      mesh.position.set( 0,0.1,0 );
      mesh.rotation.x=0.1*Math.PI
      scene.add( mesh );

      var mesh2 = new  THREE.Mesh( geometry1, yellow );
      mesh2.position.set( 0,0.1,0.3325 );
      mesh2.rotation.x=-0.2*Math.PI
      mesh.add( mesh2 );

      //cilindri
      var ds1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.03,32),yellow); 
      ds1.position.set(0.05,0.5,0.03);
      ds1.rotation.z=0.5*Math.PI
      mesh.add(ds1);

      var ds1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.03,32),yellow); 
      ds1.position.set(0.25,0.5,0.03);
      ds1.rotation.z=0.5*Math.PI
      mesh.add(ds1);

      //texture
      var t1 = new createMesh(new THREE.PlaneGeometry(0.25,0.25),"segnale.jpg");
      t1.position.set(0.15,0.25,-0.0005);
      t1.rotation.y=Math.PI
      mesh.add(t1);

      var t2 = new createMesh(new THREE.PlaneGeometry(0.25,0.25),"segnale.jpg");
      t2.position.set(0.15,0.25,0.03);
      mesh2.add(t2);

      //piedi
      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.06,0.04,0.02),yellow);
      p0.position.set(0.03,-0.02,0.01);
      mesh.add(p0);

      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.06,0.04,0.02),yellow);
      p0.position.set(0.27,-0.02,0.01);
      mesh.add(p0);

      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.06,0.04,0.02),yellow);
      p0.position.set(0.03,-0.02,0.01);
      mesh2.add(p0);

      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.06,0.04,0.02),yellow);
      p0.position.set(0.27,-0.02,0.01);
      mesh2.add(p0);

      function createMesh(geom, imageFile) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
        var mat = new THREE.MeshBasicMaterial();
        var mat = new THREE.MeshLambertMaterial();
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);
        return mesh;
      }

  	  mesh.feature = this;
      mesh.name = this.id;
      var model = Feature.packageModel(mesh);

      return model;
};

module.exports = Segnale;