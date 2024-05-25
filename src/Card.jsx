const cardDetails = [
  {
    id: 1,
    heading: 'Supervisor',
    text: 'Monitors activity to identify project roadblocks',
    imgUrl: 'images/icon-supervisor.svg',
  },

  {
    id: 2,
    heading: 'Team Builder',
    text: 'Scans our talent network to create the optimal team for your project',
    imgUrl: 'images/icon-team-builder.svg',
  },

  {
    id: 3,
    heading: 'Karma',
    text: 'Regularly evaluates our talent to ensure quality',
    imgUrl: 'images/icon-karma.svg',
  },

  {
    id: 4,
    heading: 'Calculator',
    text: 'Uses data from past projects to provide better delivery estimates',
    imgUrl: 'images/icon-calculator.svg',
  }
]

function Card() {
  const cardList = cardDetails.map(cardDetail => 
    <div key={cardDetail.id}>
      <h2>{cardDetail.heading}</h2>
      <p>{cardDetail.text}</p>
      <img src={cardDetail.imgUrl} alt="" />
    </div>
    )
  return <section>{cardList}</section>
}

export default Card