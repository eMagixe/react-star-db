const swapi = new SwapiService()

swapi.getPerson(3).then((people) => {
    console.log(people.name)
})
