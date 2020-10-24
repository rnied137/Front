import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 15px;

	label {
		input {
			height: 36px;
			border: 2px solid #6c63ff;
			border-radius: 5px;
			color: #6c63ff;
			background-color: transparent;
		}
	}

	.elements {
		display: flex;
	}
	.element {
        padding: 20px;
        line-height:1.5;
	}
`;

const UsersArray = [
	{
		name: 'radek',
		avatar: 'test',
		password: 'pass'
	},
	{
		name: 'julek',
		avatar: 'test2',
		password: '12345'
	}
];

const Users = () => {
	const [ name, setName ] = useState('Username');
	const [ users, setUsers ] = useState(UsersArray);
	console.log(users);

	const returnUsers = (event) => {
		event.preventDefault();
		console.log('got x users');
		const test = {
			name: '1',
			avatar: '2',
			password: '3'
		};

		setUsers(users.concat(test));
	};

	const setSearchUserName = (event) => {
		setName(event.target.value);
		console.log(name);
	};

	return (
		<React.Fragment>
			<StyledForm>
				<form>
					<label>
						Username:
						<input type="text" onChange={setSearchUserName} />
					</label>

					<input type="submit" value="Wyszukaj" onClick={returnUsers} />
				</form>
                <hr/>
				<div className="elements">
					{users.map((element) => (
						<div className="element">
							<p>{element.name}</p>
							<p>{element.avatar}</p>
						</div>
					))}
				</div>
			</StyledForm>
		</React.Fragment>
	);
};

export default Users;
