var Feature = require('./Feature.js');

Feature.inherits(Sterilizzatore, Feature);

function Sterilizzatore(feature) {
      Feature.call(this, feature);
}

Sterilizzatore.prototype.style = {
                                    weight:0,
                                    fillColor: "#4B4B4B",
                                    zIndex: 3
                                    };

Sterilizzatore.prototype.in_graph = true;

Sterilizzatore.prototype.in_2D_map = true;

Sterilizzatore.prototype.get3DModel = function() {

      var d0 = THREE.ImageUtils.loadTexture("../../assets/textures/general/numero-digitale.jpg" )
      var b0 = THREE.ImageUtils.loadTexture("../../assets/textures/general/button.jpg" )

      var display =  new THREE.MeshLambertMaterial({map:d0});
      var button  =  new THREE.MeshLambertMaterial({map:b0});

      var black = new THREE.MeshLambertMaterial({color: 0x000000});
      var gray = new THREE.MeshLambertMaterial({color: 0xC0C0C0});
      var blue = new THREE.MeshLambertMaterial({color: 0x000033});
      var yellow =  new THREE.MeshLambertMaterial({color: 0xF7DA00});
      var vetro = new THREE.MeshLambertMaterial({transparent: true, opacity: 0.7});
      var vetro2 = new THREE.MeshLambertMaterial({transparent: true, opacity: 0.25});

      var tableX = this.geometry.coordinates[0][1][0];
      var tableY = this.geometry.coordinates[0][2][1];
      var tableZ = this.properties.height;

      var sterilizzatore=new THREE.Object3D();
      sterilizzatore.rotation.x=Math.PI/2;
      sterilizzatore.rotation.y=Math.PI;

      sterilizzatore.position.set(tableX/2,tableY/2,0);
      scene.add(sterilizzatore);


      //oggetto
      var s0 = new THREE.Mesh(new THREE.BoxGeometry(2.5,0.05,1.5),gray);
      s0.position.set(0,0.05,0);
      sterilizzatore.add(s0);

      //lati
      var l0 = new THREE.Mesh(new THREE.BoxGeometry(2.5,0.4,1.5),gray);
      l0.position.set(1.05,1.25,0);
      l0.rotation.z=0.5*Math.PI
      sterilizzatore.add(l0);

      var l0 = new THREE.Mesh(new THREE.BoxGeometry(2.5,0.7,1.5),gray);
      l0.position.set(-0.9,1.25,0);
      l0.rotation.z=0.5*Math.PI
      sterilizzatore.add(l0);

      //top
      var l0 = new THREE.Mesh(new THREE.BoxGeometry(2.5,0.05,1.5),gray);
      l0.position.set(0,2.5,0);
      sterilizzatore.add(l0);

      //back
      var l0 = new THREE.Mesh(new THREE.BoxGeometry(2.5,0.05,1.9),gray);
      l0.position.set(0,1.25,-0.725);
      l0.rotation.z=0.5*Math.PI
      l0.rotation.y=0.5*Math.PI
      sterilizzatore.add(l0);

      //up
      var l0 = new THREE.Mesh(new THREE.BoxGeometry(0.25,1.45,1.39),gray);
      l0.position.set(0.15,2.34,0.025);
      l0.rotation.z=0.5*Math.PI
      l0.rotation.y=0.5*Math.PI
      sterilizzatore.add(l0);

      //down
      var l0 = new THREE.Mesh(new THREE.BoxGeometry(1,1.45,1.39),gray);
      l0.position.set(0.15,0.53,0.025);
      l0.rotation.z=0.5*Math.PI
      l0.rotation.y=0.5*Math.PI
      sterilizzatore.add(l0);

      //pulsante
      var p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08,0.08,0.02,32),yellow);
      p1.position.set(-0.9,1.45,0.76);
      p1.rotation.x=0.5*Math.PI;
      sterilizzatore.add(p1);

      var p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.04,32),blue);
      p1.position.set(-0.9,1.45,0.79);
      p1.rotation.x=0.5*Math.PI;
      sterilizzatore.add(p1);

      var p1 = new THREE.Mesh(new THREE.SphereGeometry( 0.06, 32, 32, 0, Math.PI*2 , Math.PI*-0.5, Math.PI ), blue );
      p1.position.set(-0.9,1.45,0.80);
      p1.rotation.x=0.5*Math.PI
      sterilizzatore.add(p1);

      //schermo
      var s1 = new THREE.Mesh(new THREE.PlaneGeometry(0.4,0.4),blue);
      s1.position.set(-0.9,1.95,0.76);
      sterilizzatore.add(s1);

      var s1 = new THREE.Mesh(new THREE.PlaneGeometry(0.35,0.05),display);
      s1.position.set(-0.9,2.05,0.765);
      sterilizzatore.add(s1);

      //pulsanti
      for(sy=1.85;sy<=2;sy+=0.06)
      {
          var s2 = new THREE.Mesh(new THREE.PlaneGeometry(0.05,0.05),button);
          s2.position.set(-1.05,sy,0.765);
          sterilizzatore.add(s2);
      }

      //vetro schermo
      var s1 = new THREE.Mesh(new THREE.PlaneGeometry(0.45,0.45),vetro2);
      s1.position.set(-0.9,1.95,0.77);
      sterilizzatore.add(s1);

      //vetro apertura
      var l0 = new THREE.Mesh(new THREE.BoxGeometry(1.1,0.02,1.35),vetro);
      l0.position.set(0.15,1.63,0.74);
      l0.rotation.z=0.5*Math.PI
      l0.rotation.y=0.5*Math.PI
      sterilizzatore.add(l0);

      //down
      var l0 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.04,1.38),gray);
      l0.position.set(0.15,1.06,0.74);
      l0.rotation.z=0.5*Math.PI
      l0.rotation.y=0.5*Math.PI
      sterilizzatore.add(l0);

      //up
      var l0 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.04,1.38),gray);
      l0.position.set(0.15,2.18,0.74);
      l0.rotation.z=0.5*Math.PI
      l0.rotation.y=0.5*Math.PI
      sterilizzatore.add(l0);

      //left
      var l0 = new THREE.Mesh(new THREE.BoxGeometry(1.1,0.04,0.05),gray);
      l0.position.set(-0.515,1.63,0.74);
      l0.rotation.z=0.5*Math.PI
      l0.rotation.y=0.5*Math.PI
      sterilizzatore.add(l0);

      //right
      var l0 = new THREE.Mesh(new THREE.BoxGeometry(1.1,0.04,0.05),gray);
      l0.position.set(0.815,1.63,0.74);
      l0.rotation.z=0.5*Math.PI
      l0.rotation.y=0.5*Math.PI
      sterilizzatore.add(l0);

      //perno anta
      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.05,32),black); 
      cr1.position.set(0.84,1.2,0.765);
      sterilizzatore.add(cr1);

      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.05,32),black); 
      cr1.position.set(0.84,2.1,0.765);
      sterilizzatore.add(cr1);

      //maniglia
      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.8,32),black); 
      cr1.position.set(-0.515,1.58,0.79);
      sterilizzatore.add(cr1);

      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.05,32),black); 
      cr1.position.set(-0.515,1.4,0.77);
      cr1.rotation.x=0.5*Math.PI;
      sterilizzatore.add(cr1);

      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.05,32),black); 
      cr1.position.set(-0.515,1.8,0.77);
      cr1.rotation.x=0.5*Math.PI;
      sterilizzatore.add(cr1);

      for(ey=1.1825;ey<=2.2;ey+=0.9)
      {
            //elica
            var elica= new THREE.Mesh(new THREE.CylinderGeometry(0.025,0.02,0.35,4),gray);
            elica.rotation.x=0.5*Math.PI;
            elica.rotation.y=0.75*Math.PI;
            elica.rotation.z=Math.PI;
            elica.position.set(0.15,ey,0.09)
            sterilizzatore.add(elica);

            var elica2= new THREE.Mesh(new THREE.CylinderGeometry(0.025,0.02,0.35,4),gray);
            elica2.rotation.z=Math.PI;
            elica2.position.set(0,0.325,0)
            elica.add(elica2);

            var elica2= new THREE.Mesh(new THREE.CylinderGeometry(0.025,0.02,0.35,4),gray);
            elica2.rotation.z=Math.PI;
            elica2.position.set(0,-0.3,0)
            elica.add(elica2);

            var elica2= new THREE.Mesh(new THREE.CylinderGeometry(0.025,0.02,0.35,4),gray);
            elica2.position.set(0,0.45,0)
            elica.add(elica2);

            var elica3= new THREE.Mesh(new THREE.CylinderGeometry(0.025,0.025,0.036,32),gray);
            elica3.rotation.z=0.5*Math.PI;
            elica3.rotation.y=0.25*Math.PI
            elica3.position.set(0,0.09,0)
            elica.add(elica3);

            var b0 = new THREE.Mesh(new THREE.BoxGeometry(0.7,0.01,0.036),gray);
            ey==1.1825 ? delta=-0.02 : delta=+0.02
            b0.position.set(-0.18,ey+delta,0);
            sterilizzatore.add(b0);
      }

      //ripiani
      for(fy=1.3;fy<=2;fy+=0.5)
      {
          for(fz=-0.45;fz<=0.8;fz+=0.05)
          {
              //lato lungo
              var g0 = new THREE.Mesh(new THREE.BoxGeometry(1.2,0.02,0.01),gray);
              g0.position.set(0.15,fy,fz)
              sterilizzatore.add(g0);

              for(lx=-0.45;lx<=0.8;lx+=0.15)
              {
                  //lato corto
                  var g0 = new THREE.Mesh(new THREE.BoxGeometry(0.01,0.02,1.2),gray);
                  g0.position.set(lx,fy,0.15)
                  sterilizzatore.add(g0);
              }
          }
      }

      sterilizzatore.scale.set(0.7,0.9,0.6);
      sterilizzatore.feature = this;
      sterilizzatore.name = this.id;
      var model = Feature.packageModel(sterilizzatore);

      return model;
};

module.exports = Sterilizzatore;