const calendarButton = document.querySelector(".btn-start")
const calendarContainer = document.querySelector(".container")

const calendarDays = 25;

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

const openDoor = (event) => {
  // Check if door is allowed to be opened yet
  let currentTime = new Date();
  let today = currentTime.getDate();

  if (today < event.target.parentNode.id) {
    // Build "You're too early" modal
    const modal = document.createElement("div");
    const modalContainer = document.createElement("div");
    const modalContent = document.createElement("div");
    const closeBtn = document.createElement("span"); 
    const textBackground = document.createElement("div");

    modal.classList.add("modal");
    document.body.appendChild(modal);

    modalContainer.classList.add("modal-container");
    modal.appendChild(modalContainer);

    modalContent.classList.add("modal-content");
    modalContainer.appendChild(modalContent);

    closeBtn.classList.add("closeBtn");
    closeBtn.innerHTML = "&times;";
    modalContent.appendChild(closeBtn);

    textBackground.classList.add("text-background");
    textBackground.innerHTML = `<p>You're too early<img class="finger" src="./images/finger.png" alt="finger wagging"></p>`;
    modalContent.appendChild(textBackground);
    
    // Get random dog photo for modal
    let randomNumber = Math.floor(Math.random() * 6);
    modalContent.style.backgroundImage = `url("./images/early-${randomNumber}.jpg")`;

    // Modal events
    closeBtn.addEventListener("click", closeModal);
    modalContainer.addEventListener("click", outsideClick);

    // Open modal
    function openModal() {
      modal.style.display = "block";
    }

    // Close modal
    function closeModal() {
      modal.style.display = "none";
    }

    // Close modal for outside click
    function outsideClick(event) {
      if (event.target == modalContainer) {
        modal.style.display = "none";
      }
    }
    // Open modal
    openModal();

  } else {
    // Open calendar door
      event.target.removeEventListener("click", openDoor);
      event.target.style.opacity = "0";
      event.target.style.backgroundColor = "#9ac1f4";
      setTimeout(() => {
        event.target.classList.remove("number");
        event.target.classList.add("play-btn");
        event.target.parentNode.style.backgroundImage = `url(./images/advent-m-${event.target.parentNode.id}.jpg)`;
        event.target.innerHTML = `<a href=${urlPaths[event.target.parentNode.id]} target=”_blank” ><i class="far fa-play-circle"></i></a>`;
        event.target.style.opacity = "100";
        event.target.style.backgroundColor = '';
      }, 750);
    }
}

// Build calendar UI
const createCalendar = () => {
  for(let i = 1; i <= calendarDays; i++) {
    
    const calendarDoor = document.createElement("div");
    const calendarDoorContents = document.createElement("div");
    
    let dayNumber = i;
    
    calendarDoor.id = dayNumber;
    calendarDoor.classList.add("door")
    calendarDoor.style.gridArea = "door" + (dayNumber);
    calendarContainer.appendChild(calendarDoor);

    calendarDoorContents.classList.add("number");
    calendarDoorContents.innerHTML = dayNumber;
    calendarDoor.appendChild(calendarDoorContents);
    
    calendarDoorContents.addEventListener("click", openDoor);
  }
}
calendarButton.addEventListener("click", createCalendar);