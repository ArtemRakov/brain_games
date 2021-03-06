import randomize from '../randomize';
import run from '..';

const instruction = 'Find the greatest common divisor of given numbers.';

const findGcd = (a, b) => {
  if (b === 0) return a;
  return a < b ? findGcd(b, a) : findGcd(b, a % b);
};

const data = () => {
  const number1 = randomize(1, 50);
  const number2 = randomize(1, 50);
  const question = `${number1} ${number2}`;
  const correctAnswer = findGcd(number1, number2).toString();

  return { question, correctAnswer };
};

export default () => run(data, instruction);
