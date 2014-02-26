var Stream = require('user-stream');
var stream = new Stream({
    consumer_key: 'pNetCr5Hakslrko0QttSA',
    consumer_secret: 'Bag0dUVi4Yb3o6hp0X8ennYNR9Z5zxWn4t1IZrVIKw',
    access_token_key: '5506842-LZOSdqLkocsxfmVU4sCteeRKL77SIg6HPOwCdIQqn4',
    access_token_secret: 'R6pdUj3dpoPbx2dcmuKOe8LhwHA6KStrMePcNNrSKakv9'
    
});



// Lower case list of tags to be tracked
var tags = ['#Vote1DUK','#NotersOnline','#gameinsight','#kca','#RemajanesiaCool'];


// Setup the tack param for the API
// Steup the result object
var results = {};
var tagsString = "";
for (var j in tags){
	tagsString += tags[j] + ',';
	results[tags[j].substring(1).toLowerCase()] = 0;
}
results['tweetcount'] = 0;
// Called for any new tags 
function saveResults(tag){
	console.log('saveResults::'+tag);
	var tagCount = results[tag];
	if (isNaN(tagCount)){ // On ne traite pas les tags non trackés
		//results[tag] = 1;
	}else{
		results[tag] = tagCount + 1;
	}
	// Log the results
	console.log(results);
}


console.log('start tracking::'+tagsString);
//create stream
stream.stream({track:tagsString});

//listen stream data
stream.on('data', function(json) {
	// TWeet count
	results['tweetcount'] += 1;
	if(json.entities){
		// Store all the tags from the tweet
	 	var rtags = json.entities.hashtags;
	 	if (rtags == 'undefined'){
	 		console.log('no hashtags');
	 	}else{
	 		// Save each tags
	 		for (var i in rtags) {
		  		saveResults(rtags[i].text.toLowerCase());
		  	}
	  	}
	 }
});