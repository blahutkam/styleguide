import React, {useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../Spinner'
import GithubContext from '../../../context/github/githubContext' 

const Users = () => {
    //app level state
    const githubContext = useContext(GithubContext)
    //deconstruction
    const { loading, users } = githubContext

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div>
                <h1>Users</h1>
                
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

export default Users
