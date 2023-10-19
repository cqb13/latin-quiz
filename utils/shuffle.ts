export default function shuffle(array: any[]) {
  let tempArray = array;
  for (let i = tempArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = tempArray[i];
    tempArray[i] = tempArray[j];
    tempArray[j] = temp;
  }
  return tempArray;
}
