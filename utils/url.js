const generateFilterFromRef = (searchRef = 1) => {
  let url = 'https://www.vinted.fr/vetements?catalog[]=5&currency=EUR&order=newest_first';
  if (searchRef === 1) {
    url += '&brand_id[]=88&price_to=50&status[]=3&status[]=2&size_id[]=208&size_id[]=209';
  }

  return url;
}

module.exports = {
  generateFilterFromRef
}