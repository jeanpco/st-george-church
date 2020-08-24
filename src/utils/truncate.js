export const truncate = (str, max = 22) => {
  const array = str.trim().split(' ');
  const ellipsis = array.length > max ? ' [...]' : '';
  return array.slice(0, max).join(' ') + ellipsis;
};