const shane = {
    size: 1,
    height: 1,
    values: ['cool, short'],
    type: {
      calm: true
    }
  };
  
  const newObj = cloneDeep(shane);
  
  newObj.type = null;
  console.log(newObj);
  console.log(shane);
  
  function cloneDeep(obj) {
  
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
  
    const output = Array.isArray(obj) ? [] : {};
  
    for (const key in obj) {
      const value = obj[key];
      output[key] = cloneDeep(value);
    }
  
    return output;
  
  }
  