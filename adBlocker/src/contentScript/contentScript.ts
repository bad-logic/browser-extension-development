// https://www.nytimes.com/section/technology

function filterNyT() {
  console.log('removing dom');
  const app = document.getElementById('site-content');
  const wrapper = document.getElementById('top-wrapper');

  app.removeChild(wrapper);
}

const rules: {
  [url: string]: () => void;
} = {
  'https://www.nytimes.com/section/technology': filterNyT,
};

if (document.URL in rules) {
  console.log(document.URL);
  rules[document.URL]();
}
