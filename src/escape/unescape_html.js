/*eslint-disable */
import toString from '../utils/string/to_string';
import nilDefault from '../utils/undefined/nil_default';

var unescapeCharactersMap = {
  '<': /(&lt;)|(&#x0*3c;)|(&#0*60;)/gi,
  '>': /(&gt;)|(&#x0*3e;)|(&#0*62;)/gi,
  '&': /(&amp;)|(&#x0*26;)|(&#0*38;)/gi,
  '"': /(&quot;)|(&#x0*22;)|(&#0*34;)/gi,
  "'": /(&#x0*27;)|(&#0*39;)/gi,
  '`': /(&#x0*60;)|(&#0*96;)/gi
},
 characters = Object.keys(unescapeCharactersMap);

/**
 * Replaces the HTML entities with corresponding characters.
 *
 * @param {string} string The accumulator string.
 * @param {string} key The character.
 * @return {string} The string with replaced HTML entity
 */
function reduceUnescapedString(string, key) {
  return string.replace(unescapeCharactersMap[key], key);
}

/**
 * Unescapes HTML special characters from <code>&amp;lt; &amp;gt; &amp;amp; &amp;quot; &amp;#x27; &amp;#x60;</code> to corresponding <code>< > & ' " `</code> in <code>subject</code>.
 *
 * @function unescapeHtml
 * @static
 * @memberOf Escape
 * @param {string} [subject=''] The string to unescape.
 * @return {string} Returns the unescaped string.
 * @example
 * v.unescapeHtml('&lt;p&gt;wonderful world&lt;/p&gt;');
 * // => '<p>wonderful world</p>'
 */
export default function(subject) {
  var subjectString = toString(nilDefault(subject, ''));
  return characters.reduce(reduceUnescapedString, subjectString);
}