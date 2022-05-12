import React from 'react'
import { Box, Center, Text } from '@chakra-ui/react'

const Advice = (props) => {
	const randomAdvice = props.moods.advice
	const color = props.moods.color
	console.log(randomAdvice.color)
	return (
		<Box height='100vh' border='2px' borderColor={color}>
			<Center height='95%'>
				<Text fontSize='xl' color={color}>
					{
						randomAdvice[
							Math.floor(Math.random() * randomAdvice.length)
						]
					}
				</Text>
			</Center>
		</Box>
	)
}

export default Advice
