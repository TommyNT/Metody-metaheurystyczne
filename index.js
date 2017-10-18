let offers = [
    {n: 1, price: 710, days: 20, incomePerDay: 0},
    {n: 2, price: 666, days: 15, incomePerDay: 0},
    {n: 3, price: 555, days: 10, incomePerDay: 0},
    {n: 4, price: 444, days: 14, incomePerDay: 0},
    {n: 5, price: 315, days: 10, incomePerDay: 0},
    {n: 6, price: 772, days: 30, incomePerDay: 0},
    {n: 7, price: 777, days: 25, incomePerDay: 0},
    {n: 8, price: 250, days: 4, incomePerDay: 0},
    {n: 9, price: 250, days: 10, incomePerDay: 0},
    {n: 10, price: 400, days: 5, incomePerDay: 0},
    {n: 11, price: 345, days: 10, incomePerDay: 0}
]
 
let maxDays = 31,
    days = 0,
    acceptedOffers = [];
   
for (let i = 0; i < offers.length; i++) {
    offers[i].incomePerDay = offers[i].price / offers[i].days;
}
 
offers.sort((a, b) => {
    return a.incomePerDay == b.incomePerDay ? 0 : (a.incomePerDay < b.incomePerDay ? 1 : -1)
})
 
for (let i = 0; i < offers.length; i++) {
    if (days + offers[i].days <= maxDays) {
        days += offers[i].days;
        acceptedOffers.push(offers[i]);
    }
}
 
console.log(offers);
console.log(acceptedOffers);
console.log(days);

var accepted = [];
for (var i = 0; i < acceptedOffers.length; i++) {
    accepted.push('<span>' + acceptedOffers[i].n + '</span>');
}

$(function(){
		$( ".check" ).click(function() {
		  $("#acceptedOffers").css("display","inline");
		  $("#busyDays").css("display","inline");
		});
		$( "#acceptedOffers" ).html("Najkorzystniejsze oferty: " + "<strong>" + accepted.join(", ") + "</strong>" + "<br>");
		$( "#busyDays" ).html("Ilość dni: " + "<strong>" + days + "<strong>" + "<br> <br>");
});


