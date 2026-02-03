import * as C from '../../../i18n/constants';
import { registerCondition } from '../conditionRegisterer';

export const CONDITION_NAME = 'is_deactivated';

// Separator used for UL (User List) columns in MangoApps
const UL_SEPARATOR = '___';

/**
 * Condition: Is Deactivated
 * Returns true if ANY user in the cell value is deactivated.
 * 
 * Cell value format: "userId:userName___userId2:userName2___..."
 * 
 * @param {object} dataRow The object which holds and describes the single cell value.
 * @param {Array} inputValues An array of values to compare with (unused for this condition).
 * @returns {boolean}
 */
export function condition(dataRow, inputValues) {
  const value = dataRow.value;
  
  // If cell is empty, it doesn't match
  if (!value || typeof value !== 'string' || value.trim() === '') {
    return false;
  }

  // Get deactivated user IDs from global variable
  const deactivatedUserIds = window.deactivatedUserIds;
  
  // If no deactivated users data is available, don't match anything
  if (!deactivatedUserIds || !(deactivatedUserIds instanceof Set)) {
    return false;
  }

  // Parse user IDs from cell value
  const users = value.split(UL_SEPARATOR);
  
  // Check if ANY user is deactivated
  for (const user of users) {
    if (!user) continue;
    
    const [userId] = user.split(':');
    
    if (!userId) continue;
    
    // Check both string and number versions of the ID
    if (deactivatedUserIds.has(Number(userId)) || deactivatedUserIds.has(userId)) {
      return true; // Row matches - has at least one deactivated user
    }
  }

  return false; // No deactivated users found in this cell
}

registerCondition(CONDITION_NAME, condition, {
  name: C.FILTERS_CONDITIONS_IS_DEACTIVATED,
  inputsCount: 0,
  showOperators: true
});
