import test from 'ava';
import plugin from '.';

test('cssnano', async t => {
  const input = `a {
    background-color: #FF0000;
  }`;
  const { css } = await plugin.process(input);
  t.is(css, 'a{background-color:red}', 'css is minified');
});
