<img src="https://tbcarwash.ca/wp-content/uploads/2022/04/man-washing-car-two.png" alt="isolated" width="full" style="margin: 0 auto;"/>

# Car Wash Booking System

**Version:** 1.0.0
**variant:** 1

---

**Author:** Dulon Mahadi Molla  
**Affiliation:** Student of .PH  
**Location:** Narayanganj, Casara- Dhaka.

# Environment Variable :
```javascript
PORT = "8000"
MONGODB_URI = "mongodb+srv://<userName>:<password>@cluster0.kcr8r.mongodb.net/<databaseCollectionName>?retryWrites=true&w=majority&appName=Cluster0"
NODE_ENV = "development"
JWT_SECRET = "your_secret_string"
```

# Project Setup :
- Clone This Project From Here : [-Github-](https://github.com/14HAK/Car-Wash-Booking-System)

```javascript
git clone "repo link"
cd "repo directory"
npm install
npm install --force
npm run dev
```
- Server Live Link : [-Server-](https://car-wash-xi.vercel.app/)
- Project Overview Video : [-Video-](https://drive.google.com/file/d/1yrp6PFd9GSZE71-opnELH40QZXqV9k14/view?usp=sharing)
```javascript
// package.json
"scripts": {
    "start": "node dist/server.js",
    "dev": "nodemon",
    "build": "tsc",
    "lint": "eslint . --ext .ts",
    "lint:fix": "eslint . --ext .ts --fix",
    "prettier": "prettier \"**/*.{js,jsx,json,md,ts--check",
    "prettier:fix": "prettier \"**/*.{js,jsx,json,md,ts}\" --write"
  }
```

# API Endpoints :
### main route path :
```javascript
app
  .use('/api', router);
```

### Create User & Authentication :
```javascript
userRouter
  .route('/auth/signup')
  .post(userSignup);

userRouter
  .route('/auth/login')
  .post(userLogin);
```

### Create Service :
```javascript
serviceRouter
  .route('/services')
  .post(authMiddleware, isAuthenticate(['role_name']), createServices)
  .get(getAllServices);

serviceRouter
  .route('/services/:id?')
  .get(getServiceById)
  .put(authMiddleware, isAuthenticate(['role_name']), updateService)
  .delete(authMiddleware, isAuthenticate(['role_name']), deleteService);
```

### Create Slot :
```javascript
slotRouter
  .route('/services/slots')
  .post(authMiddleware, isAuthenticate(['role_name']), createSlots);

slotRouter
  .route('/slots/availability/:serviceId?')
  .get(availableSlots);
```

### Create Booking :
```javascript
bookingRouter
  .route('/bookings')
  .post(authMiddleware, isAuthenticate(['role_name']), createBookings)
  .get(getBookingsAll);

bookingRouter
  .route('/bookings/my-bookings')
  .get(authMiddleware, isAuthenticate(['role_name']), getMyBookings);
```

# Project Overview :
- **GitHub repository:**

  - Create a GitHub repository named: &{project name}. Ensure the files included ".gitignore" and "readme.md".

- **Minimal Project Setup:**

  - Set up a minimalistic project base with TypeScript.

- **Project design with (modular design pattern way)**
  - src/ [ app.ts, server.ts ], [ config, app/ [ module/ [ auth, service, slot, booking ] ], utils, errors, middleware, routes, etc ]
- **Error Handler:**
  - Handle Global error handler.
  - Handle Unhandled route handle [404, not found].
- **CatchAsync function:**

  - create for operation "async...await" task.

- **Authentication & Authorization & create user:**

  - first create user with role based "admin | user".
  - then build separate Authentication and Authorization functions for identify request user.
  - Authentication using "bcrypt & JsonWebToken".

- **Authentication & Authorization & create user:**

  - first create user with role based "admin | user".
  - then build separate Authentication and Authorization functions for identify request user.
  - Authentication using "bcrypt & JsonWebToken".

- **CRUD with [ Service ] module:**

  - using POST method with user role Admin Authentication and Authorization & create services.
  - using GET method to get all Services. and single Service.
  - using PUT method with user role Admin Authentication and Authorization & update service.
  - using DELETE method with user role Admin Authentication and Authorization & soft delete service.

- **CRUD with [ Slot ] module:**

  - using POST method with user role Admin Authentication and Authorization & create Slots.
  - using GET method to get all Slots.

- **CRUD with [ Booking ] module:**
  - using POST method with user role User Authentication and Authorization & create Bookings.
  - using GET method to get all Bookings with mongoose Populate method.
  - using GET method with build in route to get my booking with user role User Authentication and Authorization.

# Technologies :
 <div style="">
        <ol style=" display: flex;list-style-type: none;">
        <li style=" background-color: #2F74C0; color: white; display: flex;justify-content: center; align-items:center; border-radius: 5px; padding:5px; width:90px; height:14px; text-align:center; font-weight: bold; margin-bottom: 5px; margin-right: 3px">Typescript</li>
        <li style=" background-color: darkgreen; color: white; display: flex;justify-content: center; align-items:center; border-radius: 5px; padding:5px; width:90px; height:14px; text-align:center; font-weight: bold; margin-bottom: 5px; margin-right: 3px">Node.js</li>
        <li style=" background-color: white; color: black; display: flex;justify-content: center; align-items:center; border-radius: 5px; padding:5px; width:90px; height:14px; text-align:center; font-weight: bold; margin-bottom: 5px; margin-right: 3px">Express.js</li>
        <li style=" background-color: #840000; color: white; display: flex;justify-content: center; align-items:center; border-radius: 5px; padding:5px; width:90px; height:14px; text-align:center; font-weight: bold; margin-bottom: 5px; margin-right: 3px">Mongoose</li>
        <li style=" background-color: #00002D; color: white; display: flex;justify-content: center; align-items:center; border-radius: 5px; padding:5px; width:90px; height:14px; text-align:center; font-weight: bold; margin-bottom: 5px; margin-right: 3px">Dotenv</li>
        <li style=" background-color: #F7A539; color: black; display: flex;justify-content: center; align-items:center; border-radius: 5px; padding:5px; width:90px; height:14px; text-align:center; font-weight: bold; margin-bottom: 5px; margin-right: 3px">Cors</li>
        <li style=" background-color: #72C949; color: #4D4B3D; display: flex;justify-content: center; align-items:center; border-radius: 5px; padding:5px; width:90px; height:14px; text-align:center; font-weight: bold; margin-bottom: 5px; margin-right: 3px">Nodemon</li>
        <li style=" background-color: #4930BD; color: white; display: flex;justify-content: center; align-items:center; border-radius: 5px; padding:5px; width:90px; height:14px; text-align:center; font-weight: bold; margin-bottom: 5px; margin-right: 3px">Eslint</li>
        <li style=" background-color: #192935; color: #E35B5B; display: flex;justify-content: center; align-items:center; border-radius: 5px; padding:5px; width:90px; height:14px; text-align:center; font-weight: bold; margin-bottom: 5px; margin-right: 3px">Prettier</li>
        <li style=" background-color: #64B8C2; color: #10292E; display: flex;justify-content: center; align-items:center; border-radius: 5px; padding:5px; width:90px; height:14px; text-align:center; font-weight: bold; margin-bottom: 5px; margin-right: 3px">bcrypt</li>
        <li style=" background-color: #CF38F7; color: black; display: flex;justify-content: center; align-items:center; border-radius: 5px; padding:5px; width:90px; height:14px; text-align:center; font-weight: bold; margin-bottom: 5px; margin-right: 3px">jsonwebtoken</li>
        <li style=" background-color: tomato; color: black; display: flex;justify-content: center; align-items:center; border-radius: 5px; padding:5px; width:90px; height:14px; text-align:center; font-weight: bold; margin-bottom: 5px; margin-right: 3px">...etc</li>
        </ol>
    </div>
