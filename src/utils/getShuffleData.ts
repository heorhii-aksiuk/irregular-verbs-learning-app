import words from '@/utils/data.json';
import shuffle from './shuffle';

const wordsToLearn = words.slice(0, 73);
const data = shuffle(wordsToLearn);

export default data;
