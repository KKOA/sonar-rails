/*!
 * functions.js v1
 * My custom functions
 * Freely distributable under the MIT license.
 *
 */

function isBigger(element1, element2)
{
  if(element1.val() < element2.val()) { return true; }
  return false;
}
function matchValues(element1, element2)
{
  if(!(isBlank($max_bedrooms))) { element1.val(element2.val()); }
}

function isBlank(element)
{
  if(element.val() == ''){ return true; }
  return false;
}

function isSold(property)
{
  if(property.status === 'Sold') { return true; }
  return false;
}
function letAgreed(property)
{
  if(property.status === 'Let agreed') { return true; }
  return false;
}

function isFurnished(property)
{
  if(property.furnishing[0] === 'furnished') { return 'Yes'; }
  return 'No';
}

function ucFirst(string)
{
  if(typeof string != 'undefined')
  {
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  return string;
}

function formatPropertyType(my_text)
{
  if (my_text.indexOf('/') > -1)
  {
    parts = my_text.split('/');
    parts = parts.map(element => ucFirst(element));
    return parts.join(' / ');
  }
  return ucFirst(my_text);
}
