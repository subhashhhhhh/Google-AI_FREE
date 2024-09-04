# AI Free

**AI Free** is a browser extension designed to automatically append the query parameter `?udm=14` to every Google search URL. This extension is available for both Google Chrome and Mozilla Firefox, offering a seamless and consistent experience across platforms.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
  - [Google Chrome](#google-chrome)
  - [Mozilla Firefox](#mozilla-firefox)
- [Development](#development)
  - [Project Structure](#project-structure)
  - [Building the Extension](#building-the-extension)
- [Usage](#usage)
  - [Enabling/Disabling the Extension](#enablingdisabling-the-extension)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Automatic URL Modification**: Appends `?udm=14` to every Google search query URL.
- **Cross-Browser Compatibility**: Available for both Chrome and Firefox with identical functionality.
- **User Control**: Easily enable or disable the extension from the browser toolbar.
- **Dynamic Icon**: The toolbar icon changes color based on the enabled/disabled state of the extension.

## Installation

### Google Chrome

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/subhashhhhhh/Google-AI_FREE
   cd Google-AI_FREE/chrome
   ```

2. **Load the Extension**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click on "Load unpacked" and select the `chrome/` directory.

### Mozilla Firefox

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/subhashhhhhh/Google-AI_FREE
   cd Google-AI_FREE/firefox
   ```

2. **Load the Extension**:
   - Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
   - Click on "Load Temporary Add-on" and select the `manifest.json` file in the `firefox/` directory.

## Development

### Project Structure

```plaintext
Google-AI_FREE/
│
├── common/               # Shared assets across both versions
│   └── icons/
│       ├── icon48.png
│       ├── icon128.png
│       ├── icon48-grey.png
│       └── icon128-grey.png
│
├── chrome/               # Chrome-specific files
│   ├── manifest.json
│   ├── background.js
│   ├── popup.html
│   └── popup.js
│
└── firefox/              # Firefox-specific files
    ├── manifest.json
    ├── background.js
    ├── popup.html
    └── popup.js
```

### Building the Extension

To build the extension:

1. **Chrome**:
   - Zip the contents of the `chrome/` directory along with the `common/` directory.

2. **Firefox**:
   - Zip the contents of the `firefox/` directory along with the `common/` directory.

## Usage

### Enabling/Disabling the Extension

- Click on the **AI Free** icon in the browser toolbar.
- A popup will appear with an option to enable or disable the extension.
- The icon will turn grey when disabled and return to its original color when enabled.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a Pull Request.

Please ensure that your code adheres to the existing code style and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.