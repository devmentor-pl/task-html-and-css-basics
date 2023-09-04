export const toggleHamburger = (el) => {
  el.addEventListener('click', (event) => {
    el.classList.toggle("open");
  });
}

export default toggleHamburger