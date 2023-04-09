/*
Create a class called User with properties username and password. Implement a getter method for password 
that returns the password with all characters replaced by asterisks. Implement a setter method for password 
that checks if the new password is at least 8 characters long and contains at least one number and one uppercase 
letter. If the password is valid, set the new password. If not, log an error message.
*/

class user {
    username;
    password;
    constructor(u, p) {
        this.username = u;
        this.password = p;
    }
    getPassword() {
        let passwordAsterisks = this.password;
        return passwordAsterisks.replace(/./g, "*");
    }
    setPassword(newPassword) {

        let regex = /^(?=.*\d)(?=.*[A-Z]).{8,}$/;
        if (regex.test(newPassword)) {
            this.password = newPassword;
        }
        else {
            console.log(` Password must be at least 8 characters long and contains at least one number and one uppercase letter`);
        }
    }
}

const user1 = new user("Mithun", "Password123");
user1.setPassword("myPassword");


user1.setPassword("MyPassword123");
console.log(user1.getPassword());
