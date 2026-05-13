

AFRAME.registerComponent('camera-focus', {
  init: function () {
    this.el.addEventListener('click', () => {
        // const cam = document.querySelector('#camera');
        // cam.setAttribute('position', '0 2 -2');
        // cam.object3D.lookAt(this.el.object3D.position);
        
        
      const rig = document.querySelector('#rig');

      // asegurar matrices correctas
      this.el.object3D.updateMatrixWorld();

      // posición global
      const pos = new THREE.Vector3();
      this.el.object3D.getWorldPosition(pos);

      // rotación global
      const quat = new THREE.Quaternion();
      this.el.object3D.getWorldQuaternion(quat);

      // aplicar al rig
      rig.object3D.position.copy(pos);
      rig.object3D.quaternion.copy(quat);

      // MUY IMPORTANTE: reset offset interno de cámara
      const cam = rig.querySelector('a-camera');
      cam.setAttribute('position', '0 0 0');
      cam.setAttribute('rotation', '0 0 0');        


    });
  }
});

