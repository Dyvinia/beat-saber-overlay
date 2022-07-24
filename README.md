# Beat Saber Overlay

A fork of Reselim's Beat Saber Overlay with minor improvements

![preview](https://i.imgur.com/DxK2thp.png)

## Changes
- Full Combos are displayed
- Added shadows to improve visiblity
- Custom Font support
- More detailed url options
- Fixes to corner rounding on song cover

## Installation (OBS)

1. Download and install the [BeatSaberHTTPStatus plugin](https://github.com/opl-/beatsaber-http-status/releases)
2. Create a Browser source
3. Set the URL as `https://dyvinia.github.io/beat-saber-overlay/` and the Width/Height equal to your canvas size (1920x1080, etc.)

![image](https://i.imgur.com/i8YmwDR.png)

## Options

Options are added to the URL query as such:

```
https://dyvinia.github.io/beat-saber-overlay/?scale=1.25&rounding=6&shift
```

- `ip=<address>` and `port=<port>`
	* Use another IP and/or port.
- `top`
	* Moves the overlay to the top and reverses the layout vertically
- `scale=<scaling>`
	* Scales the overlay by X amount (1.5 is recommended for a 1080p canvas)
- `shift`
	* Moves difficulty text row up by one pixel to account for an optical illusion. Can also specify a value in pixels (`shift=<pixels>`).
- `rounding=<pixels>`
	* Adjusts the corner rounding of the cover art
- `font=<font-family>`
	* Changes the font family that the overlay uses ([Google Fonts](https://fonts.google.com/))
- `italics`
	* Italicize text
- `black`
	* Makes the background black, for testing purposes
- `test`
	* Shows the UI, for testing purposes


## Examples

* Example using BeatSaber default font  
`https://dyvinia.github.io/beat-saber-overlay/?font=Oswald&italics`  
  <img src="https://i.imgur.com/8udV2uR.png" width="400"/>

* What I personally use  
`https://dyvinia.github.io/beat-saber-overlay/?scale=1.25&shift=2&font=Rubik`  
  <img src="https://i.imgur.com/Mq0IBMq.png" width="400"/>
