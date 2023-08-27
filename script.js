const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'pl-PL';
rec.continuous = true;

rec.onresult = function (e) {
  const acceptedColors = {
    czerwony: 'red',
    niebieski: 'blue',
    zielony: 'green',
    żółty: 'yellow',
    różowy: 'pink',
    brązowy: 'brown',
    fioletowy: 'purple',
    fiolet: 'purple',
    pomarańczowy: 'orange',
    pomarańcz: 'orange',
    turkusowy: 'turquoise',
    czarny: 'black',
    biały: 'white',
    sraczkowaty: '#9c733d',
  };

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();
    console.log(script);
    if (acceptedColors.hasOwnProperty(script)) {
      document.body.style.backgroundColor = acceptedColors[script];
    } else {
      alert('To nie jest kolor. Spróbuj jeszcze raz!');
    }
  }
};

rec.start();
