const generateFilterFromRef = (searchRef = 0) => {
  let url = 'https://www.vinted.fr/vetements?currency=EUR&order=newest_first';
  if (searchRef === 0) {
    url += '&catalog[]=5&brand_id[]=88&price_to=50&status[]=3&status[]=2&size_id[]=208&size_id[]=209';
  } else if (searchRef === 1) {
    url += '&catalog[]=1206&size_id[]=208&size_id[]=209&price_to=50&status[]=3&status[]=2';
  }

  return url;
}

module.exports = {
  generateFilterFromRef
}