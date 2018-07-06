// ------------------------------------------
// =======JS For the yearly horoscope========
// ------------------------------------------
// An array of objects with sign info
var signs = [
	{
	name:"Aries",
	img:"img/aries.png",
	discription:"Aries demonstrate strong personality. They have strong leadership qualities and honest and straightforward. Aries often have strong determination and can’t be deterred by failures. Aries are always eager for action. They take up to leadership spontaneously. But they don’t judge the pros and cons of a situation before acting. This also makes them vulnerable.",
	info:"You've got charm, smarts, and the element of surprise going for you all year long! Now what do you want to do with all these cosmic gifts? Tip: let them take you in a brand new direction."
	},
	{
	name:"Taurus",
	img:"img/taurus.png",
	discription:"Taureans are noted for their determination and zeal. It is not easy to distract a Taurian from his goal once he has set his target. He would stay focused on his target and would continuously strive to achieve it. Taureans attach high value to simplicity and functionality. They often live a life that is simple and devoid of luxury.",
	info:"This year, focus on your own well-being above all else. You can increase your material wealth and health this way, and also structure a more stable future. With Mars and the asteroid Ceres starting the year in your sign, you have the energy to nurture and grow the future you want."
	},
	{
	name:"Gemini",
	img:"img/gemini.png",
	discription:"Geminis are full of duality. They always look to a situation from dual perspective. Geminis are characterized by inconstancy and dual nature. Geminis therefore always stay confused about their feelings. Geminis however are strong communicators and express good control over language. They are often found to have knowledge over several languages.",
	info:"Make the most of your people skills, make the big changes you want and need, and advance your goals for the future this year, Gemini. You'll have endless ideas and insights but it may be hard to activate them on your own. Talk, network, find partners, and team up when you think it's appropriate."
	},
	{
	name:"Cancer",
	img:"img/cancer.png",
	discription:"Cancerians are emotional. Their lives are often inflicted with mood shifts. You can find a Canerian in different moods even during a day. The true emotion of Cancer however is hidden behind their composure. But they are soft creatures and can be hurt easily by unkind words. People of the Cancer zodiac sign can be prone to depression and other mental issues. However, cancers are great family people and enjoy big families around them.",
	info:"Your year can be a highwater year full of major achievements, crucial decisions and changes for you, Cancer. Great things are possible with so much transformative energy aimed your way."
	},
	{
	name:"Leo",
	img:"img/leo.png",
	discription:"Leos are warm spirited. They are full of energy and always eager to jump into action. Leos crave for recognition and admiration. Leos always love to be at the centre of attraction. They strive to reach to the top in whatever they do. Leos always love to be surrounded with large crowd and admirers. However, they are often unkind to criticism and don’t take the words of critics lightly. Leos are very ambitious and choose their acquaintances carefully. They aspire for social recognition.",
	info:"This is a year on fire, pouring energy into your work, career, and creativity sectors. The January Sun-Pluto conjunction keeps your ambition and work ethic sky high. The separating Mars-Neptune conjunction makes sure that emotions, lofty spiritual ideals, and instincts are not left behind."
	},
	{
	name:"Virgo",
	img:"img/virgo.png",
	discription:"Virgos have a keen sense of good and bad and for that they are highly discriminating. They have an intuitive sense to identify wrong motives in people. Hence, Virgos exercise extreme caution in what they do. The virgin defines purity and therefore they are endowed with the ability to distinguish the good from the bad. Hence, Virgos are also cleanliness freaks. Despite their intelligence Virgos often remain confused about the decisions they make in their life. Also, you will not find Virgos teeming with activities.",
	info:"As soon as the Sun conjoins Pluto in Capricorn on January 7, the year will blast off into an adventure of work and career possibilities for Virgos. Your planet Mercury will be in Capricorn, too. Thoughts and ideas to move you ahead will be abundant and achievable all year."
	},
	{
	name:"Libra",
	img:"img/libra.png",
	discription:"Libra is an active sign and members born under the sign are endowed with high energy. But Librans also tend to run out of their energy soon. The Libra is the ‘balance’ and members of this sign have a very balanced mind. They can be found in settling disputes often. Librans always try to maintain harmony and balance. They are also very level headed and have a keen sense for justice. Therefore, their suggestions are often highly sought after by their friends and kins. Librans are two faceted characters. They both have the cheerfulness and darkness in them. Librans have phases of heightened activities but they can easily slip into a phases of complete inactivity and apathy as well.",
	info:"For the first ten months of this year, enthusiatic and big-hearted Jupiter is in your sign, Libra. You can do endless good things with this. Strong allies, partners, and friends are there with you. Have a persistent vision, help and be helpful, and you should have a magnificent year!"
	},
	{
	name:"Scorpio",
	img:"img/scorpio.png",
	discription:"Scorpions are most diverse in nature and therefore present the most interesting study. Scorpios hold grudge and would wait patiently for the right moment to strike. They are not likely to forget any act of betrayal or treachery. For Scorpios what is implied is more fascinating than the obvious. Scorpios are often described as egoists. However, some of the positive traits of Scorpios are- diplomacy, intuition, intelligence, engaging, resolute, spirituality, and sensitivity.",
	info:"You may not recognize just how lucky you are going to be this year, Scorpio! The Sun-Pluto conjunction of this years beginning may keep you wired, intense, and focused on your chosen work. Keep an eye out for lucky opportunities and be ready to pounce. Your modern planet Pluto will keep you sharp and intense all year long."
	},
	{
	name:"Sagittarius",
	img:"img/sagittarius.png",
	discription:"Sagittarians are the incurable optimists. They are always looking at the positive side of a thing. Their optimism can’t be dampened by hardships or negative results. Sagittarians often are outdoor people. They will take interest in all sorts of sports and outdoor activities. They are also adventures in nature. Although they are true to their faults but can also turn completely deaf to criticism and turn down suggestions.",
	info:"This is a year wide open with opportunities for Sagittarians. There is plenty of energy that will prompt you to dig in and make tremendous progress. There are also countless doors opening to new, previously unconsidered projects, pursuits, and partnerships. Forget those preconceived notions of what you should do or need to do. This year, you can do just about anything."
	},
	{
	name:"Capricorn",
	img:"img/capricorn.png",
	discription:"Members of this sign has an insatiable desire to climb higher and during this course they can also become selfish and might not hesitate to sacrifice other’s interests in fulfilling their goals. Capricorns may seem risk averse but in reality they carefully plan all their moves ahead and rehearse them to perfection.",
	info:"It's your year to charge ahead, make bold changes for progress, success, and achieve greater respect in the world. The Sun-Pluto conjunction in January empowers and emboldens you all year long."
	},
	{
	name:"Aquarius",
	img:"img/aquarius.png",
	discription:"Aquarians are extremely vulnerable and sensitive. Although you may often find them being surrounded by many friends but in reality they rarely have close friends and acquaintances. Aquarius is a universal sign which makes them public people. Hence Aquarians are often associated with clubs, organizations and forums and enthusiastically participate in intellectual discussions. Aquarians are great communicators as long as they are within their mental realm.",
	info:"This year is a time of great potential and personal growth. Hard work and success are there, too, but your greatest progress may be made internally rather than externally. The Sun-Pluto conjunction in Capricorn that starts this year keeps your eye on the material prize. The Mars-Neptune conjunction will keep your loves, ideals, and highest hopes alive."
	},
	{
	name:"Pisces",
	img:"img/pisces.png",
	discription:"Pisceans live in their imaginary world that barely has a connection with the reality. They love to look at the world through a rosy window. When challenged by reality, Pisceans have the tendency to retreat into their world of imagination.",
	info:"This is a year of pure magic! Take the time to distinguish between what's real and what's illusion and you'll safely navigate any and all situations. With the Mars-Neptune conjunction in Pisces that opens this year, you can use charm rather than be charmed, hold true to the loftiest of ideals, and dispel any deceit or deception."
	}
]

