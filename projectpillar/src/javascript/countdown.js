const flipCard = document.querySelector(".flip-card");
const time = { hour: 12, minute: 00 };
const countToDate = new Date("Jul 11, 2022 14:00:00").getTime();

setInterval(() => {
  const currentDate = new Date().getTime();
  const timeLeft = countToDate - currentDate;

  const daysSetter = 1000 * 60 * 60 * 24;
  const hoursSetter = 1000 * 60 * 60;
  const minutesSetter = 1000 * 60;
  const secondsSetter = 1000;

  const days = Math.floor(countToDate / daysSetter - currentDate / daysSetter);
  const hours = Math.floor(
    (countToDate / hoursSetter - currentDate / hoursSetter) % 24
  );
  const minutes = Math.floor(
    (countToDate / minutesSetter - currentDate / minutesSetter) % 60
  );
  const seconds = Math.floor(
    (countToDate / secondsSetter - currentDate / secondsSetter) % 60
  );

  // console.log(
  //   "days: " +
  //     days +
  //     " hours: " +
  //     hours +
  //     " mins: " +
  //     minutes +
  //     " seconds: " +
  //     seconds
  // );

  flip(document.querySelector("[data-days-tens]"), Math.floor(days / 10));
  flip(document.querySelector("[data-days-ones]"), days % 10);
  flip(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
  flip(document.querySelector("[data-hours-ones]"), hours % 10);
  flip(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
  flip(document.querySelector("[data-minutes-ones]"), minutes % 10);
  flip(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
  flip(document.querySelector("[data-seconds-ones]"), seconds % 10);
}, 250);

// function flip(flipCard, passedNumber) {
//   const topHalf = document.querySelector(".top");
//   const startNumber = parseInt(topHalf.textContent);

//   if (passedNumber === startNumber) return;

//   const bottomHalf = document.querySelector(".bottom");

//   const topFlip = document.createElement("div");
//   topFlip.classList.add("top-flip");

//   const bottomFlip = document.createElement("div");
//   bottomFlip.classList.add("bottom-flip");

//   topHalf.textContent = startNumber;
//   bottomHalf.textContent = startNumber;

//   topFlip.textContent = startNumber;
//   bottomFlip.textContent = passedNumber;

//   topFlip.addEventListener("animationstart", (e) => {
//     topHalf.textContent = passedNumber;
//   });
//   topFlip.addEventListener("animationend", (e) => {
//     topFlip.remove();
//   });

//   bottomFlip.addEventListener("animationend", (e) => {
//     bottomHalf.textContent = passedNumber;
//     bottomFlip.remove();
//   });

//   flipCard.append(topFlip, bottomFlip);
// }

function flip(flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".top");
  const startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) return;

  const bottomHalf = flipCard.querySelector(".bottom");
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  top.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = newNumber;

  topFlip.addEventListener("animationstart", (e) => {
    topHalf.textContent = newNumber;
  });
  topFlip.addEventListener("animationend", (e) => {
    topFlip.remove();
  });
  bottomFlip.addEventListener("animationend", (e) => {
    bottomHalf.textContent = newNumber;
    bottomFlip.remove();
  });
  flipCard.append(topFlip, bottomFlip);
}
