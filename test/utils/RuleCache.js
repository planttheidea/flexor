// test
import test from 'ava';
import sinon from 'sinon';

// src
import RuleCache from 'src/utils/RuleCache';
import * as options from 'src/utils/options';

test('if RuleCache will construct a cache object correctly', (t) => {
  const instance = new RuleCache();

  t.deepEqual(instance.cache, {});
  t.is(instance.index, 0);
  t.is(instance.tag, null);
});

test.serial(
  'if RuleCache.add() will add the rule to the sheet on the instance tag, set the key in cache, and increment the index',
  (t) => {
    const instance = new RuleCache();

    instance.tag = {
      sheet: {
        insertRule: sinon.spy()
      }
    };

    const key = 'foo';
    const css = 'bar';

    instance.add(key, css);

    t.true(instance.tag.sheet.insertRule.calledOnce);
    t.true(instance.tag.sheet.insertRule.calledWith(`[${key}]{${css}}`, 0));

    t.true(instance.cache[key]);
    t.is(instance.index, 1);
  }
);

test.serial('if RuleCache.add() will add the rule as textContent to the style tag if debug is true', (t) => {
  const instance = new RuleCache();

  const currentOptions = options.getOptions();

  options.setOptions({
    debug: true
  });

  const originalTextContent = 'foo';

  instance.tag = {
    textContent: originalTextContent
  };

  const key = 'foo';
  const css = 'bar;';

  instance.add(key, css);

  t.is(instance.tag.textContent, `${originalTextContent}\n\n[${key}] {\n  ${css}\n}`);

  options.setOptions(currentOptions);
});

test.serial('if assignTag will assign the tag to the cache and append it to the document head', (t) => {
  const doc = global.document;

  const tag = {
    appendChild: sinon.spy()
  };
  const textNode = '';

  global.document = {
    createElement: sinon.stub().returns(tag),
    createTextNode: sinon.stub().returns(textNode),
    head: {
      appendChild: sinon.spy()
    }
  };

  const instance = new RuleCache();

  instance.assignTag();

  t.true(global.document.createElement.calledOnce);
  t.true(global.document.createElement.calledWith('style'));

  t.is(instance.tag, tag);
  t.is(instance.tag.id, 'flexor-styles');

  t.true(global.document.createTextNode.calledOnce);
  t.true(global.document.createTextNode.calledWith(textNode));

  t.true(tag.appendChild.calledOnce);
  t.true(tag.appendChild.calledWith(textNode));

  t.true(global.document.head.appendChild.calledOnce);
  t.true(global.document.head.appendChild.calledWith(tag));

  global.document = doc;
});

test('if has will return true if the key exists in cache', (t) => {
  const instance = new RuleCache();

  instance.tag = {
    sheet: {
      insertRule() {}
    }
  };

  const key = 'foo';

  instance.add(key, 'bar');

  t.true(instance.cache[key]);
  t.true(instance.has(key));
});

test('if has will return false if the key does not exist in cache', (t) => {
  const instance = new RuleCache();
  const key = 'foo';

  t.false(instance.has(key));
});