// Changing the background on change for yearly scope
function changeBG() {
	var background = document.getElementsByClassName("main-section")[0]
	background.setAttribute("id", "main")
}

// The fuction that grabs horoscope sign info

function getSignInfo() {
	// setting a variable to select the select tag
		var option = document.getElementById("select-sign").selectedIndex
	// retrieving the horoscope value of the option tags with in the select tag
		var selected = document.getElementsByClassName("sign")[option].value
	// creating a loop to go through my array of objects containing the horoscope sign info
		for(i = 0; i < signs.length; i++) {
	// if the value of the option tag is the same as the object name then display the data
			if(selected == signs[i].name) {
			document.getElementById("sign-name").innerHTML = signs[i].name
			document.getElementById("sign-img").src = signs[i].img
			document.getElementById("sign-info").innerHTML = signs[i].info
			document.getElementById("discription").innerHTML = "<h5><u>Description of a " + selected + "</u></h5>" + signs[i].discription
			}
		}
}
// ------------------------------------------
// =======JS For the daily horoscope========
// ------------------------------------------
function getDailyInfo() {
	// setting a variable to select the select tag
	var option = document.getElementById("dailySign").selectedIndex
	// retrieving the horoscope value of the option tags with in the select tag
	var sign = document.getElementsByClassName("day-sign")[option].value
 	var xhttp = new XMLHttpRequest()
 	xhttp.onreadystatechange = function(){
 		if (this.readyState == 4 && this.status == 200) {
 		console.log(this)
 		var text = this.response.horoscope.horoscope
 		console.log(text)
 		document.getElementById("sign-name").innerHTML = sign
 		document.getElementById("sign-info").innerHTML = text
 		// creating a loop to go through my array of objects containing the horoscope sign info
		for(i = 0; i < signs.length; i++) {
		// if the value of the option tag is the same as the object name then display the data
			if(sign == signs[i].name) {
			document.getElementById("sign-img").src = signs[i].img
			}
		}
		}

 	}
 	xhttp.responseType = "json"
 	xhttp.open("GET", "https://cors-anywhere.herokuapp.com/http://widgets.fabulously40.com/horoscope.json?sign=" + sign, true)
	xhttp.send()
}
