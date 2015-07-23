var Feature = require('./Feature.js');

Feature.inherits(BancoLavandino, Feature);

function BancoLavandino(feature) {
	Feature.call(this, feature);
}

BancoLavandino.prototype.style = {
			    			weight:0,
                                    fillColor: "#9b8c7a",
                                    zIndex: 3
						};

BancoLavandino.prototype.in_graph = true;
BancoLavandino.prototype.in_2D_map = true;

BancoLavandino.prototype.get3DModel = function() {

      var tableX = this.geometry.coordinates[0][1][0];
      var tableY = this.geometry.coordinates[0][2][1];
      var tableZ = this.properties.height;

	var o1 = new THREE.Object3D();
      o1.rotation.x=Math.PI/2;
      o1.rotation.y=Math.PI/2;

      o1.position.set(tableX/2,tableY/2,0);
 
      var acciaio = THREE.ImageUtils.loadTexture("../../assets/textures/general/acciaio.jpg" )
      var gamba = THREE.ImageUtils.loadTexture("../../assets/textures/general/acciaio.jpg" )
      var cassetti = THREE.ImageUtils.loadTexture("../../assets/textures/general/acciaioscuro.jpg" )

      var cubeGeometryBase = new THREE.BoxGeometry(0.71,1,0.04);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,0.82,0.35);
      banco.rotation.x=Math.PI/2;
      o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.074,0.65,0.04);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.318,0.82,-0.475);
      banco.rotation.x=Math.PI/2;
      o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.14,0.7,0.04);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,0.82,-0.73);
      banco.rotation.z=Math.PI/2;
      banco.rotation.x=Math.PI/2;
      o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.28,0.65,0.04);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(-0.21,0.82,-0.475);
      banco.rotation.x=Math.PI/2;
      o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.07,1.65,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(-0.35,0.86,0.025);
      banco.rotation.x=Math.PI/2;
      banco.rotation.y=Math.PI/2;
      o1.add(banco);


      //gambe tavolo sx

      var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:gamba});
      var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      piede.position.set(0,0.1,0.72);
      o1.add(piede);
      
      var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      piede.position.set(0,0.44,0.72);
      piede.rotation.z=Math.PI/2;
      o1.add(piede);

      var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.7,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      piede.position.set(0,0.44,0.72);
      piede.rotation.z=Math.PI/2;
       o1.add(piede);

      //gambe tavolo dx
  
      var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:gamba});
      var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      piede.position.set(0,0.1,-0.72);
      o1.add(piede);
      
      var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      piede.position.set(0,0.44,-0.72);
      piede.rotation.z=Math.PI/2;
      o1.add(piede);

      var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.7,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      piede.position.set(0,0.44,-0.72);
      piede.rotation.z=Math.PI/2;
       o1.add(piede);

      //sportelli


      var cubeGeometryBase = new THREE.BoxGeometry(0.78,0.7,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      piede.position.set(0.33,0.44,-0.34);
      piede.rotation.y=Math.PI/2;
      o1.add(piede);

      var cubeGeometryBase = new THREE.BoxGeometry(0.78,0.7,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      piede.position.set(0.31,0.44, 0.34);
      piede.rotation.y=Math.PI/2;
      o1.add(piede);

      var cubeGeometryBase = new THREE.BoxGeometry(0.07,0.07,1.5);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      piede.position.set(0.33,0.1,0);
      o1.add(piede);



      var cubeGeometryBase = new THREE.BoxGeometry(1.5,0.7,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      piede.position.set(-0.33,0.44,0);
      piede.rotation.y=Math.PI/2;
      o1.add(piede);


      //maniglie

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.25,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.33,0.54,-0.6);
    
      o1.add(maniglia);


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.25,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.31,0.54,0.6);
     
      o1.add(maniglia);

      var o2=new THREE.Object3D();
      o1.add(o2);

      o2.scale.set(0.7,0.8,1);
      o2.position.set(0.1,0.05,-0.4);

      //lavandino

      var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.3,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(-0.25,0.82,0);
      banco.rotation.y=Math.PI/2;
      o2.add(banco);
      var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.3,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,0.82,-0.25);
      o2.add(banco);
      var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.3,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.25,0.82,0);
      banco.rotation.y=Math.PI/2;
      o2.add(banco);
      var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.3,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,0.82,0.25);
      o2.add(banco);
      var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.5,0.02);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,0.67,0);
      banco.rotation.x=Math.PI/2;
      o2.add(banco);


      var torusMaterial = new THREE.MeshPhongMaterial( { map:acciaio } );
      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.05, 0.025, 30, 30,Math.PI/2 ), torusMaterial );
      torus.rotation.x =  Math.PI/2;
      torus.position.set(0.21,0.97,0.21);
      o2.add( torus );

      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.05, 0.025, 30, 30,Math.PI/2 ), torusMaterial );
      torus.rotation.x =  Math.PI/2;
      torus.rotation.z =  Math.PI/2;
      torus.position.set(-0.21,0.97,0.21);
      o2.add( torus );

      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.05, 0.025, 30, 30,Math.PI/2 ), torusMaterial );
      torus.rotation.x =  Math.PI/2;
      torus.rotation.z =  Math.PI;
      torus.position.set(-0.21,0.97,-0.21);
      o2.add( torus );

      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.05, 0.025, 30, 30,Math.PI/2 ), torusMaterial );
      torus.rotation.x =  Math.PI/2;
      torus.rotation.z =  -Math.PI/2;
      torus.position.set(0.21,0.97,-0.21);
      o2.add( torus );

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.0239,0.0239,0.428,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.26,0.97,0);
      maniglia.rotation.x =  Math.PI/2;
      o2.add(maniglia);  

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.0239,0.0239,0.428,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(-0.26,0.97,0);
      maniglia.rotation.x =  Math.PI/2;
      o2.add(maniglia); 

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.0239,0.0239,0.428,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0,0.97,0.26);
      maniglia.rotation.z =  Math.PI/2;
      o2.add(maniglia); 

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.0239,0.0239,0.428,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0,0.97,-0.26);
      maniglia.rotation.z =  Math.PI/2;
      o2.add(maniglia); 

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.025,0.025,0.1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(-0.08,0.631,0);
      
      o2.add(maniglia); 

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.005,0.005,0.05,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(-0.08,0.677,0);
      maniglia.rotation.x=Math.PI/2;
      
      o2.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(-0.08,0.677,0);
      maniglia.rotation.x=Math.PI/2;
      maniglia.rotation.z=Math.PI/2;
      o2.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(-0.08,0.677,0);
      maniglia.rotation.x=Math.PI/2;
      maniglia.rotation.z=3*Math.PI/4;
      o2.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(-0.08,0.677,0);
      maniglia.rotation.x=Math.PI/2;
      maniglia.rotation.z=Math.PI/4;
      o2.add(maniglia);



      //lavandino-acqua

      var o3=new THREE.Object3D();
      o1.add(o3);
      o3.position.set(-0.14,0,-0.42);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.0125,0.0125,0.40,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0,0.925,0);
      o3.add(maniglia);   


      var torusMaterial = new THREE.MeshPhongMaterial( { map:acciaio } );
      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.11, 0.013, 30, 30 , Math.PI), torusMaterial );
      
      //torus.rotation.x =  Math.PI/2;
      torus.position.y=1.125;
      torus.position.x=0.11;
      o3.add( torus );

      var torusMaterial = new THREE.MeshPhongMaterial( { map:acciaio } );
      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.01, 0.008, 6, 6 ), torusMaterial );
      torus.rotation.x =  Math.PI/2;
      torus.position.y=1.12;
      torus.position.x=0.22;
      o3.add( torus );


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.006,0.035,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.22,1.108,0);
      o3.add(maniglia);


      var torusMaterial = new THREE.MeshPhongMaterial( { map:acciaio } );
      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.08, 0.008, 30, 30 , Math.PI/2), torusMaterial );
      torus.rotation.x =  Math.PI/2;
      torus.rotation.z =  Math.PI/2;
      torus.position.set(0.085,0.95,0);
      o3.add( torus );

      var torusMaterial = new THREE.MeshPhongMaterial( { map:acciaio } );
      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.08, 0.008, 30, 30 , Math.PI/2), torusMaterial );
      torus.rotation.x =  Math.PI/2;
      torus.rotation.z =  Math.PI;
      torus.position.set(0.085,0.95,0);
      o3.add( torus );



      var cylinderGeometry1 = new THREE.CylinderGeometry(0.008,0.008,0.1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(0.13,0.95,0.08);
      rubinetto.rotation.z=Math.PI/2;
      o3.add(rubinetto);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.008,0.008,0.1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(0.13,0.95,-0.08);
      rubinetto.rotation.z=Math.PI/2;
      o3.add(rubinetto);

      //perno sx e dx
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.002,0.002,0.1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(0.15,0.95,-0.08);
      rubinetto.rotation.z=Math.PI/2;
      o3.add(rubinetto);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.002,0.002,0.1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(0.15,0.95,0.08);
      rubinetto.rotation.z=Math.PI/2;
      o3.add(rubinetto);


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.002,0.002,0.02,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(0,1,-0.030);
      rubinetto.rotation.x=Math.PI/2;
      o3.add(rubinetto);

      //rubinetti
      var curve = new THREE.CubicBezierCurve3(
      new THREE.Vector3( 0, 0, 0 ),
      new THREE.Vector3( 1.5, 0, 0 ),
      new THREE.Vector3( 0.3, 0, 0.5 ),
      new THREE.Vector3( 0.3, 0, 1.2 ));

      var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
      var material = new THREE.MeshLambertMaterial( { color: 0x0066FF} );
      var lathe = new THREE.Mesh( geometry, material );

      lathe.rotation.y=-Math.PI/2;

      lathe.scale.set(0.025,0.025,0.025);
      lathe.position.set(0.2,0.95,-0.08)
      o3.add( lathe );

      var lathe = new THREE.Mesh( geometry, material );

      lathe.rotation.y=-Math.PI/2;

      lathe.scale.set(0.025,0.025,0.025);
      lathe.position.set(0.2,0.95,0.08)
      o3.add( lathe );

      var lathe = new THREE.Mesh( geometry, material );


      lathe.scale.set(0.025,0.025,0.025);
      lathe.position.set(0,1,-0.038)
      o3.add( lathe );

      //bocchette
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.006,0.004,0.02,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(0.17,0.935,0.08);
      o3.add(rubinetto);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.006,0.004,0.02,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(0.17,0.935,-0.08);
      o3.add(rubinetto);
	
    	o1.feature = this;
    	o1.name = this.id;
    	var model = Feature.packageModel(o1);

    	return model;
};

module.exports = BancoLavandino;