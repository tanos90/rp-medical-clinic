async function getDatesByYear() {
  const response = await fetch('locales/dates.json');
  const dates = await response.json();
  return dates;
}
//   : async(year) => {
//     let response = [];
//     await fetch().then(res => res.json())
//     .then(res => {
//       const datesResponse = [
//         '01/11/2022',
//         '02/8/2022',
//         '03/14/2022',
//         '04/18/2022',
//         '05/16/2022',
//         '06/13/2022',
//         '07/11/2022',
//         '09/12/2022',
//         '10/17/2022',
//         '11/14/2022',
//         '12/5/2022',
//       ];
  
//       datesResponse.forEach((date) => {
//         const newDate = new Date(date);
//           response.push(newDate);
//       });
//       return response;
//      });
          
//   },
// };

export default getDatesByYear;
