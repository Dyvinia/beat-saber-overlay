# Beat Saber Overlay

A fork of Reselim's Beat Saber Overlay with minor improvements

![preview](https://i.imgur.com/Zi4OnEa.png)

## Changes
- Added shadows to improve visiblity
- Fixes to Corner Rounding

## Installation (OBS)

1. Download and install the [BeatSaberHTTPStatus plugin](https://github.com/opl-/beatsaber-http-status/releases)
2. Create a Browser source
3. Set the URL as `https://dyvinia.github.io/beat-saber-overlay/` and the Width/Height equal to your canvas size (1920x1080, etc.)

![image](https://i.imgur.com/vh8deQg.png)

## Options

Options are added to the URL query as such:

```
https://dyvinia.github.io/beat-saber-overlay/?scale=1.25&rounding=6&illusion
```

- `ip=<address>` and `port=<port>`
	* to events from another IP and/or port.
- `top`
	* Moves the overlay to the top and reverses the layout vertically
- `scale=<scaling>`
	* Scales the overlay by X amount (1.5 is recommended for a 1080p canvas)
- `shift`
	* Moves difficulty text row up by one pixel to account for an optical illusion. Can also specify a value in pixels (`shift=<pixels>`).
- `rounding=<pixels>`
	* Adjusts the corner rounding of the cover art
- `black`
	* Makes the background black, for testing purposes
