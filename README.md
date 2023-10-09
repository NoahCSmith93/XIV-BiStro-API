# XIV-BiStro-API

This is the back-end for the XIV BiStro app, an app which allows users to create and view their own tables for what their Best in Slot gear is and which pieces they already have in Final Fantasy XIV Online. The code in this repository allows the front-end client to make requests to the database and receive data in response.

## Technologies Used
- JavaScript
- Express
- Mongoose
- Axios

## User Stories
AAU I want to be able to:
- Create new tables for separate classes
- View one table for the gear I'm aiming for and one table for the gear I currently have on each BiS table
- Update gear in the current gear table as I obtain new pieces
- Delete old tables when I no longer need them
- Be able to view all of my created tables on my home page
- Be able to view tables linked to me by other users on their own show page

### Icebox User Stories
AAU I want to be able to:
- Create a group for multiple classes so I can make one large table for my entire group
- Have the current tier's BiS gear suggested for me on each class when it's created

## ERD
<img src="https://i.imgur.com/ygcIzAc.png">