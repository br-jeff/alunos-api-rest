# Alunos API

## Run Project

```
    docker-compose up
```

First you need to run migration using the route /migrations
if you do not that maybe you can not see relations

| Route  | PATH                | Body                                                                                | Param | Query                       |
| ------ | ------------------- | ----------------------------------------------------------------------------------- | ----- | --------------------------- |
| GET    | /                   |                                                                                     |       |
| GET    | /migrations         |                                                                                     |       |
| GET    | /student            |                                                                                     |       | id_turma, id_colegio, score |
| GET    | /student/:id        |                                                                                     | id    |
| POST   | /student/create     | {name: “josé silva”,email: “jose@silva.com”, id_colegio: 2, id_turma: 5,score: 8.0} |       |
| PATCH  | /student/update/:id | {name: “josé silva”,email: “jose@silva.com”, id_colegio: 2, id_turma: 5,score: 8.0} | id    |
| DELETE | /student/:id        |                                                                                     | id    |
