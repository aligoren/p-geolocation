# p-geolocation

Promise based Geolocation. This module uses native [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)

# Security Info

> This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

> > The Geolocation API allows the user to provide their location to web applications if they so desire. For privacy reasons, the user is asked for permission to report location information.

# Example Usage

```js
import geoLocation from "./path/to/geo-location";

geoLocation({
  type: "currentPosition",
  position: {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000
  }
})
.then(loc => {
  console.log(loc);
})
.catch(err => {
  console.log(err);
});

```

# API

### geoLocation(object)

The `object` will be like this;

```js
type: "currentPosition", // or watchPosition
position: {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
}
```

The second argument which called `position` is optional.

### Types

`currentPosition | watchPosition`

If you're setting the `watchPosition` you can see or clear positionID. For example;

```js
geolocation({
	type: 'watchPosition',
	position: {
		enableHighAccuracy: true,
		maximumAge: 30000,
		timeout: 27000
	}
})
.then(loc => {
  console.log(loc.positionID) // 1
  loc.clear() // cleared
  console.log(loc.positionID) // 0
})
.catch(err => {
  console.log(err)
})
```

I hope this is what you need.
