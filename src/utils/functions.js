export const uppercase = (str) => {
  const arr = [];
  for (let word of str.split(" ")) {
    arr.push(word[0].toUpperCase() + word.substring(1));
  }
  return (str = arr.join(" "));
};

export const uppercaseFirstLetter = (str) => {
    return str[0].toUpperCase() + str.substring(1)
}
