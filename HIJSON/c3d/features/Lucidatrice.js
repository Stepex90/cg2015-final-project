var Feature = require('./Feature.js');


function Lucidatrice(feature) {
      Feature.call(this, feature);
}

Feature.inherits(Lucidatrice, Feature);

Lucidatrice.prototype.style =     {
                                                prefix: "fa",
                                                icon: "signal",
                                                zIndex: 3
                                    };
Lucidatrice.prototype.in_graph = true;
Lucidatrice.prototype.in_2D_map = false;

Lucidatrice.prototype.get3DModel = function() {    

      var gray =  new THREE.MeshLambertMaterial({color: 0x4B4B4B});
      var gray2 =  new THREE.MeshLambertMaterial({color: 0x242424});
      var gray3 =  new THREE.MeshLambertMaterial({color: 0xC0C0C0});
      var black =  new THREE.MeshLambertMaterial({color: 0x000000});

      //base
      var lucidatrice = new THREE.Mesh(new THREE.CylinderGeometry(0.2,0.3,0.1,32),black);
      lucidatrice.position.set(0,0.1,0);
      scene.add(lucidatrice);

      //copertuta
      var l1 = new THREE.Mesh(new THREE.CylinderGeometry(0.2,0.3,0.1,32),gray);
      l1.position.set(0,0.02,0);
      lucidatrice.add(l1);

      //copertuta
      var l1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.03,0.1,32),gray);
      l1.position.set(0,0.02,0);
      lucidatrice.add(l1);

      //asse ruote
      var l1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,0.7,32),gray);
      l1.position.set(-0.3,0.02,0);
      l1.rotation.x=0.5*Math.PI;
      lucidatrice.add(l1);

      //albero ruote
      var l1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,0.4,32),gray);
      l1.position.set(-0.3,0.22,0);
      lucidatrice.add(l1);

      //barra spazzola anteriore
      var l1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,0.2,32),gray);
      l1.position.set(0,0.15,0);
      lucidatrice.add(l1);

      //barra spazzola posteriore
      var l1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,0.2,32),gray);
      l1.position.set(-0.95,0.1,0);
      lucidatrice.add(l1);

      //ruote
      var l1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.05,32),black);
      l1.position.set(-0.3,0.02,-0.35);
      l1.rotation.x=0.5*Math.PI;
      lucidatrice.add(l1);

      //ruote
      var l1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.05,32),black);
      l1.position.set(-0.3,0.02,0.35);
      l1.rotation.x=0.5*Math.PI;
      lucidatrice.add(l1);

      //cuscinetto ruote
      var l1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08,0.08,0.07,32),gray);
      l1.position.set(-0.3,0.02,-0.35);
      l1.rotation.x=0.5*Math.PI;
      lucidatrice.add(l1);

      //cuscinetto ruote
      var l1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08,0.08,0.07,32),gray);
      l1.position.set(-0.3,0.02,0.35);
      l1.rotation.x=0.5*Math.PI;
      lucidatrice.add(l1);

      //dado
      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,0.08,6),black); 
      cr1.position.set(-0.3,0.02,0.35);
      cr1.rotation.x=0.5*Math.PI;
      lucidatrice.add(cr1);

      //dado
      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,0.08,6),black); 
      cr1.position.set(-0.3,0.02,-0.35);
      cr1.rotation.x=0.5*Math.PI;
      lucidatrice.add(cr1);

      //blocco centrale
      var c0 = new THREE.Mesh(new THREE.BoxGeometry(0.4,0.3,0.6),gray);
      c0.position.set(-0.65,0.225,0);
      lucidatrice.add(c0);

      var c0 = new THREE.Mesh(new THREE.BoxGeometry(0.4,0.25,0.6),gray2);
      c0.position.set(-0.25,0.25,0);
      lucidatrice.add(c0);

      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.35,0.25,32),gray2); 
      cr1.position.set(-0.05,0.25,0);
      lucidatrice.add(cr1);

      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,0.15,32),gray); 
      cr1.position.set(-0.45,0.15,0);
      lucidatrice.add(cr1);

      var c0 = new THREE.Mesh(new THREE.BoxGeometry(0.4,0.25,0.6),gray);
      c0.position.set(-0.65,0.5,0);
      lucidatrice.add(c0);

      var c0 = new THREE.Mesh(new THREE.BoxGeometry(0.4,0.25,0.6),gray);
      c0.position.set(-0.25,0.5,0);
      lucidatrice.add(c0);

      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,0.25,32),gray); 
      cr1.position.set(-0.05,0.5,0);
      lucidatrice.add(cr1);

      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,0.4,32),gray); 
      cr1.position.set(-0.85,0.425,0);
      lucidatrice.add(cr1);

      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,0.5,32),gray); 
      cr1.position.set(-0.85,0.325,0);
      lucidatrice.add(cr1);

      //copertura blocco centrale
      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.46,0.31,2),gray3); 
      cr1.position.set(-0.45,0.75,0.24);
      cr1.rotation.y=0.5*Math.PI
      cr1.rotation.x=-0.1*Math.PI
      lucidatrice.add(cr1);     

      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.4,0.46,0.31,2),gray3); 
      cr1.position.set(-0.45,0.75,-0.24);
      cr1.rotation.y=0.5*Math.PI
      cr1.rotation.x=0.1*Math.PI
      lucidatrice.add(cr1);    
      
      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.205,0.3,0.3,32),gray3); 
      cr1.position.set(-0.85,0.75,0);
      lucidatrice.add(cr1);

      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.205,0.3,0.3,32),gray3); 
      cr1.position.set(-0.05,0.75,0);
      lucidatrice.add(cr1);

      var p0 = new THREE.Mesh(new THREE.PlaneGeometry(0.8,0.4),gray3);
      p0.rotation.x=-0.5*Math.PI
      p0.position.set(-0.48,0.9,0)
      lucidatrice.add(p0)

      //spazzola posteriore
      var a2 = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.035, 20, 20, 1),gray2);
      a2.rotation.x=-0.5*Math.PI
      a2.rotation.z=-0.15*Math.PI+Math.PI
      a2.position.set(-0.055,0,0)
      lucidatrice.add(a2);

      //spazzola posteriore
      var a2 = new THREE.Mesh(new THREE.TorusGeometry(0.9, 0.035, 20, 20, 1),black);
      a2.rotation.x=-0.5*Math.PI
      a2.rotation.z=-0.15*Math.PI+Math.PI
      a2.position.set(-0.055,-0.05,0)
      lucidatrice.add(a2);

      //manubrio
      var a2 = new THREE.Mesh(new THREE.TorusGeometry(0.095, 0.025, 20, 20, 4),gray3);
      a2.rotation.x=-0.5*Math.PI
      a2.rotation.z=0.3*Math.PI
      a2.rotation.y=0.25*Math.PI
      a2.position.set(-1.05,0.85,0)
      lucidatrice.add(a2);

      //tappi coprispazzola
      var circle = new THREE.Mesh(new THREE.CircleGeometry( 0.035, 32 ), gray2);
      circle.position.set(-0.835,0,0.45)
      circle.rotation.y=0.15*Math.PI
      lucidatrice.add(circle);

      //tappi coprispazzola
      var circle = new THREE.Mesh(new THREE.CircleGeometry( 0.035, 32 ), gray2);
      circle.position.set(-0.86,0,-0.4)
      circle.rotation.y=0.85*Math.PI
      lucidatrice.add(circle);

      //tappi spazzola
      var circle = new THREE.Mesh(new THREE.CircleGeometry( 0.035, 32 ), black);
      circle.position.set(-0.835,-0.05,0.45)
      circle.rotation.y=0.15*Math.PI
      lucidatrice.add(circle);

      //tappi spazzola
      var circle = new THREE.Mesh(new THREE.CircleGeometry( 0.035, 32 ), black);
      circle.position.set(-0.86,-0.05,-0.4)
      circle.rotation.y=0.85*Math.PI
      lucidatrice.add(circle);

      lucidatrice.name = this.id;
      lucidatrice.feature = this;
      var model = Feature.packageModel(lucidatrice);
      return model;
};

module.exports = Lucidatrice;

