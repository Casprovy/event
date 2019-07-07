var myFullpage = new fullpage('#fullpage', {
	licenseKey: 'E665CEB2-0DF84290-A1501ECA-9C7E3B49',
	sectionsColor: ['#2a2831', '#2a2831', '#ffffff', '#2a2831'],
	anchors: ['1Page', '2Page', '3Page', '4Page'],
	menu: '#menu',
	continuousVertical: true,
	afterLoad: function(anchorLink, index) {
		// console.log("AFTER LOAD - anchorLink:" +anchorLink + " index:" +index );
	},
	onLeave: function(index, nextIndex, direction) {
		// console.log("ONLEAVE - index:" +index + " nextIndex:" +nextIndex  + " direction:" + direction);
	}
});
