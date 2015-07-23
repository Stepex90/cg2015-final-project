var Feature = require('./Feature.js');

Feature.inherits(TorrePc, Feature);

function TorrePc(feature) {
	Feature.call(this, feature);
}

TorrePc.prototype.style = {
			    			prefix: "fa",
	    					icon: "fa-desktop",
	    					zIndex: 3
						};

TorrePc.prototype.in_graph = true;
TorrePc.prototype.in_2D_map = true;

TorrePc.prototype.get3DModel = function() {

	var torre=new THREE.Object3D();
      torre.rotation.x=Math.PI/2;


      var floppy = THREE.ImageUtils.loadTexture("../../assets/textures/general/floppy.jpg" )
      var power=THREE.ImageUtils.loadTexture("../../assets/textures/general/power.jpg" )
      var lettore=THREE.ImageUtils.loadTexture("../../assets/textures/general/lettorecd2.jpg" )
      var bianco=THREE.ImageUtils.loadTexture("../../assets/textures/general/bn.jpg" )
      var usb=THREE.ImageUtils.loadTexture("../../assets/textures/general/usb.jpg" )
      var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/general/acciaio.jpg" )


      var cubeGeometryBase = new THREE.BoxGeometry(0.45,0.50,0.25);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:bianco});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.y=0.27;
      torre.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.05,0.20);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:lettore});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.45,0);
      torre.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.05,0.20);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:bianco});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.39,0);
      torre.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.05,0.20);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:bianco});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.33,0);
      torre.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.05,0.15);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:floppy});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.25,0);
      torre.add(banco);

      //power

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.02,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:power});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.14,0);
      torre.add(banco);

      //usb
      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.001,0.12);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.085,0);
      torre.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.001,0.12);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.055,0);
      torre.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.001,0.03);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.07,0.06);
      banco.rotation.x=Math.PI/2;
      torre.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.001,0.03);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.07,-0.06);
      banco.rotation.x=Math.PI/2;
      torre.add(banco);



      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.02,0.06);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:usb});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.1,-0.03);
      torre.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.02,0.01);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.07,-0.04);
      torre.add(banco);

      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.07,-0.02);
      torre.add(banco);

      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.176,0.07,0);
      torre.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.1,0.015,0.002);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x0000AA});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.07,-0.042);
      torre.add(banco);

      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.07,-0.022);
      torre.add(banco);

      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.177,0.07,-0.002);
      torre.add(banco);

      //jack
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.003,0.003,0.10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x66CC66});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(0.176,0.07,0.02);
      torre.add(maniglia);
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.003,0.003,0.10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xFF6699});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(0.176,0.07,0.035);
      torre.add(maniglia);
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.003,0.003,0.10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x3366CC});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(0.176,0.07,0.05);
      torre.add(maniglia);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.0018,0.0018,0.10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(0.177,0.07,0.02);
      torre.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(0.177,0.07,0.035);
      torre.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.rotation.z=Math.PI/2;
      maniglia.position.set(0.177,0.07,0.05);
      torre.add(maniglia);

      //DECORAZIONI
      var curve = new THREE.SplineCurve3(
        [ new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 12, 0, 2 ),
          new THREE.Vector3( 3, 0, 5 ),  
          new THREE.Vector3( 0, 0, 18 )]);


      var geometry = new THREE.LatheGeometry( curve.getPoints(20),200,0, Math.PI);
      var material = new THREE.MeshLambertMaterial( { color: 0x0000ff} );
      material.side = THREE.DoubleSide;
      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.x=Math.PI;
      lathe.scale.set(0.0001,0.01,0.01);
      lathe.position.set(0.23,0.21,0.1);
      torre.add( lathe );

      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.x=Math.PI;
      lathe.rotation.y=Math.PI;
      lathe.scale.set(0.0001,0.01,0.01);
      lathe.position.set(0.23,0.21,-0.1);
      torre.add( lathe );
  	
    	torre.feature = this;
    	torre.name = this.id;
    	var model = Feature.packageModel(torre);

  	  return model;
};

module.exports = TorrePc;