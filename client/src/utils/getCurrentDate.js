export function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

export function convertDate(unixTimeStamp) {
  const myDate = new Date(unixTimeStamp * 1000);
  const hour = myDate.getHours();
  const minute = myDate.getMinutes();
  const second = myDate.getSeconds();
  console.log(myDate.toTimeString());
  return `${hour}:${minute}${second}`;
}
