import { View, Text, TextInput, Image, TouchableOpacity, FlatList, ScrollView, Animated, SafeAreaView } from "react-native"
import { useState, useRef } from "react"

import { icons, blogItems, tagsList } from '../constants'

import PostCard from "../components/home/cards/PostCard"
import TagPostCard from "../components/home/cards/TagPostCard"
import Footer from "../components/Footer/Footer"

const Home = () => {
	const fadeAnim = useRef(new Animated.Value(1)).current;
	const [activatedTag, setActivatedTag] = useState("All")

	const handleTag = (tag) => {
		Animated.timing(fadeAnim, {
			toValue: 0,
			duration: 1,
			useNativeDriver: true,
		}).start(() => {
			setActivatedTag(tag);
			Animated.timing(fadeAnim, {
				toValue: 1,
				duration: 1,
				useNativeDriver: true,
			}).start();
		});
	};

	return (
		<SafeAreaView style={{ flex: 1 }}>

			<ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", backgroundColor: "white" }}>
				<View style={{ paddingTop: 50, width: "95%", paddingBottom: 17 }}>

					<View style={{ width: "100%", alignItems: "center", flexDirection: "row", gap: 20 }}>
						<View style={{ flexDirection: "row", width: "86%", overflow: "hidden", backgroundColor: "#F4F4F4", alignItems: "center", borderRadius: 12, paddingLeft: 16, paddingRight: 8 }}>
							<Image source={icons.search} />
							<TextInput
								style={{ height: 40, width: "100%", paddingLeft: 5, paddingRight: 30, overflow: "hidden", color: "#2C2C2C" }}
								placeholder="Search..."
							/>
						</View>

						<TouchableOpacity>
							<Image source={icons.notification} />
						</TouchableOpacity>
					</View>

					<View style={{ marginTop: 24 }}>
						<Text style={{ color: "#2C2C2C", fontWeight: 700, fontSize: 24 }}>Recommended</Text>

						<FlatList
							contentContainerStyle={{ gap: 20, marginTop: 16 }}
							data={blogItems}
							renderItem={({ item }) => {
								return (
									<PostCard post={item} />
								)
							}}
							keyExtractor={item => item.id}
							horizontal
						/>
					</View>

					<View style={{ height: 1, backgroundColor: '#E0E0E0', marginVertical: 24 }} />

					<FlatList
						contentContainerStyle={{ gap: 6 }}
						data={tagsList}
						renderItem={({ item }) => {
							const isActive = item === activatedTag;

							return (
								<TouchableOpacity onPress={() => handleTag(item)}>
									<Text
										style={{
											borderRadius: 6,
											paddingVertical: 6,
											paddingHorizontal: 8,
											borderWidth: 1,
											color: isActive ? "#fff" : "#828282",
											backgroundColor: isActive ? "#2C2C2C" : "transparent",
											borderColor: isActive ? "#2C2C2C" : "#828282",
										}}
									>
										{item}
									</Text>
								</TouchableOpacity>
							);
						}}
						keyExtractor={item => item}
						horizontal
					/>

					<Animated.View style={{ opacity: fadeAnim, marginTop: 24, gap: 16 }}>
						{[...blogItems].reverse().map((post, index) => (
							<TagPostCard post={post} key={`${post.title}-${post.id}-${index}`} />
						))}
					</Animated.View>
				</View>
			</ScrollView>
			<Footer />
		</SafeAreaView>
	);
}


export default Home