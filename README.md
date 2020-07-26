Event Api

Instalation

- Install the dependencies: 
```yarn install```
- Get the 2 DB up using docker use the command:
```yarn db:on```
- Migrate tables and DB extension:
```yarn db:up```
- Start service:
```yarn start```

To use the api swagger documentation, just go to:
https://localhost:3000/swagger

Obs.:
Its a fake ssl Certificate, so deactivate validation certificates.

Project:

It separates server.js(only runs the http server) and app.js(has the main structure), it provides a way to do integrations tests.
app.js is loading all the structures, including the observer that knows where it is going do send errors(like sentry).

O routes.js whe have the main route that points to other routes making it cleaner. In there is an Event pointed route with a middleware for all routes inside de event routes. 
This middleware has a time set on the .env that says the expiration time for the cached request, to avoid duplicated requestes from the same user. If it is duplicated in that time period, it will no save the event.

In the event route, there is a middleware that validates the body of the request, if its validated then it can go to the controller.

The controller sends the request to the UserEventService, so it will know how to treat this request.
If the event isn't no the DB it will create it and get it's Oid, else it will get it's Oid. Same thing with the location of the event(it says where the event is comming from). 
Then we can save de event with its user and location.

I've used redis, and postgres. Redis is mainly for caching my request. 
I think it's the greatest value key DB, and its open source Db that has a huge community behind it.
And postgresSQL, A great Open source relational DB. So I used sequelize, I think it's a great ORM in nodejs.


I think the bottleneck would be analyzing D - 1 of the events, a great solution is having a BI solution and maybe making this solution more complex, depending if you need more data from each event.
