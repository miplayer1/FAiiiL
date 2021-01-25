// DOM elements ooops
const imageS = document.getElementById("img-faiiil");
//const glDescriptions = document.getElementById("gl-descriptions");
const nextBtn = document.getElementById("next");

// functions
const randomize = max => Math.floor(Math.random() * max);

const reset = () => {
  imageS.innerHTML = "";
//  glDescriptions.innerHTML = "I hate JS";
};

console.log(fail[randomize(fail.length)]);

const displayRandomPractice = () => {
  reset();
  const faiiil = fail[randomize(fail.length)];
 imageS.innerHTML = `<img class="responsive-img" src="${faiiil}">`;
//  glDescriptions.innerHTML = `${fail[gloss].description}`;
  // ooops.splice(gloss, 1);
};
displayRandomPractice();
nextBtn.addEventListener("click", displayRandomPractice);
