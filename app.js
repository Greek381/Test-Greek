(() => {
  const dataArr = []

  async function loadCards() {
    const response = await fetch('https://conf.ontico.ru/api/conferences/forCalendar.json')
    const data = await response.json()

    dataArr.push(data.result)
    console.log(data)

    return {
      dataArr
    }
  }
  loadCards()

  function createList() {
    const main = document.querySelector('main')
    const section = document.createElement('section')
    const container = document.createElement('div')
    const list = document.createElement('ul')

    section.classList.add('cards')
    container.classList.add('container')
    list.classList.add('cards__list')
    list.classList.add('list-reset')

    main.appendChild(section)
    section.appendChild(container)
    container.appendChild(list)

    document.body.appendChild(main)

    return {
      section
    }
  }

  function getCards(postObj) {
    const liItem = document.createElement('li')
    const date = document.createElement('p')
    const logo = document.createElement('img')
    const name = document.createElement('p')
    const brief = document.createElement('p')
    const cardsGeo = document.createElement('div')
    const location = document.createElement('p')
    const cardsSite = document.createElement('div')
    const link = document.createElement('a')
    const cardsLinks = document.createElement('div')
    const linkBuy = document.createElement('a')
    const linkMore = document.createElement('a')

    liItem.classList.add('cards__item')
    date.classList.add('cards__date')
    logo.classList.add('cards__logo')
    name.classList.add('cards__name')
    brief.classList.add('cards__brief')
    cardsGeo.classList.add('cards-geo')
    location.classList.add('cards-geo__location')
    cardsSite.classList.add('cards-site')
    link.classList.add('cards-site__link')
    cardsLinks.classList.add('cards-links')
    linkBuy.classList.add('cards-links__buy')
    linkMore.classList.add('cards-links__more')

    liItem.appendChild(date)
    liItem.appendChild(logo)
    liItem.appendChild(name)
    liItem.appendChild(brief)
    liItem.appendChild(cardsGeo)
    liItem.appendChild(cardsSite)
    liItem.appendChild(cardsLinks)

    date.innerHTML = postObj.date_range
    logo.src = 'https:' + postObj.logo
    name.innerHTML = postObj.name
    brief.innerHTML = postObj.brief
    cardsGeo.innerHTML = '<svg aria-hidden="true"><use xlink:href="#location"></use></svg>'
    cardsGeo.appendChild(location)
    location.innerHTML = postObj.location
    cardsSite.innerHTML = '<svg aria-hidden="true"><use xlink:href="#enter"></use></svg>'
    cardsSite.appendChild(link)
    link.href = 'highload.ru'
    link.innerHTML = 'highload.ru'
    cardsLinks.appendChild(linkBuy)
    linkBuy.href = '#'
    linkBuy.innerHTML = 'Купить сейчас'
    cardsLinks.appendChild(linkMore)
    linkMore.href = postObj.uri
    linkMore.innerHTML = 'Подробнее'

    return {
      liItem
    }
  }
  createList()

  function render() {
    const list = document.querySelector('.cards__list')
    const dataArrTitle = dataArr[0]

    for (const item of dataArrTitle) {
      list.append(getCards(item).liItem)
    }
  }
  setTimeout(render, 3000);

})()
