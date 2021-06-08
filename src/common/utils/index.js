import isArray from 'lodash/isArray';

const convertToPlain = el => el?.get ? el.get({ plain: true }) : el;

export const getRawData = results => results && isArray(results)
  ? results.filter(item => !!item).map(convertToPlain)
  : convertToPlain(results);
