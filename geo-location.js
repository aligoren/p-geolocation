const geolocation = (options) => {

	return new Promise((resolve, reject) => {

		if ("geolocation" in navigator) {
			switch (options.type) {
				case 'currentPosition':
					navigator.geolocation.getCurrentPosition(success => {
						resolve(success)
					}, error => {
						reject(error)
					}, options.position)
					break;
				case 'watchPosition':
					let positionID = navigator.geolocation.watchPosition(success => {
						success['positionID'] = positionID
						success['clear'] = () => {
							navigator.geolocation.clearWatch(positionID)
							success['positionID'] = 0
						}
						resolve(success)
					}, error => {
						reject(error)
					}, options.position)
					break;
			}
		} else {
			reject('Geolocation feature is not available in this browser')
		}

	})
}

module.exports = geolocation
