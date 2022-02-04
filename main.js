const embedDiv = document.getElementById("embed-container")

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://free-football-soccer-videos.p.rapidapi.com/",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-football-soccer-videos.p.rapidapi.com",
		"x-rapidapi-key": "b1b5d8d64amsh2149d9d94bcb5f7p1d4d84jsn1b103855699a"
	}
};

$.ajax(settings).done(function (response) {
    for (let index = 0; index < 7; index++) {
        let embed = response[index].embed
        embedDiv.innerHTML += embed
    }
});