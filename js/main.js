(() => {
  let instrumentsBoard = document.querySelector(".DropArea"),
      instruments = document.querySelectorAll("#DragArea *"),
      dropAreas = document.querySelectorAll(".drop"),
		  dropAreasOut = document.querySelectorAll(".thecontainer");

  const instrumentsPaths = ["guitar", "bass", "drums",];
  var audio = new Array();
  audio["guitar"] = new Audio("audio/guitar.wav");
  audio["bass"] = new Audio("audio/bass.wav");
  audio["drums"] = new Audio("audio/drums.wav");

  function dragStarted(event) {
		event.dataTransfer.setData('currentinstrument', event.target.id);
	}
  function allowDragOver(event) {
    event.preventDefault();
  }

  function allowDrop(event) {
    event.preventDefault();
    let droppeditem = event.dataTransfer.getData('currentinstrument');
    this.appendChild(document.querySelector(`#${droppeditem}`));
    playAudio(droppeditem);
  }

  function allowDropOut(event) {
    event.preventDefault();
    let droppeditem = event.dataTransfer.getData('currentinstrument');
    stopAudio(droppeditem);
    this.appendChild(document.querySelector(`#${droppeditem}`));
  }

  function playAudio(instrumentSel){
    audio[instrumentSel].loop= true;
    audio[instrumentSel].play();
  }

  function stopAudio(instrumentSel){
    audio[instrumentSel].pause();
  }

  instruments.forEach(piece => piece.addEventListener ("dragstart", dragStarted));
   dropAreas.forEach(zone => {
     zone.addEventListener("dragover", allowDragOver);
     zone.addEventListener("drop", allowDrop);
  });
  dropAreasOut.forEach(zone => {
     zone.addEventListener("drop", allowDropOut);
  });

})();
