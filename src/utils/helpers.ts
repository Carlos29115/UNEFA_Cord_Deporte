import jwt_decode from 'jwt-decode';

/**
 * Get Item form local storage
 * @param key: string
 * @returns Item: any | null
 */
export const searchItemLocal = (key: string) => {
  const item = localStorage.getItem(key);
  if (!item) {
    return null;
  }
  return JSON.parse(item);
};

/**
 * Get payload from decoded token from local storage
 * @param key: string
 * @returns object
 */
export const searchPayloadLocal = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    if (!item) {
      return '';
    }
    const decoded: any = jwt_decode(JSON.parse(item));
    return decoded;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Set new Item localStorage
 * @param key: string
 * @param item: any
 * @returns Item: any | false
 */
export const setItemLocal = (key: string, item: any) => {
  localStorage.setItem(key, JSON.stringify(item));

  const newIitem = searchItemLocal(key);

  if (newIitem) {
    return newIitem;
  }
  return false;
};

/**
 * Remove item from localStorage
 * @param key: string
 * @returns Item: any | null
 */
export const removeItemLocal = (key: string) => {
  const searchItem = searchItemLocal(key);
  if (searchItem) {
    localStorage.removeItem(key);
    return searchItem;
  }
  return null;
};
