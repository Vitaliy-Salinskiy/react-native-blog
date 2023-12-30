import { View, Text, Image, TouchableOpacity, } from 'react-native'

import { icons } from '../../../constants'
import { Link } from 'expo-router'

const PostCard = ({ post }) => {

	return (
		<View style={{ width: 289, gap: 12, flexDirection: "column" }}>

			<View style={{ borderRadius: 16, maxHeight: 176, height: 176, overflow: "hidden", position: "relative", padding: 16 }}>
				<View style={{ zIndex: 2, flexDirection: "row", justifyContent: "space-between" }}>
					<TouchableOpacity style={{ padding: 6, borderRadius: 6, backgroundColor: 'rgba(255, 255, 255, 0.4)', alignItems: "center", justifyContent: "center" }}>
						<Text style={{ fontSize: 8, color: "white" }}>{post.tag}</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ width: 24, height: 24, borderRadius: 6, alignItems: "center", justifyContent: "center", backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
						<Image source={icons.save} style={{ width: 12, height: 16 }} />
					</TouchableOpacity>
				</View>
				<Image source={post.image} style={{ position: "absolute", left: 0, right: 0, top: 0, bottom: 0, width: 289, height: 176 }} />
			</View>

			<Link href={`posts/${post.id}`} asChild>
				<TouchableOpacity style={{ gap: 12 }}>

					<Text style={{ fontWeight: 700, fontSize: 18, width: "90%", color: "#2C2C2C" }} numberOfLines={2}>{post.title}</Text>

					<View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>

						<TouchableOpacity style={{ flexDirection: "row", gap: 4, alignItems: "center" }}>
							<Image source={post.author.avatar} />
							<Text style={{ color: "#333333" }}>
								By: {""}
								<Text style={{ textDecorationLine: 'underline' }}>{post.author.username}</Text>
							</Text>
						</TouchableOpacity>

						<View style={{ flexDirection: "row", alignItems: 'center' }}>
							<Text style={{ color: "#828282", fontSize: 10 }}>{post.date}</Text>
							<Text style={{ color: "#828282", fontSize: 18, marginHorizontal: 3 }}>·</Text>
							<Text style={{ color: "#828282", fontSize: 10 }}>{post.views}</Text>
						</View>
					</View>
				</TouchableOpacity>
			</Link>

		</View>
	)
}

export default PostCard