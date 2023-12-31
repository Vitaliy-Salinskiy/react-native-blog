import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { navigationLinks } from '../../constants'
import { useRouter } from 'expo-router'

const Footer = () => {

	const router = useRouter();

	return (
		<View style={{
			zIndex: 5,
			height: 70,
			width: "100%",
			flexDirection: "row",
			backgroundColor: "#fff",
			shadowColor: '#000',
			shadowOffset: { width: 0, height: -2 },
			shadowOpacity: 0.35,
			shadowRadius: 8,
			elevation: 8,
		}}>
			{navigationLinks.map((link, index) => (
				<TouchableOpacity
					style={{ width: "33.33%", alignItems: "center", justifyContent: "center" }}
					key={`${link.path}-${index}`}
					onPress={() => router.push(link.path)}
				>
					<Image source={link.image} />
				</TouchableOpacity>
			))}
		</View>
	)
}

export default Footer