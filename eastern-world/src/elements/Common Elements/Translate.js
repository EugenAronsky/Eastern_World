const axios = require("axios");

let options = {
  method: 'GET',
  url: 'https://nlp-translation.p.rapidapi.com/v1/translate',
  params: {text: 'Hello, world!!', to: 'es', from: 'en'},
  headers: {
    'X-RapidAPI-Key': '4e7657b989msh5c519dfd44791ebp185ee0jsn8732a46157cf',
    'X-RapidAPI-Host': 'nlp-translation.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

export default function Translate(to_translate){
    options.params.to = to_translate;
    options.params.from = to_translate;
    options.params.text = to_translate;
};