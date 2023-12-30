import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const PostDetails = () => {

	const { id } = useLocalSearchParams()

	return (
		<View>
			<Text>PostDetails {id}</Text>
		</View>
	)
}

export default PostDetails