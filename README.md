# 🧪 Hubs Physics Debug Add-on

A lightweight add-on for [Mozilla Hubs](https://github.com/mozilla/hubs) that visualizes physics-enabled entities in a scene by drawing debug bounding boxes around them.

This is intended for developers and world creators who want a visual reference for where physics bodies exist, helping catch alignment bugs or malformed components.

---

## 🚀 Features

- ✅ Highlights all objects with physics bodies using `THREE.BoxHelper`
- ✅ Auto-updates every frame (throttled for performance)
- ✅ Easily pluggable into any Hubs scene
- ✅ No external dependencies

---

## 📦 Installation

Clone or download this repo, and place the add-on in your `addons/` folder in Hubs.

```bash
git clone https://github.com/HussainAther/hubs-addon-physics-debug.git
````

Or include it directly in your HTML:

```html
<script src="addons/physics-debug/index.js"></script>
```

---

## 🛠 Usage

Enable the add-on by attaching it as a system to your `<a-scene>`:

```html
<a-scene physics-debug>
  <!-- Your scene content -->
</a-scene>
```

Once running, you’ll see magenta bounding boxes appear around entities with physics bodies (e.g. `body-helper`).

---

## 🧰 Development

### Project Structure

```
hubs-addon-physics-debug/
├── src/
│   └── index.js         # Core of the add-on
├── README.md            # This file
├── package.json         # Project metadata
└── .gitignore
```

---

## 📸 Screenshots

*(Add a screenshot of the physics boxes overlayed on Hubs content here)*

---

## 🙋 FAQ

**Q: Will this slow down performance?**
A: Debug rendering is throttled to 10fps to reduce overhead, but should be removed for production scenes.

**Q: What physics engine does this support?**
A: It currently assumes usage of `body-helper` (ammo.js via three-ammo).

---

## 🧑‍💻 Author

Built with 💜 by [@HussainAther](https://github.com/HussainAther)

---

## 📄 License

MIT License — free to use, modify, and contribute.

