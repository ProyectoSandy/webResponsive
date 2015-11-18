$(document).ready(function() {
		$("#twitter").getTwitter({
			userName: "ziruspizza",
			numTweets: 3,
			loaderText: "Cargando tweets...",
			slideIn: true,
			slideDuration: 750,
			showHeading: true,
			headingText: "Ultimos Tweets",
			showProfileLink: false,
			showTimestamp: true
		});
	});