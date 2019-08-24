import { categories } from './constants';

export const searchHref = (param: string) => {
  let cat: any[] = categories.map(category => {
    return category.toLowerCase().replace(/ /g,"-");
  });

  const index = cat.indexOf(param.toLowerCase().replace(/ /g,"-"));
  return param.toLowerCase().replace(/ /g,"-");
}
