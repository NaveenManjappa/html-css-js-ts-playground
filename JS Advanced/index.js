calculateDaysBetweenDates(begin,end){
    const startDate = new Date(begin);
    const endDate = new Date(end);
    const timeDifference = endDate - startDate;
    const daysDifference = timeDifference / (1000 * 3600 * 24);
    return daysDifference;

}