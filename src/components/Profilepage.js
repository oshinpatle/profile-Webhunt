import React from "react";
import "../profile-css/profile.css";


function Profilepage(){
    return(
        <div className="wh-profile">
        <div className="wh-profile-pic">
            <img src={require("../profile-images/user.png")} alt="profile-pic"/>
        </div>
        <form action="#">    
            <table className="wh-entries">
                <tr>
                    <td><lable for="username">User Name</lable></td>
                    <td><input type="text" id="username" name="username" value="Thor" disabled/></td>
                </tr>
                <tr>
                    <td><lable for="Roll Number">Roll Number</lable></td>
                    <td><input type="number" id="roll-number" name="roll-number" value="12345678" required/></td>
                </tr>
                <tr>
                    <td><lable for="college">College</lable></td>
                    <td><input type="text" id="college" name="college" value="Nit kkr"/></td>
                </tr>
                <tr>
                    <td><lable for="phone-number">Phone Number</lable></td>
                    <td><input type="number" id="phone-number" name="phone-number" value="9876543210"/></td>
                </tr>
                <tr>
                    <td> <lable for="team-name">Team Name</lable></td>
                    <td><input type="text" id="team-name" name="team-name" value="Avengers" disabled/></td>
                </tr>
                <tr>
                    <td> <lable for="team-code">Team Code</lable></td>
                    <td><input type="text" id="team-code" name="team-code" value="kfhlaksldf" disabled/></td>
                </tr>
            </table>
            <input className=".wh-submit" type="submit" value="Save Changes"/>
        </form>
    </div>
    );
}

export default Profilepage;