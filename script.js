const main = document.querySelector("#main");
const seats = document.querySelectorAll(".row.seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");
let ticketPrice = +movieSelect.value;
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    const selectedSeatsCount = selectedSeats.length;
    const seatsIndex = [...selectedSeats].map(function (seat) {
      return [...seats].indexOf(seats)
    })
    console.log(seatsIndex);
    ;
    console.log(selectedSeatsCount);
    count.innerText =  selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;   
    console.log(selectedSeats)
  }

movieSelect.addEventListener("change" , e => {
   ticketPrice = +e.target.value;
   updateSelectedCount();
})
main.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});
