import "./Profile.css";

const Profile = ({ name, age, country}) => {
    return (
        <div className="profile">
            <div>Name: { name }</div>
            <div>Age: { age }</div>
            <div>Country: { country }</div>
        </div>
    );
};


export default Profile;
