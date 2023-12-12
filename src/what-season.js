const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  try {
    const month = date.getMonth() + 1;
    if (month === 1 || month === 2 || month === 12) {
      return 'winter';
    } else if (month >= 3 && month <= 5) {
      return 'spring';
    } else if (month >= 6 && month <= 8) {
      return 'summer';
    } else if (month >= 9 && month <= 11) {
      return 'autumn';
    } else {
      throw new Error('Invalid date!');
    }
  } catch (error) {
    throw new Error('Invalid date!');
  }
  
}

module.exports = {
  getSeason
};
