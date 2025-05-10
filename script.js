function changeText() {
    document.getElementById("message").textContent = "The text has been changed!";
  }
  
  function changeStyle() {
    document.getElementById("message").style.color = "blue","yellow";
    document.getElementById("message").style.fontSize = "20px";
    document.body.style.backgroundColor = "#f0f8ff";
  }
  
  function addElement() {
    const newElement = document.createElement("p");
    newElement.textContent = "my name is Daniel !";
    newElement.id = "dynamic";
    document.getElementById("container").appendChild(newElement);
  }
  
  function removeElement() {
    const element = document.getElementById("dynamic");
    if (element) {
      element.remove();
    }
  }
  