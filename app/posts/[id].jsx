import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'

import { blogItems, icons } from '../../constants'

import Footer from '../../components/Footer/Footer'
import DetailsPostCard from '../../components/home/cards/DetailsPostCard'

const PostDetails = () => {

	const { id } = useLocalSearchParams()
	const router = useRouter();

	return (
		<SafeAreaView style={{ flex: 1, width: "100%", alignItems: "center", marginHorizontal: "auto", backgroundColor: "#fff" }}>

			<View style={{ alignItems: "center", width: "90%", flexDirection: "row", gap: 20, paddingTop: 50, paddingBottom: 10, paddingHorizontal: "2.5%" }}>
				<TouchableOpacity onPress={() => router.back()}>
					<Image source={icons.arrow} />
				</TouchableOpacity>
				<View style={{ flexDirection: "row", flex: 2, overflow: "hidden", backgroundColor: "#F4F4F4", alignItems: "center", borderRadius: 12, paddingLeft: 16, paddingRight: 8 }}>
					<Image source={icons.search} />
					<TextInput
						style={{ height: 40, paddingLeft: 5, paddingRight: 30, overflow: "hidden", color: "#2C2C2C" }}
						placeholder="Search..."
					/>
				</View>

				<TouchableOpacity>
					<Image source={icons.notification} />
				</TouchableOpacity>
			</View>

			<View style={{ width: "90%", flex: 1, }}>
				{blogItems.filter(post => post.id === +id).map((post, index) => (
					<ScrollView
						showsVerticalScrollIndicator={false}
						contentContainerStyle={{ paddingTop: 15 }}
					>
						<DetailsPostCard post={post} key={`${post.title}-${post.id}-${index}`} />
						<View style={{ marginTop: 15 }}>
							<Text style={{ color: "#2C2C2C", fontSize: 16 }}>{post.content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo distinctio itaque, error, repudiandae sint qui sit illum odio quod dignissimos culpa a deserunt reiciendis libero neque magnam. Culpa nisi vero et velit sapiente libero magnam ipsum fugiat amet provident harum praesentium mollitia cum error sit, commodi aut. Ad, quasi corporis?</Text>
						</View>
					</ScrollView>
				))}
			</View>

			<Footer />
		</SafeAreaView>
	)
}

export default PostDetails