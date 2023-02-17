import { useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
    const profile = useSelector((state) => state.user.auth);
    const username = profile?.auth?.name || "";
    const [name, setName] = useState(username);

    const changeName = (e) => {
        setName(e.target.value);
        console.log(name)
    }

    return (
        <div className="metaportal_fn_page_ajax" style={{minHeight: '498px'}}>
            <div className="metaportal_fn_roadmaps">
                { profile?
                    <input value={name} onChange={changeName} /> :
                    <h1>You need to connect</h1>
                }
            </div>
        </div>
    );
}

export default Profile;