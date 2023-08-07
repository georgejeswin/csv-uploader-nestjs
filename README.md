Installation Steps

Clone the repository
git clone https://github.com/georgejeswin/csv-uploader-nestjs.git

Install all the peer dependencies by running "npm i"

Add environment variables and setup database, aws bucket, jwt variables

PORT=
BASE_URL=
JWT_ACCESS_SECRET=
JWT_REFRESH_SECRET=
JWT_EXPIRES_IN_HOURS=
JWT_REFRESH_EXPIRY=

DATABASE_HOST=
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_PORT=

BCRYPT_SALT=

#AWS
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_BUCKET_NAME=

Run the project by running "npm start" or "npm run start:dev"

Api endpoints

/auth/signup - POST

Signup endpoint for the user, need to submit username(unique), email and password as input

/auth/login- POST

Endpoint for the user to login, need to submit username and password for logging in

/upload - POST

Endpoint to upload files to server. Input will be a file and output will be text with file url
This endpoint will be accessible to only authenticated users

Application Details

This application is built with NestJs, Postgres as database, AWS S3 bucket as file storage and hosted in AWS EC2, authentication is handled with JWT(JSON Web Tokens).

NestJS

NestJS is a progressive Node.js framework for building scalable and efficient server-side applications. It is built on top of Express, the widely-used web application framework for Node.js, and provides additional features and architectural patterns to help developers create robust and maintainable applications.

Postgres

PostgreSQL, often referred to as Postgres, is an open-source relational database management system (RDBMS). It is known for its advanced features, extensibility, and reliability, making it one of the most popular and powerful databases in the industry.

AWS S3

Amazon Simple Storage Service (S3) is a cloud-based object storage service provided by Amazon Web Services (AWS). It is designed to store and retrieve any amount of data from anywhere on the web. S3 offers a scalable, secure, and highly available storage solution for a wide range of use cases, from simple data backup to complex big data analytics.

AWS EC2

Amazon Elastic Compute Cloud (EC2) is a web service provided by Amazon Web Services (AWS) that offers resizable compute capacity in the cloud. It allows users to launch virtual machines, known as instances, on the AWS cloud infrastructure, and provides full control over the computing resources, including CPU, memory, storage, and networking.

JWT

JSON Web Token. It is an open standard (RFC 7519) for securely transmitting information between two parties as a JSON object. JWT is commonly used to authenticate users and securely transmit claims (such as user identity, roles, or permissions) between a client and a server.
