const calendarButton = document.querySelector(".btn-start")
const calendarContainer = document.querySelector(".container")

const calendarDays = 25;

const openDoor = (dayNumber, imagePath, dayUrlPath, event) => {
  let currentTime = new Date();
  let today = currentTime.getDate();
  if (today < dayNumber) {
    console.log("You're too early")
  } else {
    event.target.parentNode.style.backgroundImage = `url(${imagePath})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#9ac1f4";
    setTimeout(() => {
      event.target.classList.remove("number")
      event.target.classList.add("play-btn")
      event.target.innerHTML = `<a href=${dayUrlPath} target=”_blank” ><i class="far fa-play-circle"></i></a>`;
      event.target.style.opacity = "100";
      event.target.style.backgroundColor = '';
      event.target.removeEventListener("click", openDoor);
    }, 2000);
  }
}

const createCalendar = () => {
  for(let i = 0; i < calendarDays; i++) {
    const calendarDoor = document.createElement("div");
    const calendarDoorText = document.createElement("div");

    calendarDoor.classList.add("image")
    calendarDoor.style.gridArea = "door" + (i + 1);
    calendarContainer.appendChild(calendarDoor);

    calendarDoorText.classList.add("number");
    calendarDoorText.innerHTML = i + 1;
    calendarDoor.appendChild(calendarDoorText);

    const urlPaths = {
      1: "https://www.youtube.com/watch?v=s2bzP9GSnAU",
      2: "https://xkcd.com/838/",
      3: "https://www.youtube.com/watch?v=8agVRne6pQA",
      4: "https://www.youtube.com/watch?v=cExeSvmSXMA",
      5: "https://www.youtube.com/watch?v=uT3SBzmDxGk",
      6: "https://twitter.com/BobHagh/status/877920282710859776",
      7: "https://www.youtube.com/watch?v=n9kfdEyV3RQ",
      8: "https://www.youtube.com/watch?v=92jbfz9qa9M",
      9: "https://youtu.be/yg4Mq5EAEzw",
      10: "https://www.youtube.com/watch?v=Rg-Q-V3vVAo",
      11: "https://xkcd.com/835/",
      12: "https://www.youtube.com/watch?v=pTzRT4YaCx4",
    };

    let dayNumber = i + 1;
    let dayImagePath = `./images/advent-m-${dayNumber}.jpg`;
    let dayUrlPath = urlPaths[dayNumber];
    

    calendarDoorText.addEventListener("click", openDoor.bind(null, dayNumber, dayImagePath, dayUrlPath), {once:true});
  }
}

calendarButton.addEventListener("click", createCalendar)