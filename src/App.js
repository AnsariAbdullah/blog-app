import React from 'react';
import styled from 'styled-components';
import { Container } from './styles/varibales';
import { colors } from './styles/varibales';
import data from './assets/data';

const AppHeading = styled.p`
	font-size: 32px;
	text-align: center;
	padding: 50px;
	font-family: 'Open Sans', sans-serif;
`
const PostsWrapper = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr 1fr 1fr;
	.blog-post{
		height: 320px;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
    overflow: hidden;
		.details {
			bottom: 0;
			width: 100%;
			padding: 10px;
			height: 100px;
			display: flex;
			position: absolute;
			flex-direction: column;
			justify-content: space-between;
			color: ${colors.light};
			background: ${colors.dark};
			border: 1px solid ${colors.dark};
			.title{
				text-align: center;
				font-size: 22px;
				text-transform: capitalize;
				font-weight: 800;
			}
			.other{
				display: flex;
				font-size: 14px;
				justify-content: space-between;
				.author{

				}
				.date{

				}
			}
		}
	}
`

const App = () => {
	return (
		<>
			<AppHeading>True Blog</AppHeading>
			<Container>
				<PostsWrapper>
					{ data && data.map(item => 
						<div
							className="blog-post"
							key={item.id}
							style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.image})`}}
						>
							<div className="details">
								<p className="title">{item.title}</p>
								{/* <p className="introduction">{item.intro}</p> */}
								<div className="other">
									<p className="author">{item.author}</p>
									<p className="date">{item.date}</p>
								</div>
							</div>
						</div>
					)}
				</PostsWrapper>

				{/* make a modal below and pass data to it as props */}
			</Container>
		</>
	);
}
 
export default App;