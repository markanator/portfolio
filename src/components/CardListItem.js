import React from 'react'

export default function CardListItem({ data }) {
  return (
    <li>
      <h5>{data.title}</h5>
      <p className="company">{data.company}</p>
      <p className="subtitle">{data.dates}</p>
      <p className="desc">{data.desc}</p>
    </li>
  )
}
