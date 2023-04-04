# Polygon Checker
Polygon Checker is a simple Google Chrome extension that checks if a coordinate is within a polygon. This extension takes a list of coordinates on a map (latitude, longitude) that form a polygon and a single map coordinate as input, and outputs True if the single coordinate is within the polygon or False if the single coordinate is outside the polygon.

### Installation

You can install the Polygon Checker extension from the Chrome Web Store [Polygon Checker](https://chrome.google.com/webstore/detail/polygon-checker/ddapaifbpicpmfldajmahofeeppkbdkh).

Alternatively, you can download the source code from this GitHub repository and load the extension as an unpacked extension in developer mode in Google Chrome:

1. Download the source code from this repository and extract the files to a folder on your computer.
2. Open Google Chrome and go to the extensions page (chrome://extensions/).
3. Enable developer mode by clicking the toggle switch in the upper right corner of the page.
4. Click the "Load unpacked" button and select the folder where you extracted the source code.
5. The Polygon Checker extension should now be installed and ready to use.

### Usage

To use the Polygon Checker extension, click on the extension icon in the Chrome toolbar to open the popup window. In the popup window, enter a list of coordinates for the polygon (one coordinate per line) and a single coordinate to check (in the format latitude,longitude), then click the "Check" button. The extension will output either "True" or "False" depending on whether the single coordinate is within the polygon or not.

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements
This extension was created by Danny Shmueli, with the help of [ChatGPT](https://chat.openai.com/).

*This README.md was also written by ChatGPT.
