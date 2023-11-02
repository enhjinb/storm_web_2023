console.log('Lesson Day - 23 Functions , this keyword');

// 1. HTML function gedeg sedev
const todaysTopics = ['HTML Functions',
'This Keyword',
'Makeing Keyboard small project']

console.log(todaysTopics);

let contentElement = document.getElementById("content");

// zuvhun JS ashiglaad tuhain element uudig html d haruulah 
// topic h2 gedeg element uusgeh 

const topicHeader = document.createElement('h2');

// topic h2 dotor text nemeh
topicHeader.innerHTML = 'Unuudrin hicheel';

// contentbgedeg id=tai elementuudig ehleed barij avah
let content = document.createElement('ul');

contentElement.appendChild(content);

// h2gedeg muchruu content id ruuga nemeh
content.appendChild(topicHeader);


let ulElement = document.createElement('ul');



