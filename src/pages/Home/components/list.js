import Item from "./item";

function parseDate(dateStr) {
  const parts = dateStr.split('/');
  const year = parseInt(parts[2]);
  const month = parseInt(parts[0]) - 1;
  const day = parseInt(parts[1]);
  return new Date(year, month, day);
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}/${month}/${day}`;
}


export default function List({ listData }) {
  
  const sortedData = listData.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB - dateA;
  })

  const formattedData = sortedData.map(item => {
    return {
      date: formatDate(parseDate(item.date)),
      ...item
    }
  })

  return(
    <ul>
      {formattedData.map(item => {
        const { date, newsTit, ulid } = item;
        return <Item date={date} newsTit={newsTit} key={ulid}></Item>;
      })}
    </ul>
  )
}