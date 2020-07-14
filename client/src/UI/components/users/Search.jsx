import React, { useState, useContext } from 'react';
import GithubContext from '../../../context/github/githubContext';
import AlertContext from '../../../context/alert/alertContext';


//useState hook - replace class based component with arrow funcion
const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContext.setAlert('Please enter something', 'light');
        }
        else {
            githubContext.searchUsers(text);
            setText('');
        }
    }

    const onChange = (e) => setText(e.target.value)

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input
                    type='text'
                    name='text'
                    placeholder='search users...'
                    value={text}
                    onChange={onChange}
                />

                <input
                    type='submit'
                    value='search'
                    className='btn btn-dark btn-block'

                />
            </form>
            {githubContext.users.length > 0 && (
                <button onClick={githubContext.clearUsers}>clear</button>
            )}
        </div>
    )
}

export default Search
