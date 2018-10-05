export const fetchData = (str) => (
  $.ajax({
    method: 'GET',
    url: `http://assignment.quio.com/${str}`,
  })
);
