import test from 'tape';
import { Sum } from './sum';

test('works?', (t:any) => {
  const p:number[] = [1,2,3];
  const sumObject = new Sum(p);

  var actual = sumObject.adder();
  var expected = 6;

  t.equal(actual, expected);
  t.end();
});

