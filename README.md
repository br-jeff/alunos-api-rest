# Alunos API

## Run Project

```
    docker-compose up
```

First you need to run migration using the route /migrations
if you do not that maybe you can not see relations

| Route | PATH            | Body                                                                                | Param |
| ----- | --------------- | ----------------------------------------------------------------------------------- | ----- |
| GET   | /               |                                                                                     |       |
| GET   | /migrations     |                                                                                     |       |
| GET   | /student        |                                                                                     |       |
| POST  | /student/create | {name: “josé silva”,email: “jose@silva.com”, id_colegio: 2, id_turma: 5,score: 8.0} |       |
| PATCH | /student/update | {name: “josé silva”,email: “jose@silva.com”, id_colegio: 2, id_turma: 5,score: 8.0} | id    |
