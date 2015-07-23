var Feature = require('./Feature.js');

Feature.inherits(Distributore, Feature);

function Distributore(feature) {
      Feature.call(this, feature);
}

Distributore.prototype.style = {
                                    prefix: "fa",
                                    icon: "tint",
                                    zIndex: 3
                                    };

Distributore.prototype.in_graph = true;

Distributore.prototype.in_2D_map = true;

Distributore.prototype.get3DModel = function() {

	  var black = new THREE.MeshLambertMaterial({color: 0x000000});
      var gray = new THREE.MeshLambertMaterial({color: 0xC0C0C0});
      var blue = new THREE.MeshLambertMaterial({color: 0x000066});

      //blocco central
      var distributore = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.02,0.5),gray);
      distributore.position.set(0,0.25,0);
      scene.add(distributore);

      //lati
      var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.8,0.02),gray);
      d0.position.set(0,0.4,0.24);
      distributore.add(d0);

      var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.8,0.02),gray);
      d0.position.set(0,0.4,-0.24);
      distributore.add(d0);

      var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.02,0.8,0.5),gray);
      d0.position.set(-0.24,0.4,0);
      distributore.add(d0);

      //anta
      var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.48,0.2,0.48),gray);
      d0.position.set(0,0.7,0);
      distributore.add(d0);

      var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.48,0.585,0.48),gray);
      d0.position.set(0,0.305,0);
      distributore.add(d0);

      //serratura
      var s1 = new THREE.Mesh(new THREE.CylinderGeometry(0.014,0.018,0.01,32),black);
      s1.rotation.x=-0.5*Math.PI
      s1.rotation.z=-0.5*Math.PI
      s1.position.set(0.25,0.44,-0.15)
      distributore.add(s1);

      var s2 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.013,0.005,32),gray);
      s2.rotation.x=-0.5*Math.PI
      s2.rotation.z=-0.5*Math.PI
      s2.position.set(0.255,0.44,-0.15);
      distributore.add(s2);

      var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.01,0.015,0.005),black);
      d0.position.set(0.2555,0.44,-0.15);
      distributore.add(d0);


      //bordi top
      var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.52,0.02,0.1),gray);
      d0.position.set(0,0.8,-0.22);
      distributore.add(d0);

      var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.52,0.02,0.1),gray);
      d0.position.set(0,0.8,0.22);
      distributore.add(d0);

      var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.02,0.52),gray);
      d0.position.set(-0.22,0.8,0);
      distributore.add(d0);

      var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.02,0.52),gray);
      d0.position.set(0.22,0.8,0);
      distributore.add(d0);

      var c0 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.02,32),gray);
      c0.position.set(0.26,0.8,-0.26)
      distributore.add(c0);

      var c0 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.02,32),gray);
      c0.position.set(0.26,0.8,0.26)
      distributore.add(c0);

      var c0 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.02,32),gray);
      c0.position.set(-0.26,0.8,-0.26)
      distributore.add(c0);

      var c0 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.02,32),gray);
      c0.position.set(-0.26,0.8,0.26)
      distributore.add(c0);

      //griglia
      for(gx=-0.015;gx<=0.2;gx+=0.015)
      {
          for(gz=-0.2;gz<=0.2;gz+=0.015)
          {
              var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.01,0.01),gray);
              d0.position.set(gx,0.8,gz);
              distributore.add(d0);

              var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.01,0.01),gray);
              d0.position.set(gx,0.8,gz);
              distributore.add(d0);

              var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.01,0.01,0.1),gray);
              d0.position.set(gx,0.8,gz);
              distributore.add(d0);

              var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.01,0.01,0.1),gray);
              d0.position.set(gx,0.8,gz);
              distributore.add(d0);
          }
      }

      //colonna
      var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.15,0.3,0.34),gray);
      d0.position.set(-0.1,0.85,0);
      distributore.add(d0);

      var d0 = new THREE.Mesh(new THREE.BoxGeometry(0.3,0.05,0.34),gray);
      d0.position.set(-0.025,1,0);
      distributore.add(d0);

      var c0 = new THREE.Mesh(new THREE.CylinderGeometry(0.028,0.028,0.34,3),gray);
      c0.position.set(0.139,1,0)
      c0.rotation.z=0.5*Math.PI;
      c0.rotation.y=0.5*Math.PI;
      distributore.add(c0);

      //pulsanti
      var colore=black;
      for(pz=-0.10;pz<=0.10;pz+=0.1)
      {
          var c0 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.015,32),gray);
          c0.position.set(0.15,1.01,pz)
          c0.rotation.z=-0.15*Math.PI
          distributore.add(c0);

          if(pz==0.10) colore=blue; 
          var c0 = new THREE.Mesh(new THREE.CylinderGeometry(0.009,0.009,0.016,32),colore);
          c0.position.set(0.15,1.01,pz)
          c0.rotation.z=-0.15*Math.PI
          distributore.add(c0);
      }

      //erogatori
      for(pz=-0.10;pz<=0.10;pz+=0.1)
      {
          var c0 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.025,32),gray);
          c0.position.set(0.1,0.97,pz)
          distributore.add(c0);
      }

      distributore.scale.set(1.2,1.8,1.2);

      distributore.feature = this;
      distributore.name = this.id;
      var model = Feature.packageModel(distributore);

      return model;
};

module.exports = Distributore;