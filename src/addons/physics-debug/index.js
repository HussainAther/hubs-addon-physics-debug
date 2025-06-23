AFRAME.registerSystem("physics-debug", {
  init() {
    console.log("[Physics Debug] system initialized");
    this.active = false;
    this.helpers = [];
  },

  toggle() {
    this.active = !this.active;
    this.helpers.forEach(h => h.visible = this.active);
  },

  addHelper(el) {
    const box = new THREE.BoxHelper(el.object3D, 0xff0000);
    box.visible = this.active;
    el.sceneEl.object3D.add(box);
    this.helpers.push(box);
  }
});

AFRAME.registerComponent("physics-debug", {
  init() {
    const system = this.el.sceneEl.systems["physics-debug"];
    if (system) system.addHelper(this.el);
  }
});

