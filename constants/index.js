import images from "./images";
import icons from "./icons";

const blogItems = [
	{
		id: 1,
		title: "New VR Headsets That Will Shape the Metaverse",
		image: images.post1,
		tag: "Technology",
		author: {
			username: "Mason Eduard",
			avatar: images.author1
		},
		date: "Jan 3, 2022",
		views: "3344",
	},
	{
		id: 2,
		title: "How the metaverse could impact the world and the future",
		image: images.post2,
		tag: "Technology",
		author: {
			username: "Ayumi White",
			avatar: images.author2
		},
		date: "Jan 3, 2022",
		views: "3344",
	},
	{
		id: 3,
		title: "Augmented Reality Trends for 2022",
		image: images.post3,
		tag: "Technology",
		author: {
			username: "Ayumi White",
			avatar: images.author1
		},
		date: "Jan 4, 2022",
		views: "3344",
	},
	{
		id: 4,
		title: "Stocks making the biggest moves midday: Tesla...",
		image: images.post4,
		tag: "Business",
		author: {
			username: "Ayumi White",
			avatar: images.author2
		},
		date: "Jan 1, 2022",
		views: "9823",
	},
]

const tagsList = ["All", "Technology", "Lifestyle", "Business", "Culture"]

const navigationLinks = [
	{
		image: icons.home,
		path: "/home"
	},
	{
		image: icons.bookmark,
		path: "/posts/saved"
	},
	{
		image: icons.profile1,
		path: "/login"
	}
]

export { images, icons, blogItems, tagsList, navigationLinks };