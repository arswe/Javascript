//

const sentence =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati? Voluptas similique adipisci amet commodi impedit voluptates iste Lorem ipsum dolor sit amet. consequuntur blanditiis nemo eos omnis, dicta eveniet nesciunt perferendis dolores et accusamus ipsam? Voluptate, reiciendis porro molestiae nostrum error maiores nesciunt alias. Soluta corrupti debitis ex at sit, molestiae similique sapiente adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nostrum maiores autem commodi magnam accusamus porro quisquam qui illo repellat?';

// 1. Find the number of words in the sentence.
const match = sentence.match(/(sit)/g);
const ocurrences = match ? match.length : 0;
console.log(ocurrences);

// 2. Find the number of times the word sit appears.
const words = sentence.split(' ');
console.log(words.length);

