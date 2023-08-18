export default function Item({ date, newsTit}) {
  return(
    <li className="p-5 bg-[#ddd] mt-6 mb-6 rounded-xl">
      <p className="date text-xs">{date}</p>
      <p className="news-tit">{newsTit}</p>
    </li>
  )
}