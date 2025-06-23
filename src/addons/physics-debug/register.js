// src/addons/physics-debug/register.js
AFRAME.registerSystem("physics-debug", {
  init() {
    console.log("[physics-debug] System initialized");
    this.enabled = true;
    this.visuals = [];
    this.scene = this.el;
  },

  tick() {
    if (!this.enabled) return;

    // Iterate over entities with body-helper and visualize
    const bodies = this.scene.querySelectorAll("[body-helper]");
    bodies.forEach(el => {
      if (!el.object3D) return;
      if (!el.getObject3D("debugBox")) {
        const box = new THREE.BoxHelper(el.object3D, 0x00ff00);
        el.setObject3D("debugBox", box);
      }
    });
  },

  removeAllVisuals() {
    const visuals = this.scene.querySelectorAll("[body-helper]");
    visuals.forEach(el => {
      const box = el.getObject3D("debugBox");
      if (box) el.removeObject3D("debugBox");
    });
  }
});

