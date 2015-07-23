var Feature = require('./Feature.js');

Feature.inherits(Espositore, Feature);

function Espositore(feature) {
      Feature.call(this, feature);
}

Espositore.prototype.style = {
                                    weight:0,
                                    fillColor: "#9b8c7a",
                                    zIndex: 3
                                    };

Espositore.prototype.in_graph = true;

Espositore.prototype.in_2D_map = true;

Espositore.prototype.get3DModel = function() {

	    var vetro = new THREE.MeshLambertMaterial({transparent: true, opacity: 0.7});
      var gray  =  new THREE.MeshLambertMaterial({color: 0x4B4B4B});
      var gray3 =  new THREE.MeshLambertMaterial({color: 0xC0C0C0});
      var black =  new THREE.MeshLambertMaterial({color: 0x000000});

      var espositore=new THREE.Object3D();
      scene.add(espositore);

      var tableX = this.geometry.coordinates[0][1][0];
      var tableY = this.geometry.coordinates[0][2][1];
      var tableZ = this.properties.height;

      espositore.position.set(tableY/2,0.65,tableZ+tableZ/4)
      espositore.rotation.y += 2*Math.PI;


	    //base
      var b0 = new THREE.Mesh(new THREE.BoxGeometry(tableX,tableZ,tableY),gray);
      b0.rotation.y=0.5*Math.PI
      espositore.add(b0);
      
      //top
      var b0 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.025,3),gray);
      b0.position.set(0,1.07,0)
      espositore.add(b0);
      
      var fx;
      for(fx=0.6;fx<=0.9;fx+=0.15)
      {
          var a0 = new THREE.Mesh(new THREE.CylinderGeometry(0.03,0.03,3,32), gray3);
          a0.rotation.x=0.5*Math.PI
          a0.position.set(fx,0.4,0)
          espositore.add(a0);
      }

      //scorri vassioi
      var fz;
      for(fz=-1.4;fz<=1.6;fz+=0.7)
      {
          var b0 = new THREE.Mesh(new THREE.BoxGeometry(0.45,0.02,0.1), gray3)
          b0.position.set(0.7,0.37,fz)
          espositore.add(b0)
      }

      //archi
      var fx;
      var fz;
      for(fz=-1.4;fz<=1.4;fz+=2.8)
      { 
           for(fx=-0.5;fx<=0.5;fx+=1)
           { 
              var a2 = new THREE.Mesh(new THREE.TorusGeometry(0.95, 0.025, 20, 20, 0.7),gray3);
              a2.position.set(fx,0.45,fz)
            
              if(fx>0)
              {
                  a2.position.set(fx,0.39,fz)
                  a2.rotation.z=0.75*Math.PI
              }   
              espositore.add(a2);
           }
      }

      //contenitori alimenti
      var fz;
      for(fz=-1.05;fz<=1.1;fz+=0.7)
      {
          var b0 = new THREE.Mesh(new THREE.BoxGeometry(0.8,0.03,0.55), gray3)
          b0.position.set(0,0.52,fz)
          espositore.add(b0)
      }

      // base coperchio
      var shape = new THREE.Shape()
               
                shape.moveTo(0.6, 0);

                shape.splineThru([ new THREE.Vector2(0.6,0.42),
                                   new THREE.Vector2(0.2,0.42),
                                   new THREE.Vector2(0.2, 0)]);

      var extrudeSettings1 = {  amount: 0.02, 
                                bevelThickness: 0.5, 
                                bevelSegments: 0.5, 
                                bevelSize: 1, 
                                bevelEnabled: false, 
                                curveSegments: 32, 
                                steps: 1
                             };

      var fz;
      for(fz=-1.45;fz<=1.1;fz+=0.7)
      {
          var mesh1 = new THREE.Mesh(new THREE.ExtrudeGeometry(shape,extrudeSettings1), gray3);
          mesh1.position.set(0.1,0.55,fz);
          mesh1.rotation.z=0.5*Math.PI
          mesh1.rotation.x=0.5*Math.PI
          espositore.add( mesh1 );

          var mesh2 = new THREE.Mesh(new THREE.ExtrudeGeometry(shape,extrudeSettings1), gray3);
          mesh2.position.set(-0.1,0.53,fz);
          mesh2.rotation.z=-0.5*Math.PI
          mesh2.rotation.x=-0.5*Math.PI
          espositore.add( mesh2 );

          var b0 = new THREE.Mesh(new THREE.BoxGeometry(0.48,0.02,0.455), gray3)
          b0.position.set(0,0.54,fz+0.4)
          espositore.add(b0)

          //inpugnatura
          var b0 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.03,0.03), gray3)
          b0.position.set(0,0.57,fz+0.4)
          espositore.add(b0)
      }

      //vetro
      var b0 = new THREE.Mesh(new THREE.BoxGeometry(0.58,0.02,2.7),vetro);
      b0.rotation.z=-0.4*Math.PI
      b0.position.set(0.38,0.77,0)
      espositore.add(b0);

      //piastre vetro
      var fz;
      for(fz=-1.36;fz<=1.36;fz+=2.72)
      {
            var b0 = new THREE.Mesh(new THREE.BoxGeometry(0.01,0.04,0.1),gray3);
            b0.rotation.z=0.1*Math.PI
            b0.position.set(0.4,0.77,fz)
            espositore.add(b0);

            // dado esagonale
            var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.02,6), black); 
            cr1.position.set(0.40,0.77,fz+0.03);
            if(fz>0)
            cr1.position.set(0.40,0.77,fz-0.03);            
            cr1.rotation.z=-0.4*Math.PI
            espositore.add(cr1);
      }

      espositore.feature = this;
      espositore.name = this.id;
      var model = Feature.packageModel(espositore);

      return model;
};

module.exports = Espositore;