// eslint-disable-next-line no-unused-vars
import React from 'react';
import { StyledFooter } from './styled/Footer.styled';
import { Container } from './styled/Container.styled';
import { Flex } from './styled/Flex.styled';
import { SocialIcons } from './SocialIcons';
export const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<img src='../../logo.svg' alt='logo' />
				<Flex>
					<ul>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua
						</li>
						<li>+1-543-123-4567</li>
						<li>example@huddle.com</li>
					</ul>
					<ul>
						<li>About Us</li>
						<li>What We Do</li>
						<li>FAQ</li>
					</ul>

					<ul>
						<li>Career</li>
						<li>Blog</li>
						<li>Contact Us</li>
					</ul>

					<SocialIcons />
				</Flex>
				<p>&copy; 2023 Huddle. All rights reserved</p>
			</Container>
		</StyledFooter>
	);
};
