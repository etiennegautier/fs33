export const generateHref = (param: string) => {
  return param.toLowerCase().replace(/ /g,"-");
}
