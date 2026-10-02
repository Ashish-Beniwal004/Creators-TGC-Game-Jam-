# ITCH.IO DEPLOYMENT GUIDE

## Preparation
1. Ensure you have run `npm run build` from the `LumenProto/web/` directory.
2. The `vite.config.js` has been configured with `base: './'` to ensure all assets resolve relatively within the itch.io iframe container.

## Packaging
1. Navigate to `LumenProto/web/dist/`.
2. Zip the entire contents of the `dist/` directory. (Ensure `index.html` is at the root of the `.zip` file, not inside a sub-folder).
3. Name the zip file `lumen-web-build.zip`.

## Uploading to itch.io
1. Create a new project on itch.io.
2. Under **Kind of project**, select **HTML**.
3. Upload `lumen-web-build.zip`.
4. Check the box **This file will be played in the browser**.
5. Set viewport dimensions to `1280 x 720` (or similar 16:9 ratio).
6. Enable the **Mobile Friendly** flag if desired, but recommend keeping desktop focus for keyboard controls.

## Known Limitations on itch.io
- The AudioContext initialization must wait for user input. The player pressing an arrow key to move handles this silently.
- No backend server APIs are used. The game is purely client-side static files.
