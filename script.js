function randomText() {
  const texts = ["meow ", "meOW", "meowwww:3", "meow meow"];
  const random = texts[Math.floor(Math.random() * texts.length)];
  document.getElementById("meow").innerText = random;
}