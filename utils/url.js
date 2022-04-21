const generateFilterFromRef = (searchRef = 1) => {
  let url = 'https://www.vinted.fr/vetements?';
  if (searchRef === 0) {
    url += 'catalog[]=5&brand_id[]=88&price_to=50&status[]=3&status[]=2&size_id[]=208&size_id[]=209';
  } else if (searchRef === 1) {
    url += 'order=newest_first&currency=EUR&brand_id[]=53&brand_id[]=283953&brand_id[]=5977&size_id[]=208&size_id[]=209&catalog[]=1206&price_to=50&status[]=3&status[]=2';
  } else if (searchRef === 2) {
    url += 'order=newest_first&currency=EUR&brand_id[]=214088&size_id[]=207&size_id[]=208&status[]=3&status[]=2&price_to=50&catalog[]=257';
  } else if (searchRef === 3) {
    url += 'order=newest_first&catalog[]=79&price_to=50&currency=EUR&brand_id[]=73306&size_id[]=207&size_id[]=208&size_id[]=209&status[]=3&status[]=2';
  } else if (searchRef === 4) {
    url += 'order=newest_first&currency=EUR&brand_id[]=319730&size_id[]=207&size_id[]=208&status[]=3&status[]=2&price_to=50&catalog[]=1206';
  } else if (searchRef === 5) {
    url += 'order=newest_first&currency=EUR&brand_id[]=73306&size_id[]=207&size_id[]=208&size_id[]=209&status[]=3&status[]=2&price_to=70&catalog[]=1206';
  } else if (searchRef === 6) {
    url += 'order=newest_first&currency=EUR&brand_id[]=73952&size_id[]=207&size_id[]=208&size_id[]=209&status[]=3&status[]=2&price_to=75&catalog[]=1206';
  } else if (searchRef === 7) {
    url += 'order=newest_first&currency=EUR&brand_id[]=73952&size_id[]=207&size_id[]=208&size_id[]=209&status[]=3&status[]=2&price_to=55&catalog[]=79';
  } else if (searchRef === 8) {
    url += 'order=newest_first&currency=EUR&brand_id[]=2319&size_id[]=207&size_id[]=208&size_id[]=209&status[]=2&status[]=3&price_to=55&catalog[]=1206';
  } else if (searchRef === 9) {
    url += 'order=newest_first&currency=EUR&brand_id[]=304&size_id[]=207&size_id[]=208&size_id[]=209&status[]=2&status[]=3&price_to=20&catalog[]=79';
  } else if (searchRef === 10) {
    url += 'order=newest_first&currency=EUR&brand_id[]=88&size_id[]=207&size_id[]=208&size_id[]=209&status[]=3&status[]=2&price_to=15&catalog[]=79';
  } else if (searchRef === 11) {
    url += 'order=newest_first&currency=EUR&brand_id[]=362&size_id[]=207&size_id[]=208&size_id[]=209&status[]=3&status[]=2&price_to=15&catalog[]=79';
  } 
  

  return url;
}

module.exports = {
  generateFilterFromRef
}