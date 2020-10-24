import React from 'react';

import styled from 'styled-components';
import Burger from '../../Components/Navbar/Burger';
import { NavLink } from 'react-router-dom';
import { FaAccusoft as Logo } from 'react-icons/fa';

const Nav = styled.nav`
	width: 100%;
	height: 90px;
	border-bottom: 3px solid #f1f1f1;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #6c63ff;
	letter-spacing: 1px;


	Burger {
		align-self:center;
	}
	.logo {
		padding: 15px 0;
		color: white;
		letter-spacing: 2px;
		margin-left: 12%;
	}

	li {
		padding: 18px 10px;
	}

	li a {
		color: white;
		text-decoration: none;
		font-size: 18px;
		width:100%;
  }
  
  .menu-buttons {
	margin-right:12%;
	
  }
`;

const MyNavbar = (props) => {
	return (
		<Nav>
			<div className="logo">
				<Logo size={'1.8em'}>
					<NavLink to="/" />
				</Logo>
			</div>
      <div className="menu-buttons">
      <Burger />
      </div>
		
			{props.children}
		</Nav>
	);
};

export default MyNavbar;
