# Camera / Media Capture Project

![Media Badge](https://img.shields.io/badge/Project-MediaCapture-blue)
![Status](https://img.shields.io/badge/Status-Experimental-yellow)

This is a **simple HTML/JS project** that demonstrates capturing **video and images** from the user's device.  
It works on both **desktop** (with webcam) and **mobile devices** (using file input capture).

---

## Features

- Capture **video** from webcam (desktop support)
- Capture **images** from front or rear camera (mobile support)
- Pure HTML5, CSS, and JavaScript
- No external libraries required
- Handles permission errors gracefully

---

## Project Structure

```

media-capture/
├─ index.html       # Main HTML file
├─ README.md        # Documentation

```

> Everything is in a single HTML file.  
> Uses `<video>` and `<input type="file" capture>` for camera access.

---

## Components / Structure

1. **Video Capture (Desktop)** _(commented in current version)_

```html
<video autoplay></video>
```

- Uses `navigator.mediaDevices.getUserMedia({ video: true, audio: true })`
- Streams webcam video to the `<video>` element
- Handles permission errors with `.catch()`

2. **Mobile Capture Inputs**

```html
<label for="environment">Capture environment:</label>
<input type="file" id="environment" capture="environment" accept="video/*" />

<label for="user">Capture user:</label>
<input type="file" id="user" capture="user" accept="image/*" />
```

- **Environment capture** → rear camera / video
- **User capture** → front camera / image
- Uses native device camera on mobile

---

## JavaScript Logic

_(Optional if you uncomment video section)_

```js
navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then((stream) => {
    document.querySelector("video").srcObject = stream;
  })
  .catch((error) => {
    console.log("Access Denied", error);
  });
```

- Requests camera and microphone access
- Streams media to `<video>` element
- Logs errors in case of denial

---

## Styling

- Currently **unstyled** (plain HTML)
- Can add **Bootstrap / CSS** for better layout
- Inputs stacked with `<br>` for simple spacing

---

## How to Run

1. Open `index.html` in a **modern browser**
2. Desktop: allows webcam video streaming
3. Mobile: allows capture from front/rear camera via file input

> Note: Some browsers may require HTTPS for camera access.

---

**Author:** Abdelrahman Shalaby
**Role:** Java Developer
