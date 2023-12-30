import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'

const TagPostCard = ({ post }) => {
	return (
		<View style={{ height: 80, gap: 12, flexDirection: "row" }}>
			<View style={{ height: 80, width: 96, overflow: 'hidden', borderRadius: 16 }}>
				<Image source={post.image} style={{ width: 96, height: 80 }} resizeMode='cover' />
			</View>

			<Link href={`posts/${post.id}`} asChild>
				<TouchableOpacity style={{ gap: 12, flex: 1 }}>
					<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
						<TouchableOpacity style={{ padding: 4, borderRadius: 6, backgroundColor: '#F2F2F2', alignItems: "center", justifyContent: "center" }}>
							<Text style={{ fontSize: 8, color: "#2C2C2C" }}>{post.tag}</Text>
						</TouchableOpacity>

						<View style={{ flexDirection: "row", alignItems: 'center' }}>
							<Text style={{ color: "#828282", fontSize: 10 }}>{post.date}</Text>
							<Text style={{ color: "#828282", fontSize: 18, marginHorizontal: 3 }}>·</Text>
							<Text style={{ color: "#828282", fontSize: 10 }}>{post.views}</Text>
						</View>
					</View>
					<Text style={{ color: "#2C2C2C", fontSize: 16, fontWeight: 700, width: "95%" }} numberOfLines={2}>{post.title}</Text>
				</TouchableOpacity>
			</Link>
		</View >
	)
}

export default TagPostCard