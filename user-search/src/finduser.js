import  {useState} from "react";
import  GitHubUser  from './githubUser'


const FindUser = () => {
    const [userName, setUSerName] = useState("")

    return (
        <div className="find-user">
            <h1>Find User</h1>
            <form action="">
                <div className="form-group">
                    <label htmlFor="username">
                        <input type="text" placeholder="Enter username" onChange={(event) => setUSerName(event.target.value)} />
                    </label>
                </div>
            </form>

            <div className="result">
            {userName ? 
                <GitHubUser username={userName} /> : 
                <p>Please Initiate a Search!!!</p>
            }
            </div>
        </div>
    )
}

export default FindUser