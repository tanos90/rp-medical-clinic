const ClinicDates = {
  getDatesByYear: (year) => {
    let response = [];
    const datesResponse = [
      '01/11/2020',
      '02/8/2020',
      '03/14/2020',
      '04/18/2020',
      '05/16/2020',
      '06/13/2020',
      '07/11/2020',
      '09/12/2020',
      '10/17/2020',
      '11/14/2020',
      '12/5/2020',
    ];

    datesResponse.forEach((date) => {
      const newDate = new Date(date);
      if (newDate.getFullYear() === year) {
        response.push(newDate);
      }
    });
    return response;
  },
};

export default ClinicDates;
