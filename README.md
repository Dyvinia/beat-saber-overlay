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
4. (Optional) For 1080p canvases, add the `scale` modifier (ex. `http://dyvinia.github.io/beat-saber-overlay/?modifiers=scale`) to scale the overlay by 1.5x

![image](https://i.imgur.com/vh8deQg.png)

## Options

Options are added to the URL query as such:

```
https://dyvinia.github.io/beat-saber-overlay/?modifiers=top
```

### `ip` and `port`

Listen to events from another IP and/or port.

### `modifiers`

Multiple modifiers can be seperated with commas.

- `top`
	* Moves the overlay to the top and reverses the layout vertically
- `rtl`
	* Moves the overlay to the right and uses right-to-left text
- `scale`
	* Scales the overlay by 1.5x, for use on 1080p canvases
- `test`
	* Makes the background black, for testing purposes
