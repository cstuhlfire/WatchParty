module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_time: (date) => {
    // convert to 12 hour clock 
    if (date.getHours() >= 13){
      date.getHours()-12 + ":"+date.getMinutes()+pm;
    } else {
      date.getHours()+":"+date.getMinutes()+am;
    }
    return time;

  }
 
};
