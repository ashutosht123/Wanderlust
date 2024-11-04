# Wanderlust
Wanderlust is a MERN stack project inspired by Airbnb, providing a platform for users to browse and book vacation rentals. This project is hosted on Render and can be accessed here. https://wanderlust-hjuu.onrender.com

![Screenshot 2024-08-10 113206](https://github.com/user-attachments/assets/a15b5fd0-6307-42bf-b5f1-4785397304b6)

## Note: 
1.When you click on the link above, you will be redirected to the Wanderlust website, which may show a "Page Not Found" error below the navbar. To navigate the site, click on "Explore," complete the signup or login process, and then try adding new listings.

2.While adding new listing add location only in this format, eg. Location : "Goa, India"

![Screenshot 2024-08-10 113328](https://github.com/user-attachments/assets/9b17bf8f-ca00-4ace-ba31-85027bb0ef33)
## Description
Wanderlust is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React, and Node.js). Inspired by Airbnb, Wanderlust allows users to search for vacation rentals, view property details, and make bookings. This project demonstrates a comprehensive understanding of web development, including both front-end and back-end technologies.
## Features

- User authentication and authorization  
- Browse and search for vacation rentals  
- View detailed property descriptions and images  
- Book properties for selected dates  
- Responsive design

## Tech Stack

- **Frontend**: HTML, CSS, JAVASCRIPT 
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Hosting**: Render


## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/ashutosht123/Wanderlust.git
    cd wanderlust
    ```

2. **Install dependencies:**

    ```bash
     npm install express
     npm install mongoose
     npm install path
     npm install method-override
     npm install ejs-mate
     npm install dotenv
     npm install express-session
     npm install connect-mongo
     npm install connect-flash
     npm install passport
     npm install passport-local
     npm install cloudinary
     npm install multer-storage-cloudinary
     npm install @mapbox/mapbox-sdk
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `your project` directory and add the following:

    ```env
    CLOUD_NAME=your_cloudinary_cloud_name
    SECRET=your_jwt_secret
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    MAPBOX_TOKEN=your_mapbox_token
    ATLASDB_URL=your_atlasdb_url
    ```


4. **Run the application:**

    # Start server
     ```bash
    cd Wanderlust
     ```
     ```bash
    nodemon app.js
     ```
    or
     ```bash
    node app.js
     ```
    
    The server will run on `http://localhost:8000`.

## Usage

- Visit the [live demo](https://wanderlust-hjuu.onrender.com) to explore the application.  
- Register or log in to your account.  
- Browse and search for vacation rentals.  
- View detailed information about properties.  
- Book a property for your desired dates.
