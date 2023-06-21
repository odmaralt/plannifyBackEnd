exports.getDate = (currentLoginDate, lastLoginDate) => {
  const currentFormattedDate = new Date(currentLoginDate);
  const lastFormattedDate = new Date(lastLoginDate);
  const timeDiff = currentFormattedDate.getTime() - lastFormattedDate.getTime();
  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
  if (hoursDiff >= 24) {
    return true;
  } else {
    return false;
  }
};
