var offers = [];
offers[0] = [710 , 20, 35.5];
offers[1] = [666 , 15, 44.4];
offers[2] = [555 , 15, 55.5];
offers[3] = [444 , 14, 31.71429];
offers[4] = [315 , 10, 31.5];
offers[5] = [772 , 30, 25.73333];
offers[6] = [777 , 25, 31.08];
offers[7] = [250 , 4, 62.5];
offers[8] = [250 , 10, 25];
offers[9] = [400 , 5, 80];
offers[10] = [345 , 10, 34.5];

var maxDays = 31;
var average = [];

offers.forEach(function(el) {
	average.push(el[2]);
});

var sortedAverages = average.sort(function(a, b){return b-a});

var days = [];

offers.forEach(function(el) {
	days.push(el[1]);
});

var takeOffer = [];
var busyDays = 0;
for (i = 0; i < offers.length; i++) { 
	if(days[i] + busyDays <= maxDays){
		takeOffer.push(offers[i]);
		busyDays = busyDays + days[i];
	}
}

console.log(takeOffer);
console.log(busyDays);