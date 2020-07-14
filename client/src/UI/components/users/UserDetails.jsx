import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../Spinner'
import { Link } from 'react-router-dom'
import GithubContext from '../../../context/github/githubContext' 

//useEffect hook instead componentDidMount
const UserDetails = ( {match} ) => {
    
    const githubContext = useContext(GithubContext)

    const { getUser, loading, user } = githubContext
    
    useEffect(() => {
        getUser(match.params.login);
        //eslint-disable-next-line
    }, []) //empty array to avoid constant calling

    const {
        name,
        // avatar_url,
        // location,
        // bio,
        // blog,
         //login,
        // html_url,
        // followers,
        // following,
        // public_repos,
        // public_gists,
        // hireable
    } = user;

    if (loading) return <Spinner />;

    return (
        <Fragment>
            <h1>{name}</h1>

            <Link to='/'>
                Back to Search
                </Link>
        </Fragment>
    )
}

export default UserDetails

//could stay class based component if we're using lifecycle method
// export class UserDetails extends Component {
//     componentDidMount() {
//       this.props.getUser(this.props.match.params.login);
//     }

//     static propTypes = {
//         loading: PropTypes.bool,
//         user: PropTypes.object.isRequired,
//         getUser: PropTypes.func.isRequired
//     }

//     render() {
//         const {
//             name,
//             avatar_url,
//             location,
//             bio,
//             blog,
//             login,
//             html_url,
//             followers,
//             following,
//             public_repos,
//             public_gists,
//             hireable
//         } = this.props.user;

//         const { loading } = this.props;

//         if (loading) return <Spinner />;

//         return (
//             <Fragment>
//                 <h1>{name}</h1>

//                 <Link to='/'>
//                     Back to Search
//                 </Link>
//             </Fragment>
//         )
//     }
// }

// export default UserDetails
