import test from 'tape';
import { Apple } from './apples';

test('does getApple() work?', (t:any) => {
  const anApple = new Apple();

  var actual = anApple.getApple();
  var expected = 'apple';

  t.equal(actual, expected);
  t.end();
});

