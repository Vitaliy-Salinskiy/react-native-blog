import images from "./images";
import icons from "./icons";

const blogItems = [
	{
		id: 1,
		title: "New VR Headsets That Will Shape the Metaverse",
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Lorem adipiscing mus vestibulum consequat porta eu ultrices feugiat. Et, faucibus ut amet turpis. Facilisis faucibus semper cras purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Fermentum et eget libero lectus. Amet, tellus aliquam, dignissim enim placerat purus nunc, ac ipsum. Ac pretium.",
		image: images.post1,
		tag: "Lifestyle",
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
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Lorem adipiscing mus vestibulum consequat porta eu ultrices feugiat. Et, faucibus ut amet turpis. Facilisis faucibus semper cras purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Fermentum et eget libero lectus. Amet, tellus aliquam, dignissim enim placerat purus nunc, ac ipsum. Ac pretium.",
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
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Lorem adipiscing mus vestibulum consequat porta eu ultrices feugiat. Et, faucibus ut amet turpis. Facilisis faucibus semper cras purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Fermentum et eget libero lectus. Amet, tellus aliquam, dignissim enim placerat purus nunc, ac ipsum. Ac pretium.",
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
		content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Lorem adipiscing mus vestibulum consequat porta eu ultrices feugiat. Et, faucibus ut amet turpis. Facilisis faucibus semper cras purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Fermentum et eget libero lectus. Amet, tellus aliquam, dignissim enim placerat purus nunc, ac ipsum. Ac pretium.",
		image: images.post4,
		tag: "Business",
		author: {
			username: "Ayumi White",
			avatar: images.author2
		},
		date: "Jan 1, 2022",
		views: "9823",
	},
];


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