# BMP to PNG converter

Converter for polaroid and instax scans

## Usage

1. Clone this project then run

   ```javascript
       npm install
   ```

2. Change Polaroid.sh and Instax.sh roodDir path. Important to add / for the end of the path. Path need to contains the root folder of the project. (folder of index.js)

3. Give access to run the sh files
   ```bash
       chmod a+x Instax.sh
       chmod a+x Polaroid.sh
   ```
4. Copy your bmp files to the bmp folder. After converting you will find the png files in the png folder. File format contain the type of the camera the current date and a serial number of image.
   ```bash
       Polaroid_13_11_2023_003.png
   ```
5. Double click to Instax.sh or Polaroid.sh
6. If sh file not works with double click. You have to add for the script a runable app like Terminal.

   Double tap -> Opne with -> Other ...

   Choose Enable: All Applications and you can find Terminal in Utilities folder.

7. Enjoy your fresh and crispy images 😊

## License

[Apache 2.0](http://www.apache.org/licenses/)
