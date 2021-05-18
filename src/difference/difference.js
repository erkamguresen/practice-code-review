/**
 *
 */
 export const arrayDifference = (array = [], values = []) => {
    let returnArray = [];
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (!values.includes(element) && !returnArray.includes(element))
        returnArray.push(element);
    }
    return returnArray;
  };
