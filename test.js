import test from 'ava';
import plugin from '.';

test('cssnano', async t => {
  const input = `a {
    background-color: #FF0000;
  }`;
  const { css } = await plugin.process(input, { from: undefined });
  t.is(css, 'a{background-color:red}', 'css is minified');
});

test('sgvo is disabled', async t => {
  const input = `h1{background:url('data:image/svg+xml;charset=utf-8,<?xml version="1.0" encoding="utf-8"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"><circle cx="50" cy="50" r="40" fill="yellow" /></svg>')}`;
  const { css } = await plugin.process(input, { from: undefined });
  t.is(css, input, 'input is unchanged');
});
