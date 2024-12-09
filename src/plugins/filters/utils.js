import { getComparisonFunction } from '../../helpers/feature';
import { arrayUnique, arrayEach } from '../../helpers/array';
import { maDateFormats } from '../../helpers/unicode';

const sortCompare = getComparisonFunction();
const textAreaElem = document.createElement('textarea');
const decodeHTMLCode = (str) => {
  try {
      if (str && typeof str === 'string') {
          str = str.replace(/</g, '&lt;');
          str = str.replace(/>/g, '&gt;');
          textAreaElem.innerHTML = str;
          str = textAreaElem.textContent;
          textAreaElem.textContent = '';
      }
      return str;
  } catch (err) {
      utils.log(err);
  }
};

/**
 * Comparison function for sorting purposes.
 *
 * @param {*} a
 * @param {*} b
 * @returns {Number} Returns number from -1 to 1.
 */
export function sortComparison(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  return sortCompare(a, b);
}

/**
 * Convert raw value into visual value.
 *
 * @param {*} value
 * @param {String} defaultEmptyValue Default value for empty cells.
 * @returns {*}
 */
export function toVisualValue(value, defaultEmptyValue, cellType, isUserRefCol) {
  let visualValue = value;

  if (visualValue === '') {
    visualValue = `(${defaultEmptyValue})`;
    return visualValue;
  }
  // Look ahead columns
  if (['UL','TCL','OL'].indexOf(cellType) > -1) {
    visualValue = visualValue.split(',').map(val => val.includes(':') ? val.split(':')[1] : val).join(', ').replace(/,\s*$/, '');
  }

  if (['TL'].indexOf(cellType) > -1) {
    const teamValues = visualValue.split('___');
    const teamCounts = teamValues.slice(10,).length;
    visualValue = teamValues.slice(0, 10).map(val => val.includes(':') ? val.split(':')[1] : val).join(', ').replace(/,\s*$/, '');
    if(teamCounts > 0) {
      visualValue += `, +${teamCounts}`;
    }
  }

  // string and dropdown column.
  if (['S', 'O'].indexOf(cellType) > -1) {
    visualValue = decodeHTMLCode(visualValue);
  }
  // Checkbox column
  if (['C'].indexOf(cellType) > -1) {
    visualValue =  visualValue.split('___').join(', ').replace(/,\s*$/, '');
  }
  // URL columns
  if (['URL'].indexOf(cellType) > -1) {
     visualValue =  visualValue.split(':::')[0];
  }
  // Date column
  if (['D'].indexOf(cellType) > -1 && isUserRefCol) {
     try {
       visualValue = moment(visualValue, "DD/MM/YYYY").format(maDateFormats[window.domain_date_format] || "DD/MM/YYYY");
     } catch(e) {}
  }

  return visualValue;
}

const SUPPORT_SET_CONSTRUCTOR = new Set([1]).has(1);
const SUPPORT_FAST_DEDUPE = SUPPORT_SET_CONSTRUCTOR && typeof Array.from === 'function';

/**
 * Create an array assertion to compare if an element exists in that array (in a more efficient way than .indexOf).
 *
 * @param {Array} initialData Values to compare.
 * @returns {Function}
 */
export function createArrayAssertion(initialData) {
  let dataset = initialData;

  if (SUPPORT_SET_CONSTRUCTOR) {
    dataset = new Set(dataset);
  }

  return function(value) {
    let result;

    if (SUPPORT_SET_CONSTRUCTOR) {
      result = dataset.has(value);
    } else {
      /* eslint-disable no-bitwise */
      result = !!~dataset.indexOf(value);
    }

    return result;
  };
}

/**
 * Convert empty-ish values like null and undefined to an empty string.
 *
 * @param value Value to check.
 * @returns {String}
 */
export function toEmptyString(value) {
  return value === null || value === void 0 ? '' : value;
}

/**
 * Unify column values (replace `null` and `undefined` values into empty string, unique values and sort them).
 *
 * @param {Array} values An array of values.
 * @returns {Array}
 */
export function unifyColumnValues(values) {
  let unifiedValues = values;

  if (SUPPORT_FAST_DEDUPE) {
    unifiedValues = Array.from(new Set(unifiedValues));
  } else {
    unifiedValues = arrayUnique(unifiedValues);
  }
  unifiedValues = unifiedValues.sort((a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    }

    if (a === b) {
      return 0;
    }

    return a > b ? 1 : -1;
  });

  return unifiedValues;
}

/**
 * Intersect 'base' values with 'selected' values and return an array of object.
 *
 * @param {Array} base An array of base values.
 * @param {Array} selected An array of selected values.
 * @param {String} defaultEmptyValue Default value for empty cells.
 * @param {Function} [callback] A callback function which is invoked for every item in an array.
 * @returns {Array}
 */
export function intersectValues(base, selected, defaultEmptyValue, callback, cellInfo) {
  const result = [];
  const same = base === selected;
  let selectedItemsAssertion;

  if (!same) {
    selectedItemsAssertion = createArrayAssertion(selected);
  }

  arrayEach(base, (value) => {
    let checked = false;

    if (same || selectedItemsAssertion(value)) {
      checked = true;
    }

    const item = { checked, value, visualValue: toVisualValue(value, defaultEmptyValue, cellInfo.data_type, cellInfo.user_ref_col) };

    if (callback) {
      callback(item);
    }

    result.push(item);
  });

  return result;
}
