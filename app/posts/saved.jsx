import { View, Text, TouchableOpacity, Image, TextInput, SafeAreaView, FlatList, ScrollView } from 'react-native'
import { useState } from 'react'
import { useNavigation } from 'expo-router'
import { debounce } from 'lodash';

import { blogItems, icons } from '../../constants'

import Footer from '../../components/Footer/Footer'
import TagPostCard from '../../components/home/cards/TagPostCard'

const saved = () => {
	const navigation = useNavigation()

	const [data, setData] = useState([...blogItems, ...blogItems, ...blogItems]);


	const handleSearch = debounce((text) => {
		if (text && text.length >= 1) {
			const filteredData = blogItems.filter((item) => {
				const titleMatch = item.title.toLowerCase().includes(text.toLowerCase());
				const tagMatch = item.tag.toLowerCase().includes(text.toLowerCase());
				return titleMatch || tagMatch;
			});
			setData(filteredData);
		} else {
			setData([...blogItems, ...blogItems, ...blogItems]);
		}
	}, 200);

	return (
		<SafeAreaView style={{ flexGrow: 1, alignItems: "center", backgroundColor: "#fff" }}>
			<View style={{ alignItems: "center", width: "90%", flexDirection: "row", gap: 20, paddingTop: 50, paddingBottom: 10, paddingHorizontal: "2.5%" }}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image source={icons.arrow} />
				</TouchableOpacity>
				<View style={{ flexDirection: "row", flex: 2, overflow: "hidden", backgroundColor: "#F4F4F4", alignItems: "center", borderRadius: 12, paddingLeft: 16, paddingRight: 8 }}>
					<Image source={icons.search} />
					<TextInput
						onChangeText={(text) => handleSearch(text)}
						style={{ height: 40, paddingLeft: 5, paddingRight: 30, overflow: "hidden", color: "#2C2C2C" }}
						placeholder="Search by title or tag..."
					/>
				</View>

				<TouchableOpacity>
					<Image source={icons.notification} />
				</TouchableOpacity>
			</View>

			<View style={{ width: "90%", flex: 1, }}>

				<ScrollView contentContainerStyle={{ gap: 20, paddingBottom: 10 }} showsVerticalScrollIndicator={false}>
					<Text style={{ color: "#2C2C2C", fontSize: 24, fontWeight: 700 }}>Saved Posts</Text>
					{data && data.length !== 0 ? (
						data.map((post, index) => (
							<TagPostCard post={post} key={`${post.title}-${post.id}-${index}`} />
						))
					) : (
						<Text>No post was found</Text>
					)}
				</ScrollView>
			</View>

			<Footer />
		</SafeAreaView>
	)
}

export default saved