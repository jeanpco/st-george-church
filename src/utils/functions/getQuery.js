//1.path definition & object we want to retrieve data from
//2.check if the object is defined and if yes, verify if the key exists
export const getQuery = (path, object) =>
  path.reduce((acc, index) => (acc && acc[index] ? acc[index] : null), object)
