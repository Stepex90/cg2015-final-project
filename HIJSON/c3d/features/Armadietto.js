var Feature = require('./Feature.js');

Feature.inherits(Armadietto, Feature);

function Armadietto(feature) {
      Feature.call(this, feature);
}

Armadietto.prototype.style = {
                                    weight:0,
                                    fillColor: "#9b8c7a",
                                    zIndex: 3
                                    };

Armadietto.prototype.in_graph = true;

Armadietto.prototype.in_2D_map = true;

Armadietto.prototype.get3DModel = function() {
      
      var blue = new THREE.MeshLambertMaterial({color: 0x0000CC});
      var gray = new THREE.MeshLambertMaterial({color: 0xC0C0C0});
      var black = new THREE.MeshLambertMaterial({color: 0x000000});

      var tableX = this.geometry.coordinates[0][1][0];
      var tableY = this.geometry.coordinates[0][2][1];
      var tableZ = this.properties.height;

      var armadietto=new THREE.Object3D();
      armadietto.rotation.x=Math.PI/2;
      scene.add(armadietto)
      armadietto.position.set(tableX/2,tableY/2,0);

          
      //base
      var a0 = new THREE.Mesh(new THREE.BoxGeometry(1,0.05,1),gray);
      a0.position.set(0,0.15,0)
      armadietto.add(a0);

      //lati
      var a1 = new THREE.Mesh(new THREE.BoxGeometry(1,2,0.05),gray);
      a1.position.set(0,1.025,0.475)
      a0.add(a1);

      var a2 = new THREE.Mesh(new THREE.BoxGeometry(1,2,0.05),gray);
      a2.position.set(0,1.025,-0.475)
      a0.add(a2);
      
      //fondo
      var a3 = new THREE.Mesh(new THREE.BoxGeometry(0.05,2,1),gray);
      a3.position.set(0.475,1.025,0)
      a0.add(a3);

      // top
      var a4 = new THREE.Mesh(new THREE.BoxGeometry(1,0.05,1),gray);
      a4.position.set(0,2.05,0)
      a0.add(a4);

      //asse centrale
      var a1 = new THREE.Mesh(new THREE.BoxGeometry(0.9,0.4,0.05),gray);
      a1.position.set(0,1.025,0)
      a0.add(a1);

      // ripiano inferiore
      var a4 = new THREE.Mesh(new THREE.BoxGeometry(0.9,0.05,0.5),gray);
      a4.position.set(0,0.8,0.225)
      a0.add(a4);

      //ripiano superiore
      var a4 = new THREE.Mesh(new THREE.BoxGeometry(0.9,0.05,0.5),gray);
      a4.position.set(0,1.25,-0.225)
      a0.add(a4);

      //anta superiore
      var a4 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.77,0.9),blue);
      a4.position.set(-0.475,1.64,0)
      a0.add(a4);

      //anta superiore
      var a4 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.44,0.435),blue);
      a4.position.set(-0.475,1.035,0.23)
      a0.add(a4);

      //anta inferiore
      var a4 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.77,0.9),blue);
      a4.position.set(-0.475,0.41,0)
      a0.add(a4);

      //anta inferiore
      var a4 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.44,0.435),blue);
      a4.position.set(-0.475,1.015,-0.23)
      a0.add(a4);

      var fz;
      var fy;

      for(fy=1.64;fy>=0.4;fy-=1.14)
      {
            fy==1.64 ? fz=-0.35 : fz=0.35
            
            //serratura
            var s1 = new THREE.Mesh(new THREE.CylinderGeometry(0.025,0.03,0.02,32),black);
            s1.rotation.x=0.5*Math.PI
            s1.rotation.z=0.5*Math.PI
            s1.position.set(-0.5,fy,fz)
            a0.add(s1);

            var s2 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.022,0.015,32),gray);
            s2.rotation.x=0.5*Math.PI
            s2.rotation.z=0.5*Math.PI
            s2.position.set(-0.515,fy,fz);
            a0.add(s2);

            var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.01,0.015,0.005),black);
            d0.position.set(-0.518,fy,fz);
            a0.add(d0);

      }

      var fx;
      var fz;
      for(fx=-0.47;fx<=0.47;fx+=0.94)
      {
            for(fz=0.47;fz>=-0.47;fz-=0.94)
            {
                  //piedi
                  var p1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.04,0.1,4),gray)
                  p1.position.set(fx,-0.05,fz)
                  p1.rotation.y=0.25*Math.PI
                  p1.rotation.z=Math.PI
                  a0.add(p1);
            }
      }

      armadietto.scale.set(0.8,1,0.8)
      armadietto.feature = this;
      armadietto.name = this.id;
      var model = Feature.packageModel(armadietto);

      return model;
};

module.exports = Armadietto;