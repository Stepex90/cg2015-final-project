var Feature = require('./Feature.js');

Feature.inherits(CarrelloMensa, Feature);

function CarrelloMensa(feature) {
	Feature.call(this, feature);
}

CarrelloMensa.prototype.style = {
			    			prefix: "fa",
	    					icon: "plus",
	    					zIndex: 3
						};

CarrelloMensa.prototype.in_graph = true;

CarrelloMensa.prototype.in_2D_map = false;

CarrelloMensa.prototype.get3DModel = function() {

      var black = new THREE.MeshLambertMaterial({color: 0x000000});
      var gray = new THREE.MeshLambertMaterial({color: 0xC0C0C0});


      var cm = new THREE.Mesh(new THREE.CylinderGeometry(0.8,0.8,0.5,32),black);
      cm.position.set(-0.4,-0.3,0.02);
      scene.add(cm);

      for(fx=0;fx<=6;fx+=6)
      {
          for(fz=0;fz<=6;fz+=6)
          {

              // ruota pneumatico
              var r1 = new THREE.Mesh(new THREE.CylinderGeometry(0.8,0.8,0.5,32),black);
              r1.position.set(fx,fz,0);
              cm.add(r1);

              // ruota cuscinetto
              var r1a = new THREE.Mesh(new THREE.CylinderGeometry(0.6,0.6,0.6,32),gray);
              r1.add(r1a);

              // dado esagonale
              var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.8,6),black); 
              cr1.position.set(0,0,0);
              r1.add(cr1);

              // copriruota disco superiore
              var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.6,0.6,0.1,32), gray); 
              cr1.rotation.x=0.5*Math.PI;
              cr1.position.set(-0.3,0,-1.2);
              r1.add(cr1);

              // copriruota disco inferiore 
              var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3725,0.3725,0.3,32), black); 
              cr1.rotation.x=0.5*Math.PI;
              cr1.position.set(-0.3,0,-1);
              r1.add(cr1);
          
              // triangolo  lato 1
              var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.55,0.55,0.05,3), gray); 
              cr1.position.set(-0.2,-0.35,-0.6);
              r1.add(cr1);

              // rettangolo lato 1
              var b1 = new THREE.Mesh(new THREE.BoxGeometry(0.55,1.1,0.05),gray);
              b1.rotation.x=0.5*Math.PI;
              b1.position.set(0,-0.35,-0.4);
              r1.add(b1);

              // triangolo  lato 2
              var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.55,0.55,0.05,3), gray); 
              cr1.position.set(-0.2,0.35,-0.6);
              r1.add(cr1);

              // rettangolo lato 2
              var b2 = new THREE.Mesh(new THREE.BoxGeometry(0.55,1.1,0.05),gray);
              b2.rotation.x=0.5*Math.PI;
              b2.position.set(0,0.35,-0.4);
              r1.add(b2);

              // rettangolo lato up
              var b3 = new THREE.Mesh(new THREE.BoxGeometry(0.95,0.75,0.1),gray);
              b3.position.set(-0.2,0,-0.9);
              r1.add(b3);

          }
      }
    
      // lati
      var l1 = new THREE.Mesh(new THREE.BoxGeometry(0.3,17.1,0.3), gray); 
      l1.rotation.x=0.5*Math.PI
      l1.position.set(-0.3,0,-9.6)
      cm.add(l1);
      
      // lati
      var l2 = new THREE.Mesh(new THREE.BoxGeometry(0.3,17.1,0.3), gray); 
      l2.rotation.x=0.5*Math.PI
      l2.position.set(-0.3,6,-9.6)
      cm.add(l2);
      
      // lati
      var l3 = new THREE.Mesh(new THREE.BoxGeometry(0.3,17.1,0.3), gray); 
      l3.rotation.x=0.5*Math.PI
      l3.position.set(5.7,0,-9.6)
      cm.add(l3);
      
      // lati
      var l4 = new THREE.Mesh(new THREE.BoxGeometry(0.3,17.1,0.3), gray);  
      l4.rotation.x=0.5*Math.PI
      l4.position.set(5.7,6,-9.6)
      cm.add(l4);

      // archi top
      var a1 = new THREE.Mesh(new THREE.TorusGeometry(3, 0.15, 20, 20, 3.125),gray);
      a1.rotation.x=-0.5*Math.PI
      a1.position.set(2.7,6,-18.1)
      cm.add(a1);

      // archi top
      var a2 = new THREE.Mesh(new THREE.TorusGeometry(3, 0.15, 20, 20, 3.125),gray);
      a2.rotation.x=-0.5*Math.PI
      a2.position.set(2.7,0,-18.1)
      cm.add(a2);

      // ripiano top
      var plane = new THREE.Mesh(new THREE.BoxGeometry(0.3,5.7,0.3),gray);
      plane.position.set(-0.3,3,-18)
      cm.add(plane)

      // ripiano top
      var plane = new THREE.Mesh(new THREE.BoxGeometry(0.3,5.7,0.3),gray);
      plane.rotation.x=0.5*Math.PI
      plane.rotation.z=0.5*Math.PI
      plane.position.set(2.7,0,-18)
      cm.add(plane)

      // ripiano top
      var plane = new THREE.Mesh(new THREE.BoxGeometry(0.3,5.7,0.3),gray);
      plane.rotation.x=0.5*Math.PI
      plane.rotation.z=0.5*Math.PI
      plane.position.set(2.7,6,-18)
      cm.add(plane)

      // ripiano top
      var plane = new THREE.Mesh(new THREE.BoxGeometry(0.3,5.7,0.3),gray);
      plane.position.set(5.7,3,-18)
      cm.add(plane)

      //10 ripiani
      var Dz;
      for(Dz=-16.5;Dz<=-2.8;Dz+=1.5)
      {
            var plane = new THREE.Mesh(new THREE.BoxGeometry(0.5,5.7,0.1),gray);
            plane.rotation.z=0.5*Math.PI
            plane.position.set(2.7,5.9,Dz+0.2)
            cm.add(plane)

            var plane = new THREE.Mesh(new THREE.BoxGeometry(0.1,5.7,0.5),gray);
            plane.rotation.z=0.5*Math.PI
            plane.position.set(2.7,6.1,Dz)
            cm.add(plane)
                  
            var plane = new THREE.Mesh(new THREE.BoxGeometry(0.5,5.7,0.1),gray);
            plane.rotation.z=0.5*Math.PI
            plane.position.set(2.7,0.1,Dz+0.2)
            cm.add(plane)

            var plane = new THREE.Mesh(new THREE.BoxGeometry(0.1,5.7,0.5),gray);
            plane.rotation.z=0.5*Math.PI
            plane.position.set(2.7,-0.1,Dz)
            cm.add(plane)
      }

      // ripiano down
      var d1 = new THREE.Mesh(new THREE.BoxGeometry(0.3,5.7,0.3),gray);
      d1.position.set(-0.3,3,-2)
      cm.add(d1)

      //ripiano down
      var d2 = new THREE.Mesh(new THREE.BoxGeometry(0.3,5.7,0.3),gray);
      d2.position.set(5.7,3,-2)
      cm.add(d2)

      cm.scale.set(0.07,0.08,0.1);
	    cm.feature = this;
	    cm.name = this.id;
  	  var model = Feature.packageModel(cm);

	return model;
};

module.exports = CarrelloMensa;