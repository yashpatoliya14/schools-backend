Sure! Here's a README.md template for your Express + MySQL schools API project:

````markdown
# Schools API with Express and MySQL

This project is a simple RESTful API built with Express.js and MySQL to manage a list of schools. It supports adding schools and retrieving them sorted by proximity to a given location (latitude and longitude).

---

## Features

- Add a new school with name, address, latitude, and longitude
- Fetch all schools sorted by distance from user-provided coordinates
- Uses Haversine formula to calculate geographical distance

---

## Technologies Used

- Node.js
- Express.js
- MySQL (mysql2 package)
- dotenv for environment variables

---

## Setup and Installation

1. **Clone the repository**

```bash
git clone <repository_url>
cd schools-backend
````

2. **Install dependencies**

```bash
npm install
```

3. **Setup MySQL database**

* Create a database (e.g., `schools_db`)
* Create the `schools` table:

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  address VARCHAR(250),
  latitude FLOAT,
  longitude FLOAT
);
```

4. **Create a `.env` file** in the root directory with your database credentials and server port:

```
PORT=3000
DATABASE_URL=your_database_url
```

5. **Start the server**

```bash
npm start
```

