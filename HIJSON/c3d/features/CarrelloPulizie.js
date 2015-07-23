var Feature = require('./Feature.js');

Feature.inherits(CarrelloPulizie, Feature);

function CarrelloPulizie(feature) {
      Feature.call(this, feature);
}

CarrelloPulizie.prototype.style = {
                                    prefix: "fa",
                                    icon: "plus",
                                    zIndex: 3
                                    };

CarrelloPulizie.prototype.in_graph = true;

CarrelloPulizie.prototype.in_2D_map = false;

CarrelloPulizie.prototype.get3DModel = function() {



      var black = new THREE.MeshLambertMaterial({color: 0x000000});
      var gray = new THREE.MeshLambertMaterial({color: 0xC0C0C0});
      var red = new THREE.MeshLambertMaterial({color: 0xCC0000});
      var blue = new THREE.MeshLambertMaterial({color: 0x000066});
      var yellow =  new THREE.MeshLambertMaterial({color: 0xF7DA00});
      var green =  new THREE.MeshLambertMaterial({color: 0x006633});


      //base
      var cp = new THREE.Mesh(new THREE.BoxGeometry(1,0.75,0.05),gray);
      cp.position.set(0,0.05,0)
      cp.rotation.x=0.5*Math.PI
      scene.add(cp);
     
      for(rx=-0.4;rx<=0.45;rx+=0.85)
      {
          for(rz=-0.3;rz<=0.3;rz+=0.6)
          {

              // ruota pneumatico
              var r1 = new THREE.Mesh(new THREE.CylinderGeometry(0.08,0.08,0.05,32),black);
              r1.position.set(rx,rz,0.15);
              cp.add(r1);

              // ruota cuscinetto
              var r1a = new THREE.Mesh(new THREE.CylinderGeometry(0.06,0.06,0.06,32),gray);
              r1.add(r1a);

              // dado esagonale
              var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.08,6),black); 
              cr1.position.set(0,0,0);
              r1.add(cr1);

              // copriruota disco superiore
              var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.06,0.06,0.01,32), gray); 
              cr1.rotation.x=0.5*Math.PI;
              cr1.position.set(-0.03,0,-0.12);
              r1.add(cr1);

              // copriruota disco inferiore 
              var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.03725,0.03725,0.03,32), black); 
              cr1.rotation.x=0.5*Math.PI;
              cr1.position.set(-0.03,0,-0.1);
              r1.add(cr1);
          
              // triangolo  lato 1
              var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.055,0.055,0.005,3), gray); 
              cr1.position.set(-0.02,-0.035,-0.06);
              r1.add(cr1);

              // rettangolo lato 1
              var b1 = new THREE.Mesh(new THREE.BoxGeometry(0.055,0.11,0.005),gray);
              b1.rotation.x=0.5*Math.PI;
              b1.position.set(0,-0.035,-0.04);
              r1.add(b1);

              // triangolo  lato 2
              var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.055,0.055,0.005,3), gray); 
              cr1.position.set(-0.02,0.035,-0.06);
              r1.add(cr1);

              // rettangolo lato 2
              var b2 = new THREE.Mesh(new THREE.BoxGeometry(0.055,0.11,0.005),gray);
              b2.rotation.x=0.5*Math.PI;
              b2.position.set(0,0.035,-0.04);
              r1.add(b2);

              // rettangolo lato up
              var b3 = new THREE.Mesh(new THREE.BoxGeometry(0.095,0.075,0.01),gray);
              b3.position.set(-0.02,0,-0.09);
              r1.add(b3);

          }
      }

      //lati cassettiera + alloggio secchi top lato lungo
      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.85,0.75,0.05),gray);
      p0.position.set(0.475,0,-0.45)
      p0.rotation.y=0.5*Math.PI
      cp.add(p0);

      //lati cassettiera + alloggio secchi top lato lungo
      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.85,0.75,0.05),gray);
      p0.position.set(0,0,-0.45)
      p0.rotation.y=0.5*Math.PI
      cp.add(p0);

      //base top
      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.75,0.05),gray);
      p0.position.set(0.25,0,-0.8)
      cp.add(p0);

      //ripiani guide
      for(gz=-0.74;gz<=-0.1;gz+=0.25)
      {
          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.75,0.02),gray);
          p0.position.set(0.45,0,gz)
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.75,0.02),gray);
          p0.position.set(0.025,0,gz)
          cp.add(p0);
      }

      //cassetti laterali
      for(cz=-0.76;cz<=-0.1;cz+=0.25)
      {   
          //bordo
          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.75,0.015),blue);
          p0.position.set(0.42,0,cz)
          cp.add(p0);

          //bordo
          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.75,0.015),blue);
          p0.position.set(0.055,0,cz)
          cp.add(p0);

          //lato lungo
          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.02,0.20,0.75),blue);
          p0.position.set(0.405,0,cz+0.1)
          p0.rotation.x=0.5*Math.PI
          cp.add(p0);

          //lato lungo
          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.02,0.20,0.75),blue);
          p0.position.set(0.07,0,cz+0.1)
          p0.rotation.x=0.5*Math.PI
          cp.add(p0);

          //lato corto
          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.02,0.34,0.215),blue);
          p0.position.set(0.25,-0.365,cz+0.1)
          p0.rotation.z=0.5*Math.PI
          cp.add(p0);

          //lato corto
          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.02,0.34,0.215),blue);
          p0.position.set(0.235,0.365,cz+0.1)
          p0.rotation.z=0.5*Math.PI
          cp.add(p0);

          //fondo
          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.355,0.75,0.015),blue);
          p0.position.set(0.2375,0,cz+0.205)
          cp.add(p0);
      }


      //lati corti alloggio secchi top
      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.05,0.05),gray);
      p0.position.set(0.25,-0.35,-0.85)
      cp.add(p0);
      
      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.05,0.05),gray);
      p0.position.set(0.25,0.35,-0.85)
      cp.add(p0);

      //alloggio secchi down
      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.05,0.05),gray);
      p0.position.set(-0.25,-0.35,-0.05)
      cp.add(p0);

      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.05,0.05),gray);
      p0.position.set(-0.25,0.35,-0.05)
      cp.add(p0);

      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.65,0.05),gray);
      p0.position.set(-0.475,0,-0.05)
      cp.add(p0);

  

          //alloggio sacco rifiuti top
          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.05,0.05),gray);
          p0.position.set(0.7,-0.35,-0.05)
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.05,0.05),gray);
          p0.position.set(0.7,0.35,-0.05)
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.65,0.05),gray);
          p0.position.set(0.925,0,-0.05)
          cp.add(p0);
      

          //alloggio sacco rifiuti down
          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.05,0.05),gray);
          p0.position.set(0.7,-0.35,-0.85)
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.5,0.05,0.05),gray);
          p0.position.set(0.7,0.35,-0.85)
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.05,0.65,0.05),gray);
          p0.position.set(0.925,0,-0.85)
          cp.add(p0);
      

      //coperchio
      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.45,0.775,0.05),blue);
      p0.position.set(0.745,0,-0.9)
      cp.add(p0);
    
      //sacco 
      var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.3,0.65,0.7),black);
      p0.position.set(0.75,0,-0.5)
      cp.add(p0);

      // perno coperchio
      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.05,32),black); 
      cr1.position.set(0.51,-0.35,-0.88);
      cp.add(cr1);

      // perno coperchio
      var cr1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.05,32),black); 
      cr1.position.set(0.51,0.35,-0.88);
      cp.add(cr1);


      var delta1;
      var colore1;
      //secchi top
      for(sty=-0.3;sty<=0.3;sty+=0.6)
      {
          sty==-0.3 ? colore1=red : colore1=blue      
          sty==-0.3 ? delta1=-1 : delta1=1

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.3,0.05),colore1);
          p0.position.set(0.13,sty-delta1*0.14,-0.85)
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.15,0.02),colore1);
          p0.position.set(0.13,sty-delta1*0.29,-0.9)
          p0.rotation.x=0.5*Math.PI
          cp.add(p0);
          
          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.15,0.02),colore1);
          p0.position.set(0.13,sty,-0.9)
          p0.rotation.x=0.5*Math.PI
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.15,0.3,0.02),colore1);
          p0.position.set(0.04,sty-delta1*0.14,-0.9)
          p0.rotation.y=0.5*Math.PI
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.15,0.3,0.02),colore1);
          p0.position.set(0.22,sty-delta1*0.14,-0.9)
          p0.rotation.y=0.5*Math.PI
          cp.add(p0);
      }

 
      var delta2;
      var colore2;

      //secchi top
      for(sty=-0.3;sty<=0.3;sty+=0.6)
      {
          sty==-0.3 ? colore2=yellow : colore2=green
          sty==-0.3 ? delta2=-1 : delta2=1

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.3,0.05),colore2);
          p0.position.set(0.35,sty-delta2*0.14,-0.85)
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.15,0.02),colore2);
          p0.position.set(0.35,sty-delta2*0.29,-0.9)
          p0.rotation.x=0.5*Math.PI
          cp.add(p0);
          
          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.15,0.02),colore2);
          p0.position.set(0.35,sty,-0.9)
          p0.rotation.x=0.5*Math.PI
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.15,0.3,0.02),colore2);
          p0.position.set(0.26,sty-delta2*0.14,-0.9)
          p0.rotation.y=0.5*Math.PI
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.15,0.3,0.02),colore2);
          p0.position.set(0.44,sty-delta2*0.14,-0.9)
          p0.rotation.y=0.5*Math.PI
          cp.add(p0);

      }
  
      var colore;
      var delta;

      //secchi down
      for(sdy=-0.3;sdy<=0.3;sdy+=0.6)
      {
          sdy==-0.3 ? colore=red : colore=blue
          sdy==-0.3 ? delta=-1 : delta=1

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.4,0.3,0.05),colore);
          p0.position.set(-0.22,sdy-delta*0.14,-0.05)
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.4,0.25,0.02),colore);
          p0.position.set(-0.22,sdy-delta*0.28,-0.2)
          p0.rotation.x=0.5*Math.PI
          cp.add(p0);
          
          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.4,0.25,0.02),colore);
          p0.position.set(-0.22,sdy,-0.2)
          p0.rotation.x=0.5*Math.PI
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.25,0.3,0.02),colore);
          p0.position.set(-0.41,sdy-delta*0.14,-0.2)
          p0.rotation.y=0.5*Math.PI
          cp.add(p0);

          var p0 = new THREE.Mesh(new THREE.BoxGeometry(0.25,0.3,0.02),colore);
          p0.position.set(-0.03,sdy-delta*0.14,-0.2)
          p0.rotation.y=0.5*Math.PI
          cp.add(p0);
      }


      for(scy=-0.45;scy<=0.55;scy+=0.90)
      {
            //scopa
            var s1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,0.06,32),blue); 
            s1.rotation.x=0.5*Math.PI
            s1.position.set(0.48,scy,-1.3);
            cp.add(s1);
            
            var m1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02,0.02,1.3,32),gray); 
            m1.position.set(0,0.68,0);
            s1.add(m1);

            var b1 = new THREE.Mesh(new THREE.CylinderGeometry(0.025,0.025,0.06,32),blue); 
            b1.rotation.y=0.5*Math.PI
            b1.position.set(0,1.32,0);
            s1.add(b1);

            var b0 = new THREE.Mesh(new THREE.BoxGeometry(0.02,0.15,0.5),blue);
            b0.position.set(0,1.34,0)
            b0.rotation.z=0.5*Math.PI
            b0.rotation.y=0.5*Math.PI
            s1.add(b0);

            var c0 = new THREE.Mesh(new THREE.BoxGeometry(0.01,0.2,0.55),gray);
            c0.position.set(0,1.35,0)
            c0.rotation.z=0.5*Math.PI
            c0.rotation.y=0.5*Math.PI
            s1.add(c0);
      }


      //gancio scopa
      var g1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.05,32),blue); 
      g1.position.set(0.48,-0.39,-0.85);
      cp.add(g1);

      var g1 = new THREE.Mesh(new THREE.CylinderGeometry(0.025,0.025,0.03,32),blue); 
      g1.position.set(0.48,-0.44,-0.85);
      g1.rotation.x=0.5*Math.PI
      cp.add(g1);
      
      var g1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.05,32),blue); 
      g1.position.set(0.48,0.39,-0.85);
      cp.add(g1);

      var g1 = new THREE.Mesh(new THREE.CylinderGeometry(0.025,0.025,0.03,32),blue); 
      g1.position.set(0.48,0.44,-0.85);
      g1.rotation.x=0.5*Math.PI
      cp.add(g1);

      cp.feature = this;
      cp.name = this.id;
      var model = Feature.packageModel(cp);

      return model;
};

module.exports = CarrelloPulizie;