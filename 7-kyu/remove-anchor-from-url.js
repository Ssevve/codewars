// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

function removeUrlAnchor(url){
  const anchorIndex = url.indexOf('#');
  return anchorIndex > 0 ? url.slice(0, anchorIndex) : url;
}