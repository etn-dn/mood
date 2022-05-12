import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Center, Square, Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import { Heading, Text } from '@chakra-ui/react'

import Advice from './Advice'
import moods from './moods'

const Home = () => {
	return (
		<Box pt='20%'>
			<Center top='200px'>
				<Heading>Advice for the day</Heading>
			</Center>
			<Center pt='10%'>
				<Text fontSize='xl'>pick your mood</Text>
			</Center>
			<Center pt='7%'>
				<Grid w='92%' templateColumns='repeat(3, 3fr)' gap={4}>
					<Center>
						<GridItem borderRadius='10px' bg='orange'>
							<Link to='/excited'>
								<Square size='109px'></Square>
							</Link>
						</GridItem>
					</Center>
					<Center>
						<GridItem borderRadius='10px' bg='yellow'>
							<Link to='/joyful'>
								<Square size='109px'></Square>
							</Link>
						</GridItem>
					</Center>
					<Center>
						<GridItem borderRadius='10px' bg='gray'>
							<Link to='/tired'>
								<Square size='109px'></Square>
							</Link>
						</GridItem>
					</Center>
					<Center>
						<GridItem borderRadius='10px' bg='navy'>
							<Link to='/anxious'>
								<Square size='109px'></Square>
							</Link>
						</GridItem>
					</Center>
					<Center>
						<GridItem borderRadius='10px' bg='purple'>
							<Link to='/fear'>
								<Square size='109px'></Square>
							</Link>
						</GridItem>
					</Center>
					<Center>
						<GridItem borderRadius='10px' bg='green'>
							<Link to='/disgusted'>
								<Square size='109px'></Square>
							</Link>
						</GridItem>
					</Center>
					<Center>
						<GridItem borderRadius='10px' bg='blue'>
							<Link to='/depressed'>
								<Square size='109px'></Square>
							</Link>
						</GridItem>
					</Center>
					<Center>
						<GridItem borderRadius='10px' bg='red'>
							<Link to='/angry'>
								<Square size='109px'></Square>
							</Link>
						</GridItem>
					</Center>
					<Center>
						<GridItem borderRadius='10px' bg='pink'>
							<Link to='/loving'>
								<Square size='109px'></Square>
							</Link>
						</GridItem>
					</Center>
				</Grid>
			</Center>
		</Box>
	)
}

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					{moods.map((currentMood, index) => {
						return (
							<Route
								key={index}
								path={'/' + currentMood.mood}
								element={<Advice moods={currentMood} />}
							/>
						)
					})}
				</Routes>
			</div>
		</Router>
	)
}

export default App
