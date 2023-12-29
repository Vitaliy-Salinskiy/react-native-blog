import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	input: {
		width: "full",
		height: 50,
		flexDirection: "row",
		alignItems: "center",
		gap: 8,
		borderRadius: 40,
		paddingRight: 15,
		paddingLeft: 15,
		backgroundColor: "#fff",
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 8 },
		shadowOpacity: 0.1,
		shadowRadius: 20,
		elevation: 5,
		overflow: "hidden",
	},
});

export default styles;