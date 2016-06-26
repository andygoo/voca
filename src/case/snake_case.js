import toString from '../utils/string/to_string';
import nilDefault from '../utils/undefined/nil_default';
import words from '../split/words';
import lowerCase from '../case/lower_case';

/**
 * Converts the `subject` to <a href="https://en.wikipedia.org/wiki/Snake_case">snake case</a>.
 *
 * @function snakeCase
 * @static
 * @memberOf Case
 * @param {string} [subject=''] The string to convert to snake case.
 * @return {string} The snake case string.
 * @example
 * v.snakeCase('learning to fly');
 * // => 'learning_to_fly'
 *
 * v.snakeCase('LearningToFly');
 * // => 'learning_to_fly'
 *
 * v.snakeCase('-Learning-To-Fly-');
 * // => 'learning_to_fly'
 */
export default function(subject) {
  var subjectString = toString(nilDefault(subject, ''));
  if (subjectString === '') {
    return '';
  }
  return words(subjectString).map(lowerCase).join('_');
}