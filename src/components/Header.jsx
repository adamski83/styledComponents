// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container } from './styled/Container.styled';
import { Button } from './styled/Button.styled';
import { StyledHeader, Nav, Logo, Image } from './styled/Header.styled';
import { Flex } from './styled/Flex.styled';

export const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src='../../logo.svg' alt='logo' />
					<Button>Try It Free</Button>
				</Nav>
				<Flex>
					<div>
						<h1>Build the comunnity your Fans Loves</h1>
						<p>
							Huddle re-imagines the way we build communities. You
							have a voice, but so does your audience. Create
							connections with your users as you engage in genuine
							discussion.
						</p>
						<Button
							// @ts-ignore
							bg='#ff0099'
							color='#fff'>
							Get started for free
						</Button>
						<Image
							src='../../illustration-mockups.svg'
							alt='obraz'
						/>
					</div>
				</Flex>
			</Container>
		</StyledHeader>
	);
};
