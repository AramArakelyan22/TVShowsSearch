export const changeDate = date => {
  if(!date) {
    return null
  }

  const currentDate = new Date(date);
  return `(${currentDate.getFullYear()})`
};

export const apiDataToClient = (tvShows) => {
  return tvShows.map(show => {
    return {
      id: show.id,
      image: show.poster_path,
      title: show.name,
      year: changeDate(show.first_air_date)
    }
  })
};

