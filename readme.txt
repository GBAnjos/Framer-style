# Figma Style Sync Plugin for Framer

A powerful Framer plugin that syncs color and text styles from Figma to Framer, ensuring design consistency across platforms with minimal effort.

## Features

- **Seamless Style Sync**: Import color and typography styles directly from Figma to Framer
- **Smart Conflict Resolution**: Choose to overwrite existing styles or create new ones with unique names
- **Variable Support**: Automatically create Framer variables from your Figma styles
- **Flexible Configuration**: Customize how styles are synced with granular control
- **Category Preservation**: Maintains your Figma style organization in Framer

## Installation

1. Clone this repository
```bash
git clone https://github.com/GBAnjos/figma-style-sync.git
cd figma-style-sync
```

2. Install dependencies
```bash
npm install
```

3. Build the plugin
```bash
npm run build
```

4. Follow the instructions on Framer's [Plugin Developer Guide](https://www.framer.com/developers/plugins/) to load the plugin into Framer.

## Usage

1. Connect your Figma account to the plugin
2. Select the styles you want to sync
3. Configure sync settings
4. Click "Sync Selected Styles to Framer"

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Figma account
- Framer account

### Development commands

- `npm run dev`: Starts the development server
- `npm run build`: Builds the plugin for production
- `npm run lint`: Runs the linter
- `npm run test`: Runs the test suite

## Configuration Options

- **Overwrite existing styles**: Replace styles with the same name in Framer
- **Create Framer variables**: Generate variables for global style management
- **Include color opacity**: Preserve transparency values from Figma
- **Sync text weights & variants**: Keep detailed typography information

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-new-feature`
3. Make your changes and commit: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- The Figma API Team for their excellent documentation
- The Framer community for feedback and support
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components

## Contact

For support, feature requests, or questions, please open an issue on this repository or contact the maintainer at [your-email@example.com](mailto:your-email@example.com).

## Roadmap

- [ ] Support for effect styles (shadows, blurs)
- [ ] Batch import of multiple Figma files
- [ ] Two-way sync between Figma and Framer
- [ ] Custom naming templates for imported styles
